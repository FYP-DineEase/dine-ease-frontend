import React, { useState } from "react";

import { Box } from "@mui/material";

import RestaurantIcon from "@mui/icons-material/Restaurant";
import PersonIcon from "@mui/icons-material/Person";

import { ResponsiveText } from "@/styles/common-styles/CommonStyles.styles";

import { RoleContainer } from "./SignupForm.styles";

const SignupRoles = () => {
  const [selectedRole, setRole] = useState("user");
  const roles = [
    { id: "user", text: "User", icon: <PersonIcon /> },
    { id: "manager", text: "Manager", icon: <RestaurantIcon /> },
  ];

  const roleSelectionHandler = (role) => {
    setRole(role);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
      {roles.map((role) => (
        <RoleContainer
          key={role.id}
          selected={selectedRole.includes(role.id)}
          onClick={(event) => roleSelectionHandler(role.id)}
          color="inherit"
        >
          {role.icon}
          <ResponsiveText variant="helper">{role.text}</ResponsiveText>
        </RoleContainer>
      ))}
    </Box>
  );
};

export default SignupRoles;
