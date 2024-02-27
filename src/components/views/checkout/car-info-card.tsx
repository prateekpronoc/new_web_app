import Image from "next/image";
import React from "react";

const CarInfoCard = () => {
  return (
    <div className="bg-white border shadow py-[42px]">
      <div className="relative w-[238px] h-[191px] z-10 mx-auto">
        <div className="absolute w-[178px] h-[178px] -z-10 rounded-full bg-[#FFEBE8]"></div>
        <Image
          src="/assets/images/car-1.png"
          width={304}
          height={304}
          alt="Wow carz car image"
        />
      </div>
      <div className="text-center text-2xl font-semibold">
        Maruti suzuki XL 6
      </div>
      <div className="max-w-[401px] mx-auto">
        <div className="flex justify-between px-2 my-2">
          <div className="flex items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="18"
                viewBox="0 0 16 15"
                fill="none"
              >
                <path
                  d="M2.68 2.87329C1.96 2.36801 1.784 1.38903 2.288 0.670584C2.792 -0.039966 3.792 -0.213656 4.52 0.283729C5.24 0.789008 5.416 1.76799 4.912 2.48643C4.4 3.19698 3.408 3.37067 2.68 2.87329ZM11.2 13.421H5.544C4.36 13.421 3.352 12.5683 3.176 11.4157L1.6 3.94701H0L1.592 11.6525C1.73896 12.5849 2.21884 13.4348 2.94502 14.0486C3.6712 14.6625 4.59583 14.9999 5.552 15H11.2V13.421ZM11.384 10.263H7.48L6.656 7.02605C7.92 7.72871 9.28 8.24188 10.776 7.98924V6.30761C9.472 6.55235 8.024 6.09445 7.024 5.32074L5.712 4.31807C5.528 4.17596 5.32 4.08122 5.104 4.01806C4.84705 3.94326 4.57623 3.92706 4.312 3.97069H4.296C3.82491 4.05323 3.40592 4.31607 3.13023 4.70199C2.85455 5.08791 2.74448 5.56567 2.824 6.03129L3.904 10.7051C4.00952 11.2467 4.30276 11.7352 4.73338 12.0867C5.164 12.4382 5.70516 12.6308 6.264 12.6315H11.744L14.8 15L16 13.8158L11.384 10.263Z"
                  fill="#EF3C23"
                />
              </svg>
            </div>
            <div className="ml-1 text-xl text-[#565656]">5 seater</div>
          </div>
          <div className="flex items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="14"
                viewBox="0 0 11 14"
                fill="none"
              >
                <path
                  d="M2.75 2.1H0V0H2.75V2.1ZM0 14H2.75V11.9H0V14ZM6.875 0H4.125V2.1H6.875V0ZM4.125 14H6.875V11.9H4.125V14ZM8.25 0V2.1H11V0H8.25ZM8.9375 6.3H6.1875V3.5H4.8125V6.3H2.0625V3.5H0.6875V10.5H2.0625V7.7H4.8125V10.5H6.1875V7.7H10.3125V3.5H8.9375V6.3Z"
                  fill="#EF3C23"
                />
              </svg>
            </div>
            <div className="ml-1 text-xl text-[#565656]">Manual</div>
          </div>
          <div className="flex items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
              >
                <path
                  d="M0.8125 1.75C0.8125 1.28587 0.983705 0.840752 1.28845 0.512563C1.5932 0.184374 2.00652 0 2.4375 0L7.3125 0C7.74348 0 8.1568 0.184374 8.46155 0.512563C8.76629 0.840752 8.9375 1.28587 8.9375 1.75V8.75C9.36848 8.75 9.7818 8.93437 10.0865 9.26256C10.3913 9.59075 10.5625 10.0359 10.5625 10.5V10.9375C10.5625 11.0535 10.6053 11.1648 10.6815 11.2469C10.7577 11.3289 10.861 11.375 10.9688 11.375C11.0765 11.375 11.1798 11.3289 11.256 11.2469C11.3322 11.1648 11.375 11.0535 11.375 10.9375V7H10.9688C10.861 7 10.7577 6.95391 10.6815 6.87186C10.6053 6.78981 10.5625 6.67853 10.5625 6.5625V3.82812C10.5625 3.71209 10.6053 3.60081 10.6815 3.51877C10.7577 3.43672 10.861 3.39062 10.9688 3.39062H12.1834C12.1745 2.97412 12.1404 2.60838 12.0201 2.32138C11.9558 2.1545 11.8436 2.0141 11.7 1.92062C11.5505 1.82437 11.323 1.75 10.9688 1.75C10.861 1.75 10.7577 1.70391 10.6815 1.62186C10.6053 1.53981 10.5625 1.42853 10.5625 1.3125C10.5625 1.19647 10.6053 1.08519 10.6815 1.00314C10.7577 0.921094 10.861 0.875 10.9688 0.875C11.427 0.875 11.8089 0.97125 12.116 1.169C12.4272 1.3685 12.6311 1.65113 12.7611 1.96263C13.0008 2.53575 13 3.2445 13 3.7835V6.5625C13 6.67853 12.9572 6.78981 12.881 6.87186C12.8048 6.95391 12.7015 7 12.5938 7H12.1875V10.9375C12.1875 11.2856 12.0591 11.6194 11.8305 11.8656C11.602 12.1117 11.292 12.25 10.9688 12.25C10.6455 12.25 10.3355 12.1117 10.107 11.8656C9.8784 11.6194 9.75 11.2856 9.75 10.9375V10.5C9.75 10.2679 9.6644 10.0454 9.51202 9.88128C9.35965 9.71719 9.15299 9.625 8.9375 9.625V13.125H9.34375C9.45149 13.125 9.55483 13.1711 9.63101 13.2531C9.7072 13.3352 9.75 13.4465 9.75 13.5625C9.75 13.6785 9.7072 13.7898 9.63101 13.8719C9.55483 13.9539 9.45149 14 9.34375 14H0.40625C0.298506 14 0.195175 13.9539 0.118988 13.8719C0.0428012 13.7898 0 13.6785 0 13.5625C0 13.4465 0.0428012 13.3352 0.118988 13.2531C0.195175 13.1711 0.298506 13.125 0.40625 13.125H0.8125V1.75ZM2.84375 1.75C2.73601 1.75 2.63267 1.79609 2.55649 1.87814C2.4803 1.96019 2.4375 2.07147 2.4375 2.1875V6.5625C2.4375 6.67853 2.4803 6.78981 2.55649 6.87186C2.63267 6.95391 2.73601 7 2.84375 7H6.90625C7.01399 7 7.11733 6.95391 7.19351 6.87186C7.2697 6.78981 7.3125 6.67853 7.3125 6.5625V2.1875C7.3125 2.07147 7.2697 1.96019 7.19351 1.87814C7.11733 1.79609 7.01399 1.75 6.90625 1.75H2.84375Z"
                  fill="#EF3C23"
                />
              </svg>
            </div>
            <div className="ml-1 text-xl text-[#565656]">Manual</div>
          </div>
        </div>
        <div className="bg-white my-5 h-[95px] shadow-xl border rounded-xl px-6 py-4 w-full">
          <div className="text-xl text-[#EF3C23] font-semibold">
            Plan: 140 KM
          </div>
          <div className="mt-2 flex items-center text-xl justify-between text-[#515151]">
            <div>Free: 105 KM</div>
            <div>Extra charge: $11 /KM</div>
          </div>
        </div>
        <div className="flex justify-between text-xl mb-3.5">
          <div className="text-[#515151]">City</div>
          <div className="font-medium text-right">Bangalore</div>
        </div>
        <div className="flex justify-between text-xl mb-3.5">
          <div className="text-[#515151]">Start date</div>
          <div className="font-medium text-right">10/03/2023, 06:00</div>
        </div>
        <div className="flex justify-between text-xl mb-3.5">
          <div className="text-[#515151]">End date</div>
          <div className="font-medium text-right">15/03/2023, 10:00</div>
        </div>
        <div className="flex justify-between text-xl mb-3.5">
          <div className="text-[#515151]">Trip duration</div>
          <div className="font-medium text-right">5 Days, 4Hours </div>
        </div>

        <div className="mt-12">
          <div className="text-xl text-[#EF3C23] font-semibold">IMPORTANT</div>
          <ul className="list-disc px-4 mt-5 space-y-2">
            <li className="text-xl text-[#7A7A7A]">
              Lorem ipsum dolor sit amet consectetur. Tincidunt a purus ipsum
              massa faucibus nisl tellus.
            </li>
            <li className="text-xl text-[#7A7A7A]">
              Lorem ipsum dolor sit amet consectetur. Tincidunt a purus ipsum
              massa faucibus nisl tellus.
            </li>
            <li className="text-xl text-[#7A7A7A]">
              Lorem ipsum dolor sit amet consectetur. Tincidunt a purus ipsum
              massa faucibus nisl tellus.
            </li>
            <li className="text-xl text-[#7A7A7A]">
              Lorem ipsum dolor sit amet consectetur. Tincidunt a purus ipsum
              massa faucibus nisl tellus.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CarInfoCard;
