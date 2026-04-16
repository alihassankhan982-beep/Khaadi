import React from "react";

const AnnouncementBar = () => {
  return (
    <div>
      <div className="flex items-center justify-between bg-[#b8cdd6] px-[32px] py-[9px] text-[13px] tracking-[0.02em] text-[#1a1a1a]">
        <div className="flex-1 text-center">
          Explore new styles designed for brighter days{" "}
          <a
            href="#"
            className="font-semibold text-[#1a1a1a] underline underline-offset-2"
          >
            right here.
          </a>
        </div>
        <div className="cursor-pointer whitespace-nowrap text-[12px] font-semibold uppercase tracking-[0.12em] hover:opacity-65">
          Track
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
