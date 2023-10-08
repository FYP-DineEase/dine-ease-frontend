import { ResponsiveText } from "@/styles/common-styles/CommonStyles.styles";
import {
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Pagination,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { PostedReviewContainer } from "./PostedReview.styles";
import Image from "next/image";
import formImage from "@/assets/restaurant.jpg";
import bannerImage1 from "@/assets/banner1.jpg";
import bannerImage2 from "@/assets/banner2.jpg";
import bannerImage3 from "@/assets/banner3.jpg";
import Link from "next/link";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const PostedReview = () => {
  const reviews = [
    {
      userName: "Ali",
      userAvatar: "Pizza Hut",
      restaurantName: "Pizza Hut",
      restaurantImage: bannerImage1,
      tags: ["Cheese", "Italian", "Spicy"],
      reviewDate: "12-Oct-2023",
      userReview: 3.35,
      userComment:
        "This is good 1 This is good 1 TThis is good 1 This is good 1This isThis is good 1 This is good 1This isThis is good 1 This is good 1This isThis is good 1 This is good 1This isThis is good 1 This is good 1This isThis is good 1 This is good 1This isThis is good 1 This is good 1This isThis is good 1 This is good 1This isThis is good 1 This is good 1This ishis is good 1This isThis is good 1 This is good 1This isThis is good 1 This is good 1This isThis is good 1 This is good 1This isThis is good 1 This is good 1This isThis is good 1 This is good 1This isThis is good 1 This is good 1This isThis is good 1 This is good 1This isThis is good 1 This is good 1This isThis is good 1 This is good 1This isThis is good 1This is good 1This is good 1This is good 1This is good 1This is good 1This is good 1This is good 1This is good 1This is good 1This is good 1This is good 1This is good 1This is good 1This is good 1This is good 1This is good 1This is good 1",
      userImages: [bannerImage1, bannerImage1, bannerImage1],
    },
    {
      userName: "Smith",
      userAvatar: "Pizza Hut",
      restaurantName: "Pizza Hut",
      restaurantImage: bannerImage2,
      tags: ["Cheese", "Italian"],
      reviewDate: "12-Oct-2022",
      userReview: 2.3,
      userComment:
        "This is good 1 This is good 1 TThis is good 1 This is good 1This isThis is good 1 This is good 1This isThis is good 1 This is good 1This isThis is good 1 This is good 1This isThis is good 1 This is good 1This isThis is good 1 This is good 1This isThis is good 1 This is good 1This isThis is good 1 This is good 1This isThis is good 1 This is good 1This ishis is good 1This isThis is good 1 This is good 1This isThis is good 1 This is good 1This isThis is good 1 This is good 1This isThis is good 1 This is good 1This isThis is good 1 This is good 1This isThis is good 1 This is good 1This isThis is good 1 This is good 1This isThis is good 1 This is good 1This isThis is good 1 This is good 1This isThis is good 1This is good 1This is good 1This is good 1This is good 1This is good 1This is good 1This is good 1This is good 1This is good 1This is good 1This is good 1This is good 1This is good 1This is good 1This is good 1This is good 1This is good 1",

      userImages: [bannerImage2, bannerImage2, bannerImage2],
    },

    {
      userName: "Jackson",
      userAvatar: "Pizza Hut",
      restaurantName: "Pizza Hut",
      restaurantImage: bannerImage3,
      tags: ["Mexican"],
      reviewDate: "10-Oct-2023",
      userReview: 3.9,
      userComment: "This is good 3",
      userImages: [bannerImage3, bannerImage1, bannerImage1],
    },

    {
      userName: "Jackson",
      userAvatar: "Pizza Hut",
      restaurantName: "Pizza Hut",
      restaurantImage: bannerImage3,
      tags: ["Mexican"],
      reviewDate: "10-Oct-2023",
      userReview: 3.9,
      userComment: "This is good 4",
      userImages: [bannerImage3, bannerImage1, bannerImage1],
    },

    {
      userName: "Jackson",
      userAvatar: "Pizza Hut",
      restaurantName: "Pizza Hut",
      restaurantImage: bannerImage3,
      tags: ["Mexican"],
      reviewDate: "10-Oct-2023",
      userReview: 3.9,
      userComment: "This is good 5",
      userImages: [bannerImage3, bannerImage1, bannerImage1],
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const pageCount = Math.ceil(reviews.length / 2);

  const pageHandler = (event, value) => {
    setCurrentPage(value);
    console.log(value);
  };

  return (
    <PostedReviewContainer>
      <Box>
        <ResponsiveText
          variant="subHeader"
          sx={{ fontWeight: "bold", borderBottom: "2px solid darkorange" }}
        >
          Your Reviews
        </ResponsiveText>
      </Box>
      {reviews.slice((currentPage - 1) * 2, currentPage * 2).map((review) => (
        <Box
          key={review.restaurantName}
          sx={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}
        >
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Box sx={{ height: "80px", width: "80px", position: "relative" }}>
              <Image src={formImage} fill sizes="100vw" />
            </Box>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
            >
              <Box>
                <ResponsiveText variant="body" sx={{ fontWeight: "bold" }}>
                  {review.restaurantName}
                </ResponsiveText>
              </Box>
              <Box>
                <ResponsiveText variant="helper">
                  {review.tags.join(", ")}
                </ResponsiveText>
              </Box>
              <Box sx={{ display: "flex", gap: "0.5rem" }}>
                <ResponsiveText variant="helper">
                  {review.userReview}
                </ResponsiveText>
                <ResponsiveText variant="helper">
                  {review.reviewDate}
                </ResponsiveText>
              </Box>
            </Box>
            <Box marginLeft="auto">
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
                  <ResponsiveText variant="helper">Edit Review</ResponsiveText>
                </MenuItem>
                <MenuItem>
                  <ResponsiveText variant="helper">
                    Remove Review
                  </ResponsiveText>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
          <Box>
            <ResponsiveText variant="body">
              "{review.userComment.slice(0, 300)}"
              {review.userComment.length > 300 && (
                <Link href="">Continue Reading</Link>
              )}
            </ResponsiveText>
          </Box>
          <Box sx={{ display: "flex", gap: "0.25rem" }}>
            {review.userImages.map((image) => (
              <Box sx={{ height: "80px", width: "80px", position: "relative" }}>
                <Image
                  src={image}
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                />
              </Box>
            ))}
          </Box>
          <Divider variant="middle" flexItem />
        </Box>
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
    </PostedReviewContainer>
  );
};

export default PostedReview;
