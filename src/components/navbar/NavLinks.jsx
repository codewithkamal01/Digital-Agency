import MegaMenuSection from "./MegaMenuSection";
import NavDropdown from "./NavDropdown";
import { serviceSections, workItems } from "./navbarData";

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

            <a
              href="#contact-us"
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
            </a>
          </div>
        </div>
      </NavDropdown>

      {/* Work */}
      <NavDropdown
        label="Our Work"
        menuKey="work"
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        width="w-[650px]"
      >
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[3px] text-primary">
              Portfolio
            </p>

            {workItems.map((item, index) => (
              <a
                key={index}
                href="#our-work"
                className="
                  block
                  rounded-2xl
                  p-3
                  transition-all
                  hover:bg-primary/5
                "
              >
                <h3 className="font-medium dark:text-text-light">{item}</h3>
              </a>
            ))}
          </div>

          <div
            className="
              rounded-3xl
              bg-gradient-to-br
              from-primary
              to-blue-600
              p-6
              text-white
            "
          >
            <p className="text-xs uppercase tracking-[3px] text-white/70">
              Featured Work
            </p>

            <h2 className="mt-4 text-2xl font-semibold leading-tight">
              Helping brands grow with modern design.
            </h2>

            <a
              href="#our-work"
              className="
                mt-6
                inline-flex
                rounded-full
                bg-white
                px-5
                py-3
                text-sm
                font-medium
                text-black
                transition-all
                hover:scale-105
              "
            >
              View Projects
            </a>
          </div>
        </div>
      </NavDropdown>
    </>
  );
}

export default NavLinks;
