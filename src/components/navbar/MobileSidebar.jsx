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

      <NavLink to="/about" onClick={closeMenu} className={navClass}>
        About Us
      </NavLink>
      <NavLink to="/career" onClick={closeMenu} className={navClass}>
        Career
      </NavLink>
      <NavLink to="/contact-us" onClick={closeMenu} className={navClass}>
        Contact Us
      </NavLink>
    </>
  );
}

export default MobileSidebar;
