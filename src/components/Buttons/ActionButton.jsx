import { Button } from "@mui/material";

import PropTypes from "prop-types";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const ActionButton = ({
  sx = {},
  variant,
  children,
  arrowDirection,
  ...props
}) => {
  const renderArrowIcon = () => {
    switch (arrowDirection) {
      case "left":
        return <KeyboardArrowLeftIcon />;
      case "right":
        return <KeyboardArrowRightIcon />;
      case "up":
        return <KeyboardArrowUpIcon />;
      case "down":
        return <KeyboardArrowDownIcon />;
      default:
        return null;
    }
  };
  return (
    <Button variant={variant} sx={{ borderRadius: 4, ...sx }} {...props}>
      {arrowDirection === "left" && renderArrowIcon()}
      {children}
      {arrowDirection !== "left" && renderArrowIcon()}
    </Button>
  );
};

ActionButton.propTypes = {
  sx: PropTypes.object,
  variant: PropTypes.string.isRequired,
  children: PropTypes.node,
  arrowDirection: PropTypes.oneOf(["left", "right", "up", "down"]),
};

export default ActionButton;
