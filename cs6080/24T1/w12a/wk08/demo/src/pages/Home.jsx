import { useNavigate } from "react-router";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Box, Typography, Button, FormControl, FormLabel, Input } from "@mui/material";

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
    <Box display="flex" flexDirection="column" alignItems="center">
      <FormControl>
        <Typography variant="h1">Login</Typography>
        <FormLabel>User name</FormLabel>
        <Input
          placeholder="name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyUp={(e) => e.key === "Enter" && onSubmit(e)}
          type="text"
        />
        <FormLabel>Password</FormLabel>
        <Input placeholder="password" type="password" />
        <Button variant="contained" onClick={onSubmit}>
          Submit
        </Button>
      </FormControl>
    </Box>
  );
};

export default Home;
