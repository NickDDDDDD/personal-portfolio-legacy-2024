import { Box } from "@mui/material";
import { Parallax } from "react-scroll-parallax";
import PropTypes from "prop-types";
import ResponsiveTypography from "../CustomTypography/ResponsiveTypography";

// Function to map the string into an array of letter objects
const generateLetters = (string, changeStep, changeOffset, reverse = false) => {
  const lettersArray = Array.from(string);

  return lettersArray.map((char, index) => {
    // Calculate the Y value dynamically for each letter
    const translateYValue = reverse
      ? (changeOffset - 1) * string.length * changeStep +
        (index + 1) * changeStep
      : changeOffset * string.length * changeStep - (index + 1) * changeStep;

    return {
      char: char === " " ? "\u00A0" : char, // Handle spaces correctly with a non-breaking space
      translateY: `${translateYValue}vh`, // Dynamically set translateY
    };
  });
};

const RowFixedStart = ({
  inputString,
  fontVariant = "h2",
  sx = {},
  step,
  xStart,
  xEnd,
  yStart,
  changeOffset,
  easing,
  reverse = false,
}) => {
  const letters = generateLetters(inputString, step, changeOffset, reverse);

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
          <ResponsiveTypography variant={fontVariant} sx={{ ...sx }}>
            {letter.char}
          </ResponsiveTypography>
        </Parallax>
      ))}
    </Box>
  );
};

// Define propTypes for better clarity and type checking
RowFixedStart.propTypes = {
  inputString: PropTypes.string, // The string to display with parallax effect
  fontVariant: PropTypes.string, // Font variant for the string
  sx: PropTypes.object, // Additional styles for the string
  easing: PropTypes.string, // Easing function for the parallax effect
  xStart: PropTypes.string, // Starting X translation value
  xEnd: PropTypes.string, // Ending X translation value
  yStart: PropTypes.string,
  incrementYMin: PropTypes.number, // Minimum Y translate value
  step: PropTypes.number, // Step value for Y translate
  changeOffset: PropTypes.number, // Offset value for Y translate
  reverse: PropTypes.bool, // Whether to reverse the Y increment direction
};

export default RowFixedStart;
