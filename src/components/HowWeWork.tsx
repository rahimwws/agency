const steps = [
  {
    id: 1,
    number: "01.",
    title: "discovery",
    tags: ["goals", "scope"],
  },
  {
    id: 2,
    number: "02.",
    title: "design & build",
    tags: ["ios", "android", "web"],
  },
  {
    id: 3,
    number: "03.",
    title: "launch",
    tags: ["sprints", "demos"],
  },
  {
    id: 4,
    number: "04.",
    title: "support & grow",
    tags: [],
  },
];

export default function HowWeWork() {
  return (
    <section className="mx-auto max-w-7xl px-6 md:px-8 py-12 md:py-24">
      <div className="mb-6 md:mb-12">
        <p
          className="text-xl md:text-2xl mb-2 font-regular"
          style={{ color: "#C9CDD2" }}
        >
          how we work
        </p>
        <h2
          className="font-outfit font-normal lowercase mb-12 md:mb-24 text-2xl md:text-4xl lg:text-5xl"
          style={{
            color: "#161617",
            fontWeight: 400,
            lineHeight: "110%",
            letterSpacing: "-0.02em",
          }}
        >
          two-week sprints, weekly demos, one board, clear pricing, you own the
          repo and the IP.
        </h2>
      </div>

      {/* Process Steps */}
      <div className="flex flex-col gap-3 md:gap-4">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white rounded-[3px] p-4 md:p-6 lg:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-center gap-4 md:gap-8">
              <span
                className="text-3xl md:text-4xl lg:text-5xl font-light"
                style={{ color: "#C9CDD2" }}
              >
                {step.number}
              </span>
              <h3
                className="text-2xl md:text-3xl font-normal"
                style={{ color: "#161617" }}
              >
                {step.title}
              </h3>
            </div>
            <div className="flex gap-2 md:gap-3 flex-wrap">
              {step.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-[3px]"
                  style={{
                    color: "#3680FF",
                    backgroundColor: "rgba(54, 128, 255, 0.1)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
