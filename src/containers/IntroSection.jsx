import RowMotion from "../components/Parallax/RowMotion.jsx";
import MyAvatar from "../components/MyAvatar";
import ParallaxContainer from "../components/ParallaxContainer";

const IntroSection = () => {
  return (
    <ParallaxContainer>
      <div className="flex flex-col items-center justify-center gap-4">
        <RowMotion
          inputString="Hello, my name is"
          fontVariant="h2"
          ease="backInOut"
          shootFromDirection="top"
        />
        <RowMotion
          inputString="Nick"
          fontVariant="h1"
          ease="backInOut"
          shootFromDirection="top"
          className="text-[#ffaf1b] font-bold"
        />
        <MyAvatar />
      </div>
    </ParallaxContainer>
  );
};

export default IntroSection;
