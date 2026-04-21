import React from "react";

const Heading = ({title, description}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 mt-10 sm:mt-14 md:mt-16 lg:mt-20 mb-6 sm:mb-7 md:mb-8 mx-auto px-4 sm:px-6 text-center max-w-3xl">
      <h2 className="text-2xl sm:text-3xl md:text-[35px] font-bold tracking-[0.08em] text-black">
        {title}
      </h2>
      <h4 className="text-sm sm:text-[15px] md:text-[16px] font-normal tracking-[0.08em] text-black">
        {description}
      </h4>
    </div>
  );
};

export default Heading;
