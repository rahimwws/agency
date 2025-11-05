"use client";

import Image from "next/image";
import Link from "next/link";

interface TelegramBannerProps {
  onClose: () => void;
}

export default function TelegramBanner({ onClose }: TelegramBannerProps) {
  return (
    <div
      className="fixed bottom-0 md:right-0 left-0 right-0 md:left-auto z-50 animate-[slideUp_0.6s_ease-out]"
      style={{
        animation: "slideUp 0.6s ease-out forwards",
      }}
    >
      <div
        className="relative overflow-hidden md:rounded-tl-[15px] px-4 py-4 md:px-8 md:py-6 md:pr-16 shadow-2xl w-full md:max-w-[400px]"
        style={{
          background: "linear-gradient(135deg, #3b82f6 0%, #3b82f6 100%)",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 z-10 right-3 md:top-4 md:right-4 w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 flex items-center justify-center group"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:rotate-90 transition-transform duration-300"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Content */}
        <div className="flex items-start gap-3 md:gap-4">
          {/* Telegram Icon */}
          <div className="flex-shrink-0">
            <svg
              width="32"
              height="32"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="text-white md:w-10 md:h-10"
              stroke="white"
              fill="white"
            >
              <path d="M320 72C183 72 72 183 72 320C72 457 183 568 320 568C457 568 568 457 568 320C568 183 457 72 320 72zM435 240.7C431.3 279.9 415.1 375.1 406.9 419C403.4 437.6 396.6 443.8 390 444.4C375.6 445.7 364.7 434.9 350.7 425.7C328.9 411.4 316.5 402.5 295.4 388.5C270.9 372.4 286.8 363.5 300.7 349C304.4 345.2 367.8 287.5 369 282.3C369.2 281.6 369.3 279.2 367.8 277.9C366.3 276.6 364.2 277.1 362.7 277.4C360.5 277.9 325.6 300.9 258.1 346.5C248.2 353.3 239.2 356.6 231.2 356.4C222.3 356.2 205.3 351.4 192.6 347.3C177.1 342.3 164.7 339.6 165.8 331C166.4 326.5 172.5 322 184.2 317.3C256.5 285.8 304.7 265 328.8 255C397.7 226.4 412 221.4 421.3 221.2C423.4 221.2 427.9 221.7 430.9 224.1C432.9 225.8 434.1 228.2 434.4 230.8C434.9 234 435 237.3 434.8 240.6z" />
            </svg>
          </div>

          {/* Text */}
          <div className="flex-1 pr-6 md:pr-0">
            <h3 className="text-white text-base md:text-lg font-semibold mb-0.5 md:mb-1">
              More Cases
            </h3>
            <p className="text-white/90 text-xs md:text-sm mb-2 md:mb-3 leading-relaxed">
              and behind-the-scenes from the studio in our Telegram channel
            </p>

            {/* CTA Button */}
            <Link
              href="https://t.me/nemy_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#3680FF] px-3 py-1.5 md:px-4 md:py-2 rounded-[6px] text-xs md:text-sm font-medium hover:bg-gray-100 transition-all duration-300 group"
            >
              <span>Subscribe</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                className="group-hover:translate-x-1 transition-transform md:w-4 md:h-4"
              >
                <path
                  d="M3 8h10m0 0L8 3m5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Decorative Arrow - Hide on mobile */}
        <div className="hidden md:block absolute -right-10 top-6">
          <Image
            src="/arrow.png"
            alt="Arrow"
            width={150}
            height={150}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
