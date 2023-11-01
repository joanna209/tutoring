import { useNavigate } from "react-router";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  Button,
} from "@chakra-ui/react";

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
    <FormControl>
      <Heading>Login</Heading>
      <FormLabel>User name</FormLabel>
      <Input
        placeholder="name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyUp={(e) => e.key === 'Enter' && onSubmit(e)}
      />
      <FormLabel>Password</FormLabel>
      <Input placeholder="password" />
      <Button mt={4} colorScheme="teal" type="submit" onClick={onSubmit}>
        Submit
      </Button>
    </FormControl>
  );
};

export default Home;
