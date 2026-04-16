import React from "react";

const Heading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[18px] mt-[80px] mb-[30px] mx-auto">
      <h2 className="text-[35px] font-bold tracking-[0.08em] text-black">
        Top Picks for You
      </h2>
      <h4 className="text-[16px] font-normal tracking-[0.08em] text-black">
        We've handpicked the styles we know you'll love. Explore what's trending
        now.
      </h4>
    </div>
  );
};

export default Heading;
