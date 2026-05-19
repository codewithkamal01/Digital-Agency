import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "../navbar/Navbar";
import Footer from "../Footer";

function MainLayout() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="relative min-h-screen bg-white dark:bg-bg-dark">
      {/* Toast */}
      <Toaster />
      {/* Global Navbar */}
      <Navbar theme={theme} setTheme={setTheme} />
      {/* Page Content */}
      <main>
        <Outlet />
      </main>
      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default MainLayout;
