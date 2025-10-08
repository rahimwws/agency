"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const contactLinks = [
  { label: "Telegram", href: "https://t.me/rahimwws", external: true },
  { label: "Email", href: "mailto:rahim@nemy.agency" },
  { label: "X (Twitter)", href: "https://x.com/rahimwws", external: true },
];

const steps = [
  {
    title: "Refer us as your product partner",
    description:
      "Spot teams that need polished digital products and drop their details into the Telegram bot.",
    number: "01",
  },
  {
    title: "Track every referral status",
    description:
      "We log each lead inside our CRM and send you regular updates straight from the bot.",
    number: "02",
  },
];

export default function PartnersPage() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [fillProgress, setFillProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = textRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const total = rect.height + windowHeight;
      const visible = windowHeight - rect.top;
      const progress = Math.min(Math.max(visible / total, 0), 1);
      setFillProgress(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-white text-[#151515]">
      <header className="flex items-center justify-between px-6 py-8 text-sm   text-neutral-500 sm:px-14">
        <Link
          href="/"
          className="transition-colors hover:text-[#2E69FF]"
          aria-label="Back to home"
        >
          ← Back to Home
        </Link>
      </header>

      <section className="mx-6 flex flex-1 flex-col justify-center gap-16 py-16 sm:mx-14">
        <div className="grid gap-12 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]">
          <div className="flex flex-col justify-between gap-10 text-[clamp(3rem,7vw,5rem)] font-semibold leading-tight">
            <span>Partner Program</span>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="text-[clamp(2.4rem,6vw,3.8rem)] font-bold leading-snug">
              Recommend Us. Earn $10K.
            </h1>
            <p className="max-w-lg text-base font-medium text-neutral-500 sm:text-lg">
              Jump into our private Telegram bot to review the partner terms and
              submit your referral. Share qualified leads and unlock a $10,000
              reward once the project kicks off.
            </p>
            <Link
              href="https://t.me/rahimwws?text=hi!%20I%20have%20a%20client%20who%20wants%20to%20order%20an%20app.%20Here%20are%20their%20contacts.%20How%20much%20will%20I%20earn%20from%20this%20referral%3F"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-neutral-100 px-6 py-3 text-sm font-semibold text-[#151515] transition-all hover:bg-[#2E69FF] hover:text-white"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#2E69FF] text-white transition-all group-hover:-translate-x-1 group-hover:bg-white group-hover:text-[#151515]">
                →
              </span>
              <span className="transition-transform group-hover:translate-x-1">
                Get Program Details
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full bg-black py-12">
        <div className="mx-auto flex max-w-4xl justify-center">
          <video
            className="h-[240px] w-[240px] rounded-[40px] object-cover sm:h-[500px] sm:w-[500px]"
            src="/coin.webm"
            playsInline
            autoPlay
            loop
            muted
          />
        </div>
      </section>

      <section className="w-full bg-black px-6 pb-20 pt-12 text-white sm:px-14">
        <div className="mx-auto flex max-w-4xl flex-col gap-6">
          <h2 className="text-[clamp(2.2rem,6vw,3.6rem)] font-semibold leading-tight">
            How much do we pay?
          </h2>
          <p
            ref={textRef}
            className="bg-clip-text text-[clamp(1.4rem,4vw,2.6rem)] font-medium leading-snug text-transparent"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ${
                fillProgress * 100
              }%, rgba(255,255,255,0.18) ${
                fillProgress * 100
              }%, rgba(255,255,255,0.18) 100%)`,
            }}
          >
            <span className="block">
              Rewards scale with the contract value you bring to the table.
            </span>
            <span className="block">
              We operate with a transparent payout model so every partner sees
              the numbers clearly.
            </span>
            <span className="block">
              Bigger engagements mean a higher commission for you.
            </span>
          </p>
          <p className="text-sm text-white/40">
            * Custom reward structures can be discussed individually for
            strategic partnerships.
          </p>
        </div>
      </section>

      <section className="mx-6 mb-16 flex flex-col gap-8 sm:mx-14 mt-16">
        <div className="grid gap-8 lg:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex h-full flex-col justify-between gap-10 rounded-[36px] bg-neutral-100/80 p-8  sm:p-12"
            >
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold sm:text-3xl">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-500 sm:text-base">
                  {step.description}
                </p>
              </div>
              <span className="text-4xl font-semibold text-neutral-400 sm:text-5xl">
                {step.number}
              </span>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-neutral-100 via-white to-neutral-200 p-8 sm:p-12">
          <div className="flex flex-col gap-6 sm:max-w-xl">
            <h3 className="text-2xl font-semibold sm:text-3xl">
              Get paid when the deal closes
            </h3>
            <p className="text-sm text-neutral-500 sm:text-base">
              When a client signs with us and kicks off the work, we share a
              percentage of the contract value with you. The closer you stay to
              the opportunity, the faster you get paid.
            </p>
            <Link
              href="https://t.me/rahimwws?text=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Nemy%20Agency%20referral%20program"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-neutral-100/80 px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-[#2E69FF] hover:text-white"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-black/80 text-white transition-transform group-hover:translate-x-1 group-hover:bg-white group-hover:text-[#151515]">
                →
              </span>
              <span className="transition-transform group-hover:translate-x-1">
                View Referral Terms
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center gap-16 px-6 pb-10 pt-10 text-center sm:px-10 lg:px-16 bg-black">
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
