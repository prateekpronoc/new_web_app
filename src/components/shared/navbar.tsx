"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  const isSearchPage = pathname.includes("/search");

  return (
    <nav className="w-full bg-[#FFEBE8] shadow-xl fixed top-0 z-50">
      <div className="container mx-auto">
        <div className="h-[70px] flex justify-between items-center">
          <div>
            <Link href="/">
              <Image
                src="/assets/images/logo.png"
                alt="WowCars logo"
                width="145"
                height="62"
              />
            </Link>
          </div>
          <div className="flex items-center gap-x-4 text-sm">
            <a href="/" className="text-black hover:text-[#EF3C23]">
              Term's and condition
            </a>
            <a href="/" className="text-black hover:text-[#EF3C23]">
              Faq's
            </a>
            <div className="flex items-center gap-x-2">
              <a href="/">
                <button
                  type="button"
                  className="px-4 py-2 border-2 hover:text-white border-[#EF3C23] hover:bg-[#EF3C23]/90 active:bg-[#EF3C23] text-[#EF3C23] font-semibold rounded-full"
                >
                  Sign up
                </button>
              </a>
              <a href="/">
                <button
                  type="button"
                  className="px-4 py-2 bg-[#EF3C23] border-2 border-[#EF3C23] hover:bg-[#EF3C23]/90 active:bg-[#EF3C23] text-white font-semibold rounded-full"
                >
                  Login
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {isSearchPage ? (
        <div className="flex items-center justify-center bg-[#FFEBE8] border-t py-2 gap-x-5">
          <select className="w-[216px] h-[50px] bg-[#FFEBE8] px-3 rounded-xl border border-[#EF3C23]">
            <option value="Bangalore">Bangalore</option>
          </select>
          <button
            type="button"
            className="w-[216px] h-[50px] border border-[#EF3C23] rounded-xl text-left px-4"
          >
            10 Mar, 6:00 PM
          </button>
          <button
            type="button"
            className="w-[216px] h-[50px] border border-[#EF3C23] rounded-xl text-left px-4"
          >
            15 Mar, 10:00 AM
          </button>
          <button
            type="button"
            className="w-[216px] h-[50px] border bg-[#EF3C23] text-white border-[#EF3C23] rounded-xl text-center px-4"
          >
            Modify search
          </button>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
