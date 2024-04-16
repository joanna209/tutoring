// documentation
// - https://jestjs.io/docs/api
// - https://github.com/testing-library/jest-dom

import LoginForm from "../components/LoginForm";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

const onSubmit = jest.fn();
let email;
let password;
let loginBtn;

const setup = () => {
  render(<LoginForm onSubmit={onSubmit}/>)
  email = screen.getByRole('textbox', { name: "email" });
  password = screen.getByLabelText("password");
  loginBtn = screen.getByRole("button", { name: "Submit" });
};

beforeEach(() => {
  setup();
})

describe('login form', () => {
  test('renders login fields and button', () => {
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(loginBtn).toBeInTheDocument();
  })

  test('renders email and password fields as required', () => {
    expect(email).toBeRequired();
    expect(password).toBeRequired();
  })

  test('render error modal when errors are provided', async () => {
    userEvent.type(email, "");
    userEvent.type(password, "");
    userEvent.click(loginBtn);
    expect(await screen.findByRole("alert")).toBeInTheDocument();
  })

  test('successfully logs in user via clicking button', () => {
    userEvent.type(email, "a@a.com");
    userEvent.type(password, "a");
    userEvent.click(loginBtn);
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({ email: 'a@a.com', password: 'a' })
    expect(email).toBeValid();
    expect(password).toBeValid();
  })

  test('successfully logs in user via pressing enter', () => {
    userEvent.type(email, "a@a.com");
    userEvent.type(password, "a");
    userEvent.keyboard('{Enter}');
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({ email: 'a@a.com', password: 'a' });
    expect(email).toBeValid();
    expect(password).toBeValid();
  })
})

