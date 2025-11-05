const values = [
  {
    id: 1,
    title: "60% cheaper than in-house",
    description: "top-tier engineering without bloated payrolls or overhead.",
  },
  {
    id: 2,
    title: "senior-only team",
    description:
      "engineers with 6+ years of experience — no interns, no experiments.",
  },
  {
    id: 3,
    title: "end-to-end delivery",
    description:
      "from concept to launch — design, backend, mobile, web, all in one studio.",
  },
  {
    id: 4,
    title: "real product mindset",
    description:
      "we think like founders, not contractors — speed, value, and impact first.",
  },

  {
    id: 5,
    title: "transparent process",
    description:
      "you get weekly builds, live dashboards, and full repo access — zero black box.",
  },
  {
    id: 6,
    title: "global quality, startup agility",
    description: "enterprise-level engineering with startup speed and care.",
  },
];

export default function OurValues() {
  return (
    <section className="mx-auto max-w-7xl px-6 md:px-8 py-12 md:py-24">
      <div className="mb-6 md:mb-12">
        <p
          className="text-xl md:text-2xl mb-2 font-regular"
          style={{ color: "#C9CDD2" }}
        >
          our values
        </p>
        <h2
          className="font-outfit font-normal lowercase text-2xl md:text-4xl lg:text-5xl"
          style={{
            color: "#161617",
            fontWeight: 400,
            lineHeight: "110%",
            letterSpacing: "-0.02em",
          }}
        >
          bespoke sprints, live demos, one hub, tiered pricing, you hold the
          keys.
        </h2>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {values.map((value) => (
          <div
            key={value.id}
            className="group bg-white rounded-[3px] p-6 md:p-8 transition-all duration-300 relative overflow-hidden min-h-[120px] md:min-h-[140px] flex items-center"
          >
            <h3
              className="text-xl md:text-2xl font-semibold transition-all duration-300 relative z-10 bg-white group-hover:-translate-y-3 md:group-hover:-translate-y-4"
              style={{ color: "#161617" }}
            >
              {value.title}
            </h3>
            <p
              className="text-base md:text-lg font-light absolute bottom-0 left-0 right-0 px-6 md:px-8 pb-6 md:pb-8 translate-y-full group-hover:translate-y-3 transition-all duration-300 ease-out z-0"
              style={{ color: "#C9CDD2" }}
            >
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
