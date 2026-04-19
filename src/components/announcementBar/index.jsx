import React from "react";

const AnnouncementBar = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#b8cdd6] px-[16px] md:px-[32px] py-[9px] text-[13px] tracking-[0.02em] text-[#1a1a1a]">
        {/* Text */}
        <div className="flex-1 text-center">
          Explore new styles designed for brighter days{" "}
          <a
            href="#"
            className="font-semibold text-[#1a1a1a] underline underline-offset-2"
          >
            right here.
          </a>
        </div>

        {/* Track */}
        <div className="mt-1 md:mt-0 md:ml-4 cursor-pointer whitespace-nowrap text-[12px] font-semibold uppercase tracking-[0.12em] hover:opacity-65">
          Track
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
