import { NavLink } from "react-router-dom";

function MobileSidebar({ setSideBarOpen }) {
  const closeMenu = () => setSideBarOpen(false);

  const navClass = ({ isActive }) =>
    `
      text-lg
      font-medium
      transition-all
      duration-300
      hover:text-white/70
      ${isActive ? "text-white" : "text-white/90"}
    `;

  return (
    <>
      <NavLink to="/" onClick={closeMenu} className={navClass}>
        Home
      </NavLink>

      <a onClick={closeMenu} href="#services">
        Services
      </a>

      <a onClick={closeMenu} href="#our-work">
        Our Work
      </a>

      <NavLink to="/about" onClick={closeMenu} className={navClass}>
        About Us
      </NavLink>

      <a onClick={closeMenu} href="#faq">
        FAQ
      </a>
    </>
  );
}

export default MobileSidebar;
