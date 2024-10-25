import { Box } from "@mui/material";
import LettersShootEffectRow from "../components/Parallax/LettersShootEffectRow";

const ProjectsSection = () => {
  return (
    <Box
      sx={{
        bgcolor: "#000000",
        height: "500vh",
        width: "100%",
        position: "relative",
        overflowX: "clip",

        overflowY: "visible",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          position: "absolute",
          marginTop: "10vh",
          gap: "1rem",
          width: "auto",
          height: "auto",
          inset: 0,
        }}
      >
        <LettersShootEffectRow
          inputString="Hello, my name is"
          fontVariant="h2"
          xEnd="0vw" // Letters will stop at 0vw from the left
          yPosition="0vh" // Y position of the letters
          baseStartScroll={100} // Base start scroll value
          baseEndScroll={300} // Base end scroll value
          easing="easeOut" // Use ease-out easing
          shootFromDirection="top" // Letters will shoot in from the top
        />
        <LettersShootEffectRow
          inputString="Nick"
          fontVariant="h1"
          xEnd="0vw" // Letters will stop at 0vw from the left
          yPosition="0vh" // Y position of the letters
          baseStartScroll={300} // Base start scroll value
          baseEndScroll={500} // Base end scroll value
          easing="easeOutBack" // Use ease-out easing
          shootFromDirection="top" // Letters will shoot in from the top
          sx={{ color: "#ffaf1b", fontWeight: "bold" }} // Text color white
        />
      </Box>
    </Box>
  );
};

export default ProjectsSection;
