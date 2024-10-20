import { Typography, useTheme } from "@mui/material";
import PropTypes from "prop-types";

const Title = ({ variant = "h1", children, ...props }) => {
  const theme = useTheme();

  const responsiveFontSize = {
    h1: {
      xs: theme.typography.h4.fontSize,
      sm: theme.typography.h3.fontSize,
      md: theme.typography.h2.fontSize,
      lg: theme.typography.h1.fontSize,
    },
    h2: {
      xs: theme.typography.h5.fontSize,
      sm: theme.typography.h4.fontSize,
      md: theme.typography.h3.fontSize,
      lg: theme.typography.h2.fontSize,
    },
  };

  const letterSpacing = variant === "h1" ? "0.02em" : "0.05em";

  return (
    <Typography
      variant={variant}
      sx={{
        letterSpacing: letterSpacing,
        mb: variant === "h1" ? 1 : 5,
        fontSize: responsiveFontSize[variant],
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

Title.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
};

export default Title;
