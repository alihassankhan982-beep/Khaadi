import React, { useEffect, useState } from "react";

function FloatingIcons() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > window.innerHeight - 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Chat Icon (Always Visible) */}
      <div
        className="
          fixed z-999 cursor-pointer
          bottom-[88px] right-4
          sm:bottom-[100px] sm:right-6
          md:bottom-[100px] md:right-[170px]
          w-12 h-12
          sm:w-14 sm:h-14
          md:w-[60px] md:h-[60px]
          bg-white rounded-full
          flex items-center justify-center
          shadow-[0_4px_15px_rgba(0,0,0,0.15)]
          transition-transform duration-200
          hover:scale-105
        "
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 9h8M8 13h6" />
        </svg>
      </div>

      {/* Floating Arrow Icon (Appears after scrolling past hero) */}
      <div
        onClick={scrollToTop}
        className={`
          fixed z-999 cursor-pointer
          bottom-4 right-4
          sm:bottom-5 sm:right-6
          md:bottom-5 md:right-[25px]
          w-12 h-12
          sm:w-14 sm:h-14
          md:w-[60px] md:h-[60px]
          bg-white rounded-full
          flex items-center justify-center
          shadow-[0_4px_15px_rgba(0,0,0,0.15)]
          transition-all duration-400
          ${
            showArrow
              ? "opacity-100 pointer-events-auto translate-y-0"
              : "opacity-0 pointer-events-none translate-y-5"
          }
        `}
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </div>
    </>
  );
}

export default FloatingIcons;
