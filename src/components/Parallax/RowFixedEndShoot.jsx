import { Box } from "@mui/material";
import { Parallax } from "react-scroll-parallax";
import PropTypes from "prop-types";
import ResponsiveTypography from "../CustomTypography/ResponsiveTypography";

// Function to map the string into an array of letter objects
const generateLetters = (string) => {
  return Array.from(string).map((char) => ({
    char: char === " " ? "\u00A0" : char, // Handle spaces correctly with a non-breaking space
  }));
};

const RowFixedEndShoot = ({
  inputString,
  fontVariant = "h2",
  sx = {},
  xEnd = "0vw", // End X position where the letters will stop
  yPosition = "0vh", // Y position for the letters
  baseStartScroll = 0, // Start scrolling point for the first letter
  baseEndScroll = 1000, // End scrolling point for the last letter
  easing = "easeOut", // Easing function for the animation
  shootFromDirection = "left", // Direction of the shoot effect
}) => {
  const letters = generateLetters(inputString);
  const totalLetters = letters.length;

  // Calculate the scroll step between letters
  const totalScrollRange = baseEndScroll - baseStartScroll;
  const scrollStep = totalScrollRange / (totalLetters - 1); // evenly distribute scroll points

  // Determine the translate values based on the direction
  const getTranslateValues = () => {
    switch (shootFromDirection) {
      case "right":
        return {
          translateX: ["100vw", xEnd],
          translateY: [yPosition, yPosition],
        };
      case "top":
        return { translateX: [xEnd, xEnd], translateY: ["-100vh", yPosition] };
      case "bottom":
        return { translateX: [xEnd, xEnd], translateY: ["100vh", yPosition] };
      case "left":
      default:
        return {
          translateX: ["-100vw", xEnd],
          translateY: [yPosition, yPosition],
        };
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      {letters.map((letter, index) => {
        // Calculate the dynamic start and end scroll for each letter
        const startScroll = baseStartScroll + index * scrollStep;
        const endScroll = startScroll + scrollStep;

        // Get the translate values based on the shootFromDirection
        const { translateX, translateY } = getTranslateValues();

        return (
          <Parallax
            key={index}
            shouldAlwaysCompleteAnimation={true}
            shouldDisableScalingTranslations={true}
            easing={easing}
            rootMargin={{
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
            opacity={[0, 1]}
            startScroll={startScroll}
            endScroll={endScroll}
            translateX={translateX}
            translateY={translateY}
          >
            <ResponsiveTypography
              variant={fontVariant}
              sx={{
                ...sx,
              }}
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
RowFixedEndShoot.propTypes = {
  inputString: PropTypes.string.isRequired, // The string to display with parallax effect
  fontVariant: PropTypes.string, // Font variant for the string
  sx: PropTypes.object, // Additional styles for the string
  xEnd: PropTypes.string.isRequired, // End X translation value
  yPosition: PropTypes.string, // Y position for the letters
  baseStartScroll: PropTypes.number, // Base start scroll value
  baseEndScroll: PropTypes.number, // Base end scroll value
  easing: PropTypes.string, // Easing function for the parallax effect
  shootFromDirection: PropTypes.oneOf(["left", "right", "top", "bottom"]), // Direction for the shoot effect
};

export default RowFixedEndShoot;
