import { Box } from "@mui/material";
import FirewatchHero from "../containers/HeroSectionFirewatch";
import IntroSection from "../containers/IntroSection";
import DescriptionSection from "../containers/DescriptionSection";
const FirewatchTemplatePage = () => {
  return (
    <Box>
      <FirewatchHero />
      <IntroSection />
      <DescriptionSection />
    </Box>
  );
};

export default FirewatchTemplatePage;
