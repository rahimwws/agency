import Link from "next/link";

const services = [
  {
    id: 1,
    title: "development",
    description:
      "Native mobile apps and scalable web platforms built with modern tech stacks.",
    tags: ["iOS", "android", "web"],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 28 28"
      >
        <g clipPath="url(#a)">
          <path
            className="group-hover:!stroke-white transition-all duration-300"
            stroke="#C9CDD2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 9.625 1.75 14 7 18.375m14-8.75L26.25 14 21 18.375m-3.5-14-7 19.25"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h28v28H0z" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    id: 2,
    title: "web 3",
    description:
      "we craft thoughtful interfaces and visual systems that are both beautiful and easy to use.",
    tags: ["evm", "wallet ux", "solidity"],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 28 28"
      >
        <g clipPath="url(#a)">
          <path
            className="group-hover:!stroke-white transition-all duration-300"
            stroke="#C9CDD2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 23.625a9.625 9.625 0 1 0 0-19.25 9.625 9.625 0 0 0 0 19.25Z"
          />
          <path
            className="group-hover:!stroke-white transition-all duration-300"
            stroke="#C9CDD2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.208 6.645c2.968-.789 5.186-.706 5.845.43 1.203 2.071-3.22 6.849-9.879 10.673-6.657 3.825-13.026 5.25-14.227 3.172-.662-1.14.384-3.103 2.57-5.275"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h28v28H0z" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    id: 3,
    title: "AI",
    description:
      "AI-powered features that enhance user experience and automate workflows.",
    tags: ["copilots", "rag", "evals"],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 28 28"
      >
        <g clipPath="url(#a)">
          <path
            className="group-hover:!stroke-white transition-all duration-300"
            stroke="#C9CDD2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="m9.217 18.783-6.025-2.22a.866.866 0 0 1 0-1.626l6.025-2.22 2.22-6.025a.866.866 0 0 1 1.626 0l2.22 6.025 6.025 2.22a.867.867 0 0 1 0 1.626l-6.025 2.22-2.22 6.025a.867.867 0 0 1-1.626 0l-2.22-6.025ZM19.25 1.75V7m5.25.875v3.5m-7.875-7h5.25m.875 5.25h3.5"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h28v28H0z" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    id: 4,
    title: "design",
    description:
      "Beautiful interfaces and design systems that users love to interact with.",
    tags: ["ui/ux", "brand", "systems"],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 28 28"
      >
        <g clipPath="url(#a)">
          <path
            className="group-hover:!stroke-white transition-all duration-300"
            stroke="#C9CDD2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.7"
            d="M8.313 4.375h11.374l5.688 6.391L14 22.75 2.625 10.766l5.688-6.391Z"
          />
          <path
            className="group-hover:!stroke-white transition-all duration-300"
            stroke="#C9CDD2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.7"
            d="M19.25 10.766 14 22.75 8.75 10.766 14 4.375l5.25 6.391ZM3.5 10.5h21"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h28v28H0z" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];

export default function WhatWeDo() {
  return (
    <section className="mx-auto max-w-7xl px-6 md:px-8 py-12 md:py-20">
      <div className="mb-6 md:mb-12">
        <p
          className="text-xl md:text-2xl mb-2 font-regular"
          style={{ color: "#C9CDD2" }}
        >
          what we do
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
          we&apos;re a senior team that designs and ships mobile, web3 and ai
          products for founders who move fast. minimal process, clear comms,
          real launches.
        </h2>
      </div>

      {/* Services Section */}
      <div className="my-8 md:my-12">
        <div className="flex items-center justify-between mb-6">
          <p
            className="text-base md:text-lg font-light"
            style={{ color: "#C9CDD2" }}
          >
            services we provide
          </p>
          <Link
            href="/services"
            className="pl-3 md:pl-4 pr-1 h-8 md:h-10 rounded-[3px] text-black flex items-center justify-between gap-2 transition-all hover:opacity-90 text-sm md:text-base"
            style={{ backgroundColor: "white" }}
          >
            more
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white hover:bg-[#3680FF] rounded-[3px] p-4 md:p-6 h-auto md:h-[300px] min-h-[240px] flex flex-col justify-between transition-all duration-300 overflow-hidden"
            >
              <div className="flex flex-col gap-4">
                <div className="text-2xl group-hover:grayscale-0 transition-all">
                  {service.icon}
                </div>
                <h3
                  className="text-2xl font-semibold group-hover:!text-white transition-colors duration-300"
                  style={{ color: "#161617" }}
                >
                  {service.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 transition-all duration-300 group-hover:-translate-y-[60px] md:group-hover:-translate-y-[100px] lg:group-hover:-translate-y-[130px]">
                {service.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-sm px-3 py-1 rounded-[2px] group-hover:!bg-white group-hover:!text-black transition-all duration-300"
                    style={{
                      color: "#3680FF",
                      backgroundColor: "rgba(54, 128, 255, 0.1)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p
                className="text-sm font-light absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 group-hover:!text-white transition-all duration-300"
                style={{ color: "#C9CDD2" }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
