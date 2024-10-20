import { AppBar } from "@mui/material";
import { NAVBAR_HEIGHT } from "../../constants";

const MainNavbar = () => {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{ height: NAVBAR_HEIGHT }}
    >
      Navbar
    </AppBar>
  );
};

export default MainNavbar;
