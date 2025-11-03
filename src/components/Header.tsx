import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header style={{ backgroundColor: "#F6F7F9" }}>
      <div className="mx-auto max-w-full px-6 md:px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center ">
          <Image
            src="/logo.png"
            alt="Nemy Logo"
            width={32}
            height={32}
            className="w-6 h-6 md:w-8 md:h-8"
          />
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-2">
          <Link
            href="/work"
            className="hidden md:flex text-sm md:text-base font-normal transition-all duration-300 bg-white hover:!bg-[#3680FF] hover:!text-white px-3 md:px-4 py-2 rounded-[3px] h-10 items-center justify-center active:scale-95"
            style={{ color: "#161617" }}
          >
            work
          </Link>
          <Link
            href="/services"
            className="hidden md:flex text-sm md:text-base font-normal transition-all duration-300 bg-white hover:!bg-[#3680FF] hover:!text-white px-3 md:px-4 py-2 rounded-[3px] h-10 items-center justify-center active:scale-95"
            style={{ color: "#161617" }}
          >
            services
          </Link>
          <Link
            href="/about"
            className="hidden md:flex text-sm md:text-base font-normal transition-all duration-300 bg-white hover:!bg-[#3680FF] hover:!text-white px-3 md:px-4 h-10 items-center justify-center rounded-[3px] active:scale-95"
            style={{ color: "#161617" }}
          >
            about
          </Link>
          <Link
            href="/contact"
            className="group pl-2 md:pl-4 pr-1 md:pr-1 h-8 md:h-10 rounded-[3px] text-white hover:!bg-white hover:!text-black flex items-center justify-between gap-1.5 md:gap-2 transition-all duration-300 text-xs md:text-base active:scale-95"
            style={{ backgroundColor: "#3680FF" }}
          >
            <span className="transition-colors duration-300">get in touch</span>
            <div className="bg-white group-hover:!bg-[#3680FF] rounded-[3px] h-6 w-6 md:h-8 md:w-8 flex items-center justify-center flex-shrink-0 transition-all duration-300">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 md:w-4 md:h-4  transition-transform duration-300"
              >
                <path
                  d="M3 8H13M13 8L8 3M13 8L8 13"
                  className="group-hover:!stroke-white transition-colors duration-300"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
}
