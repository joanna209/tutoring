import { useParams } from "react-router";
import { Button, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

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
    <Box alignItems="center" display="flex" flexDirection="column">
      <Typography variant="h1" >{title}</Typography>
      <Typography variant="body">{postId}</Typography>
      <Typography variant="body">{body}</Typography>
      <Button onClick={() => navigate("/dashboard")} variant="contained">Back to dashboard</Button>
    </Box>
  );
};

export default Post;
