import { Box, Container, Stack, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { HeroSectionContentUnicorn } from "../utils/content";
import ActionButton from "../components/Buttons/ActionButton";
import Title from "../components/CustomTypography/Title";
import { Parallax } from "react-scroll-parallax";
import useMeasure from "react-use-measure";

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
} = HeroSectionContentUnicorn;

const HeroSectionUnicorn = () => {
  const theme = useTheme();
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [containerRef, { height: containerHeight }] = useMeasure();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: isSmallerScreen ? "80vh" : containerHeight,
      }}
    >
      {/* Main background image */}
      <Box
        sx={{
          position: "fixed",
          zIndex: -10,
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <img
          src={mainBG}
          alt="main background"
          style={{
            width: "100%",
          }}
        />
      </Box>

      {/* Background static elements  */}

      <Box
        ref={containerRef}
        sx={{
          position: "absolute",
          width: "100%",
          zIndex: -1,
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        {/* Hidden background image to give box a height */}
        <img
          src={mainBG}
          alt="main background"
          style={{
            width: "100%",
            opacity: 0,
          }}
        />

        {/* Shooting star image  */}
        <img
          src={shootingStarImage}
          alt="shooting star"
          style={{
            position: "absolute",
            zIndex: -3,
            display: "inline",
            top: "30px",
            right: "15%",
            width: "500px",
          }}
        />

        {/* Cliff image  */}

        <img
          src={cliffImage}
          alt="cliff"
          style={{
            position: "absolute",
            display: "inline",
            height: "100%",
            width: "auto",
            right: -2,
            top: 0,
          }}
        />

        {/* Horse image  */}
        <img
          src={horseImage}
          alt="horse"
          style={{
            position: "absolute",
            display: "inline",
            objectFit: "contain",
            height: "38%",
            right: "14%",
            bottom: "45%",
            transform: "rotate(7deg)",
          }}
        />
      </Box>

      {/* Background trees image with Parallax   */}
      <Box
        className="tree-parallax"
        sx={{
          position: "absolute",
          width: "100%",
          display: { xs: "none", md: "inline" },
          bottom: -70,

          zIndex: -2,
        }}
      >
        <Parallax speed={-35}>
          <img
            src={treesImage}
            alt="trees"
            style={{
              width: "100%",
            }}
          />
        </Parallax>
      </Box>

      {/* Content  */}
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

export default HeroSectionUnicorn;
