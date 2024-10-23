import { Box, Stack } from "@mui/material";
import {
  ParallaxBanner,
  ParallaxBannerLayer,
  Parallax,
} from "react-scroll-parallax";

import { HeroSectionContentFirewatch } from "../utils/content";
import LettersParallax from "../components/LettersParallax";
import MyParallaxComponent from "../components/Parallax/MyParallaxComponent";

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
    <Box>
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
        {/* Content Layer */}
      </ParallaxBanner>
      <MyParallaxComponent
        inputString="Hi Folks!"
        xStart="30vh"
        xEnd="120vh"
        yStart="20vh"
        incrementYMin={10}
        incrementYMax={80}
        reverse={false}
      />

      <MyParallaxComponent
        inputString="Welcome to My Protfolio!"
        xStart="65vh"
        xEnd="120vh"
        yStart="45vh"
        incrementYMin={10}
        incrementYMax={100}
        reverse={false}
      />
    </Box>
  );
};

export default FirewatchHero;
