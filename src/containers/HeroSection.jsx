import { Box, Container, Stack, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { HeroSectionContent } from "../utils/content";
import ActionButton from "../components/Buttons/ActionButton";
import Title from "../components/CustomTypography/Title";

const {
  title,
  subtitle,
  mainCTA,
  secondaryCTA,
  mainBG,
  treesImage,
  cliffImage,
  horseImage,
  shootingStarImage,
} = HeroSectionContent;

const HeroSection = () => {
  const theme = useTheme();
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
      }}
    >
      {/* Main background image */}
      <Box
        component="img"
        src={mainBG}
        alt="main background"
        sx={{
          position: "fixed",
          zIndex: -10,
          top: 0,
          width: "100%",
          height: "100%",
        }}
      />

      {/* Background elements  */}
      <Box
        sx={{
          position: "absolute",
          zIndex: -1,
          top: 0,
          left: 0,
          right: 0,
          height: "100%",
        }}
      >
        {/* Trees image    */}
        <Box
          component="img"
          src={treesImage}
          alt="trees"
          sx={{
            position: "absolute",
            display: { xs: "none", md: "inline" },
            width: "100%",
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
        {/* Cliff image  */}
        <Box
          component="img"
          src={cliffImage}
          alt="cliff"
          sx={{
            position: "absolute",
            display: "inline",
            height: "100%",
            right: -2,
            top: 0,
            // bottom: "20%",
          }}
        />

        {/* Horse image  */}
        <Box
          component="img"
          src={horseImage}
          alt="horse"
          sx={{
            position: "absolute",
            display: "inline",
            height: "38%",
            right: "14%",
            bottom: "45%",
            transform: "rotate(7deg)",
          }}
        />

        {/* Shooting star image  */}
        <Box
          component="img"
          src={shootingStarImage}
          alt="shooting star"
          sx={{
            position: "absolute",
            display: "inline",

            top: "30px",
            right: "15%",
            width: "500px",
          }}
        />
      </Box>

      {/* Content  */}

      <Container sx={{ height: "80vh" }}>
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

export default HeroSection;
