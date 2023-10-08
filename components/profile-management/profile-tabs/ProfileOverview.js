import {
  InputField,
  InputFieldContainer,
} from "@/components/forms/form.styles";
import { ResponsiveText } from "@/styles/common-styles/CommonStyles.styles";
import { Avatar, Box, Button } from "@mui/material";
import React from "react";
import { ProfileContainer, ProfileFields } from "./ProfileOverview.styles";
import Link from "next/link";

const ProfileOverview = () => {
  return (
    <ProfileContainer>
      <Box>
        <ResponsiveText
          variant="subHeader"
          sx={{ fontWeight: "bold", borderBottom: "2px solid darkorange" }}
        >
          Edit Your Profile
        </ResponsiveText>
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
        <Box>
          <Box>
            <ResponsiveText variant="body">First Name</ResponsiveText>
          </Box>
          <InputFieldContainer>
            <InputField
              value="Ahmed"
              id="email"
              type="email"
              placeholder="Enter first name"
            />
          </InputFieldContainer>
        </Box>
        <Box>
          <Box>
            <ResponsiveText variant="body">Last Name</ResponsiveText>
          </Box>
          <InputFieldContainer>
            <InputField
              value="Kamran"
              id="email"
              type="email"
              placeholder="Enter last name"
            />
          </InputFieldContainer>
        </Box>
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
