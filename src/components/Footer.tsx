import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    id: 1,
    name: "X (twitter)",
    href: "https://twitter.com",
  },
  {
    id: 2,
    name: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    id: 3,
    name: "Instagram",
    href: "https://instagram.com",
  },
  {
    id: 4,
    name: "Telegram",
    href: "https://telegram.org",
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#F6F7F9" }}>
      <div className="w-full min-h-[500px] md:min-h-[550px] flex flex-col md:flex-row gap-0 ">
        {/* Left Column - Contact & Navigation */}
        <div className="bg-white w-full md:w-[65%] rounded-[6px] md:rounded-none px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 flex flex-col justify-between gap-12 md:gap-16">
          {/* Contact Section */}
          <div className="flex flex-col gap-6 md:gap-8">
            <p
              className="text-sm md:text-base font-light max-w-md"
              style={{ color: "#C9CDD2" }}
            >
              thank you for exploring my work! if you&apos;d like to
              collaborate, please feel free to reach out
            </p>
            <Link
              href="https://t.me/rahimwws"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl md:text-4xl lg:text-5xl font-normal inline-flex items-center gap-3 md:gap-4 group transition-all duration-300 hover:text-[#3680FF] text-[#161617]"
            >
              <span className="break-all">message in telegram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="none"
                viewBox="0 0 40 40"
                className="group-hover:translate-x-2 transition-transform duration-300 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 flex-shrink-0"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="m10 30 20-20m-16.25 0H30v16.25"
                />
              </svg>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            <div className="flex flex-col gap-4 md:gap-5">
              {socialLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base font-medium lowercase transition-opacity hover:opacity-70"
                  style={{ color: "#161617" }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Footer */}
          <div
            className="flex flex-col gap-6 border-t pt-6 md:pt-8 md:flex-row md:items-center md:justify-between"
            style={{ borderColor: "#F6F7F9" }}
          >
            <div className="flex items-center gap-3 z-40">
              <Image
                src="/logo.png"
                alt="Nemy Logo"
                width={28}
                height={28}
                className="w-6 h-6 md:w-7 md:h-7"
              />
              <span
                className="text-sm md:text-base font-medium lowercase"
                style={{ color: "#161617" }}
              >
                nemy
              </span>
            </div>
            <p
              className="text-xs md:text-sm font-light z-40"
              style={{ color: "#C9CDD2" }}
            >
              2025 all rights reserved
            </p>
          </div>
        </div>

        {/* Right Column - CTA Block */}
        <div
          className="relative overflow-hidden rounded-[6px] md:rounded-none w-full md:w-[35%] text-white flex flex-col justify-between gap-8 md:gap-10 px-8 py-10 md:px-10 md:py-12 lg:px-12 lg:py-14"
          style={{ backgroundColor: "#3680FF" }}
        >
          <div className="flex flex-col gap-3 md:gap-4">
            <h3 className="text-8xl md:text-9xl lg:text-9xl font-semibold leading-[1.05]">
              let&apos;s build
            </h3>
            <p className="text-xl md:text-2xl lg:text-3xl font-light leading-snug">
              your product together
            </p>{" "}
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 self-start rounded-[6px]  bg-white text-sm md:text-base font-medium transition-all duration-300 hover:bg-black hover:text-white pl-5 py-0.5 pr-0.5"
              style={{ color: "#3680FF" }}
            >
              <span>get in touch</span>
              <span
                className="flex h-8 w-8 items-center justify-center rounded-[4px] text-white transition-all duration-300 group-hover:bg-white"
                style={{ backgroundColor: "#3680FF" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 16 16"
                  className="group-hover:!text-black"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.6"
                    d="M3 8h10m0 0L8 3m5 5-5 5"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
