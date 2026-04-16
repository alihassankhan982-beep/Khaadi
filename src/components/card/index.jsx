import React from "react";

const ProductCard = () => {
  return (
    <div
      style={{
        width: "280px", // or fit your container
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        borderRadius: "4px", // subtle rounding on main card
        overflow: "hidden",
        boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
        backgroundColor: "#fff",
      }}
    >
      {/* Image Area */}
      <div style={{ position: "relative" }}>
        <img
          // ### CHANGE THE SRC BELOW ###
          src="https://pk.khaadi.com/dw/image/v2/BJTG_PRD/on/demandware.static/-/Sites-khaadi-master-catalog/default/dw4270c458/images/hi-res/otd4-ex22-10ta_multi_1.jpg?sw=400&sh=600"
          alt="Printed Textured Cotton Kurta"
          style={{ width: "100%", display: "block" }}
        />

        {/* Wishlist Icon */}
        <div
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.7)", // translucent background like original
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
            <path
              d="M17.3667 2.63332C16.4812 1.74811 15.28 1.25 14.0278 1.25C12.7756 1.25 11.5744 1.74811 10.6889 2.63332L10 3.32221L9.31111 2.63332C8.4256 1.74811 7.2244 1.25 5.97222 1.25C4.72004 1.25 3.51884 1.74811 2.63332 2.63332C0.777778 4.48887 0.777778 7.51108 2.63332 9.36663L10 16.7333L17.3667 9.36663C19.2222 7.51108 19.2222 4.48887 17.3667 2.63332Z"
              stroke="#333"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Content Area */}
      <div style={{ padding: "15px" }}>
        <p
          style={{
            fontSize: "14px",
            color: "#888",
            margin: "0 0 5px 0",
          }}
        >
          Printed | Textured Cotton
        </p>
        <h3
          style={{
            fontSize: "18px",
            fontWeight: "500",
            margin: "0 0 10px 0",
            color: "#333",
          }}
        >
          Kurta
        </h3>

        {/* Price Section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "15px",
          }}
        >
          <span
            style={{
              fontSize: "16px",
              color: "#888",
              textDecoration: "line-through",
            }}
          >
            PKR 3,700
          </span>
          <span
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#333",
            }}
          >
            PKR 1,850
          </span>
        </div>

        {/* Badges */}
        <div style={{ display: "flex", gap: "8px" }}>
          <span
            style={{
              backgroundColor: "#FF5733", // or your exact orange/red
              color: "#fff",
              fontSize: "12px",
              padding: "6px 15px",
              borderRadius: "20px",
              fontWeight: "500",
            }}
          >
            50% OFF
          </span>
          <span
            style={{
              backgroundColor: "#FFEBEE", // translucent pink
              color: "#C62828", // red text
              fontSize: "12px",
              padding: "6px 15px",
              borderRadius: "20px",
              fontWeight: "500",
            }}
          >
            Exclusively Online
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
