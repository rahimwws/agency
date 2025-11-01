"use client";

import Image from "next/image";
import Link from "next/link";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { TextAnimate } from "@/components/ui/text-animate";
export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F6F7F9" }}>
      {/* Header */}
      <header style={{ backgroundColor: "#F6F7F9" }}>
        <div className="mx-auto max-w-7xl px-6 md:px-8 py-6 flex items-center justify-between">
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
              className="hidden md:flex text-sm md:text-base font-normal transition-colors bg-white px-3 md:px-4 py-2 rounded-[3px] h-10 items-center justify-center"
              style={{ color: "#161617" }}
            >
              work
            </Link>
            <Link
              href="/services"
              className="hidden md:flex text-sm md:text-base font-normal transition-colors bg-white px-3 md:px-4 py-2 rounded-[3px] h-10 items-center justify-center"
              style={{ color: "#161617" }}
            >
              services
            </Link>
            <Link
              href="/about"
              className="hidden md:flex text-sm md:text-base font-normal transition-colors bg-white px-3 md:px-4 h-10 items-center justify-center rounded-[3px]"
              style={{ color: "#161617" }}
            >
              about
            </Link>
            <Link
              href="/contact"
              className="pl-2 md:pl-4 pr-1 md:pr-1 h-8 md:h-10 rounded-[3px] text-white flex items-center justify-between gap-1.5 md:gap-2 transition-all hover:opacity-90 text-xs md:text-base"
              style={{ backgroundColor: "#3680FF" }}
            >
              <span className="">get in touch</span>
              <div className="bg-white rounded-[3px] h-6 w-6 md:h-8 md:w-8 flex items-center justify-center flex-shrink-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 md:w-4 md:h-4"
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
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="mx-auto max-w-7xl px-6 md:px-8 pt-16 md:pt-24 lg:pt-32 pb-12 md:pb-24">
        <div className="text-center">
          {/* Main Heading */}
          <TextAnimate
            className="text-4xl md:text-6xl lg:text-8xl font-regular leading-tight"
            style={{ color: "#161617", letterSpacing: "-0.04em" }}
            animation="blurInDown"
            by="character"
            once
          >
            less talk. more launch.
          </TextAnimate>

          {/* Subheading */}
          <TextAnimate
            className="text-4xl md:text-6xl lg:text-8xl font-light leading-tight mb-4 mt-[-10px] md:mt-[-20px]"
            style={{ color: "#C9CDD2", letterSpacing: "-0.04em" }}
            animation="blurInDown"
            by="character"
            once
            delay={0.3}
          >
            mobile · web3 · ai
          </TextAnimate>

          {/* Description */}
          <div className="mt-6">
            <p
              className="text-base md:text-xl font-normal"
              style={{ color: "#161617" }}
            >
              dm → prototype → prod. weeks, not quarters.
            </p>
            <p
              className="text-base md:text-xl font-medium"
              style={{ color: "#C9CDD2" }}
            >
              minimal design, sharp engineering. you own the IP.
            </p>
          </div>
        </div>
      </main>

      {/* Our Works Section */}
      <section className="mx-auto max-w-7xl px-6 md:px-8 py-12 md:py-24">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2
            className="text-3xl md:text-5xl font-normal"
            style={{ color: "#161617" }}
          >
            our works
          </h2>
          <Link
            href="/cases"
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
          {/* Project 1 */}
          <div className="flex flex-col gap-3 md:gap-4">
            <div
              className="aspect-[4/3] md:aspect-[5/4] rounded-[2px] relative overflow-hidden h-[280px] md:h-[420px] lg:h-[520px]"
              style={{
                backgroundColor: "#E8E8E8",
              }}
            ></div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div className="text-base md:text-lg">
                <span className="font-semibold" style={{ color: "#161617" }}>
                  Healy AI
                </span>
                <span className="font-light" style={{ color: "#C9CDD2" }}>
                  {" "}
                  - health care platform
                </span>
              </div>
              <div
                className="flex flex-row items-center gap-2 flex-wrap"
                style={{ color: "#3680FF" }}
              >
                <div
                  className="text-xs md:text-sm font-normal transition-colors bg-white p-2 py-1 rounded-[3px] flex items-center justify-center"
                  style={{ color: "#3680FF" }}
                >
                  #webdesign
                </div>
                <div
                  className="text-xs md:text-sm font-normal transition-colors bg-white p-2 py-1 rounded-[3px] flex items-center justify-center"
                  style={{ color: "#3680FF" }}
                >
                  #mobile design
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col gap-3 md:gap-4">
            <div
              className="aspect-[4/3] md:aspect-[5/4] rounded-[2px] relative overflow-hidden h-[280px] md:h-[420px] lg:h-[520px]"
              style={{
                backgroundColor: "#E8E8E8",
              }}
            ></div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div className="text-base md:text-lg">
                <span className="font-semibold" style={{ color: "#161617" }}>
                  Healy AI
                </span>
                <span className="font-light" style={{ color: "#C9CDD2" }}>
                  {" "}
                  - health care platform
                </span>
              </div>
              <div
                className="flex flex-row items-center gap-2 flex-wrap"
                style={{ color: "#3680FF" }}
              >
                <div
                  className="text-xs md:text-sm font-normal transition-colors bg-white p-2 py-1 rounded-[3px] flex items-center justify-center"
                  style={{ color: "#3680FF" }}
                >
                  #webdesign
                </div>
                <div
                  className="text-xs md:text-sm font-normal transition-colors bg-white p-2 py-1 rounded-[3px] flex items-center justify-center"
                  style={{ color: "#3680FF" }}
                >
                  #mobile design
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="flex flex-col gap-3 md:gap-4">
            <div
              className="aspect-[4/3] md:aspect-[5/4] rounded-[2px] relative overflow-hidden h-[280px] md:h-[420px] lg:h-[520px]"
              style={{
                backgroundColor: "#E8E8E8",
              }}
            ></div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div className="text-base md:text-lg">
                <span className="font-semibold" style={{ color: "#161617" }}>
                  Healy AI
                </span>
                <span className="font-light" style={{ color: "#C9CDD2" }}>
                  {" "}
                  - health care platform
                </span>
              </div>
              <div
                className="flex flex-row items-center gap-2 flex-wrap"
                style={{ color: "#3680FF" }}
              >
                <div
                  className="text-xs md:text-sm font-normal transition-colors bg-white p-2 py-1 rounded-[3px] flex items-center justify-center"
                  style={{ color: "#3680FF" }}
                >
                  #webdesign
                </div>
                <div
                  className="text-xs md:text-sm font-normal transition-colors bg-white p-2 py-1 rounded-[3px] flex items-center justify-center"
                  style={{ color: "#3680FF" }}
                >
                  #mobile design
                </div>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="flex flex-col gap-3 md:gap-4">
            <div
              className="aspect-[4/3] md:aspect-[5/4] rounded-[2px] relative overflow-hidden h-[280px] md:h-[420px] lg:h-[520px]"
              style={{
                backgroundColor: "#E8E8E8",
              }}
            ></div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div className="text-base md:text-lg">
                <span className="font-semibold" style={{ color: "#161617" }}>
                  Healy AI
                </span>
                <span className="font-light" style={{ color: "#C9CDD2" }}>
                  {" "}
                  - health care platform
                </span>
              </div>
              <div
                className="flex flex-row items-center gap-2 flex-wrap"
                style={{ color: "#3680FF" }}
              >
                <div
                  className="text-xs md:text-sm font-normal transition-colors bg-white p-2 py-1 rounded-[3px] flex items-center justify-center"
                  style={{ color: "#3680FF" }}
                >
                  #webdesign
                </div>
                <div
                  className="text-xs md:text-sm font-normal transition-colors bg-white p-2 py-1 rounded-[3px] flex items-center justify-center"
                  style={{ color: "#3680FF" }}
                >
                  #mobile design
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What We Do Section */}
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
            {/* Development Card */}
            <div className="group relative bg-white hover:bg-[#3680FF] rounded-[3px] p-4 md:p-6 h-auto md:h-[300px] min-h-[240px] flex flex-col justify-between transition-all duration-300 overflow-hidden">
              <div className="flex flex-col gap-4">
                <div className="text-2xl group-hover:grayscale-0 transition-all">
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
                </div>
                <h3
                  className="text-2xl font-semibold group-hover:!text-white transition-colors duration-300"
                  style={{ color: "#161617" }}
                >
                  development
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 transition-all duration-300 group-hover:-translate-y-[60px] md:group-hover:-translate-y-[100px] lg:group-hover:-translate-y-[130px]">
                <span
                  className="text-sm px-3 py-1 rounded-[2px] group-hover:!bg-white group-hover:!text-black transition-all duration-300"
                  style={{
                    color: "#3680FF",
                    backgroundColor: "rgba(54, 128, 255, 0.1)",
                  }}
                >
                  iOS
                </span>
                <span
                  className="text-sm px-3 py-1 rounded-[2px] group-hover:!bg-white group-hover:!text-black transition-all duration-300"
                  style={{
                    color: "#3680FF",
                    backgroundColor: "rgba(54, 128, 255, 0.1)",
                  }}
                >
                  android
                </span>

                <span
                  className="text-sm px-3 py-1 rounded-[2px] group-hover:!bg-white group-hover:!text-black transition-all duration-300"
                  style={{
                    color: "#3680FF",
                    backgroundColor: "rgba(54, 128, 255, 0.1)",
                  }}
                >
                  web
                </span>
              </div>
              <p
                className="text-sm font-light absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 group-hover:!text-white transition-all duration-300"
                style={{ color: "#C9CDD2" }}
              >
                Native mobile apps and scalable web platforms built with modern
                tech stacks.
              </p>
            </div>

            {/* Web3 Card */}
            <div className="group relative bg-white hover:bg-[#3680FF] rounded-[3px] p-4 md:p-6 h-auto md:h-[300px] min-h-[240px] flex flex-col justify-between transition-all duration-300 overflow-hidden">
              <div className="flex flex-col gap-4">
                <div className="text-2xl">
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
                </div>
                <h3
                  className="text-2xl font-semibold group-hover:!text-white transition-colors duration-300"
                  style={{ color: "#161617" }}
                >
                  web 3
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 transition-all duration-300 group-hover:-translate-y-[60px] md:group-hover:-translate-y-[100px] lg:group-hover:-translate-y-[130px]">
                <span
                  className="text-sm px-3 py-1 rounded-[2px] group-hover:!bg-white group-hover:!text-black transition-all duration-300"
                  style={{
                    color: "#3680FF",
                    backgroundColor: "rgba(54, 128, 255, 0.1)",
                  }}
                >
                  evm
                </span>
                <span
                  className="text-sm px-3 py-1 rounded-[2px] group-hover:!bg-white group-hover:!text-black transition-all duration-300"
                  style={{
                    color: "#3680FF",
                    backgroundColor: "rgba(54, 128, 255, 0.1)",
                  }}
                >
                  wallet ux
                </span>
                <span
                  className="text-sm px-3 py-1 rounded-[2px] group-hover:!bg-white group-hover:!text-black transition-all duration-300"
                  style={{
                    color: "#3680FF",
                    backgroundColor: "rgba(54, 128, 255, 0.1)",
                  }}
                >
                  solidity
                </span>
              </div>
              <p
                className="text-sm font-light absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 group-hover:!text-white transition-all duration-300"
                style={{ color: "#C9CDD2" }}
              >
                we craft thoughtful interfaces and visual systems that are both
                beautiful and easy to use.
              </p>
            </div>

            {/* AI Card */}
            <div className="group relative bg-white hover:bg-[#3680FF] rounded-[3px] p-4 md:p-6 h-auto md:h-[300px] min-h-[240px] flex flex-col justify-between transition-all duration-300 overflow-hidden">
              <div className="flex flex-col gap-4">
                <div className="text-2xl">
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
                </div>
                <h3
                  className="text-2xl font-semibold group-hover:!text-white transition-colors duration-300"
                  style={{ color: "#161617" }}
                >
                  AI
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 transition-all duration-300 group-hover:-translate-y-[60px] md:group-hover:-translate-y-[100px] lg:group-hover:-translate-y-[130px]">
                <span
                  className="text-sm px-3 py-1 rounded-[2px] group-hover:!bg-white group-hover:!text-black transition-all duration-300"
                  style={{
                    color: "#3680FF",
                    backgroundColor: "rgba(54, 128, 255, 0.1)",
                  }}
                >
                  copilots
                </span>
                <span
                  className="text-sm px-3 py-1 rounded-[2px] group-hover:!bg-white group-hover:!text-black transition-all duration-300"
                  style={{
                    color: "#3680FF",
                    backgroundColor: "rgba(54, 128, 255, 0.1)",
                  }}
                >
                  rag
                </span>
                <span
                  className="text-sm px-3 py-1 rounded-[2px] group-hover:!bg-white group-hover:!text-black transition-all duration-300"
                  style={{
                    color: "#3680FF",
                    backgroundColor: "rgba(54, 128, 255, 0.1)",
                  }}
                >
                  evals
                </span>
              </div>
              <p
                className="text-sm font-light absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 group-hover:!text-white transition-all duration-300"
                style={{ color: "#C9CDD2" }}
              >
                AI-powered features that enhance user experience and automate
                workflows.
              </p>
            </div>

            {/* Design Card */}
            <div className="group relative bg-white hover:bg-[#3680FF] rounded-[3px] p-4 md:p-6 h-auto md:h-[300px] min-h-[240px] flex flex-col justify-between transition-all duration-300 overflow-hidden">
              <div className="flex flex-col gap-4">
                <div className="text-2xl">
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
                </div>
                <h3
                  className="text-2xl font-semibold group-hover:!text-white transition-colors duration-300"
                  style={{ color: "#161617" }}
                >
                  design
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 transition-all duration-300 group-hover:-translate-y-[60px] md:group-hover:-translate-y-[100px] lg:group-hover:-translate-y-[130px]">
                <span
                  className="text-sm px-3 py-1 rounded-[2px] group-hover:!bg-white group-hover:!text-black transition-all duration-300"
                  style={{
                    color: "#3680FF",
                    backgroundColor: "rgba(54, 128, 255, 0.1)",
                  }}
                >
                  ui/ux
                </span>
                <span
                  className="text-sm px-3 py-1 rounded-[2px] group-hover:!bg-white group-hover:!text-black transition-all duration-300"
                  style={{
                    color: "#3680FF",
                    backgroundColor: "rgba(54, 128, 255, 0.1)",
                  }}
                >
                  brand
                </span>
                <span
                  className="text-sm px-3 py-1 rounded-[2px] group-hover:!bg-white group-hover:!text-black transition-all duration-300"
                  style={{
                    color: "#3680FF",
                    backgroundColor: "rgba(54, 128, 255, 0.1)",
                  }}
                >
                  systems
                </span>
              </div>
              <p
                className="text-sm font-light absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 group-hover:!text-white transition-all duration-300"
                style={{ color: "#C9CDD2" }}
              >
                Beautiful interfaces and design systems that users love to
                interact with.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
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
            two-week sprints, weekly demos, one board, clear pricing, you own
            the repo and the IP.
          </h2>
        </div>

        {/* Process Steps */}
        <div className="flex flex-col gap-3 md:gap-4">
          {/* Step 1 - jam */}
          <div className="bg-white rounded-[3px] p-4 md:p-6 lg:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4 md:gap-8">
              <span
                className="text-3xl md:text-4xl lg:text-5xl font-light"
                style={{ color: "#C9CDD2" }}
              >
                01.
              </span>
              <h3
                className="text-2xl md:text-3xl font-normal"
                style={{ color: "#161617" }}
              >
                jam
              </h3>
            </div>
            <div className="flex gap-2 md:gap-3 flex-wrap">
              <span
                className="text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-[3px]"
                style={{
                  color: "#3680FF",
                  backgroundColor: "rgba(54, 128, 255, 0.1)",
                }}
              >
                goals
              </span>
              <span
                className="text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-[3px]"
                style={{
                  color: "#3680FF",
                  backgroundColor: "rgba(54, 128, 255, 0.1)",
                }}
              >
                scope
              </span>
              <span
                className="text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-[3px]"
                style={{
                  color: "#3680FF",
                  backgroundColor: "rgba(54, 128, 255, 0.1)",
                }}
              >
                KPI
              </span>
            </div>
          </div>

          {/* Step 2 - prototype */}
          <div className="bg-white rounded-[3px] p-4 md:p-6 lg:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4 md:gap-8">
              <span
                className="text-3xl md:text-4xl lg:text-5xl font-light"
                style={{ color: "#C9CDD2" }}
              >
                02.
              </span>
              <h3
                className="text-2xl md:text-3xl font-normal"
                style={{ color: "#161617" }}
              >
                prototype
              </h3>
            </div>
            <div className="flex gap-2 md:gap-3 flex-wrap">
              <span
                className="text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-[3px]"
                style={{
                  color: "#3680FF",
                  backgroundColor: "rgba(54, 128, 255, 0.1)",
                }}
              >
                flows
              </span>
              <span
                className="text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-[3px]"
                style={{
                  color: "#3680FF",
                  backgroundColor: "rgba(54, 128, 255, 0.1)",
                }}
              >
                quick tests
              </span>
              <span
                className="text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-[3px]"
                style={{
                  color: "#3680FF",
                  backgroundColor: "rgba(54, 128, 255, 0.1)",
                }}
              >
                clickable figma
              </span>
            </div>
          </div>

          {/* Step 3 - build & ship */}
          <div className="bg-white rounded-[3px] p-4 md:p-6 lg:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4 md:gap-8">
              <span
                className="text-3xl md:text-4xl lg:text-5xl font-light"
                style={{ color: "#C9CDD2" }}
              >
                03.
              </span>
              <h3
                className="text-2xl md:text-3xl font-normal"
                style={{ color: "#161617" }}
              >
                build & ship
              </h3>
            </div>
            <div className="flex gap-2 md:gap-3 flex-wrap">
              <span
                className="text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-[3px]"
                style={{
                  color: "#3680FF",
                  backgroundColor: "rgba(54, 128, 255, 0.1)",
                }}
              >
                sprints
              </span>
              <span
                className="text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-[3px]"
                style={{
                  color: "#3680FF",
                  backgroundColor: "rgba(54, 128, 255, 0.1)",
                }}
              >
                demos
              </span>
              <span
                className="text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-[3px]"
                style={{
                  color: "#3680FF",
                  backgroundColor: "rgba(54, 128, 255, 0.1)",
                }}
              >
                CI/CD
              </span>
              <span
                className="text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-[3px]"
                style={{
                  color: "#3680FF",
                  backgroundColor: "rgba(54, 128, 255, 0.1)",
                }}
              >
                launch
              </span>
            </div>
          </div>

          {/* Step 4 - grow */}
          <div className="bg-white rounded-[3px] p-4 md:p-6 lg:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4 md:gap-8">
              <span
                className="text-3xl md:text-4xl lg:text-5xl font-light"
                style={{ color: "#C9CDD2" }}
              >
                04.
              </span>
              <h3
                className="text-2xl md:text-3xl font-normal"
                style={{ color: "#161617" }}
              >
                grow
              </h3>
            </div>
            <div className="flex gap-2 md:gap-3 flex-wrap">
              <span
                className="text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-[3px]"
                style={{
                  color: "#3680FF",
                  backgroundColor: "rgba(54, 128, 255, 0.1)",
                }}
              >
                A/B
              </span>
              <span
                className="text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-[3px]"
                style={{
                  color: "#3680FF",
                  backgroundColor: "rgba(54, 128, 255, 0.1)",
                }}
              >
                analytics
              </span>
              <span
                className="text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-[3px]"
                style={{
                  color: "#3680FF",
                  backgroundColor: "rgba(54, 128, 255, 0.1)",
                }}
              >
                retention & performance
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 md:py-24 pb-16 md:pb-26">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 md:gap-20 lg:gap-32 mb-16 md:mb-24 lg:mb-36">
            {/* Left Column */}
            <div className="flex-1">
              <p
                className="text-sm md:text-base font-light mb-6 md:mb-8 max-w-md"
                style={{ color: "#C9CDD2" }}
              >
                thank you for exploring our works! if you&apos;d like to
                collaborate, please feel free to reach out
              </p>
              <Link
                href="mailto:hi@nemy.agency"
                className="text-3xl md:text-5xl lg:text-6xl font-normal inline-flex items-center gap-3 md:gap-4 group text-[#161617] hover:text-[#3680FF] transition-all duration-300"
              >
                <span className="break-all">Message in Telegram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="none"
                  viewBox="0 0 40 40"
                  className="group-hover:translate-x-2 transition-transform duration-300 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 flex-shrink-0"
                >
                  <path
                    className="group-hover:stroke-[#3680FF] transition-all duration-300"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="m10 30 20-20m-16.25 0H30v16.25"
                  />
                </svg>
              </Link>
            </div>

            {/* Right Column - Links */}
            <div className="lg:flex-shrink-0">
              {/* Social Links */}
              <div className="flex flex-col gap-3 md:gap-4">
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg md:text-xl font-normal inline-flex items-center gap-2 transition-opacity hover:opacity-70"
                  style={{ color: "#161617" }}
                >
                  X (twitter)
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg md:text-xl font-normal inline-flex items-center gap-2 transition-opacity hover:opacity-70"
                  style={{ color: "#161617" }}
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg md:text-xl font-normal inline-flex items-center gap-2 transition-opacity hover:opacity-70"
                  style={{ color: "#161617" }}
                >
                  Instagram
                </Link>
                <Link
                  href="https://telegram.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg md:text-xl font-normal inline-flex items-center gap-2 transition-opacity hover:opacity-70"
                  style={{ color: "#161617" }}
                >
                  Telegram
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div
            className="z-10 flex items-center justify-between pt-8 md:pt-16 lg:pt-24 border-t md:border-0"
            style={{ borderColor: "#F6F7F9" }}
          >
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Nemy Logo"
                width={24}
                height={24}
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </div>
            <p
              className="text-xs md:text-sm font-light"
              style={{ color: "#C9CDD2" }}
            >
              2025 all rights reserved
            </p>
          </div>
        </div>
      </footer>

      <ProgressiveBlur
        height={
          typeof window !== "undefined" && window.innerWidth < 768
            ? "8%"
            : "15%"
        }
        className="fixed bottom-0 left-0 right-0 z-0"
        position="bottom"
      />
    </div>
  );
}
