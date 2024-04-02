import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

const Post = () => {
  const { postId } = useParams();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setTitle(data.title);
        setBody(data.body);
      });
  }, [postId]);

  return (
    <Stack className="col-md-5 mx-auto">
      <h1>{title}</h1>
      <p>{postId}</p>
      <p>{body}</p>
      <Button onClick={() => navigate("/dashboard")}>
        Back to dashboard
      </Button>
    </Stack>
  );
};

export default Post;
