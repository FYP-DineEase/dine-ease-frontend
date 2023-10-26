import React, { useState } from "react";

//MUI Global Styled Components
import { Text } from "@/components/UI/typography";

//Icons
import RestaurantIcon from "@mui/icons-material/Restaurant";
import PersonIcon from "@mui/icons-material/Person";

//Styled Components
import * as SignupStyles from "./signup-form.styles";

const SignupRoles = () => {
  const [selectedRole, setRole] = useState("User");
  const roles = [
    { text: "User", icon: <PersonIcon /> },
    { text: "Manager", icon: <RestaurantIcon /> },
  ];

  const roleSelectionHandler = (role) => {
    setRole(role);
  };

  return (
    <SignupStyles.RolesContainer>
      {roles.map((role) => (
        <SignupStyles.Roles
          key={role.text}
          selected={selectedRole.includes(role.text)}
          onClick={(event) => roleSelectionHandler(role.text)}
        >
          {role.icon}
          <Text variant="sub">{role.text}</Text>
        </SignupStyles.Roles>
      ))}
    </SignupStyles.RolesContainer>
  );
};

export default SignupRoles;
