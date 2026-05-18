import {
  BriefcaseBusiness,
  Users,
  Building2,
  BadgeCheck,
  FolderKanban,
  Clock3,
} from "lucide-react";
import CountUp from "react-countup";

const statsData = [
  {
    icon: FolderKanban,
    number: "187",
    label: "Completed Projects",
  },
  {
    icon: Users,
    number: "137",
    label: "Happy Clients",
  },
  {
    icon: Building2,
    number: "4",
    label: "Offshore Development Centres",
  },
  {
    icon: BadgeCheck,
    number: "13",
    label: "Government Accreditations",
  },
  {
    icon: BriefcaseBusiness,
    number: "126",
    label: "Maintenance Projects",
  },
  {
    icon: Clock3,
    number: "10,000",
    label: "Development Hours",
  },
];

function CompanyStatsGrid() {
  return (
    <div className="relative">
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          -z-10
          rounded-[2rem]
          bg-primary/10
          blur-3xl
        "
      />

      {/* Main Container */}
      <div
        className="
          rounded-[2rem]
          border
          border-primary/10
          bg-white/40
          p-4
          backdrop-blur-2xl
          dark:border-white/10
          dark:bg-white/[0.03]
          sm:p-6
        "
      >
        {/* Top Badge */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[3px]
                text-primary
              "
            >
              Excellence in Execution
            </p>

            <h3
              className="
                mt-2
                text-2xl
                font-bold
                dark:text-white
              "
            >
              Proven Results & Growth
            </h3>
          </div>

          <div
            className="
              hidden
              rounded-2xl
              border
              border-primary/20
              bg-primary/10
              px-4
              py-2
              text-sm
              font-medium
              text-primary
              sm:block
            "
          >
            Since 2016
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {statsData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-primary/10
                  bg-gradient-to-br
                  from-primary/10
                  to-transparent
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/20
                  hover:shadow-[0_20px_40px_rgba(59,130,246,0.12)]
                  dark:border-white/10
                "
              >
                {/* Hover Glow */}
                <div
                  className="
                    absolute
                    right-0
                    top-0
                    h-24
                    w-24
                    rounded-full
                    bg-primary/10
                    blur-2xl
                    transition-all
                    duration-300
                    group-hover:scale-150
                  "
                />

                {/* Icon */}
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-primary/15
                    text-primary
                  "
                >
                  <Icon size={28} strokeWidth={2.2} />
                </div>

                {/* Number */}
                <h2
                  className="
    mt-6
    text-4xl
    font-bold
    tracking-tight
    text-text-primary
    dark:text-white
  "
                >
                  <CountUp
                    end={Number(item.number.replace(/,/g, ""))}
                    duration={5}
                    separator=","
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </h2>

                {/* Label */}
                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-text-secondary
                    dark:text-white/70
                  "
                >
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CompanyStatsGrid;
