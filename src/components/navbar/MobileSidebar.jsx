function MobileSidebar({ setSideBarOpen }) {
  const closeMenu = () => setSideBarOpen(false);

  return (
    <>
      <a onClick={closeMenu} href="#home">
        Home
      </a>

      <a onClick={closeMenu} href="#services">
        Services
      </a>

      <a onClick={closeMenu} href="#our-work">
        Our Work
      </a>

      <a onClick={closeMenu} href="#contact-us">
        About Us
      </a>

      <a onClick={closeMenu} href="#faq">
        FAQ
      </a>
    </>
  );
}

export default MobileSidebar;
