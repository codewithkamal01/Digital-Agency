const menuItemClass = `
  block
  rounded-2xl
  border
  border-transparent
  p-2
  transition-all
  hover:border-primary/20
  hover:bg-primary/5
`;

function PackageCard({ title, packages, href = "#services" }) {
  return (
    <a href={href} className={menuItemClass}>
      <h3 className="font-medium dark:text-text-light">{title}</h3>

      <div className="mt-2 ml-1 flex flex-wrap gap-2">
        {packages.map((pkg, index) => (
          <span
            key={index}
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
    </a>
  );
}
export default PackageCard;
