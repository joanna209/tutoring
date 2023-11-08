import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const Home = () => {
  const navigate = useNavigate();
  
  const performLogin = ({ email, password }) => {
    console.log(email, password);
    navigate("/dashboard");
  }

  return (
    <LoginForm onSubmit={performLogin} />
  )
}

export default Home;
