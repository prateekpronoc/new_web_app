import React from "react";

const HomepageHeader = () => {
  return (
    <header className="w-full top-[70px] z-10 h-[920px] relative overflow-hidden">
      <div className="absolute w-full h-full inset-0 -z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1512 982"
          fill="none"
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
        <div className="text-center pt-[52px]">
          <h1 className="text-3xl font-bold text-black">
            Rent a Vehicle Which Suits Your Purpose
          </h1>
          <p className="text-red-600 text-xl mt-1">
            Browse our Exclusive Fleet Range for both Car & Bike
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-[70px] mt-8">
          <div className="pt-7">
            <img
              src="/assets/images/car.png"
              alt="WowCars logo"
              height="333"
              className="w-full"
            />
            <div className="text-center text-xl text-black font-medium mt-10">
              We have Hatchback’s
            </div>
            <p className="text-black mt-2 w-[452px] mx-auto">
              Get your hands on hatchback for city commutes in Affordable price.
              With larger cargo/ Boot space for extra luggage.
            </p>
          </div>
          <div className="">
            <form>
              <div className="bg-[#F0DEDE] h-[60px] rounded-xl flex justify-center items-center">
                <button className="px-12 py-2 bg-[#EF3C23] rounded-full text-white font-medium">
                  Rentals
                </button>
                <button className="px-12 py-2 rounded-full text-black font-medium">
                  Subscription
                </button>
              </div>
              <div className="h-[466px] rounded-xl bg-white mt-[25px]">
                <div className="flex items-center justify-center pt-8 gap-x-6">
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
                <div className="px-10 mt-10 grid grid-cols-2 gap-x-10 gap-y-3">
                  <div>
                    <label htmlFor="city text-gray-600">Choose your city</label>
                    <select className="w-full border p-2 mt-2 text-[#EF3C23]">
                      <option value="Bengaluru">Bengaluru</option>
                    </select>
                  </div>
                  <div></div>
                  <div>
                    <label htmlFor="city text-gray-600">Pick up type</label>
                    <input
                      type="date"
                      className="w-full border p-2 mt-1 text-[#EF3C23]"
                    />
                  </div>
                  <div>
                    <label htmlFor="city text-gray-600">Choose your city</label>
                    <select className="w-full border p-2 mt-2 text-[#EF3C23]">
                      <option value="Bengaluru">Bengaluru</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="city text-gray-600">Pick up type</label>
                    <input
                      type="date"
                      className="w-full border p-2 mt-1 text-[#EF3C23]"
                    />
                  </div>
                  <div>
                    <label htmlFor="city text-gray-600">Pick up type</label>
                    <input
                      type="date"
                      className="w-full border p-2 mt-1 text-[#EF3C23]"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="px-12 py-3 bg-[#EF3C23] rounded-xl text-white font-medium mt-5"
                  >
                    Look for pricing
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomepageHeader;
