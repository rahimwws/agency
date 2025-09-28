import Link from "next/link";

export default function PartnersPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-black">
      <header className="flex items-center justify-between px-6 pt-10 text-sm sm:px-14">
        <Link
          href="/"
          className="font-medium lowercase tracking-tight transition-colors hover:text-neutral-500"
        >
          Nemy
        </Link>
        <div className="w-3" aria-hidden="true" />
      </header>

      <div className="mx-6 mt-6 border-t-2 border-dotted border-black/30 sm:mx-14" />

      <section className="flex flex-1 flex-col items-center justify-center gap-12 px-6 py-16 text-center sm:px-0">
        <video
          className="h-[260px] w-[260px] rounded-full object-cover  sm:h-[320px] sm:w-[320px]"
          src="/coin.webm"
          playsInline
          autoPlay
          loop
          muted
        />

        <div className="max-w-xl">
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            recommend <span className="text-[#316CFF]">us</span> and receive
            $10k.
          </h1>
          <p className="mt-4 text-base text-neutral-500 sm:text-lg">
            you can submit an application to make a recommendation.
          </p>
        </div>
      </section>
    </main>
  );
}
