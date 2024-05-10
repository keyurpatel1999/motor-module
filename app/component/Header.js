"use client";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white h-[240px] px-10 flex flex-col md:flex-col md:h-[240px] lg:h-[120px] lg:flex-row items-center justify-between border-b-2 gap-3">
      <div className="flex items-center mb-2 md:mb-0">
        <Image
          src="/headerLogo.png"
          alt="Logo"
          className="mr-2"
          height={65}
          width={255}
        />
      </div>
      <div className="flex justify-center flex-1 mb-2 md:mb-0 relative items-center">
        <div className="relative mt-2 rounded-md shadow-sm w-full">
          <div className="absolute inset-y-0 left-0 flex items-center">
            <select
              id="country"
              name="country"
              autoComplete="country"
              className="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm border-e-2"
            >
              <option>All</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <input
            type="text"
            name="phone-number"
            id="phone-number"
            className="w-full px-4 py-5 rounded-full border-[#C9C9C9] outline-none border-2 pl-24"
            placeholder="Find anything to everything"
          />
        </div>
        <div className="absolute right-[-8px] flex gap-5">
          <Image
            src="/mic.svg"
            alt="Group"
            className="mr-2"
            width={30}
            height={30}
          />
          <Image
            src="/radio.svg"
            alt="Group"
            className="mr-2"
            width={30}
            height={30}
          />
          <Image
            src="/robot.svg"
            alt="Group"
            className="mr-2 mt-2 rounded-full border-solid border-[#003DCA] border-[1px]"
            width={65}
            height={65}
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <Image
            src="/language.svg"
            alt="Group"
            className="mr-2"
            width={30}
            height={30}
          />
        </div>
        <span className="inline-flex items-center gap-x-1.5 rounded-full p-3 px- text-xs font-medium text-white bg-black ring-1 ring-inset">
          AI Tools
        </span>
        <div className="h-[37px] w-[130px] bg-[#0047EB] rounded-full flex items-center">
          <div className="h-[37px] w-[126px] text-white bg-[#0047EB] rounded-full flex items-center text-center gap-1">
            <div className="h-[28px] w-[60px] text-white bg-[#F800C0] rounded-full ml-1.5">
              Login
            </div>{" "}
            Signup
          </div>
        </div>
        <span className="h-[37px] w-[51px] inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset bg-black">
          <Image
            src="/threeLine.svg"
            alt="Group"
            className="mr-2"
            width={30}
            height={30}
          ></Image>
        </span>
      </div>
    </header>
  );
};

export default Header;
