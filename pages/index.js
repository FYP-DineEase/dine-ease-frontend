import { SecondaryContainer } from "@/components/UI";
import Footer from "@/components/footer/footer";
import Banner from "@/components/home-page/banner/Banner";
import Cities from "@/components/home-page/cities/Cities";
import FeaturedRestaurants from "@/components/home-page/featured-restaurants/FeaturedRestaurants";
import RecentReviews from "@/components/home-page/recent-reviews/RecentReviews";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <Container
      maxWidth="false"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "6rem",
        backgroundColor: "white",
        marginBottom: "6rem",
        zIndex: 1001,
        backgroundColor: "white",
      }}
      disableGutters
    >
      <Banner />
      <FeaturedRestaurants />
      <Cities />
      <RecentReviews />
      <Footer />
    </Container>
  );
}
