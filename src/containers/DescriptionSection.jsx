import ParallaxContainer from "../components/ParallaxContainer";
import { Box } from "@mui/material";
import RowFixedEnd from "../components/Parallax/RowFixedEnd";
import ResponsiveTypography from "../components/CustomTypography/ResponsiveTypography";

const DescriptionSection = () => {
  return (
    <ParallaxContainer backgroundColor="#ffffff" sx={{ gap: "2em" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1em",
        }}
      >
        <RowFixedEnd
          inputString="I'm a"
          fontVariant="h3"
          xEnd="0vw" // Letters will stop at 0vw from the left
          easing="easeOutQuint" // Use ease-out easing
          shootFromDirection="top" // Letters will shoot in from the top
          startOffset={1200} // Delay the start of the animation
          baseScrollDuration={200} // Base duration for animation
          durationIncrement={50}
          sx={{ color: "#000000" }} // Increment for each letter's animation duration
        />

        <RowFixedEnd
          inputString="software developer"
          fontVariant="h2"
          xEnd="0vw" // Letters will stop at 0vw from the left
          easing="easeOutBack" // Use ease-out easing
          shootFromDirection="top" // Letters will shoot in from the top
          startOffset={800} // Delay the start of the animation
          baseScrollDuration={200} // Base duration for animation
          durationIncrement={50} // Increment for each letter's animation duration
          sx={{ color: "#ffaf1b", fontWeight: "bold" }} // Text color white
        />
      </Box>
      <Box
        sx={{
          width: {
            xs: "90%",
            sm: "80%",
            md: "70%",
            lg: "60%",
            xl: "50%",
          },
        }}
      >
        <ResponsiveTypography variant="body1" sx={{ color: "#000000" }}>
          I like to think of myself as a front-end developer with a
          understanding of back-end technologies. While I enjoy exploring
          back-end tech, working on the front end brings me more passion. I love
          the feeling of presenting my work to the user.
        </ResponsiveTypography>
      </Box>
    </ParallaxContainer>
  );
};

export default DescriptionSection;
