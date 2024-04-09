import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

const LoginForm = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "") {
      setError("Email cannot be empty");
      setIsError(true);
      return;
    } else if (password === "") {
      setError("Password cannot be empty");
      setIsError(true);
      return;
    }
    onSubmit({ email: username, password });
    setIsError(false);
  };

  return (
    <Form aria-label="login-form">
      {isError && (
        <Alert variant="danger" onClose={() => setIsError(false)} dismissible name="login-error-modal">
          <p name="error">{error}</p>
        </Alert>
      )}
      <Form.Group>
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control
          aria-invalid={username === '' ? 'true' : 'false'}
          type="email"
          placeholder="Enter email"
          onChange={(e) => setUsername(e.target.value)}
          onKeyUp={(e) => e.key === "Enter" && handleSubmit(e)}
          name="email"
          aria-label="email"
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          aria-invalid={password === '' ? 'true' : 'false'}
          type="password"
          placeholder="Enter password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          onKeyUp={(e) => e.key === "Enter" && handleSubmit(e)}
          aria-label="password"
          required
        />
      </Form.Group>
      <Button
        variant="primary"
        type="button"
        onClick={handleSubmit}
        className="mt-3"
        name="login-btn"
      >
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;
