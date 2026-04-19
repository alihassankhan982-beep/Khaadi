import React, { useEffect, useRef, useState } from "react";

const SLIDES = [
  "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw8773cb3b/images/homepage/0.0-B2-209-desktop-banner-1920x700.jpg",
  "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dw8bec2bd3/images/homepage/0.0-1-211-desktop-banner-1920x700.jpg",
  "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dwabfe61da/images/homepage/0.0-eid-sale-desktop-banner-1920x700.jpg",
  "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dwed26ac97/images/homepage/0.0-1-247-desktop-banner-1920x700.jpg",
];

const EXTENDED = [...SLIDES, ...SLIDES, ...SLIDES];
const START = SLIDES.length;

/*
  Why the extra <style> block?
  Tailwind's md: breakpoint cannot override an inline style={{ paddingBottom }}
  because inline styles always win in CSS specificity. Moving the responsive
  height logic into a real CSS rule lets the media query properly reset
  padding-bottom to 0 and apply a fixed vh height on larger screens.
*/
const sliderStyles = `
  .hero-slider-viewport {
    /* Mobile: padding-bottom = (700/1920)*100 mirrors the banner aspect ratio
       so the full wide image is visible with zero cropping */
    padding-bottom: 36.45%;
    height: 0;
  }
  @media (min-width: 768px) {
    .hero-slider-viewport {
      padding-bottom: 0;
      height: 65vh;
    }
  }
  @media (min-width: 1024px) {
    .hero-slider-viewport {
      height: 80vh;
    }
  }
`;

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

  useEffect(() => {
    moveTo(START, false);
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="w-full flex flex-col items-center">
      <style>{sliderStyles}</style>

      {/* Viewport: height driven by CSS class above, not Tailwind utilities */}
      <div className="hero-slider-viewport w-full overflow-hidden relative">
        {/* Track sits absolute so it always fills the viewport's real height */}
        <div
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="absolute inset-0 flex will-change-transform"
        >
          {EXTENDED.map((url, i) => (
            <div key={i} className="min-w-full h-full shrink-0">
              <img
                src={url}
                alt={`Slide ${i}`}
                className="w-full h-full object-cover object-center block"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center items-center gap-3 py-5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => jumpTo(i)}
            className={`w-2 h-2 rounded-full border-none cursor-pointer p-0 transition-colors duration-300 ${
              i === activeDot ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSlider;
