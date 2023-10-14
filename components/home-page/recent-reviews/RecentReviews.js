import React from "react";

import Image from "next/image";

import Link from "next/link";

import Slider from "react-slick";

import { Avatar, Box, Container, Divider } from "@mui/material";

import { ResponsiveText } from "@/styles/common-styles/CommonStyles.styles";

import { activitySettings } from "@/helpers/carousal-settings";

import {
  CardContentContainer,
  RecentActivityContainer,
  ReviewCardContainer,
  ReviewDetailsContainer,
  ReviewImageContainer,
  ReviewImageTextContainer,
} from "./RecentReviews.styles";

import { SectionHeading } from "../HomePage.styles";
import { mockRecentReviews } from "../../../mockData/mockData";

const RecentReviews = () => {
  return (
    <Container maxWidth="false" sx={{ display: { xs: "none", sm: "block" } }}>
      <RecentActivityContainer maxWidth="md">
        <SectionHeading>
          <ResponsiveText variant="header">Recent Activity</ResponsiveText>
        </SectionHeading>
        <Slider {...activitySettings}>
          {mockRecentReviews.map((review) => (
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
