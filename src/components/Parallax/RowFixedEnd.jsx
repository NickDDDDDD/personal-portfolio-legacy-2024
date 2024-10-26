import { Box, useTheme, useMediaQuery } from "@mui/material";
import { Parallax } from "react-scroll-parallax";
import PropTypes from "prop-types";
import ResponsiveTypography from "../CustomTypography/ResponsiveTypography";

// Function to generate array of letter objects from a string
const generateLetters = (string) => {
  return Array.from(string).map((char) => ({
    char: char === " " ? "\u00A0" : char, // Non-breaking space for spaces
  }));
};

const RowFixedEnd = ({
  inputString,
  fontVariant = "h2",
  sx = {},
  shootFromDirection = "left", // Direction from which letters shoot in
  xEnd = "0vw", // X position where letters will stop
  yEnd = "0vh", // Y position where letters will stop
  startOffset = 0, // Start scrolling point for the first letter
  baseScrollDuration = 200, // Base duration for animation
  durationIncrement = 50, // Increment for each letter's animation duration
  easing = "easeOut", // Animation easing
  ...props
}) => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md")); // Check if screen size is medium or smaller
  const letters = generateLetters(inputString);

  // Determine the translate values based on the shootFromDirection
  const getTranslateValues = () => {
    switch (shootFromDirection) {
      case "right":
        return {
          translateX: ["10vw", xEnd],
          translateY: [yEnd, yEnd],
        };
      case "top":
        return { translateX: [xEnd, xEnd], translateY: ["-10vh", yEnd] };
      case "bottom":
        return { translateX: [xEnd, xEnd], translateY: ["10vh", yEnd] };
      case "left":
      default:
        return {
          translateX: ["-10vw", xEnd],
          translateY: [yEnd, yEnd],
        };
    }
  };

  const { translateX, translateY } = getTranslateValues();

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {letters.map((letter, index) => {
        // Calculate duration for each letter, making each one slightly slower
        const scrollDuration = baseScrollDuration + index * durationIncrement;

        return isMdDown ? (
          // When screen size is md or smaller, just render text without parallax
          <ResponsiveTypography
            key={index}
            variant={fontVariant}
            sx={{ ...sx }}
            {...props}
          >
            {letter.char}
          </ResponsiveTypography>
        ) : (
          // Otherwise, use the Parallax effect
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
            opacity={[0, 1]}
            translateX={translateX}
            translateY={translateY}
            startScroll={startOffset + index}
            endScroll={startOffset + index + scrollDuration}
          >
            <ResponsiveTypography
              variant={fontVariant}
              sx={{ ...sx }}
              {...props}
            >
              {letter.char}
            </ResponsiveTypography>
          </Parallax>
        );
      })}
    </Box>
  );
};

// Define propTypes for better clarity and type checking
RowFixedEnd.propTypes = {
  inputString: PropTypes.string.isRequired, // Text to display with the shoot effect
  fontVariant: PropTypes.string, // Typography variant for the text
  sx: PropTypes.object, // Additional styles for the text
  shootFromDirection: PropTypes.oneOf(["left", "right", "top", "bottom"]), // Shoot direction
  xEnd: PropTypes.string, // X position where letters stop
  yEnd: PropTypes.string, // Y position where letters stop
  startOffset: PropTypes.number, // Start scrolling point for the first letter
  baseScrollDuration: PropTypes.number, // Base duration of each letter's animation
  durationIncrement: PropTypes.number, // Incremental increase in duration for each letter
  easing: PropTypes.string, // Easing function for the animation
};

export default RowFixedEnd;
