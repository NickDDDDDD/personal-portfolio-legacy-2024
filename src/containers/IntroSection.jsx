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
          easing="easeOutQuint" // Use ease-out easing
          shootFromDirection="top" // Letters will shoot in from the top
          startOffset={500} // Delay the start of the animation
          baseScrollDuration={200} // Base duration for animation
          durationIncrement={50}
        />
        <RowFixedEnd
          inputString="Nick"
          fontVariant="h1"
          easing="easeOutBack" // Use ease-out easing
          shootFromDirection="top" // Letters will shoot in from the top
          startOffset={500} // Delay the start of the animation
          baseScrollDuration={200} // Base duration for animation
          durationIncrement={50} // Increment for each letter's animation duration
          sx={{ color: "#ffaf1b", fontWeight: "bold" }} // Text color white
        />
        <MyAvatar />
      </Box>
    </ParallaxContainer>
  );
};

export default IntroSection;
