import { TextInput, Button, Group, Box, Title } from "@mantine/core";
import { useState } from "react";

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <Box maw={340} mx="auto">
      <Title order={1}>Login Form</Title>
      <TextInput
        label="Email address"
        placeholder="Email address"
        name="email"
        type="email"
        required={true}
        onChange={(e) => setEmail(e.target.value)}
        onKeyUp={(e) => e.key === "Enter" && handleSubmit(e)}
        data-testid="email"
      />
      <TextInput
        label="Password"
        name="password"
        placeholder="Password"
        type="password"
        required={true}
        onChange={(e) => setPassword(e.target.value)}
        onKeyUp={(e) => e.key === "Enter" && handleSubmit(e)}
        mt="md"
        data-testid="password"
      />
      <Group justify="center" mt="xl">
        <Button variant="filled" onClick={handleSubmit} name="login-btn">
          Login
        </Button>
      </Group>
    </Box>
  );
};

export default LoginForm;
