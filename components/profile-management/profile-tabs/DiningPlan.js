import React, { useState } from "react";
import {
  DiningPlansContainer,
  IconBox,
  PlanDetailContainer,
  PlanDetails,
  PlanImage,
  PlanImageText,
} from "./DiningPlan.styles";
import {
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Pagination,
  Stack,
} from "@mui/material";
import { ResponsiveText } from "@/styles/common-styles/CommonStyles.styles";
import Image from "next/image";
import bannerImage1 from "@/assets/banner1.jpg";
import bannerImage2 from "@/assets/banner2.jpg";
import bannerImage3 from "@/assets/banner3.jpg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const DiningPlan = () => {
  const plans = [
    {
      restaurantName: "Pizza",
      restaurantImage: bannerImage1,
      title: "Mujtabas Birthday",
      description: "mujtaba will be having birthday with all of his friends",
      date: "3-4-2023",
      time: "7pm",
    },
    {
      restaurantName: "Pizza Hut",
      restaurantImage: bannerImage2,
      title: "Mujtabas Birthday",
      description: "mujtaba will be having birthday with all of his friends",
      date: "3-4-2023",
      time: "8pm",
    },
    {
      restaurantName: "Pizza Hut",
      restaurantImage: bannerImage3,
      title: "Mujtabas Birthday",
      description: "mujtaba will be having birthday with all of his friends",
      date: "3-4-2023",
      time: "9pm",
    },
    {
      restaurantName: "Pizza Hut",
      restaurantImage: bannerImage3,
      title: "Mujtabas Birthday",
      description: "mujtaba will be having birthday with all of his friends",
      date: "3-4-2023",
      time: "10pm",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [anchorElNav, setAnchorElNav] = useState(null);

  console.log(plans.slice((currentPage - 1) * 3, currentPage * 3));

  const pageCount = Math.ceil(plans.length / 3);

  const pageHandler = (event, value) => {
    setCurrentPage(value);
    console.log(value);
  };
  return (
    <DiningPlansContainer>
      <Box>
        <ResponsiveText
          variant="subHeader"
          sx={{ fontWeight: "bold", borderBottom: "2px solid darkorange" }}
        >
          Your Dining Plans
        </ResponsiveText>
      </Box>
      {plans
        .slice((currentPage - 1) * 3, currentPage * 3)
        .map((plan, index) => (
          <React.Fragment key={plan.index}>
            <PlanDetailContainer>
              <PlanImage>
                <Image
                  src={plan.restaurantImage}
                  fill
                  style={{ objectFit: "cover", borderRadius: "5px" }}
                />
                <PlanImageText>
                  <ResponsiveText
                    variant="mainBody"
                    sx={{ fontWeight: "bold" }}
                  >
                    {plan.restaurantName}
                  </ResponsiveText>
                </PlanImageText>
              </PlanImage>
              <PlanDetails>
                <Box>
                  <ResponsiveText
                    variant="subHeader"
                    sx={{ fontWeight: "bold" }}
                  >
                    {plan.title}
                  </ResponsiveText>
                </Box>
                <Box>
                  <ResponsiveText variant="body" sx={{ fontWeight: "bold" }}>
                    Date:{" "}
                  </ResponsiveText>
                  <ResponsiveText variant="body">
                    {plan.date} at {plan.time}
                  </ResponsiveText>
                </Box>
                <Box>
                  <ResponsiveText variant="body">
                    {plan.description}
                  </ResponsiveText>
                </Box>
              </PlanDetails>
              <IconBox>
                <IconButton
                  size="large"
                  onClick={(event) => setAnchorElNav(event.currentTarget)}
                >
                  <MoreHorizIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "center",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={(event) => setAnchorElNav(null)}
                >
                  <MenuItem>
                    <ResponsiveText variant="helper">Edit Plan</ResponsiveText>
                  </MenuItem>
                  <MenuItem>
                    <ResponsiveText variant="helper">
                      Remove Plan
                    </ResponsiveText>
                  </MenuItem>
                  <MenuItem>
                    <ResponsiveText variant="helper">Share Plan</ResponsiveText>
                  </MenuItem>
                </Menu>
              </IconBox>
            </PlanDetailContainer>
            <Divider variants="middle" />
          </React.Fragment>
        ))}
      <Stack spacing={2}>
        <Pagination
          sx={{
            "& .Mui-selected": {
              backgroundColor: "darkorange !important",
              borderColor: "orange",
              color: "white",
            },
          }}
          count={pageCount}
          variant="outlined"
          shape="rounded"
          onChange={pageHandler}
        />
      </Stack>
    </DiningPlansContainer>
  );
};

export default DiningPlan;
