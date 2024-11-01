import ParallaxContainer from "../components/ParallaxContainer";
import RowMotion from "../components/Parallax/RowMotion.jsx";
import ResponsiveTypography from "../components/CustomTypography/ResponsiveTypography";

const DescriptionSection = () => {
  return (
    <ParallaxContainer backgroundColor="#ffffff" className="gap-8">
      <div className="flex flex-col items-center justify-center gap-4">
        <RowMotion
          inputString="I'm a"
          fontVariant="h3"
          xEnd="0vw"
          easing="easeInOut"
          shootFromDirection="top"
          className="text-black"
        />

        <RowMotion
          inputString="software developer"
          fontVariant="h2"
          xEnd="0vw"
          easing="easeInOut"
          shootFromDirection="top"
          className="text-[#ffaf1b] font-bold"
        />
      </div>
      <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]">
        <ResponsiveTypography variant="body2" className="text-black">
          I like to think of myself as a front-end developer with a
          understanding of back-end technologies. While I enjoy exploring
          back-end tech, working on the front end brings me more passion. I love
          the feeling of presenting my work to the user.
        </ResponsiveTypography>
      </div>
    </ParallaxContainer>
  );
};

export default DescriptionSection;
