import assets from "../../assets/assets";

function NavbarCTA() {
  return (
    <a
      href="#contact-us"
      className="
        hidden
        items-center
        gap-2
        rounded-full
        bg-primary
        px-6
        py-2
        text-sm
        text-text-light
        transition-all
        hover:scale-105
        sm:flex
      "
    >
      Connect
      <img src={assets.arrow_icon} width={14} alt="" />
    </a>
  );
}

export default NavbarCTA;
