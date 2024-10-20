import { Route, Routes } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import { ParallaxProvider } from "react-scroll-parallax";

const App = () => {
  return (
    <ParallaxProvider>
      <Routes>
        {/* Add routes here */}
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/blog" element={<BlogPage />}></Route>
      </Routes>
    </ParallaxProvider>
  );
};

export default App;
