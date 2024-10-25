import { Typography, useTheme } from "@mui/material";
import PropTypes from "prop-types";

const ResponsiveTypography = ({
  variant = "h1",
  children,
  sx = {},
  ...props
}) => {
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
        color: "whitesmoke",

        mb: variant === "h1" ? 1 : 5,
        fontSize: responsiveFontSize[variant],
        textShadow: "0px 0px 2px rgba(0, 0, 0, 0.75)",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

ResponsiveTypography.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
  sx: PropTypes.object,
};

export default ResponsiveTypography;
