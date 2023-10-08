import { ResponsiveText } from "@/styles/common-styles/CommonStyles.styles";
import { Avatar, Box, Container, Grid } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import React, { useState } from "react";
import ProfileOverview from "./profile-tabs/ProfileOverview";
import PostedReview from "./profile-tabs/PostedReview";
import DiningPlan from "./profile-tabs/DiningPlan";
import FoodMap from "./profile-tabs/FoodMap";
import {
  ProfileAvatar,
  ProfileOptionsContainer,
  ProfileOptionsList,
} from "./ProfileOptions.styles";

const ProfileOptions = () => {
  const [selectedTab, setSelectedTab] = useState("profile-overview");

  const profileTabs = [
    { id: "profile-overview", text: "Profile Overview", icon: <PersonIcon /> },
    { id: "posted-reviews", text: "Posted Reviews", icon: <PersonIcon /> },
    { id: "dining-plans", text: "Dining Plans", icon: <PersonIcon /> },
    { id: "food-maps", text: "Food Maps", icon: <PersonIcon /> },
  ];

  const tabChangeHandler = (id) => {
    setSelectedTab(id);
  };

  return (
    <Container maxWidth="xl" sx={{ marginTop: "8rem", marginBottom: "3rem" }}>
      <Grid container sx={{ boxShadow: "0px 2px 10px lightgrey" }}>
        <Grid item xs={12} md={3} lg={2}>
          <ProfileOptionsContainer>
            <ProfileAvatar>
              <Avatar sx={{ height: 70, width: 70 }} />
              <Box>
                <ResponsiveText variant="body" sx={{ fontWeight: "bold" }}>
                  Ahmed Kamran
                </ResponsiveText>
              </Box>
            </ProfileAvatar>
            <ProfileOptionsList>
              {profileTabs.map((tab) => (
                <Box
                  key={tab.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                  onClick={() => tabChangeHandler(tab.id)}
                >
                  {tab.icon}
                  <ResponsiveText variant="body">{tab.text}</ResponsiveText>
                </Box>
              ))}
            </ProfileOptionsList>
          </ProfileOptionsContainer>
        </Grid>
        <Grid item xs={12} md={9} lg={10}>
          <Box
            sx={{
              minHeight: "900px",
              backgroundColor: "whitesmoke",
            }}
          >
            {selectedTab === profileTabs[0].id && <ProfileOverview />}
            {selectedTab === profileTabs[1].id && <PostedReview />}
            {selectedTab === profileTabs[2].id && <DiningPlan />}
            {selectedTab === profileTabs[3].id && <FoodMap />}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfileOptions;
