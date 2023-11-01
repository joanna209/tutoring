import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Heading, Text, Card, CardHeader, CardBody, CardFooter, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  
  return (
    <div>
      <Heading>Dashboard</Heading>
      <Text>Welcome {token} </Text>
      <Card>
        <CardHeader>
          <Heading size='md'>Blog post 1</Heading>
        </CardHeader>
        <CardBody>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus soluta similique eius omnis provident, voluptatum cum saepe enim aspernatur ipsa praesentium excepturi magni explicabo atque iusto. Veritatis, incidunt officiis.</Text>
        </CardBody>
        <CardFooter>
          <Button onClick={() => navigate("/post/1")}>View here</Button>
        </CardFooter>
      </Card>

    </div>
  )
}

export default Dashboard;
