import { MapPin, Briefcase, ArrowRight } from "lucide-react";

function JobCard({ job }) {
  return (
    <div
      className="
    group
    rounded-3xl
    border
    border-border-light
    bg-white
    p-6
    shadow-sm
    transition-all
    duration-300
    hover:-translate-y-1
    hover:border-primary
    hover:shadow-xl
    dark:border-white/10
    dark:bg-secondary
  "
    >
      <div className="flex flex-wrap items-center gap-3">
        <span
          className="
        rounded-full
        bg-indigo-100
        px-3
        py-1
        text-sm
        font-medium
        text-indigo-600
        dark:bg-indigo-500/15
        dark:text-indigo-400
      "
        >
          {job.category}
        </span>

        <span
          className="
        rounded-full
        bg-green-100
        px-3
        py-1
        text-sm
        font-medium
        text-green-600
        dark:bg-green-500/15
        dark:text-green-400
      "
        >
          {job.type}
        </span>
      </div>

      <h3
        className="
      mt-5
      text-2xl
      font-bold
      text-text-primary
      dark:text-text-light
    "
      >
        {job.title}
      </h3>

      <div
        className="
      mt-4
      flex
      flex-wrap
      gap-6
      text-text-secondary
      dark:text-text-light/70
    "
      >
        <div className="flex items-center gap-2">
          <MapPin size={18} />
          {job.location}
        </div>

        <div className="flex items-center gap-2">
          <Briefcase size={18} />
          {job.experience}
        </div>
      </div>

      <p
        className="
      mt-5
      leading-relaxed
      text-text-secondary
      dark:text-text-light/75
    "
      >
        {job.description}
      </p>

      <button
        className="
      mt-6
      flex
      items-center
      gap-2
      font-semibold
      text-primary
      transition-colors
      hover:text-primary/80
    "
      >
        View Details
        <ArrowRight
          size={18}
          className="
        transition-transform
        duration-300
        group-hover:translate-x-1
      "
        />
      </button>
    </div>
  );
}

export default JobCard;
