import React, { useEffect, useRef, useState } from "react";

const SLIDES = [
  "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw8773cb3b/images/homepage/0.0-B2-209-desktop-banner-1920x700.jpg",
  "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw8bec2bd3/images/homepage/0.0-1-211-desktop-banner-1920x700.jpg",
  "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dwabfe61da/images/homepage/0.0-eid-sale-desktop-banner-1920x700.jpg",
  "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dwed26ac97/images/homepage/0.0-1-247-desktop-banner-1920x700.jpg",
];

const EXTENDED = [...SLIDES, ...SLIDES, ...SLIDES];
const START = SLIDES.length;

function HeroSlider() {
  const trackRef = useRef(null);
  const idxRef = useRef(START);
  const isAnimatingRef = useRef(false);
  const timerRef = useRef(null);
  const touchStartX = useRef(0);
  const [activeDot, setActiveDot] = useState(0);

  function moveTo(idx, animate) {
    const track = trackRef.current;
    if (!track) return;
    track.style.transition = animate
      ? "transform 0.85s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
      : "none";
    track.style.transform = `translateX(-${idx * 100}%)`;
  }

  function advance() {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    const next = idxRef.current + 1;
    idxRef.current = next;
    moveTo(next, true);
    setActiveDot((next - START + SLIDES.length * 100) % SLIDES.length);
  }

  function handleTransitionEnd() {
    if (idxRef.current >= SLIDES.length * 2) {
      idxRef.current = idxRef.current - SLIDES.length;
      moveTo(idxRef.current, false);
    }
    if (idxRef.current < SLIDES.length) {
      idxRef.current = idxRef.current + SLIDES.length;
      moveTo(idxRef.current, false);
    }
    isAnimatingRef.current = false;
  }

  function jumpTo(i) {
    clearInterval(timerRef.current);
    isAnimatingRef.current = false;
    idxRef.current = START + i;
    moveTo(idxRef.current, true);
    setActiveDot(i);
    startTimer();
  }

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e) {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) {
      clearInterval(timerRef.current);
      isAnimatingRef.current = false;
      const dir = dx < 0 ? 1 : -1;
      idxRef.current = idxRef.current + dir;
      moveTo(idxRef.current, true);
      setActiveDot(
        (idxRef.current - START + SLIDES.length * 100) % SLIDES.length,
      );
      startTimer();
    }
  }

  function startTimer() {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(advance, 4500);
  }

  // ✅ Empty [] — runs only once on mount, never restarts on re-render
  useEffect(() => {
    moveTo(START, false);
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Slider */}
      <div
        style={{
          width: "100%",
          height: "80vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            willChange: "transform",
          }}
        >
          {EXTENDED.map((url, i) => (
            <div
              key={i}
              style={{ minWidth: "100%", height: "100%", flexShrink: 0 }}
            >
              <img
                src={url}
                alt={`Slide ${i}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 12,
          padding: "20px 0",
        }}
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => jumpTo(i)}
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: i === activeDot ? "#000" : "#ccc",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "background 0.3s",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSlider;
