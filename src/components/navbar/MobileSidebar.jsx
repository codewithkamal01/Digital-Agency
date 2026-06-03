import { NavLink } from "react-router-dom";
import assets from "../../assets/assets";

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
    <div className="relative flex flex-col gap-5">
      <img
        src={assets.close_icon}
        alt="Close menu"
        onClick={closeMenu}
        className="absolute right-4 -top-15 h-4 w-4 cursor-pointer"
      />

      <NavLink to="/" onClick={closeMenu} className={navClass}>
        Home
      </NavLink>

      <a onClick={closeMenu} href="#services" className="text-lg font-medium transition-all duration-300 hover:text-white/70 text-white/90">
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
    </div>
  );
}

export default MobileSidebar;
