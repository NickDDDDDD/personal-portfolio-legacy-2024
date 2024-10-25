import { Typography, useTheme } from "@mui/material";
import PropTypes from "prop-types";

const ResponsiveTypography = ({
  variant = "h1",
  children,
  sx = {},
  ...props
}) => {
  const theme = useTheme();

  // Add responsive font sizes for h1, h2, h3, body1, and body2
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
    h3: {
      xs: theme.typography.h6.fontSize,
      sm: theme.typography.h5.fontSize,
      md: theme.typography.h4.fontSize,
      lg: theme.typography.h3.fontSize,
    },
    body1: {
      xs: theme.typography.body2.fontSize,
      sm: theme.typography.body1.fontSize,
      md: theme.typography.body1.fontSize,
      lg: theme.typography.body1.fontSize,
    },
    body2: {
      xs: "0.75rem",
      sm: theme.typography.body2.fontSize,
      md: theme.typography.body2.fontSize,
      lg: theme.typography.body2.fontSize,
    },
  };

  return (
    <Typography
      variant={variant}
      sx={{
        color: "whitesmoke",
        fontSize: responsiveFontSize[variant],
        // textShadow: "0px 0px 2px rgba(0, 0, 0, 0.75)",
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
