import CompanyStatsGrid from "./CompanyStatsGrid";

export default function AboutStorySection() {
  return (
    <section
      id="about-story"
      className="relative overflow-hidden px-4 py-24 sm:px-8 lg:px-16 xl:px-24"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Side */}
          <div className="relative">
            <div className="rounded-[2rem] border border-primary/10 bg-white/40 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.06)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.03] sm:p-10">
              <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-primary">
                Our Journey
              </div>

              <h2 className="mt-6 text-3xl font-bold leading-tight text-text-primary dark:text-white sm:text-4xl">
                The Story Behind the Formation of Creyotech
              </h2>

              <div className="mt-8 space-y-6 text-[15px] leading-8 text-text-secondary dark:text-white/70">
                <p>
                  Creyotech was born from a deeply personal realization. After
                  returning to India from the USA and walking away from a
                  high-paying IT career, the founder saw a troubling gap in the
                  Indian technology ecosystem.
                </p>

                <p>
                  From day one, Creyotech set out to bridge the painful
                  disconnect between strategy and execution.
                </p>

                <p>
                  Today, Creyotech continues to work with startups, creators,
                  and growing enterprises by delivering modern experiences,
                  reliable support, and long-term value through technology.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <CompanyStatsGrid/>
        </div>
      </div>
    </section>
  );
}
