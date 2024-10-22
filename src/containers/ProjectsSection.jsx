import { Box, Container } from "@mui/material";
import Title from "../components/CustomTypography/Title";

const ProjectsSection = () => {
  return (
    <Box sx={{ bgcolor: "#210002", height: "100vh", width: "100%" }}>
      <Container>
        <Title variant="h2"> Projects Gallary </Title>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
