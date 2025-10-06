"use client";

import Image from "next/image";
import Link from "next/link";

const contactLinks = [
  { label: "rahim@nemy.agency", href: "mailto:rahim@nemy.agency" },
  { label: "Telegram", href: "https://t.me/rahimwws", external: true },
  { label: "X (Twitter)", href: "https://x.com/rahimwws", external: true },
];

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="flex min-h-screen flex-col bg-[#040404] text-white">
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center sm:px-10 lg:px-16">
        <Image
          src="/high-voltage.png"
          alt="Star accent"
          width={36}
          height={36}
          className="absolute left-6 top-8 w-6 opacity-80 sm:left-10 sm:top-12 sm:w-7"
        />

        <Link
          href="https://t.me/rahimwws"
          target="_blank"
          rel="noreferrer"
          className="absolute right-6 top-8 text-xs uppercase text-white/40 transition-colors hover:text-white sm:right-10 sm:top-12"
        >
          Contact Us →
        </Link>

        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8">
          <h1 className="text-[clamp(3rem,7vw,5rem)] font-semibold leading-tight">
            We build mobile apps for{" "}
            <span className="text-[#2E69FF]">Web3</span> &amp;{" "}
            <span className="text-[#2E69FF]">AI</span> Startups
          </h1>
          <p className="max-w-2xl text-sm text-white/55 sm:text-base">
            We help Web3 founders and AI startups deliver fast MVPs through
            strong design, engineering, and launch-ready products.
          </p>
          <Link
            href="https://docsend.com/view/xecwenef8yvf9ks3"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-[#2E69FF] px-6 py-3 text-sm font-semibold text-white transition-transform "
          >
            Get Pitch Deck
          </Link>
        </div>
      </section>

      <section className="flex flex-col items-center gap-16 px-6 pb-10 text-center sm:px-10 lg:px-16">
        <div className="flex flex-col items-center gap-6">
          <span className="text-xs uppercase  text-white/40">Get in touch</span>
          <div className="flex flex-col gap-2 text-[clamp(2.8rem,8vw,5rem)] font-semibold">
            {contactLinks.map(({ label, href, external }) => (
              <Link
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="transition-colors hover:text-[#2E69FF]"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <span className="pointer-events-none select-none text-[clamp(4rem,18vw,12rem)] font-semibold leading-none text-white/5">
          NEMY AGENCY
        </span>
      </section>
    </main>
  );
}
