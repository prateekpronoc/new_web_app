import React from "react";

const Filters = () => {
  const carTypes = ["Hatchback", "Sedan", "Cross over SUV", "SUV", "Luxury "];
  const fuelTypes = ["Diesel", "Petrol"];
  const transmissionType = ["Automatic", "Manual"];
  const seatCapacity = ["5 Seater", "7 Seater"];

  return (
    <div className="mt-[25px] bg-[#FFEBE8] rounded-2xl overflow-hidden">
      <div className="bg-[#EF3C23] p-4 mb-4 rounded-t-2xl flex items-center justify-between text-white">
        <div>Filter</div>
        <div>Clear all</div>
      </div>
      <div className="px-6 space-y-[26px]">
        <div>
          <div className="text-xl">Segment</div>
          {carTypes.map((carType) => (
            <div key={carType} className="flex items-center my-4">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-5 h-5 text-blue-600 bg-gray-100 rounded border-red-600 focus:ring-blue-500 focus:ring-2"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 font-medium text-gray-900"
              >
                {carType}
              </label>
            </div>
          ))}
        </div>
        <div>
          <div className="text-xl">Fuel type</div>
          {fuelTypes.map((fuelType) => (
            <div key={fuelType} className="flex items-center my-4">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-5 h-5 text-blue-600 bg-gray-100 rounded border-red-600 focus:ring-blue-500 focus:ring-2"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 font-medium text-gray-900"
              >
                {fuelType}
              </label>
            </div>
          ))}
        </div>
        <div>
          <div className="text-xl">Transmission type</div>
          {transmissionType.map((type) => (
            <div key={type} className="flex items-center my-4">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-5 h-5 text-blue-600 bg-gray-100 rounded border-red-600 focus:ring-blue-500 focus:ring-2"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 font-medium text-gray-900"
              >
                {type}
              </label>
            </div>
          ))}
        </div>
        <div>
          <div className="text-xl">Seat capacity</div>
          {seatCapacity.map((type) => (
            <div key={type} className="flex items-center my-4">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-5 h-5 text-blue-600 bg-gray-100 rounded border-red-600 focus:ring-blue-500 focus:ring-2"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 font-medium text-gray-900"
              >
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
