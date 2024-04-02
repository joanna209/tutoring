import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Box, Typography } from "@mui/material";
import Card from "../components/Card";

const Dashboard = () => {
  const { token } = useContext(AuthContext);

  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h1">Dashboard</Typography>
      <Typography variant="subtitle1">Welcome {token}</Typography>
      <Card
        title="Blog post 1"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus soluta similique eius omnis provident, voluptatum cum saepe enim aspernatur ipsa praesentium excepturi magni explicabo atque iusto. Veritatis, incidunt officiis."
      />
    </Box>
  );
};

export default Dashboard;
