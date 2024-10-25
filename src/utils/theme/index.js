import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2f8af5",
    },
    background: {
      default: "#06070a",
    },
    text: {
      secondary: "rgba(255, 255, 255, 0.6)",
    },
  },
  typography: {
    fontFamily: "JetBrains Mono, monospace",
  },
});

export default theme;
