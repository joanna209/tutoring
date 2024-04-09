import { useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Stack from "react-bootstrap/Stack";
import LoginForm from "../components/LoginForm";

const Home = () => {
  const navigate = useNavigate();
  const { setToken } = useContext(AuthContext);

  const onLogin = ({ username, password }) => {
    setToken(username);
    navigate("/dashboard");
  };

  return (
    <Stack className="col-md-5 mx-auto">
      <h1 className="header">Login</h1>
      <LoginForm onSubmit={onLogin} />
    </Stack>
  );
};

export default Home;
