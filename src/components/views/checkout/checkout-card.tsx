import React from "react";

const CheckoutCard = () => {
  return (
    <div className="bg-white border shadow px-[50px] py-[38px] h-full">
      <div className="text-2xl flex items-center">
        Select Pickup & drop location
      </div>
      <div className="max-w-[476px] mx-auto">
        <div className="flex items-center justify-between mt-7">
          <div className="flex items-center">
            <div className="border-[3px] border-[#EF3C23] rounded-full">
              <div className="w-3.5 h-3.5 bg-[#EF3C23] rounded-full m-1"></div>
            </div>
            <div className="text-xl ml-2">Self Pickup</div>
          </div>
          <div className="flex items-center">
            <div className="border-[3px] border-[#EF3C23] rounded-full">
              <div className="w-3.5 h-3.5  rounded-full m-1"></div>
            </div>
            <div className="text-xl ml-2">Home delivery</div>
          </div>
        </div>
        <div className="mt-8">
          <div className="text-xl">Pick up location</div>

          <div className="flex items-center border h-[60px] rounded-lg mt-3 px-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="27"
                viewBox="0 0 22 27"
                fill="none"
              >
                <path
                  d="M11 13.5C11.7563 13.5 12.4039 13.2354 12.9429 12.7062C13.481 12.1779 13.75 11.5425 13.75 10.8C13.75 10.0575 13.481 9.42165 12.9429 8.89245C12.4039 8.36415 11.7563 8.1 11 8.1C10.2437 8.1 9.59658 8.36415 9.0585 8.89245C8.5195 9.42165 8.25 10.0575 8.25 10.8C8.25 11.5425 8.5195 12.1779 9.0585 12.7062C9.59658 13.2354 10.2437 13.5 11 13.5ZM11 23.4225C13.7958 20.9025 15.8698 18.6129 17.2219 16.5537C18.574 14.4954 19.25 12.6675 19.25 11.07C19.25 8.6175 18.4534 6.60915 16.8602 5.04495C15.268 3.48165 13.3146 2.7 11 2.7C8.68542 2.7 6.73154 3.48165 5.13837 5.04495C3.54612 6.60915 2.75 8.6175 2.75 11.07C2.75 12.6675 3.42604 14.4954 4.77812 16.5537C6.13021 18.6129 8.20417 20.9025 11 23.4225ZM11 27C7.31042 23.9175 4.55492 21.0541 2.7335 18.41C0.911167 15.7667 0 13.32 0 11.07C0 7.695 1.10596 5.00625 3.31788 3.00375C5.52888 1.00125 8.08958 0 11 0C13.9104 0 16.4711 1.00125 18.6821 3.00375C20.894 5.00625 22 7.695 22 11.07C22 13.32 21.0893 15.7667 19.2679 18.41C17.4455 21.0541 14.6896 23.9175 11 27Z"
                  fill="#EF3C23"
                />
              </svg>
            </div>
            <div className="ml-4 text-xl">Wow carz office</div>
          </div>
        </div>

        <div className="mt-8">
          <div className="text-xl">Drop location</div>

          <div className="flex items-center border h-[60px] rounded-lg mt-3 px-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="27"
                viewBox="0 0 22 27"
                fill="none"
              >
                <path
                  d="M11 13.5C11.7563 13.5 12.4039 13.2354 12.9429 12.7062C13.481 12.1779 13.75 11.5425 13.75 10.8C13.75 10.0575 13.481 9.42165 12.9429 8.89245C12.4039 8.36415 11.7563 8.1 11 8.1C10.2437 8.1 9.59658 8.36415 9.0585 8.89245C8.5195 9.42165 8.25 10.0575 8.25 10.8C8.25 11.5425 8.5195 12.1779 9.0585 12.7062C9.59658 13.2354 10.2437 13.5 11 13.5ZM11 23.4225C13.7958 20.9025 15.8698 18.6129 17.2219 16.5537C18.574 14.4954 19.25 12.6675 19.25 11.07C19.25 8.6175 18.4534 6.60915 16.8602 5.04495C15.268 3.48165 13.3146 2.7 11 2.7C8.68542 2.7 6.73154 3.48165 5.13837 5.04495C3.54612 6.60915 2.75 8.6175 2.75 11.07C2.75 12.6675 3.42604 14.4954 4.77812 16.5537C6.13021 18.6129 8.20417 20.9025 11 23.4225ZM11 27C7.31042 23.9175 4.55492 21.0541 2.7335 18.41C0.911167 15.7667 0 13.32 0 11.07C0 7.695 1.10596 5.00625 3.31788 3.00375C5.52888 1.00125 8.08958 0 11 0C13.9104 0 16.4711 1.00125 18.6821 3.00375C20.894 5.00625 22 7.695 22 11.07C22 13.32 21.0893 15.7667 19.2679 18.41C17.4455 21.0541 14.6896 23.9175 11 27Z"
                  fill="#EF3C23"
                />
              </svg>
            </div>
            <div className="ml-4 text-xl">Same as above location</div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="text-2xl flex items-center">Coupons & offers</div>
        <div className="max-w-[476px] mx-auto">
          <div className="flex items-center border h-[60px] rounded-lg mt-3 px-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="19"
                viewBox="0 0 24 19"
                fill="none"
              >
                <path
                  d="M2.4 0C1.76348 0 1.15303 0.250222 0.702944 0.695621C0.252856 1.14102 0 1.74511 0 2.375V7.125C0.63652 7.125 1.24697 7.37522 1.69706 7.82062C2.14714 8.26602 2.4 8.87011 2.4 9.5C2.4 10.1299 2.14714 10.734 1.69706 11.1794C1.24697 11.6248 0.63652 11.875 0 11.875V16.625C0 17.2549 0.252856 17.859 0.702944 18.3044C1.15303 18.7498 1.76348 19 2.4 19H21.6C22.2365 19 22.847 18.7498 23.2971 18.3044C23.7471 17.859 24 17.2549 24 16.625V11.875C23.3635 11.875 22.753 11.6248 22.3029 11.1794C21.8529 10.734 21.6 10.1299 21.6 9.5C21.6 8.87011 21.8529 8.26602 22.3029 7.82062C22.753 7.37522 23.3635 7.125 24 7.125V2.375C24 1.74511 23.7471 1.14102 23.2971 0.695621C22.847 0.250222 22.2365 0 21.6 0H2.4ZM16.2 3.5625L18 5.34375L7.8 15.4375L6 13.6562L16.2 3.5625ZM8.172 3.61C9.348 3.61 10.296 4.54813 10.296 5.71188C10.296 6.26933 10.0722 6.80395 9.67389 7.19812C9.27557 7.5923 8.73532 7.81375 8.172 7.81375C6.996 7.81375 6.048 6.87563 6.048 5.71188C6.048 5.15442 6.27178 4.6198 6.67011 4.22563C7.06843 3.83145 7.60868 3.61 8.172 3.61ZM15.828 11.1862C17.004 11.1862 17.952 12.1244 17.952 13.2881C17.952 13.8456 17.7282 14.3802 17.3299 14.7744C16.9316 15.1686 16.3913 15.39 15.828 15.39C14.652 15.39 13.704 14.4519 13.704 13.2881C13.704 12.7307 13.9278 12.1961 14.3261 11.8019C14.7244 11.4077 15.2647 11.1862 15.828 11.1862Z"
                  fill="#EF3C23"
                />
              </svg>
            </div>
            <div className="ml-4 text-xl">Apply coupon</div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex items-center justify-between">
          <div className="text-2xl flex items-center">
            Terms and conditions.
          </div>
          <div>View all</div>
        </div>

        <ul className="list-disc px-10 mt-5 space-y-2">
          <li className="text-xl text-[#7A7A7A]">
            <div>Cancellation and Charges.</div>
            <div className="mt-2">
              Customer should inform 24 hours prior the booking start time, in
              such instances, 70% of the amount will be refunded, if failed to
              inform 24 hours prior the booking start time No-Refund will be
              done.
            </div>
          </li>
        </ul>
      </div>
      <div className="mt-10">
        <div className="flex items-center justify-between">
          <div className="text-2xl flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="mr-2"
            >
              <path
                d="M1.5 1.5V22.5H12V24H0V0H13.0664L19.5 6.43359V15H18V7.5H12V1.5H1.5ZM13.5 2.56641V6H16.9336L13.5 2.56641ZM3 6H10.5V7.5H3V6ZM16.5 9V10.5H3V9H16.5ZM3 13.5V12H16.5V13.5H3ZM3 16.5V15H12V16.5H3ZM3 19.5V18H12V19.5H3ZM16.5 16.5H24V18H16.5V16.5ZM16.5 21V19.5H24V21H16.5ZM16.5 24V22.5H24V24H16.5ZM13.5 18V16.5H15V18H13.5ZM13.5 21V19.5H15V21H13.5ZM13.5 24V22.5H15V24H13.5Z"
                fill="black"
              />
            </svg>
            Agreement policy
          </div>
          <div>
            <input
              id="default-checkbox"
              type="checkbox"
              className="w-6 h-6 text-blue-600 bg-gray-100 rounded border-red-600 focus:ring-blue-500 focus:ring-2"
            />
          </div>
        </div>
        <div className="px-10 mt-5">
          <p className="text-xl text-[#7A7A7A]">
            I hereby agree to terms and conditions with the <br /> company
          </p>
          <button className="underline text-xl text-[#26C02C] mt-4">
            View
          </button>
        </div>
      </div>

      <div className="mt-10">
        <div className="text-2xl">Payment details</div>
        <div className="mt-5 text-[#222222] text-[32px] flex items-center font-medium">
          $ 4396.36
        </div>
        <div className="flex items-center justify-between">
          <div className="list-disc text-xl text-[#07B80E]">
            inc tax & security deposit
          </div>
          <div className="text-xl underline">Fare summary</div>
        </div>
      </div>

      <div className="mt-10">
        <button
          type="button"
          className="w-full text-center font-semibold text-white bg-[#EF3C23] h-[70px] text-xl rounded-md"
        >
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default CheckoutCard;
