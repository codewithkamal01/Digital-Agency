import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const services = [
  {
    icon: "🌐",
    title: "Website Development",
    description: "Custom websites designed to convert visitors into customers.",
    points: [
      "Responsive Design",
      "SEO Optimized",
      "Fast Loading",
      "Modern UI/UX",
    ],
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    description:
      "Scalable Android and iOS apps built for performance and growth.",
    points: [
      "Android & iOS",
      "Cross Platform",
      "Secure Backend",
      "Smooth Experience",
    ],
  },
  {
    icon: "📈",
    title: "Digital Marketing",
    description:
      "Data-driven campaigns that increase traffic, leads and sales.",
    points: ["SEO", "Google Ads", "Lead Generation", "Analytics Tracking"],
  },
  {
    icon: "📣",
    title: "Social Media Marketing",
    description: "Grow your audience and strengthen your brand presence.",
    points: [
      "Content Strategy",
      "Creative Design",
      "Audience Growth",
      "Campaign Management",
    ],
  },
];

function ServiceCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-primary p-8 text-white sm:p-12">
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4 }}
          className="flex h-full flex-col justify-center"
        >
          <span className="mb-6 text-6xl">{services[active].icon}</span>

          <h3 className="mb-4 text-3xl font-bold">{services[active].title}</h3>

          <p className="mb-8 max-w-md text-white/80">
            {services[active].description}
          </p>

          <ul className="mb-8 space-y-4">
            {services[active].points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-lg">
                <span>✓</span>
                {point}
              </li>
            ))}
          </ul>

          <button className="w-fit rounded-full bg-white px-6 py-3 font-semibold text-primary transition hover:scale-105">
            Learn More
          </button>
        </motion.div>
      </AnimatePresence>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`h-2 rounded-full transition-all ${
              active === index ? "w-8 bg-white" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ServiceCarousel;
