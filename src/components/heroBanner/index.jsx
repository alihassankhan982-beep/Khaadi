import React from "react";
import logo from "../../assets/logo.svg";

const HeroBanner = ({ img }) => {
  return (
    <div className="relative">
      <img className="object-cover w-full h-auto" src={img} alt="" />

      {/* Logo overlay — mobile only */}
      <div className="lg:hidden fixed top-3 left-1/2 -translate-x-1/2 z-50">
        <img
          src={logo}
          alt="logo"
          className="w-[60px] sm:w-[70px] md:w-[80px]"
        />
      </div>
    </div>
  );
};

export default HeroBanner;
