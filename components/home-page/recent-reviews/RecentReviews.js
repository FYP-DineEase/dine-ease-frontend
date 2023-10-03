import React from "react";
import bannerImage1 from "@/assets/banner1.jpg";
import bannerImage2 from "@/assets/banner2.jpg";
import bannerImage3 from "@/assets/banner3.jpg";
import bannerImage4 from "@/assets/banner4.jpg";
import Slider from "react-slick";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
} from "@mui/material";
import { ResponsiveText } from "@/styles/common-styles/CommonStyles.styles";
import Image from "next/image";
import Link from "next/link";
import {
  activitySettings,
  carousalSettings,
} from "@/helpers/carousal-settings";
import {
  ReviewCardContainer,
  ReviewImageContainer,
  ReviewImageTextContainer,
} from "./RecentReviews.styles";

const RecentReviews = () => {
  const recentReviews = [
    {
      userName: "Ali",
      userAvatar: "Pizza Hut",
      restaurantName: "Pizza Hut",
      restaurantImage: bannerImage1,
      tags: ["Cheese", "Italian", "Spicy"],
      reviewDate: "12-Oct-2023",
      userReview: 3.35,
      userComment:
        "This is good 1 This is good 1This is good 1This is good 1This is good 1This is good 1This is good 1This is good 1This is good 1This is good 1This is good 1This is good 1This is good 1This is good 1This is good 1This is good 1This is good 1This is good 1This is good 1",
    },
    {
      userName: "Smith",
      userAvatar: "Pizza Hut",
      restaurantName: "Pizza Hut",
      restaurantImage: bannerImage2,
      tags: ["Cheese", "Italian"],
      reviewDate: "12-Oct-2022",
      userReview: 2.3,
      userComment: "This is good 2",
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
    },
  ];

  return (
    <Container disableGutters maxWidth="false" sx={{ padding: "5rem 1rem" }}>
      <Container maxWidth="md">
        <Box
          sx={{ textAlign: "center", marginBottom: "2rem", fontWeight: "bold" }}
        >
          <ResponsiveText variant="header">Recent Activity</ResponsiveText>
        </Box>
        <Slider {...activitySettings}>
          {recentReviews.map((review) => (
            <ReviewCardContainer key={review.restaurantName}>
              <ReviewImageContainer>
                <Image
                  fill
                  sizes="100vw"
                  src={review.restaurantImage}
                  alt={review.restaurantName}
                  style={{
                    objectFit: "cover",
                  }}
                  title="green iguana"
                />
                <ReviewImageTextContainer>
                  <ResponsiveText
                    variant="subHeader"
                    sx={{ fontWeight: "bold" }}
                  >
                    {review.restaurantName}
                  </ResponsiveText>
                  <Divider
                    flexItem
                    sx={{
                      opacity: "0.5",
                      backgroundColor: "white",
                    }}
                  />
                  <Box>
                    <ResponsiveText variant="helper">
                      {review.tags.join(", ")}
                    </ResponsiveText>
                  </Box>
                </ReviewImageTextContainer>
              </ReviewImageContainer>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "1rem 1.75rem",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.7rem",
                  }}
                >
                  <Avatar sx={{ height: "50px", width: "50px" }} />
                  <ResponsiveText
                    variant="mainBody"
                    sx={{ fontWeight: "bold" }}
                  >
                    {review.userName}
                  </ResponsiveText>
                  <Box>{review.userReview}</Box>
                  <Box>
                    <ResponsiveText variant="body">
                      "{review.userComment.slice(0, 200)}"
                      {review.userComment.length > 200 && (
                        <Link href="">Continue Reading</Link>
                      )}
                    </ResponsiveText>
                  </Box>
                </Box>
                <Box>
                  <ResponsiveText variant="helper">
                    ({review.reviewDate})
                  </ResponsiveText>
                </Box>
              </CardContent>
            </ReviewCardContainer>
          ))}
        </Slider>
      </Container>
    </Container>
  );
};

export default RecentReviews;
