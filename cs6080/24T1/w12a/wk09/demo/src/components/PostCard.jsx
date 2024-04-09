import { useNavigate } from "react-router";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const PostCard = ({ title, body }) => {
  const navigate = useNavigate();
  return (
    <Card className="p-4">
      <Card.Title>{title}</Card.Title>
      <Card.Text variant="body1">{body}</Card.Text>
      <Button onClick={() => navigate("/post/1")} name="view-btn">View here</Button>
    </Card>
  );
};

export default PostCard;
