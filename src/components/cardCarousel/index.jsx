import React, { useState, useEffect, useRef } from "react";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS = [
  {
    id: 1,
    type: "Printed | Textured Cotton",
    name: "Kurta",
    oldPrice: "PKR 3,700",
    newPrice: "PKR 1,850",
    image:
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600",
  },
  {
    id: 2,
    type: "Printed | Textured Cotton",
    name: "Kurta",
    oldPrice: "PKR 3,500",
    newPrice: "PKR 1,750",
    image:
      "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw4270c458/images/hi-res/otd4-ex22-10ta_multi_1.jpg?sw=400&sh=600",
  },
  {
    id: 3,
    type: "Printed | Textured Cotton",
    name: "Kurta",
    oldPrice: "PKR 3,700",
    newPrice: "PKR 1,850",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600",
  },
  {
    id: 4,
    type: "Printed | Heavy Textured Cotton",
    name: "Kurta",
    oldPrice: "PKR 3,700",
    newPrice: "PKR 1,850",
    image:
      "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw4270c458/images/hi-res/otd4-ex22-10ta_multi_1.jpg?sw=400&sh=600",
  },
  {
    id: 5,
    type: "Printed | Textured Cotton",
    name: "Kurta",
    oldPrice: "PKR 3,700",
    newPrice: "PKR 1,850",
    image:
      "https://images.unsplash.com/photo-1622519407650-3df9883f76a5?q=80&w=600",
  },
  {
    id: 6,
    type: "Printed | Textured Cotton",
    name: "Kurta",
    oldPrice: "PKR 3,200",
    newPrice: "PKR 1,600",
    image:
      "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?q=80&w=600",
  },
  {
    id: 7,
    type: "Printed | Textured Cotton",
    name: "Kurta",
    oldPrice: "PKR 3,800",
    newPrice: "PKR 1,900",
    image:
      "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw4270c458/images/hi-res/otd4-ex22-10ta_multi_1.jpg?sw=400&sh=600",
  },
  {
    id: 8,
    type: "Printed | Textured Cotton",
    name: "Kurta",
    oldPrice: "PKR 3,600",
    newPrice: "PKR 1,800",
    image:
      "https://images.unsplash.com/photo-1604006852748-903fccbc4019?q=80&w=600",
  },
  {
    id: 9,
    type: "Printed | Textured Cotton",
    name: "Kurta",
    oldPrice: "PKR 3,500",
    newPrice: "PKR 1,750",
    image:
      "https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw4270c458/images/hi-res/otd4-ex22-10ta_multi_1.jpg?sw=400&sh=600",
  },
  {
    id: 10,
    type: "Printed | Textured Cotton",
    name: "Kurta",
    oldPrice: "PKR 3,700",
    newPrice: "PKR 1,850",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600",
  },
];

const INTERVAL = 3000;
const GAP = 10;

// Triple the array so we always have cards ahead and behind
const EXTENDED = [...ITEMS, ...ITEMS, ...ITEMS];
const START = ITEMS.length;

function getVisible(width) {
  if (width < 640) return 2; // 320, 375, 425px → 2 cards
  if (width < 1024) return 3; // 768px → 3 cards
  return 5; // 1024px+ → 5 cards
}

