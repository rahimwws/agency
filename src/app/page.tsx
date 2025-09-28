"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "./logo.png";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="flex min-h-screen flex-col bg-[#fff] text-[#151515]">
      <header className="flex justify-between  items-center px-8 py-3 text-[0.7rem] uppercase tracking-[0.5em] sm:px-14">
        <div className="flex items-center gap-3">
          <span className="font-semibold">Nemy</span>
        </div>

        <div className="flex items-center gap-6 text-[0.6rem] tracking-[0.4em]">
          <Link
            href="/partners"
            className="flex items-center gap-1 transition-colors hover:text-[#316cff]"
          >
            <span className="font-semibold">Become a Partner</span>
          </Link>
        </div>
      </header>

      <div className="mx-8 mb-10 h-px bg-[radial-gradient(circle,#c1c1c1_1px,transparent_1px)] [background-size:14px_1px] sm:mx-14" />

      <section className="flex flex-1 flex-col gap-12 px-8 pb-12 sm:px-14">
        <div className="flex flex-1 flex-col gap-12 lg:-mt-10 lg:flex-row">
          <div className="flex flex-1 flex-col gap-8 lg:flex-row lg:items-end">
            <div className="flex flex-1 flex-col justify-center gap-4 text-[clamp(3rem,10vw,9rem)] font-normal uppercase leading-[0.9] lg:-translate-y-4">
              <span>Nemy</span>
              <span className="text-[clamp(3rem,10vw,9rem)] font-light">
                agency
              </span>
            </div>
          </div>

          <div className="flex flex-1 flex-col items-end justify-center gap-7 text-xs uppercase tracking-[0.25em] text-[#2d2d2d] lg:translate-y-6 lg:ml-auto font-semibold">
            <div className="flex items-center justify-end gap-4">
              <span className="inline-block h-2 w-2 rounded-full bg-[#1c1c1c]" />
              <span className="text-right">web 3.0</span>
            </div>
            <div className="flex items-center justify-end gap-4">
              <span className="inline-block h-2 w-2 rounded-full bg-[#1c1c1c]" />
              <span className="text-right">startups</span>
            </div>
            <div className="flex items-center justify-end gap-4">
              <span className="inline-block h-2 w-2 rounded-full bg-[#1c1c1c]" />
              <span className="text-right">ai products</span>
            </div>
          </div>
        </div>

        <div className="h-px bg-[radial-gradient(circle,#c1c1c1_1px,transparent_1px)] [background-size:14px_1px]" />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)] bg-316cff">
          <Link
            href="https://t.me/rahimwws"
            className="flex flex-col gap-5 rounded-3xl bg-[#2E69FF] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-sm sm:flex-row sm:items-end sm:gap-6"
          >
            <div className="relative w-full max-w-[50px] ">
              <div className="relative aspect-square">
                <Image
                  src="/Lightning.png"
                  alt="Glass lightning"
                  fill
                  priority
                  className="object-contain drop-shadow-[0_30px_80px_rgba(49,108,255,0.35)] animate-lightning"
                  sizes="(max-width: 640px) 180px, (max-width: 1024px) 260px, 260px"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3 text-base uppercase text-white font-semibold">
              get a pitch deck
            </div>
          </Link>

          <div className="max-w-xl justify-self-end text-right text-2xl leading-relaxed text-[#2a2a2a] font-semibold">
            <p>
              We are a digital product partner for web 3.0, startups. We build
              apps that turn ideas into products in weeks, not months.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
