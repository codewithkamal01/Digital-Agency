import JobCard from "./JobCard";
import { motion } from "framer-motion";

function JobList({ jobs }) {
  return (
    <div className="grid gap-6">
      {jobs.map((job, index) => (
        <motion.div
          key={job.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
          }}
        >
          <JobCard job={job} />
        </motion.div>
      ))}
    </div>
  );
}

export default JobList;
