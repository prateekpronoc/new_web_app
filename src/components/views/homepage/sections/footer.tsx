import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#EF3C23] py-10">
      <div className="container mx-auto text-white">
        <div className="grid grid-cols-4 gap-x-6">
          <div className="col-span-2">
            <img
              src="/assets/images/logo-white.png"
              width="240"
              height="105"
              alt="WowCars logo white"
              className="-ml-5"
            />
            <div className="text-xl max-w-[505px]">
              We have been successfully delivering car rental services since
              August 2016. At Wowcarz, we focus on making your travel plan come
              true by offering you affordable with hygienic interior and
              maintained car services.
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <a href="" className="text-2xl">
              Home
            </a>
            <a href="" className="text-2xl">
              FAQ’s
            </a>
            <a href="" className="text-2xl">
              Privacy policy
            </a>
            <a href="" className="text-2xl">
              Terms & conditions
            </a>
            <a href="" className="text-2xl">
              Partner with us
            </a>
          </div>
          <div>
            <div className="flex gap-x-3">
              <div className="text-xl underline text-right">
                #1029, 17TH Main Road, 2nd Block, BTM 4th Stage, Bangalore,
                560076.
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                >
                  <path
                    d="M8 10C8.55 10 9.021 9.804 9.413 9.412C9.805 9.02 10.0007 8.54933 10 8C10 7.45 9.804 6.979 9.412 6.587C9.02 6.195 8.54933 5.99933 8 6C7.45 6 6.979 6.196 6.587 6.588C6.195 6.98 5.99933 7.45067 6 8C6 8.55 6.196 9.021 6.588 9.413C6.98 9.805 7.45067 10.0007 8 10ZM8 20C5.31667 17.7167 3.31267 15.596 1.988 13.638C0.663333 11.68 0.000666667 9.86733 0 8.2C0 5.7 0.804333 3.70833 2.413 2.225C4.02167 0.741667 5.884 0 8 0C10.1167 0 11.9793 0.741667 13.588 2.225C15.1967 3.70833 16.0007 5.7 16 8.2C16 9.86667 15.3373 11.6793 14.012 13.638C12.6867 15.5967 10.6827 17.7173 8 20Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-end items-center gap-x-3 mt-3">
              <div className="text-xl text-right">+91 9844300066</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 rotate-[250deg]"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-end items-center gap-x-3 mt-3">
              <div className="text-xl text-right">support&#64;wowcarz.in</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white mt-14">
        <div className="container mx-auto">
          <div className="flex justify-end items-center mt-6 gap-x-2">
            <div className="text-white">Follow us on:</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <circle cx="18" cy="18" r="18" fill="white" />
              <rect x="7" y="7" width="22" height="22" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use transform="scale(0.00195312)" />
                </pattern>
                <image id="image0_932_1302" width="512" height="512" />
              </defs>
            </svg>
            <img
              width="36"
              height="36"
              src="/assets/images/instagram.jpg"
              alt="instagram"
              className="rounded-full"
            />
            <img
              width="36"
              height="36"
              src="/assets/images/linkedin.jpg"
              alt="instagram"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
