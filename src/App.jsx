import { Route, Routes } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import FirewatchTemplatePage from "./pages/FirewatchTemplatePage";
import { ParallaxProvider } from "react-scroll-parallax";
import UnicornTemplatePage from "./pages/UnicornTemplatePage";

const App = () => {
  return (
    <ParallaxProvider>
      <Routes>
        {/* Add routes here */}
        <Route path="/" element={<FirewatchTemplatePage />}></Route>
        <Route path="/blog" element={<BlogPage />}></Route>
        <Route
          path="/unicorn-template"
          element={<UnicornTemplatePage />}
        ></Route>
      </Routes>
    </ParallaxProvider>
  );
};

export default App;
