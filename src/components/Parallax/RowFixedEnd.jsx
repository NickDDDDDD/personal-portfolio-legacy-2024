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
  className = "",
  shootFromDirection = "left",
  xEnd = "0vw",
  yEnd = "0vh",
  startOffset = 0,
  baseScrollDuration = 200,
  durationIncrement = 50,
  easing = "ease-out",
  ...props
}) => {
  const letters = generateLetters(inputString);

  // Determine the translation values based on the shootFromDirection
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
    <div className={`flex flex-wrap ${className}`}>
      {letters.map((letter, index) => {
        const scrollDuration = baseScrollDuration + index * durationIncrement;

        return (
          // Apply parallax effect on larger screens
          <Parallax
            key={index}
            shouldAlwaysCompleteAnimation={true}
            easing={easing}
            rootMargin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            opacity={[0, 1]}
            translateX={translateX}
            translateY={translateY}
            startScroll={startOffset + index}
            endScroll={startOffset + index + scrollDuration}
          >
            <ResponsiveTypography
              variant={fontVariant}
              className={className}
              {...props}
            >
              {letter.char}
            </ResponsiveTypography>
          </Parallax>
        );
      })}
    </div>
  );
};

// Define propTypes for better clarity and type checking
RowFixedEnd.propTypes = {
  inputString: PropTypes.string.isRequired,
  fontVariant: PropTypes.string,
  className: PropTypes.string,
  shootFromDirection: PropTypes.oneOf(["left", "right", "top", "bottom"]),
  xEnd: PropTypes.string,
  yEnd: PropTypes.string,
  startOffset: PropTypes.number,
  baseScrollDuration: PropTypes.number,
  durationIncrement: PropTypes.number,
  easing: PropTypes.string,
};

export default RowFixedEnd;
