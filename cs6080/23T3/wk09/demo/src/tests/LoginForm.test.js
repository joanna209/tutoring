// documentation
// - https://jestjs.io/docs/api
// - https://github.com/testing-library/jest-dom

import LoginForm from '../components/LoginForm';
import { screen, fireEvent, render } from '../test-utils';

// note: mantine depends on browser apis such as window matchMedia in order to function 
// https://stackoverflow.com/questions/39830580/jest-test-fails-typeerror-window-matchmedia-is-not-a-function
beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }))
  });
});

const onSubmit = jest.fn();
let email;
let password;
let loginBtn;

const setup = () => {
  render(<LoginForm onSubmit={onSubmit}/>)
  email = screen.getByRole("textbox", { name: "Email address" });
  password = screen.getByTestId("password");
  loginBtn = screen.getByRole("button");
};

beforeEach(() => setup())

describe('login form', () => {
  it('renders login fields and submit button', () => {
    expect(screen.getByRole("heading")).toHaveTextContent("Login Form");
    // rule of thumb is you want to be using getByRole or similar - getByTestId should be a last resort
    // https://kentcdodds.com/blog/common-mistakes-with-react-testing-library
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(email).toBeRequired()
    expect(password).toBeRequired()
    expect(screen.getByRole("button")).toHaveTextContent("Login");
  })

  it('successfully logins in user when correct email and password are entered', () => {
    fireEvent.change(email, { target: { value: 'a@a.com' } });
    fireEvent.blur(email);
    fireEvent.change(password, { target: { value: 'a' } });
    fireEvent.blur(password);
    fireEvent.click(loginBtn);
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({ email: 'a@a.com', password: 'a' })
  })
})