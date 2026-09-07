import { Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import MobileBottomBar from "./components/MobileBottomBar.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Gallery from "./pages/Gallery.jsx";
import Packages from "./pages/Packages.jsx";
import Contact from "./pages/Contact.jsx";
import Booking from "./pages/Booking.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="site">
        <ScrollToTop />
        <Navbar />
        <main className="site__main" id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <MobileBottomBar />
      </div>
    </MotionConfig>
  );
}
