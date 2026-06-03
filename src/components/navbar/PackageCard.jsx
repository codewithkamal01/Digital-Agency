import { Link } from "react-router-dom";

const menuItemClass = `
  block
  rounded-2xl
  border
  border-transparent
  p-3
  transition-all
  duration-300
  hover:-translate-y-1
  hover:border-primary/20
  hover:bg-primary/5
  hover:shadow-md
`;

function PackageCard({ title, packages, href }) {
  return (
    <Link to={href} className={menuItemClass}>
      <h3 className="font-medium dark:text-text-light">{title}</h3>

      <div className="mt-2 ml-1 flex flex-wrap gap-2">
        {packages.map((pkg) => (
          <span
            key={pkg}
            className="
              rounded-full
              bg-primary/10
              px-3
              py-1
              text-xs
              font-medium
              text-primary
            "
          >
            {pkg}
          </span>
        ))}
      </div>
    </Link>
  );
}

export default PackageCard;
