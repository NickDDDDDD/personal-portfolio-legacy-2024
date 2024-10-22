import { Box, Container, Stack, useTheme, useMediaQuery } from "@mui/material";
import {
  ParallaxBanner,
  ParallaxBannerLayer,
  useParallaxController,
} from "react-scroll-parallax";
import Title from "../components/CustomTypography/Title";
import ActionButton from "../components/Buttons/ActionButton";

import { HeroSectionContentFirewatch } from "../utils/content";

const {
  backgroundImage,
  mountains,
  jungle1,
  jungle2,
  jungle3,
  jungle4,
  jungle5,
  manOnMountain,
  title,
  subtitle,
  mainCTA,
  secondaryCTA,
} = HeroSectionContentFirewatch;

const FirewatchHero = () => {
  const theme = useTheme();
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down("md"));

  const parallaxController = useParallaxController();

  // Function to update parallax controller after images have loaded
  const handleImageLoad = () => {
    console.log("Image loaded");
    parallaxController.update(); // Updates the parallax cache when the image is loaded
  };

  return (
    <Box>
      {/* Keyart Layers using ParallaxBanner */}
      <ParallaxBanner style={{ height: "100vh" }}>
        {/* Background Layers */}
        <ParallaxBannerLayer
          image={backgroundImage}
          translateY={[0, 70]}
          expanded={false}
          shouldAlwaysCompleteAnimation={true}
          onLoad={handleImageLoad}
        />

        <ParallaxBannerLayer
          image={mountains}
          translateY={[0, 60]}
          expanded={false}
          shouldAlwaysCompleteAnimation={true}
          onLoad={handleImageLoad}
        />
        <ParallaxBannerLayer
          image={jungle1}
          translateY={[0, 50]}
          expanded={false}
          shouldAlwaysCompleteAnimation={true}
          onLoad={handleImageLoad}
        />
        <ParallaxBannerLayer
          image={jungle2}
          translateY={[5, 40]}
          expanded={false}
          shouldAlwaysCompleteAnimation={true}
          onLoad={handleImageLoad}
        />
        <ParallaxBannerLayer
          image={jungle3}
          translateY={[0, 30]}
          expanded={false}
          shouldAlwaysCompleteAnimation={true}
          onLoad={handleImageLoad}
        />
        <ParallaxBannerLayer
          image={jungle4}
          translateY={[0, 20]}
          expanded={false}
          shouldAlwaysCompleteAnimation={true}
          onLoad={handleImageLoad}
        />
        <ParallaxBannerLayer
          image={jungle5}
          translateY={[0, 10]}
          expanded={false}
          shouldAlwaysCompleteAnimation={true}
          onLoad={handleImageLoad}
        />
        <ParallaxBannerLayer
          image={manOnMountain}
          translateY={[15, 25, "easeInOut"]}
          expanded={false}
          shouldAlwaysCompleteAnimation={true}
          onLoad={handleImageLoad}
        />

        {/* Content Layer */}
        <ParallaxBannerLayer translateY={[-20, 20]}></ParallaxBannerLayer>
      </ParallaxBanner>

      <Container sx={{ height: "100%" }}>
        <Stack sx={{ height: "100%" }} justifyContent="center">
          {/* Titles  */}
          <Title variant="h1">{title}</Title>
          <Title variant="h2">{subtitle}</Title>
          {/* Buttons  */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems={"center"}
            spacing={4}
          >
            <ActionButton
              variant="contained"
              arrowDirection="right"
              fullWidth={isSmallerScreen}
              sx={{ height: 58, px: 3 }}
            >
              {mainCTA}
            </ActionButton>
            <ActionButton
              variant="outlined"
              fullWidth={isSmallerScreen}
              sx={{
                height: 58,
                px: 3,
                color: "text.primary",
                borderColor: "text.primary",
              }}
            >
              {secondaryCTA}
            </ActionButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default FirewatchHero;
