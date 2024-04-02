import { useNavigate } from "react-router";
import { Typography, Button, CardContent, CardActions } from "@mui/material";

const Card = ({ title, body }) => {
  const navigate = useNavigate();
  return (
    <Card variant="outlined">
      <Typography variant="h4" gutterBottom component="div">{title}</Typography>
      <CardContent>
        <Typography variant="body1">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => navigate("/post/1")}>View here</Button>
      </CardActions>
    </Card>
  );
}

export default Card;
