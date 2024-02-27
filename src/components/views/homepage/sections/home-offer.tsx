import React from "react";

const HomeOffer = () => {
  return (
    <section className="-mt-16 z-10">
      <div className="container mx-auto">
        <div className="text-[36px]">
          Exciting <span className="text-[#EF3C23]">offers !</span>
        </div>
        <div className="grid grid-cols-3 gap-x-6 mt-10">
          <div className="h-[280px] bg-[#D9D9D9]"></div>
          <div className="h-[280px] bg-[#D9D9D9]"></div>
          <div className="h-[280px] bg-[#D9D9D9]"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeOffer;
