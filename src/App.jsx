import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import MainLayout from "./components/layout/MainLayout";
import ScrollToTop from "./components/ScrollToTop";
import Career from "./components/pages/Career";
import Services from "./components/pages/Services";
import ContactUs from "./components/pages/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
