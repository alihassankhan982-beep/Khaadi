import React from "react";

const AnnouncementBar = () => {
  return (
    <div className="hidden lg:block">
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#fe92aa] px-[16px] md:px-[32px] py-[9px] text-[12px] tracking-[0.02em] text-[#1a1a1a]">
        {/* Text */}
        <div className="flex-1 text-center">
          The Sale is now live. Shop your favourite styles at up to 50% off{" "}
          <a
            href="#"
            className="font-semibold text-[#1a1a1a] underline underline-offset-2"
          >
            here.
          </a>
        </div>

        {/* Track */}
        <div className="mt-1 md:mt-0 md:ml-4 cursor-pointer whitespace-nowrap text-[12px] font-normal uppercase tracking-[0.12em] hover:opacity-65">
          Track
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;