import { Box } from "@mui/material";
import { Parallax } from "react-scroll-parallax";
import PropTypes from "prop-types";
import Title from "../CustomTypography/Title";

// Function to map the string into an array of letter objects
const generateLetters = (
  string,
  incrementYMin,
  incrementYMax,
  changeStep,
  reverse = false
) => {
  const lettersArray = Array.from(string);

  return lettersArray.map((char, index) => {
    // Calculate the Y value dynamically for each letter
    const translateYValue = reverse
      ? incrementYMin + index * changeStep
      : incrementYMax - index * changeStep;

    return {
      char: char === " " ? "\u00A0" : char, // Handle spaces correctly with a non-breaking space
      translateY: `${translateYValue}vh`, // Dynamically set translateY
    };
  });
};

const RowParallax = ({
  inputString,
  incrementYMin,
  step,
  xStart,
  xEnd,
  yStart,
  easing,
  reverse = false,
}) => {
  const incrementYMax = (inputString.length - 1) * step;

  const letters = generateLetters(
    inputString,
    incrementYMin,
    incrementYMax,
    step,
    reverse
  );

  return (
    <Box sx={{ display: "flex" }}>
      {letters.map((letter, index) => (
        <Parallax
          key={index}
          shouldAlwaysCompleteAnimation={true}
          easing={easing}
          rootMargin={{
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
          translateX={[xStart, xEnd]}
          translateY={[yStart, letter.translateY]} // Dynamic translateY based on string length
        >
          <Title sx={{ fontWeight: "bold" }}>{letter.char}</Title>
        </Parallax>
      ))}
    </Box>
  );
};

// Define propTypes for better clarity and type checking
RowParallax.propTypes = {
  inputString: PropTypes.string, // The string to display with parallax effect
  easing: PropTypes.string, // Easing function for the parallax effect
  xStart: PropTypes.string, // Starting X translation value
  xEnd: PropTypes.string, // Ending X translation value
  yStart: PropTypes.string,
  incrementYMin: PropTypes.number, // Minimum Y translate value
  step: PropTypes.number, // Step value for Y translate

  reverse: PropTypes.bool, // Whether to reverse the Y increment direction
};

export default RowParallax;
