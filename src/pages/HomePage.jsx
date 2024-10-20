import HeroSection from "../containers/HeroSection";
import Footer from "../components/Footers/MianFooter";
import ProjectsSection from "../containers/ProjectsSection";
import MainNavbar from "../components/Navbars/MainNavbar";

const HomePage = () => {
  return (
    <div>
      {/* nav bar  */}
      <MainNavbar />
      {/* sections  */}
      <HeroSection />
      <ProjectsSection />
      {/* footer  */}
      <Footer />
    </div>
  );
};

export default HomePage;
