import { Box } from "@mui/material";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import backgroundImage from "../assets/images/firewatch-hero/background.png";
import jungle1 from "../assets/images/firewatch-hero/jungle1.png";
import jungle2 from "../assets/images/firewatch-hero/jungle2.png";
import jungle3 from "../assets/images/firewatch-hero/jungle3.png";
import jungle4 from "../assets/images/firewatch-hero/jungle4.png";
import jungle5 from "../assets/images/firewatch-hero/jungle5.png";
import manOnMountain from "../assets/images/firewatch-hero/man_on_mountain.png";
import mountains from "../assets/images/firewatch-hero/mountains.png";

const FirewatchHero = () => {
  return (
    <Box>
      {/* Keyart Layers using ParallaxBanner */}
      <ParallaxBanner style={{ aspectRatio: "16/9", height: "100vh" }}>
        <ParallaxBannerLayer
          image={backgroundImage}
          speed={-60}
          expanded={false}
        />
        <ParallaxBannerLayer image={mountains} speed={-50} expanded={false} />
        <ParallaxBannerLayer image={jungle1} speed={-40} expanded={false} />
        <ParallaxBannerLayer image={jungle2} speed={-30} expanded={false} />
        <ParallaxBannerLayer image={jungle3} speed={-20} expanded={false} />
        <ParallaxBannerLayer image={jungle4} speed={-10} expanded={false} />
        <ParallaxBannerLayer image={jungle5} speed={0} expanded={true} />
        <ParallaxBannerLayer image={manOnMountain} speed={10} expanded={true} />
      </ParallaxBanner>
    </Box>
  );
};

export default FirewatchHero;
