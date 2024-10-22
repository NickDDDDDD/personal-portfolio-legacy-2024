import { Box } from "@mui/material";
import { Parallax } from "react-scroll-parallax";
import useMeasure from "react-use-measure";
import PropTypes from "prop-types";

const parseLetterBlocks = (inputString) => {
  const regex = /\[(.*?)\]/g;
  let blocks = [];
  let match;
  let lastIndex = 0;

  while ((match = regex.exec(inputString)) !== null) {
    blocks.push(match[1]);
    lastIndex = regex.lastIndex;
  }

  if (blocks.length === 0) {
    blocks = inputString.split("");
  } else if (lastIndex < inputString.length) {
    blocks.push(...inputString.slice(lastIndex).split(""));
  }

  return blocks;
};

const LettersParallax = ({
  letters = "Custom Typography",
  offsetYA = 0,
  offsetYB = 100,
  offsetXA = 0,
  offsetXB = null,
  translate = "xy",
  easing = "easeInOut",
  rotate = [0, 0],
  flexDirection = "column",
  fontSize = "5rem",
  fontWeight = "bold",
}) => {
  const xUnit = "vw";
  const yUnit = "vh";

  const [lettersRef, { width: lettersWidth }] = useMeasure();
  const letterBlocks = parseLetterBlocks(letters);

  const computedOffXB =
    offsetXB !== null
      ? offsetXB
      : lettersWidth
      ? 100 - (lettersWidth / window.innerWidth) * 100
      : 0;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "100%",
        width: "100%",
      }}
    >
      <Box
        ref={lettersRef}
        className="hello-parallax"
        sx={{
          display: "flex",
          flexDirection: flexDirection,
          fontSize: fontSize,
          fontWeight: fontWeight,
          width: "auto",
        }}
      >
        {letterBlocks.map((letter, index) => {
          const key = letterBlocks.length - index;

          const translateProps = {};
          if (translate.includes("y")) {
            translateProps.translateY = [
              `${offsetYA}${yUnit}`,
              `${offsetYB}${yUnit}`,
              easing,
            ];
          }
          if (translate.includes("x")) {
            translateProps.translateX = [
              `${offsetXA}${xUnit}`,
              flexDirection === "column"
                ? `${computedOffXB - offsetXA}${xUnit}`
                : `${offsetXB}${xUnit}`,
              easing,
            ];
          }

          return (
            <Parallax
              key={key}
              {...translateProps}
              rotate={rotate}
              shouldAlwaysCompleteAnimation={true}
              rootMargin={{
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              }}
              style={{
                margin: 0,
                padding: 0,
                display: "inline-block",
                boxSizing: "content-box",
                lineHeight: 1,
                letterSpacing: 0,
              }}
            >
              <Box>{letter === " " ? "\u00A0" : letter}</Box>
            </Parallax>
          );
        })}
      </Box>
    </Box>
  );
};

// 定义 props 类型
LettersParallax.propTypes = {
  letters: PropTypes.string,
  offsetYA: PropTypes.number,
  offsetYB: PropTypes.number,
  offsetXA: PropTypes.number,
  offsetXB: PropTypes.number,
  translate: PropTypes.oneOf(["x", "y", "xy"]),
  easing: PropTypes.string,
  rotate: PropTypes.arrayOf(PropTypes.number),
  flexDirection: PropTypes.oneOf(["row", "column"]),
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
};

export default LettersParallax;
