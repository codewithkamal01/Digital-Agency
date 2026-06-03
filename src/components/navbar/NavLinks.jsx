import MegaMenuSection from "./MegaMenuSection";
import NavDropdown from "./NavDropdown";
import { serviceSections } from "./navbarData";
import { Link } from "react-router-dom";

function NavLinks({ activeMenu, setActiveMenu }) {
  return (
    <>
      {/* Services */}
      <NavDropdown
        label="Services"
        menuKey="services"
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      >
        <div className="grid grid-cols-3 gap-6">
          {serviceSections.map((section, index) => (
            <MegaMenuSection
              key={index}
              title={section.title}
              items={section.items}
            />
          ))}

          <div className="rounded-3xl bg-primary/5 p-6 dark:bg-white/5">
            <p className="text-xs font-semibold uppercase tracking-[3px] text-primary">
              Build Faster
            </p>

            <h2 className="mt-4 text-2xl font-semibold leading-tight dark:text-text-light">
              Create premium digital experiences.
            </h2>

            <Link
              to="/contact-us"
              className="
                mt-6
                inline-flex
                rounded-full
                bg-primary
                px-5
                py-3
                text-sm
                text-white
                transition-all
                hover:scale-105
              "
            >
              Start Project
            </Link>
          </div>
        </div>
      </NavDropdown>
    </>
  );
}

export default NavLinks;
