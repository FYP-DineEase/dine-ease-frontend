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
  CardContentContainer,
  RecentActivityContainer,
  ReviewCardContainer,
  ReviewDetailsContainer,
  ReviewImageContainer,
  ReviewImageTextContainer,
} from "./RecentReviews.styles";
import { SectionHeading } from "../HomePage.styles";

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
    <Container maxWidth="false" sx={{ display: { xs: "none", sm: "block" } }}>
      <RecentActivityContainer maxWidth="md">
        <SectionHeading>
          <ResponsiveText variant="header">Recent Activity</ResponsiveText>
        </SectionHeading>
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
              <CardContentContainer>
                <ReviewDetailsContainer>
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
                      "{review.userComment.slice(0, 150)}"
                      {review.userComment.length > 150 && (
                        <Link href="">Continue Reading</Link>
                      )}
                    </ResponsiveText>
                  </Box>
                </ReviewDetailsContainer>
                <Box>
                  <ResponsiveText variant="helper">
                    ({review.reviewDate})
                  </ResponsiveText>
                </Box>
              </CardContentContainer>
            </ReviewCardContainer>
          ))}
        </Slider>
      </RecentActivityContainer>
    </Container>
  );
};

export default RecentReviews;
