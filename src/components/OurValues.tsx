const values = [
  {
    id: 1,
    title: "taste over hype",
    description: "useful beats flashy.",
  },
  {
    id: 2,
    title: "clarity",
    description: "lain words, one board, clean handoffs.",
  },
  {
    id: 3,
    title: "ship over show",
    description: "releases > slides.",
  },
  {
    id: 4,
    title: "ownership",
    description: "our repo, your design files, your ip.",
  },
  {
    id: 5,
    title: "privacy by default",
    description: "collect less, protect more.",
  },
  {
    id: 6,
    title: "kind candor",
    description: "direct feedback, zero ego.",
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
            className="group bg-white hover:bg-[#3680FF] rounded-[3px] p-6 md:p-8 transition-all duration-300"
          >
            <h3
              className="text-xl md:text-2xl font-semibold mb-2 group-hover:!text-white transition-colors duration-300"
              style={{ color: "#161617" }}
            >
              {value.title}
            </h3>
            <p
              className="text-base md:text-lg font-light group-hover:!text-white transition-colors duration-300"
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
