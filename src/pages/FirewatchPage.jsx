import { Box, Container } from "@mui/material";
import FirewatchHero from "../containers/HeroSectionFirewatch";
import Title from "../components/CustomTypography/Title";

const FirewatchPage = () => {
  return (
    <Box>
      <FirewatchHero />
      <Box sx={{ bgcolor: "#210002", height: "200vh" }}>
        <Container>
          <Title>Ohter content</Title>
        </Container>
      </Box>
    </Box>
  );
};

export default FirewatchPage;
