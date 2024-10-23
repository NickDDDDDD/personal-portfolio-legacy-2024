import { Box, Stack } from "@mui/material";
import { Parallax, ParallaxBannerLayer } from "react-scroll-parallax";
import PropTypes from "prop-types";

// Function to map the string into an array of letter objects
const generateLetters = (
  string,
  incrementYMin,
  incrementYMax,
  reverse = false
) => {
  const lettersArray = Array.from(string);

  // Calculate dynamic increments depending on whether reverse is true or false
  const range = incrementYMax - incrementYMin;
  const step = range / (lettersArray.length - 1); // Step per letter

  return lettersArray.map((char, index) => {
    // Calculate the Y value dynamically for each letter
    const translateYValue = reverse
      ? incrementYMin + index * step
      : incrementYMax - index * step;

    return {
      char: char === " " ? "\u00A0" : char, // Handle spaces correctly with a non-breaking space
      translateY: `${translateYValue}vh`, // Dynamically set translateY
    };
  });
};

const MyParallaxComponent = ({
  inputString = "Hello World",
  incrementYMin = 10,
  incrementYMax = 100,
  xStart = "20vh",
  xEnd = "120vh",
  yStart = "20vh",
  reverse = false,
}) => {
  const letters = generateLetters(
    inputString,
    incrementYMin,
    incrementYMax,
    reverse
  );

  return (
    <ParallaxBannerLayer>
      <Stack
        direction="row"
        sx={{
          width: "auto",
          height: "auto",
          alignItems: "flex-start",
        }}
      >
        {letters.map((letter, index) => (
          <Parallax
            key={index}
            shouldAlwaysCompleteAnimation={true}
            easing="easeInOutBack"
            translateX={[xStart, xEnd]}
            translateY={[yStart, letter.translateY]} // Dynamic translateY based on string length
          >
            <Box sx={{ fontSize: "5rem", fontWeight: "600" }}>
              {letter.char}
            </Box>
          </Parallax>
        ))}
      </Stack>
    </ParallaxBannerLayer>
  );
};

// Define propTypes for better clarity and type checking
MyParallaxComponent.propTypes = {
  inputString: PropTypes.string, // The string to display with parallax effect
  xStart: PropTypes.string, // Starting X translation value
  xEnd: PropTypes.string, // Ending X translation value
  yStart: PropTypes.string,
  incrementYMin: PropTypes.number, // Minimum Y translate value
  incrementYMax: PropTypes.number, // Maximum Y translate value

  reverse: PropTypes.bool, // Whether to reverse the Y increment direction
};

export default MyParallaxComponent;
