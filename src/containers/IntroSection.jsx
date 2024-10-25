import { Box } from "@mui/material";
import RowFixedEnd from "../components/Parallax/RowFixedEnd";
import MyAvatar from "../components/MyAvatar";
import ParallaxContainer from "../components/ParallaxContainer";

const IntroSection = () => {
  return (
    <ParallaxContainer>
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
          inputString="Hello, my name is"
          fontVariant="h2"
          xEnd="0vw" // Letters will stop at 0vw from the left
          easing="easeOutQuint" // Use ease-out easing
          shootFromDirection="top" // Letters will shoot in from the top
        />
        <RowFixedEnd
          inputString="Nick"
          fontVariant="h1"
          xEnd="0vw" // Letters will stop at 0vw from the left
          easing="easeOutBack" // Use ease-out easing
          shootFromDirection="top" // Letters will shoot in from the top
          baseScrollDuration={300} // Base duration for animation
          durationIncrement={100} // Increment for each letter's animation duration
          sx={{ color: "#ffaf1b", fontWeight: "bold" }} // Text color white
        />
        <MyAvatar />
      </Box>
    </ParallaxContainer>
  );
};

export default IntroSection;
