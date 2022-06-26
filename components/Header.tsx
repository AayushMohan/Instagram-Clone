import Image from "next/image";
import React from "react";
import {
  SearchIcon,
  PlusIcon,
  HeartIcon,
  MenuIcon,
} from "@heroicons/react/outline";

import { HomeIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* Left */}
        <div className="relative w-24  hidden lg:inline-grid cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Middle - Search input field*/}
        <div>
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-[#efefef] w-full pl-10 sm:text-sm border-gray-300 rounded-lg border-none focus:ring-black focus:border-black"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          <img
            src="https://img.icons8.com/fluency-systems-regular/96/000000/facebook-messenger.png"
            className="navBtn"
          />
          <PlusIcon className="navBtn border-[2.5px] h-7 border-black rounded-lg" />
          <img
            src="https://img.icons8.com/material-outlined/96/000000/compass.png"
            className="navBtn "
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
