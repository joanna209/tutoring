import { useNavigate } from "react-router";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";

const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const { setToken } = useContext(AuthContext);

  const onSubmit = (e) => {
    e.preventDefault();
    setToken(username);
    navigate("/dashboard");
  };

  return (
    <Stack className="col-md-5 mx-auto">
      <h1 className="header">Login</h1>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={(e) => setUsername(e.target.value)}
            onKeyUp={(e) => e.key === "Enter" && onSubmit(e)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>
        <Button variant="primary" type="button" onClick={onSubmit} className="mt-3">
          Submit
        </Button>
      </Form>
    </Stack>
  );
};

export default Home;
