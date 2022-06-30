import Image from "next/image";
import React from "react";
import { SearchIcon, PlusIcon, HeartIcon } from "@heroicons/react/outline";

import { HomeIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtoms";

const Header = () => {
  const { data: session, status } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50 ">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto m-2">
        {/* Left */}
        <div
          onClick={() => router.push("/")}
          className="relative w-24 lg:inline-grid cursor-pointer"
        >
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Mobile Setup */}
        <div
          onClick={() => router.push("/")}
          className="flex items-start order-first w-1/4 md:hidden"
        >
          <img
            src="https://img.icons8.com/fluency-systems-regular/48/000000/camera.png"
            className="navBtn h-7 mt-.5 block"
          />
        </div>

        {/* Middle - Search input field*/}
        <div>
          <div className="relative mt-1 p-3 rounded-md hidden md:block">
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
          <HomeIcon onClick={() => router.push("/")} className="navBtn" />

          {session ? (
            <>
              <div className="relative navBtn block">
                <img
                  src="https://img.icons8.com/fluency-systems-regular/96/000000/facebook-messenger.png"
                  className=" block h-7 md:h-8"
                />
                <div className="absolute -top-1 -right-3 flex items-center justify-center animate-pulse text-white text-xs w-5 h-5 bg-red-500 rounded-full">
                  3
                </div>
              </div>

              <PlusIcon
                onClick={() => setOpen(true)}
                className="navBtn border-[2.5px] h-7 border-black rounded-lg"
              />
              <img
                src="https://img.icons8.com/material-outlined/96/000000/compass.png"
                className="navBtn "
              />
              <img
                src="https://img.icons8.com/ios-glyphs/48/000000/like--v2.png"
                className="navBtn"
              />

              <img
                onClick={signOut}
                src={session?.user?.image}
                alt="Profile Pic"
                className="h-10 w-10 cursor-pointer rounded-full hidden md:block"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
