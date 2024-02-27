import React from "react";
import Filters from "./filters";
import KilometersTabs from "./kilometers-tabs";
import CarCard from "./car-card";

const SearchTemplate = () => {
  return (
    <div className="mt-[140px] overflow-hidden relative z-10 py-[33px]">
      <div className="absolute w-full h-full inset-0 -z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1512 982"
          fill="none"
          className="w-full h-full scale-[1.17]"
        >
          <rect width="1512" height="982" fill="#F0D7D4" fill-opacity="0.25" />
          <line
            x1="0.6"
            y1="131.4"
            x2="1511.4"
            y2="131.4"
            stroke="#FFD0D0"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-dasharray="21 21"
          />
          <line
            x1="0.6"
            y1="841.401"
            x2="1511.4"
            y2="841.401"
            stroke="#FFD0D0"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-dasharray="21 21"
          />
          <line
            x1="0.6"
            y1="699.401"
            x2="1511.4"
            y2="699.401"
            stroke="#FFD0D0"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-dasharray="21 21"
          />
          <line
            x1="0.6"
            y1="557.401"
            x2="1511.4"
            y2="557.401"
            stroke="#FFD0D0"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-dasharray="21 21"
          />
          <line
            x1="0.6"
            y1="415.4"
            x2="1511.4"
            y2="415.4"
            stroke="#FFD0D0"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-dasharray="21 21"
          />
          <line
            x1="0.6"
            y1="273.4"
            x2="1511.4"
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
        <div className="grid grid-cols-4 gap-x-6">
          <div className="col-span-1">
            <div className="text-xl">Looking for ?</div>
            <div className="flex items-center justify-center pt-4 gap-x-6">
              <div className="h-[60px] w-[138px] border-[3px] border-[#EF3C23] rounded-2xl bg-[#FFEBE8] flex items-center justify-center cursor-pointer">
                <img
                  src="/assets/images/sport-car.png"
                  alt="WowCars mini car logo"
                  height="32"
                  width="75"
                />
              </div>
              <div className="h-[60px] w-[138px] rounded-2xl bg-[#FFEBE8] flex items-center justify-center cursor-pointer">
                <img
                  src="/assets/images/bike.png"
                  alt="WowCars mini car logo"
                  height="32"
                  width="75"
                />
              </div>
            </div>

            <div className="sticky top-0">
              <Filters />
            </div>
          </div>
          <div className="col-span-3">
            <div className="text-xl">
              For how many kilometers you want a car?
            </div>

            <div className="pt-4 flex items-center justify-between">
              <KilometersTabs />
              <div className="inline-flex text-xl">
                <div className="text-[#7A7A7A]">Sort by:</div>
                <select className="bg-transparent text-xl">
                  <option value="">None</option>
                </select>
              </div>
            </div>

            <div className="mt-5">
              <div className="grid grid-cols-2 gap-[25px]">
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchTemplate;
