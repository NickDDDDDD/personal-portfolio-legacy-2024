import { Box } from "@mui/material";
import PropTypes from "prop-types";

const ParallaxContainer = ({
  children,
  backgroundColor = "#000000",
  sx = {},
}) => {
  return (
    <Box
      sx={{
        bgcolor: backgroundColor,
        height: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          gap: "10em",
          width: "auto",
          height: "auto",
          inset: 0,
          ...sx,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

ParallaxContainer.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  sx: PropTypes.object,
};

export default ParallaxContainer;
