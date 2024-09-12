import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Career from "./components/pages/Career";
import Contact from "./components/pages/Contact";
import Blogs from "./components/pages/Blogs";
import About from "./components/pages/About";
import Footer from "./components/Footer";
import PageNotFound from "./components/pages/PageNotFound";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
