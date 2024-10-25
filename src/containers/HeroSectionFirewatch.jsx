import { Box } from "@mui/material";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

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
} = HeroSectionContentFirewatch;

const FirewatchHero = () => {
  return (
    <Box sx={{ position: "relative" }}>
      {/* Keyart Layers using ParallaxBanner */}
      <ParallaxBanner style={{ height: "100vh" }}>
        {/* Background Layers */}
        <ParallaxBannerLayer
          image={backgroundImage}
          translateY={[0, 70]}
          expanded={false}
          shouldAlwaysCompleteAnimation={true}
        />
        <ParallaxBannerLayer
          image={mountains}
          translateY={[0, 60]}
          expanded={false}
          shouldAlwaysCompleteAnimation={true}
        />
        <ParallaxBannerLayer
          image={jungle1}
          translateY={[0, 50]}
          expanded={false}
          shouldAlwaysCompleteAnimation={true}
        />
        <ParallaxBannerLayer
          image={jungle2}
          translateY={[5, 40]}
          expanded={false}
          shouldAlwaysCompleteAnimation={true}
        />
        <ParallaxBannerLayer
          image={jungle3}
          translateY={[0, 30]}
          expanded={false}
          shouldAlwaysCompleteAnimation={true}
        />
        <ParallaxBannerLayer
          image={jungle4}
          translateY={[0, 20]}
          expanded={false}
          shouldAlwaysCompleteAnimation={true}
        />
        <ParallaxBannerLayer
          image={jungle5}
          translateY={[0, 10]}
          expanded={false}
          shouldAlwaysCompleteAnimation={true}
        />
        <ParallaxBannerLayer
          image={manOnMountain}
          translateY={[15, 25, "easeInOut"]}
          expanded={false}
          shouldAlwaysCompleteAnimation={true}
        />
        <ParallaxBannerLayer
          opacity={[0, 1]}
          shouldAlwaysCompleteAnimation={true}
          expanded={false}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: "linear-gradient(to top,#000000,#1a1a1a)",
          }}
        ></ParallaxBannerLayer>
      </ParallaxBanner>

      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          gap: "1rem",
          width: "auto",
          height: "auto",
          inset: 0,
        }}
      >
        <LettersParallaxRow
          inputString="[Hello, World!]"
          fontVariant="h1"
          xStart="0vw"
          xEnd="100vw"
          yStart="0vh"
          step={10}
          changeOffset={0.5}
          easing={"easeInBack"}
          reverse={false}
          sx={{ fontWeight: "bold" }}
        />
      </Box> */}
    </Box>
  );
};

export default FirewatchHero;
