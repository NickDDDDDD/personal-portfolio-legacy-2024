import HeroSectionUnicorn from "../containers/HeroSectionUnicorn";
import Footer from "../components/Footers/MianFooter";
import MainNavbar from "../components/Navbars/MainNavbar";

const UnicornTemplatePage = () => {
  return (
    <div>
      {/* nav bar  */}
      <MainNavbar />
      {/* sections  */}
      <HeroSectionUnicorn />
      {/* footer  */}
      <Footer />
    </div>
  );
};

export default UnicornTemplatePage;
