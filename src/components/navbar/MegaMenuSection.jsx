import { Link } from "react-router-dom";
import PackageCard from "./PackageCard";

function MegaMenuSection({ title, items }) {
  return (
    <Link to={items.href} className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[3px] text-primary">
        {title}
      </p>

      {items.map((item, index) => (
        <PackageCard key={index} title={item.title} href={item.href} />
      ))}
    </Link>
  );
}

export default MegaMenuSection;
