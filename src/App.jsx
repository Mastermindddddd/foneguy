import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop
import Navbar from "./components/Navbar/Navbar";

// Lazy load pages
const Home = React.lazy(() => import("./pages/Home"));
const WhyChooseUs = React.lazy(() => import("./pages/WhyChooseUs"));
const ContactUs = React.lazy(() => import("./pages/ContactUs"));

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <ScrollToTop /> {/* Ensure scrolling to top on route change */}
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
        <Navbar />
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
