import React from "react";

import Image from "next/image";

import Link from "next/link";

import Slider from "react-slick";

import { Avatar, Box, Container, Divider } from "@mui/material";

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
import { Text } from "@/components/UI";

const RecentReviews = () => {
  return (
    <Container maxWidth="false" sx={{ display: { xs: "none", sm: "block" } }}>
      <RecentActivityContainer maxWidth="md">
        <SectionHeading>
          <Text variant="header">Recent Activity</Text>
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
                  <Text variant="subHeader" sx={{ fontWeight: "bold" }}>
                    {review.restaurantName}
                  </Text>
                  <Divider
                    flexItem
                    sx={{
                      opacity: "0.5",
                      backgroundColor: "white",
                    }}
                  />
                  <Box>
                    <Text variant="helper">{review.tags.join(", ")}</Text>
                  </Box>
                </ReviewImageTextContainer>
              </ReviewImageContainer>
              <CardContentContainer>
                <ReviewDetailsContainer>
                  <Avatar sx={{ height: "50px", width: "50px" }} />
                  <Text variant="mainBody" sx={{ fontWeight: "bold" }}>
                    {review.userName}
                  </Text>
                  <Box>{review.userReview}</Box>
                  <Box>
                    <Text variant="body">
                      "{review.userComment.slice(0, 150)}"
                      {review.userComment.length > 150 && (
                        <Link href="">Continue Reading</Link>
                      )}
                    </Text>
                  </Box>
                </ReviewDetailsContainer>
                <Box>
                  <Text variant="helper">({review.reviewDate})</Text>
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
