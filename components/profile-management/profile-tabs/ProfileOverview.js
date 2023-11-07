import { Avatar, Box, Button } from "@mui/material";
import React from "react";
import { ProfileContainer, ProfileFields } from "./ProfileOverview.styles";
import Link from "next/link";
import { InputField, Text } from "@/components/UI";

const ProfileOverview = () => {
  return (
    <ProfileContainer>
      <Box>
        <Text
          variant="subHeader"
          sx={{ fontWeight: "bold", borderBottom: "2px solid darkorange" }}
        >
          Edit Your Profile
        </Text>
      </Box>
      <Box position="relative">
        <Avatar sx={{ height: "150px", width: "150px" }} />
        <Box
          component="input"
          type="file"
          sx={{
            all: "unset",
            border: "none",
            backgroundColor: "transparent",
            height: "20px",
            width: "20px",
            backgroundColor: "red",
            borderRadius: "50%",
            position: "absolute",
            bottom: "10px",
            left: "110px",
          }}
        />
      </Box>

      <ProfileFields>
        <InputField
          name="firstName"
          label="First Name"
          variant="outlined"
          placeholder="Enter First Name"
        />

        <InputField
          name="lastName"
          label="Last Name"
          variant="outlined"
          placeholder="Enter Last Name"
        />
      </ProfileFields>
      <Box>
        <Button variant="contained" sx={{ backgroundColor: "darkorange" }}>
          Save Changes
        </Button>
      </Box>
      <Link href="/reset-password">
        <Box>
          <Button
            variant="outlined"
            color="inherit"
            sx={{ color: "darkorange" }}
          >
            Update Password
          </Button>
        </Box>
      </Link>
    </ProfileContainer>
  );
};

export default ProfileOverview;
