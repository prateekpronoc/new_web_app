"use client";
import React, { useState } from "react";

const KilometersTabs = () => {
  const tabData = ["140 KM", "240 KM", "500 KM", "620 KM"];
  const [activeTab, setActiveTab] = useState(tabData[0]);

  const handleActiveTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="h-[60px] flex items-center rounded-2xl overflow-hidden bg-[#FFEBE8]">
      {tabData.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => handleActiveTab(tab)}
          className={`${
            activeTab === tab ? "bg-[#EF3C23] text-white" : ""
          } text-xl px-[47px] py-[18px] rounded-2xl`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default KilometersTabs;
