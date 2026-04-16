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
      <style>{`
        .floating-chat {
          position: fixed;
          bottom: 100px;
          right: 170px;
          background: #fff;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
          cursor: pointer;
          z-index: 999;
          transition: transform 0.2s;
        }
        .floating-chat:hover { transform: scale(1.05); }

        .floating-arrow {
          position: fixed;
          bottom: 20px;
          right: 25px;
          background: #fff;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15);
          cursor: pointer;
          z-index: 999;
          transition: opacity 0.4s, transform 0.4s;
          opacity: 0;
          pointer-events: none;
          transform: translateY(20px);
        }
        .floating-arrow.visible {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }
      `}</style>

      {/* Floating Chat Icon (Always Visible) */}
      <div className="floating-chat">
        <svg
          width="28"
          height="28"
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
        className={`floating-arrow ${showArrow ? "visible" : ""}`}
        onClick={scrollToTop}
      >
        <svg
          width="28"
          height="28"
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
