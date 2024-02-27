import React from "react";
import CarInfoCard from "./car-info-card";
import CheckoutCard from "./checkout-card";

const CheckoutTemplate = () => {
  return (
    <div className="relative overflow-hidden z-10 pt-[70px] pb-20">
      <div className="absolute w-full h-full inset-0 top-0 -z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          className="w-full h-full  scale-[1.17]"
        >
          <rect width="100%" height="100%" fill="#F0D7D4" fill-opacity="0.25" />
          <line
            x1="0.6"
            y1="131.4"
            x2="100%"
            y2="131.4"
            stroke="#FFD0D0"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-dasharray="21 21"
          />
          <line
            x1="0.6"
            y1="841.401"
            x2="100%"
            y2="841.401"
            stroke="#FFD0D0"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-dasharray="21 21"
          />
          <line
            x1="0.6"
            y1="699.401"
            x2="100%"
            y2="699.401"
            stroke="#FFD0D0"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-dasharray="21 21"
          />
          <line
            x1="0.6"
            y1="557.401"
            x2="100%"
            y2="557.401"
            stroke="#FFD0D0"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-dasharray="21 21"
          />
          <line
            x1="0.6"
            y1="415.4"
            x2="100%"
            y2="415.4"
            stroke="#FFD0D0"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-dasharray="21 21"
          />
          <line
            x1="0.6"
            y1="273.4"
            x2="100%"
            y2="273.4"
            stroke="#FFD0D0"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-dasharray="21 21"
          />
          <line
            x1="710.6"
            y1="0.6"
            x2="710.6"
            y2="981.4"
            stroke="#FFD0D0"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-dasharray="21 21"
          />
          <line
            x1="0.6"
            y1="0.6"
            x2="0.599848"
            y2="981.4"
            stroke="#FFD0D0"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-dasharray="21 21"
          />
          <line
            x1="142.6"
            y1="0.6"
            x2="142.6"
            y2="981.4"
            stroke="#FFD0D0"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-dasharray="21 21"
          />
          <line
            x1="284.6"
            y1="0.6"
            x2="284.6"
            y2="981.4"
            stroke="#FFD0D0"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-dasharray="21 21"
          />
          <line
            x1="426.6"
            y1="0.6"
            x2="426.6"
            y2="981.4"
            stroke="#FFD0D0"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-dasharray="21 21"
          />
          <line
            x1="568.6"
            y1="0.6"
            x2="568.6"
            y2="981.4"
            stroke="#FFD0D0"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-dasharray="21 21"
          />
          <line
            x1="852.6"
            y1="0.6"
            x2="852.6"
            y2="981.4"
            stroke="#FFD0D0"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-dasharray="21 21"
          />
          <line
            x1="994.6"
            y1="0.6"
            x2="994.6"
            y2="981.4"
            stroke="#FFD0D0"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-dasharray="21 21"
          />
          <line
            x1="1136.6"
            y1="0.6"
            x2="1136.6"
            y2="981.4"
            stroke="#FFD0D0"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-dasharray="21 21"
          />
          <line
            x1="1278.6"
            y1="0.6"
            x2="1278.6"
            y2="981.4"
            stroke="#FFD0D0"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-dasharray="21 21"
          />
          <line
            x1="1420.6"
            y1="0.6"
            x2="1420.6"
            y2="981.4"
            stroke="#FFD0D0"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-dasharray="21 21"
          />
        </svg>
      </div>
      <div className="container mx-auto">
        <div className="text-center text-[32px] font-medium pt-10">
          Review & checkout
        </div>
        <div className="grid grid-cols-5 mt-[31px] gap-x-6">
          <div className="col-span-2">
            <CarInfoCard />
          </div>
          <div className="col-span-3">
            <CheckoutCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutTemplate;
