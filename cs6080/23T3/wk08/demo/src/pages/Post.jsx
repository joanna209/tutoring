import { useParams } from "react-router";
import { Button, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Post = () => {
  const { postId } = useParams();
  const [title, setTitle] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        setTitle(data.title);
      });
  }, [postId]);

  return (
    <div>
      <Heading>{title}</Heading>
      <Text>{postId}</Text>
      <Button onClick={() => navigate("/dashboard")}>Back to dashboard</Button>
    </div>
  );
}

export default Post;