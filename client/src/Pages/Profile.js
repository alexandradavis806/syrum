import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RoutineCollection from "../Components/RoutineCollection";
import FollowList from "../Components/FollowList";
import {
  Avatar,
  Container,
  Box,
  Card,
  Button,
  Typography,
} from "@mui/material";

const Profile = ({ user }) => {
  const [viewedUser, setViewedUser] = useState("");
  const [isFollowing, setIsFollowing] = useState(false)

  let navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    fetch(`/users/${params.userId}`)
      .then((r) => r.json())
      .then((data) => setViewedUser(data));
  }, [params.userId]);


  const seeFollowers = () => {
    navigate(`/users/${params.userId}/followers`);
    console.log("see your followers");
  };

  const seeFollowing = () => {
    navigate(`/users/${params.userId}/following`);
    console.log("see your following");
  };

  const showFollowBtn = () => {
    return user.id === parseInt(params.userId);
  };

  const followUser = () => {
    console.log('follow this user')
  }

  const unfollowUser = () => {
    console.log('unfollow this user')
  }

  return (
    <>
      <Container sx={{ pt: 4 }} maxWidth="xl">
        <Container sx={{ mb: 2}} >
          <Avatar sx={{ width: 65, height: 65 }}>
            {viewedUser && viewedUser.username[0]}
          </Avatar>
          <Container sx={{pt: 2}}>
          <Button onClick={seeFollowers}>Followers</Button>
          <Button onClick={seeFollowing}>Following</Button>
          </Container>
          <Box>
            {!showFollowBtn() && (
              <Button onClick={() => console.log("follow me!")}>
                Follow {viewedUser.username}
              </Button>
            )}
          </Box>
          {/* <Typography>
              Routines:
            </Typography> */}
        </Container>
        <Card pt={2}>
          <RoutineCollection user={user} viewedUserId={params.userId} />
        </Card>
      </Container>
    </>
  );
};

export default Profile;