export default function ClothingCarousel() {
  const trackRef = useRef(null);
  const idxRef = useRef(START);
  const isAnimatingRef = useRef(false);
  const timerRef = useRef(null);
  const visibleRef = useRef(5);
  const [activeDot, setActiveDot] = useState(0);

  function getCardWidth() {
    const track = trackRef.current;
    if (!track) return 0;
    const v = visibleRef.current;
    const totalGap = GAP * (v - 1);
    return (track.parentElement.offsetWidth - totalGap) / v;
  }

  function moveTo(newIdx, animate) {
    const track = trackRef.current;
    if (!track) return;
    const cardW = getCardWidth();
    const offset = newIdx * (cardW + GAP);
    track.style.transition = animate
      ? "transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
      : "none";
    track.style.transform = `translateX(-${offset}px)`;
  }

  function step(direction) {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    const next = idxRef.current + direction;
    idxRef.current = next;
    moveTo(next, true);
    setActiveDot((next - START + ITEMS.length * 100) % ITEMS.length);
    startTimer();
  }

  function handleTransitionEnd() {
    if (idxRef.current >= ITEMS.length * 2) {
      idxRef.current -= ITEMS.length;
      moveTo(idxRef.current, false);
    } else if (idxRef.current < ITEMS.length) {
      idxRef.current += ITEMS.length;
      moveTo(idxRef.current, false);
    }
    isAnimatingRef.current = false;
  }

  function jumpToDot(i) {
    clearInterval(timerRef.current);
    isAnimatingRef.current = false;
    idxRef.current = START + i;
    moveTo(idxRef.current, true);
    setActiveDot(i);
    startTimer();
  }

  function startTimer() {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => step(1), INTERVAL);
  }

  // Update card widths on resize using a ref (no re-render needed)
  useEffect(() => {
    function updateLayout() {
      visibleRef.current = getVisible(window.innerWidth);
      // Force each card's inline width to update
      const track = trackRef.current;
      if (!track) return;
      const v = visibleRef.current;
      const totalGap = GAP * (v - 1);
      const cardW = (track.parentElement.offsetWidth - totalGap) / v;
      Array.from(track.children).forEach((card) => {
        card.style.width = `${cardW}px`;
      });
      moveTo(idxRef.current, false);
    }

    updateLayout(); // run on mount
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    moveTo(START, false);
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="w-full max-w-[1300px] mx-auto my-[30px] px-6 sm:px-8 md:px-10 font-sans relative">
      {/* Viewport */}
      <div className="overflow-hidden w-full">
        {/* Track — gap kept as inline style since it's a JS constant */}
        <div
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          className="flex will-change-transform"
          style={{ gap: `${GAP}px` }}
        >
          {EXTENDED.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => step(-1)}
        className="absolute -left-1 top-[40%] -translate-y-1/2 border-none cursor-pointer z-10 flex items-center justify-center bg-transparent"
      >
        <ChevronLeft strokeWidth={1} size={30} color="#888" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => step(1)}
        className="absolute right-0 top-[40%] -translate-y-1/2 border-none cursor-pointer z-10 flex items-center justify-center bg-transparent"
      >
        <ChevronRight strokeWidth={1} size={30} color="#888" />
      </button>

      {/* Dots */}
      <div
        className="flex justify-center items-center mt-10"
        style={{ gap: 10 }}
      >
        {ITEMS.map((_, i) => (
          <div
            key={i}
            onClick={() => jumpToDot(i)}
            className="w-2 h-2 rounded-full cursor-pointer shrink-0 transition-all duration-350 ease-in-out"
            style={{ background: i === activeDot ? "#000" : "#d1d5db" }}
          />
        ))}
      </div>
    </div>
  );
}

function Card({ item }) {
  /*
    Width is set imperatively by the resize handler in the parent (updateLayout).
    We start with width:0 and let the useEffect on mount calculate the real value,
    avoiding any SSR / window-not-defined crash.
  */
  return (
    <div
      className="shrink-0 bg-white cursor-pointer"
      style={{ width: 0, minWidth: 0 }} // overwritten by updateLayout on mount
    >
      {/* Image — 3:4 ratio via padding-top trick */}
      <div
        className="relative w-full overflow-hidden bg-[#f5f5f5]"
        style={{ paddingTop: "133%" }}
      >
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full object-cover block"
        />
        {/* Heart */}
        <div className="absolute top-[10px] right-[10px] w-9 h-9 rounded-full bg-white/80 flex items-center justify-center cursor-pointer shadow-sm">
          <Heart strokeWidth={1.5} size={20} />
        </div>
      </div>

      {/* Text */}
      <div className="pt-[10px]">
        <p className="text-[11px] text-[#888] mb-[3px] font-normal">
          {item.type}
        </p>
        <p className="text-[15px] font-semibold mb-[7px] text-[#111]">
          {item.name}
        </p>
        <div className="flex items-center gap-[10px] mb-[9px]">
          <span className="text-[12px] text-[#c0c0c0] line-through">
            {item.oldPrice}
          </span>
          <span className="text-[14px] font-bold text-[#111]">
            {item.newPrice}
          </span>
        </div>
        <div className="flex gap-[6px] flex-wrap">
          <span className="bg-[#E8442A] text-white text-[10px] font-bold px-[11px] py-1 rounded-full">
            50% OFF
          </span>
          <span className="bg-[#fff4f2] text-[#E8442A] text-[10px] font-medium px-[11px] py-1 rounded-full border border-[#fccfc9]">
            Exclusively Online
          </span>
        </div>
      </div>
    </div>
  );
}
