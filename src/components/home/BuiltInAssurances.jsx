import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiShield, FiCheckCircle, FiUsers, FiLifeBuoy } from "react-icons/fi";

const assuranceData = {
  Ownership: {
    icon: <FiShield />,
    items: [
      "100% IP Ownership Transfer",
      "Complete Source Code Access",
      "Client-Owned Domain & Hosting",
      "NDA Available on Request",
      "No Vendor Lock-In",
      "Project Documentation Included",
      "Ownership Rights in Contract",
      "Confidential Data Handling",
      "Secure Repository Management",
    ],
  },

  Quality: {
    icon: <FiCheckCircle />,
    items: [
      "Cross-Browser Compatibility",
      "Mobile Responsive Design",
      "SEO Best Practices",
      "Performance Optimization",
      "Bug Testing Before Launch",
      "Clean & Maintainable Code",
      "Accessibility Checks",
      "Quality Review Process",
      "Deployment Verification",
    ],
  },

  Process: {
    icon: <FiUsers />,
    items: [
      "Dedicated Project Manager",
      "Weekly Progress Updates",
      "Transparent Communication",
      "Milestone-Based Delivery",
      "Requirement Documentation",
      "Agile Development Process",
      "Real-Time Feedback Loop",
      "Timeline Tracking",
      "Change Request Management",
    ],
  },

  Support: {
    icon: <FiLifeBuoy />,
    items: [
      "Post-Launch Support",
      "Technical Assistance",
      "Security Updates",
      "Performance Monitoring",
      "Maintenance Packages",
      "Backup Guidance",
      "Training & Handover",
      "Issue Resolution Support",
      "Long-Term Partnership",
    ],
  },
};

function BuiltInAssurances() {
  const tabs = Object.keys(assuranceData);
  const [activeTab, setActiveTab] = useState("Ownership");

  return (
    <section className="px-4 py-20 sm:px-8 lg:px-16 xl:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
          {/* Left Side */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Built-In Assurances
            </span>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-text-primary dark:text-text-light">
              Trust, Transparency &
              <br />
              Quality Built-In
            </h2>

            <p className="mt-5 text-text-secondary dark:text-text-light/70">
              Every project includes ownership protection, quality assurance,
              transparent processes, and ongoing support.
            </p>

            <div className="mt-8 flex flex-col gap-3 relative">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative overflow-visible rounded-2xl px-5 py-4 text-left font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-primary text-white shadow-lg"
                      : "bg-bg-soft text-text-primary hover:bg-primary/10 dark:bg-secondary dark:text-text-light"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <>
                      {/* Connector Bar */}
                      <motion.span
                        layoutId="activeConnector"
                        className="
    absolute
    right-[-34px]
    top-1/2
    hidden
    h-1
    w-8
    -translate-y-1/2
    rounded-full
    bg-primary
    lg:block
  "
                      />

                      {/* Glow */}
                      <span
                        className="
        absolute
        right-[-42px]
        top-1/2
        hidden
        h-8
        w-8
        -translate-y-1/2
        rounded-full
        bg-primary/40
        blur-xl
        lg:block
      "
                      />
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div
            className="
    relative
    rounded-[32px]
    border
    flex
    items-center
    border-border-light
    bg-bg-soft
    p-6
    shadow-xl
    dark:border-border-dark
    dark:bg-secondary
    sm:p-8
  "
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-8 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-xl text-white">
                    {assuranceData[activeTab].icon}
                  </div>

                  <h3 className="text-2xl font-bold text-text-primary dark:text-text-light">
                    {activeTab}
                  </h3>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {assuranceData[activeTab].items.map((item) => (
                    <div
                      key={item}
                      className="
                        rounded-2xl
                        border
                        border-border-light
                        bg-bg-light
                        p-4
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-primary
                        hover:shadow-lg
                        dark:border-border-dark
                        dark:bg-primary/5
                      "
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-primary">
                          <FiCheckCircle />
                        </div>

                        <p className="text-sm font-medium text-text-primary dark:text-text-light">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BuiltInAssurances;
