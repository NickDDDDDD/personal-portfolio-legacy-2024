import { Route, Routes } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import { ParallaxProvider } from "react-scroll-parallax";
import FirewatchPage from "./pages/FirewatchPage";

const App = () => {
  return (
    <ParallaxProvider>
      <Routes>
        {/* Add routes here */}
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/blog" element={<BlogPage />}></Route>
        <Route path="/firewatch" element={<FirewatchPage />}></Route>
      </Routes>
    </ParallaxProvider>
  );
};

export default App;
