import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BriefcaseBusiness, Code2, Users, CheckCircle2 } from "lucide-react";
import Title from "../Title";

const engagementModels = [
  {
    id: "fixed",
    title: "Fixed Scope Delivery Model",
    shortTitle: "Fixed Scope",
    icon: <BriefcaseBusiness size={30} />,
    description:
      "A structured engagement with clearly defined scope, timelines, and predictable project delivery.",

    steps: [
      {
        title: "Requirement Discovery",
        description:
          "We gather detailed requirements, project goals, and expected deliverables before planning begins.",
      },
      {
        title: "Planning & Scope Finalization",
        description:
          "Timeline, milestones, and budget are finalized to ensure transparency and predictability.",
      },
      {
        title: "Development & Delivery",
        description:
          "Our team executes the project according to the approved scope and delivers on schedule.",
      },
    ],
  },

  {
    id: "agile",
    title: "Agile Iterative Development Model",
    shortTitle: "Agile Development",
    icon: <Code2 size={30} />,
    description:
      "A sprint-based collaborative approach designed for evolving requirements and rapid delivery.",

    steps: [
      {
        title: "Sprint Planning",
        description:
          "Features are prioritized and organized into short development cycles.",
      },
      {
        title: "Iterative Development",
        description:
          "Continuous releases allow rapid feedback and faster improvements.",
      },
      {
        title: "Review & Optimization",
        description:
          "Each sprint ends with testing, review, and planning for the next iteration.",
      },
    ],
  },

  {
    id: "dedicated",
    title: "Dedicated Resource Engagement Model",
    shortTitle: "Dedicated Team",
    icon: <Users size={30} />,
    description:
      "Dedicated experts work as an extension of your internal team for long-term growth.",

    steps: [
      {
        title: "Team Selection",
        description:
          "Choose developers, designers, marketers, or specialists based on your needs.",
      },
      {
        title: "Direct Collaboration",
        description:
          "Work closely with your dedicated resources through your preferred communication channels.",
      },
      {
        title: "Scale On Demand",
        description:
          "Expand or adjust team size as business requirements evolve.",
      },
    ],
  },
];

function EngagementModels() {
  const [activeModel, setActiveModel] = useState(engagementModels[0]);

  return (
    <section className="px-4 py-20 sm:px-8 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center dark:text-text-light">
          <span className="font-medium text-primary pb-5">
            Flexible Engagement Models
          </span>
          <Title
            title="Choose The Collaboration Model
            That Fits Your Business"
          />
          <p className="mx-auto mt-6 max-w-3xl text-text-secondary">
            Whether you need a fixed-cost project, agile product development, or
            dedicated resources, we offer flexible engagement options to match
            your goals.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {engagementModels.map((model) => (
            <button
              key={model.id}
              onClick={() => setActiveModel(model)}
              className={`relative rounded-full px-8 py-4 text-sm font-medium transition-all duration-300 ${
                activeModel.id === model.id
                  ? "bg-primary text-white shadow-lg"
                  : "border border-border-light bg-bg-light hover:border-primary"
              }`}
            >
              {model.shortTitle}
            </button>
          ))}
        </div>

        {/* Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeModel.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.3 }}
            className="
              mt-10
              overflow-hidden
              rounded-3xl
              border
              border-border-light
              bg-bg-light
              shadow-lg
              dark:border-border-dark
              dark:bg-secondary
            "
          >
            {/* Steps */}
            <div>
              <div className="px-8 pt-8">
                <h4 className="text-xl font-semibold dark:text-text-light">
                  Process in 3 Easy Steps
                </h4>
              </div>

              {activeModel.steps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex gap-6 p-8 dark:text-text-light"
                >
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-primary
                      text-lg
                      font-bold
                      text-white
                    "
                  >
                    {index + 1}
                  </div>

                  <div>
                    <h5 className="text-2xl font-semibold">{step.title}</h5>

                    <p className="mt-3 max-w-4xl text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Benefits */}
            <div className="border-t border-border-light bg-primary/5 p-8">
              <div className="grid gap-4 md:grid-cols-3 dark:text-text-light">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" />
                  Transparent Process
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" />
                  Flexible Engagement
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" />
                  Dedicated Support
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default EngagementModels;
