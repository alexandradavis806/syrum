import { useNavigate } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Avatar,
  Container,
  Box,
} from "@mui/material";

const FollowList = ({ follow }) => {
  let navigate = useNavigate();

  const visitProfile = () => {
    navigate(`/users/${follow.id}/profile`);
  };

  return (
    <>
      <Container maxWidth="md" sx={{ pt: 4 }}>
        <Box>
          <Card sx={{ maxWidth: 200 }}>
            <CardContent>
              <Avatar sx={{ width: 56, height: 56 }}>
                {follow.username[0]}
              </Avatar>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              ></Typography>
              <Typography variant="h5" component="div">
                {follow.username}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button onClick={visitProfile} variant="contained" size="small">
                Visit Profile
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default FollowList;
