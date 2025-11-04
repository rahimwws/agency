import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    image: "/cases/1.png",
    title: "Healy AI",
    subtitle: "health care platform",
    description:
      "Reimagined patient journeys and mobile intake flows in under four weeks.",
    tags: ["#mobile", "#web"],
  },
  {
    id: 2,
    image: "/cases/2.png",
    title: "THXNET",
    subtitle: "blockchain dashboard mobile app",
    description:
      "Delivered clinician dashboards and care ops tooling with zero downtime launch.",
    tags: ["#mobile", "#redesign"],
  },
  {
    id: 3,
    image: "/cases/3.png",
    title: "ENJOY",
    subtitle: "construction company ",
    description:
      "Extended the experience with motion specs and onboarding flow experiments.",
    tags: ["#webdesign", "#web"],
  },
  {
    id: 4,
    image: "/cases/4.png",
    title: "Budget app",
    subtitle: "budgeting app with AI",
    description:
      "Led launch analytics, growth experiments, and activation QA for rollout.",
    tags: ["#mobile", "#ai"],
  },
];

export default function OurWorks() {
  return (
    <section className="mx-auto max-full px-6 md:px-8 py-12 md:py-24">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <h2
          className="text-3xl md:text-5xl font-normal"
          style={{ color: "#161617" }}
        >
          our works
        </h2>
        <Link
          href="https://t.me/nemy_dev"
          className="pl-3 md:pl-4 pr-1 h-8 md:h-10 rounded-[3px] text-black flex items-center justify-between gap-2 transition-all hover:opacity-90 text-sm md:text-base"
          style={{ backgroundColor: "white" }}
        >
          see all
          <div className="bg-[#F6F7F9] rounded-[3px] h-6 w-6 md:h-8 md:w-8 flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 md:w-4 md:h-4"
            >
              <path
                d="M3 8H13M13 8L8 3M13 8L8 13"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Link>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col gap-3 md:gap-4 group">
            <div
              className="aspect-[4/3] md:aspect-[5/4] rounded-[2px] relative overflow-hidden h-[280px] md:h-[420px] lg:h-[520px]"
              style={{
                backgroundColor: "#E8E8E8",
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={600}
                quality={90}
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:blur-sm"
              />
              <div className="absolute inset-x-0 bottom-0 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out bg-white/80 backdrop-blur-sm px-4 py-3 pointer-events-none">
                <p
                  className="text-xs md:text-sm font-normal"
                  style={{ color: "#161617" }}
                >
                  {project.description}
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div className="text-base md:text-lg">
                <span className="font-semibold" style={{ color: "#161617" }}>
                  {project.title}
                </span>
                <span className="font-light" style={{ color: "#C9CDD2" }}>
                  {" "}
                  - {project.subtitle}
                </span>
              </div>
              <div
                className="flex flex-row items-center gap-2 flex-wrap"
                style={{ color: "#3680FF" }}
              >
                {project.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="text-xs md:text-sm font-normal transition-colors bg-white p-2 py-1 rounded-[3px] flex items-center justify-center"
                    style={{ color: "#3680FF" }}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
