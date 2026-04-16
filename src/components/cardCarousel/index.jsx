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

const VISIBLE = 5;
const INTERVAL = 3000;
const GAP = 10;

// Triple the array so we always have cards ahead and behind
const EXTENDED = [...ITEMS, ...ITEMS, ...ITEMS];
const START = ITEMS.length; // start at index 10 (middle copy)

export default function ClothingCarousel() {
  const trackRef = useRef(null);
  const idxRef = useRef(START);
  const isAnimatingRef = useRef(false);
  const timerRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  function getCardWidth() {
    const track = trackRef.current;
    if (!track) return 0;
    const totalGap = GAP * (VISIBLE - 1);
    return (track.parentElement.offsetWidth - totalGap) / VISIBLE;
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

    // Update dot
    const dotIdx = (next - START + ITEMS.length * 100) % ITEMS.length;
    setActiveDot(dotIdx);

    // Restart timer when user manually interacts
    startTimer();
  }

  function handleTransitionEnd() {
    if (idxRef.current >= ITEMS.length * 2) {
      idxRef.current = idxRef.current - ITEMS.length;
      moveTo(idxRef.current, false);
    } else if (idxRef.current < ITEMS.length) {
      idxRef.current = idxRef.current + ITEMS.length;
      moveTo(idxRef.current, false);
    }
    isAnimatingRef.current = false;
  }

  function jumpToDot(i) {
    clearInterval(timerRef.current);
    isAnimatingRef.current = false;
    const newIdx = START + i;
    idxRef.current = newIdx;
    moveTo(newIdx, true);
    setActiveDot(i);
    startTimer();
  }

  function startTimer() {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => step(1), INTERVAL);
  }

  useEffect(() => {
    moveTo(START, false);
    startTimer();
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 1300,
        margin: "30px auto",
        padding: "0 40px", // Added padding to make room for arrows on the sides
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      {/* Viewport */}
      <div style={{ overflow: "hidden", width: "100%" }}>
        {/* Track */}
        <div
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          style={{
            display: "flex",
            gap: `${GAP}px`,
            willChange: "transform",
          }}
        >
          {EXTENDED.map((item, i) => (
            <Card key={i} item={item} gap={GAP} visible={VISIBLE} />
          ))}
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => step(-1)}
        style={{
          position: "absolute",
          left: -5,
          top: "40%",
          transform: "translateY(-50%)",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ChevronLeft strokeWidth={1} size={30} color={"#888"} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => step(1)}
        style={{
          backgroundColor: "white",
          position: "absolute",
          right: 0,
          top: "40%",
          transform: "translateY(-50%)",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ChevronRight strokeWidth={1} size={30} color={"#888"} />
      </button>

      {/* Separated Dots */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          marginTop: 40,
        }}
      >
        {ITEMS.map((_, i) => (
          <div
            key={i}
            onClick={() => jumpToDot(i)}
            style={{
              height: 8,
              width: 8,
              borderRadius: "50%",
              cursor: "pointer",
              background: i === activeDot ? "#000" : "#d1d5db",
              transition: "all 0.35s ease",
              flexShrink: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Each card is fully self-contained
function Card({ item, gap, visible }) {
  const cardStyle = {
    flexShrink: 0,
    width: `calc((100% - ${gap * (visible - 1)}px) / ${visible})`,
    background: "#fff",
    cursor: "pointer",
  };

  return (
    <div style={cardStyle}>
      {/* Image box */}
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "133%", // 3:4 ratio
          overflow: "hidden",
          background: "#f5f5f5",
        }}
      >
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        {/* Heart */}
        <div
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 16,
            cursor: "pointer",
            boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
          }}
        >
          <Heart strokeWidth={1.5} size={20} />
        </div>
      </div>

      {/* Text info */}
      <div style={{ paddingTop: 10 }}>
        <p
          style={{
            fontSize: 11,
            color: "#888",
            margin: "0 0 3px",
            fontWeight: 400,
          }}
        >
          {item.type}
        </p>
        <p
          style={{
            fontSize: 15,
            fontWeight: 600,
            margin: "0 0 7px",
            color: "#111",
          }}
        >
          {item.name}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 9,
          }}
        >
          <span
            style={{
              fontSize: 12,
              color: "#c0c0c0",
              textDecoration: "line-through",
            }}
          >
            {item.oldPrice}
          </span>
          <span style={{ fontSize: 14, fontWeight: 700, color: "#111" }}>
            {item.newPrice}
          </span>
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          <span
            style={{
              background: "#E8442A",
              color: "#fff",
              fontSize: 10,
              fontWeight: 700,
              padding: "4px 11px",
              borderRadius: 20,
            }}
          >
            50% OFF
          </span>
          <span
            style={{
              background: "#fff4f2",
              color: "#E8442A",
              fontSize: 10,
              fontWeight: 500,
              padding: "4px 11px",
              borderRadius: 20,
              border: "1px solid #fccfc9",
            }}
          >
            Exclusively Online
          </span>
        </div>
      </div>
    </div>
  );
}
