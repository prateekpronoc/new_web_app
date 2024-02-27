import React from "react";

const Download = () => {
  return (
    <section className="my-10">
      <div className="">
        <img
          src="/assets/images/bann1.jpg"
          alt=""
          className="w-full h-[510px] object-cover"
        />

        <div className="my-10 container mx-auto">
          <div className="text-[36px]">
            Journey of
            <span className="text-[#EF3C23] ml-3">Wowcarz.</span>
          </div>
        </div>

        <img
          src="/assets/images/bann2.jpg"
          alt=""
          className="w-full h-[510px] object-cover"
        />

        <div className="my-10 container mx-auto">
          <div className="text-[36px] text-center">
            Our
            <span className="text-[#EF3C23] ml-3">Partners.</span>
          </div>
          <img
            src="/assets/images/partners.jpg"
            alt=""
            className="w-[840px] h-[192px] object-cover mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Download;
