import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import PostCard from "../components/PostCard";
import Stack from "react-bootstrap/Stack";

const Dashboard = () => {
  const { token } = useContext(AuthContext);

  return (
    <Stack className="col-md-5 mx-auto">
      <h1 className="header">Dashboard</h1>
      <p>Welcome {token}</p>
      <PostCard
        title="Blog post 1"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus soluta similique eius omnis provident, voluptatum cum saepe enim aspernatur ipsa praesentium excepturi magni explicabo atque iusto. Veritatis, incidunt officiis."
      />
    </Stack>
  );
};

export default Dashboard;
