import PackageCard from "./PackageCard";

function MegaMenuSection({ title, items }) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[3px] text-primary">
        {title}
      </p>

      {items.map((item, index) => (
        <PackageCard key={index} title={item.title} packages={item.packages} />
      ))}
    </div>
  );
}

export default MegaMenuSection;
