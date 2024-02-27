import React from "react";

const HowToBook = () => {
  return (
    <section className="my-10">
      <div className="container mx-auto">
        <div className="text-[36px]">
          How to <span className="text-[#EF3C23]">book a car ?</span>
        </div>
        <div className="grid grid-cols-4 gap-x-6 mt-10">
          <div className="h-[448px] border border-[#EF3C23] rounded-xl bg-white">
            <div className="h-[114px]">
              <img
                src="/assets/images/ban1.jpg"
                alt="WowCars banner 1 image"
                width="189"
                height="114"
                className="mx-auto mt-7"
              />
            </div>

            <div className="text-[#EF3C23] text-xl font-semibold text-center mt-14">
              Chose City
            </div>

            <div className="px-6 text-slate-600 text-center mt-2">
              Choose the city you want to avail our service. We are established
              in multiple cities to cater to all our customers and provide them
              with best of our services.
            </div>
          </div>
          <div className="h-[448px] border border-[#EF3C23] rounded-xl bg-white">
            <div className="h-[114px] pt-14">
              <img
                src="/assets/images/ban2.jpg"
                alt="WowCars banner 2 image"
                width="189"
                height="114"
                className="mx-auto"
              />
            </div>

            <div className="text-[#EF3C23] text-xl font-semibold text-center mt-20">
              Select car
            </div>

            <div className="px-6 text-slate-600 text-center mt-2">
              We have wide variety of cars with best price in market. Select the
              car and package of your choice. We provide well maintained and
              sanitized automobiles.
            </div>
          </div>
          <div className="h-[448px] border border-[#EF3C23] rounded-xl bg-white">
            <div className="h-[114px]">
              <img
                src="/assets/images/ban3.jpg"
                alt="WowCars banner 3 image"
                width="189"
                height="114"
                className="mx-auto mt-7"
              />
            </div>

            <div className="text-[#EF3C23] text-xl font-semibold text-center mt-14">
              Upload documents
            </div>

            <div className="px-6 text-slate-600 text-center mt-2">
              Get hassle free service by uploading your documents in the app and
              get instant approval. Start your trip without any further delay
              for document verification.
            </div>
          </div>
          <div className="h-[448px] border border-[#EF3C23] rounded-xl bg-white">
            <div className="h-[114px]">
              <img
                src="/assets/images/ban4.jpg"
                alt="WowCars banner 4 image"
                width="189"
                height="114"
                className="mx-auto mt-7"
              />
            </div>

            <div className="text-[#EF3C23] text-xl font-semibold text-center mt-14">
              Enjoy your trip
            </div>

            <div className="px-6 text-slate-600 text-center mt-2">
              Follow the steps, rent a car and enjoy trip with your friends and
              family.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBook;
