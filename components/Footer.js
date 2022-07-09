import React from "react";
import { SearchIcon, PlusIcon, HeartIcon } from "@heroicons/react/outline";

import { HomeIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtoms";

const Footer = () => {
  const { data: session, status } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();

  return (
    <div className="shadow-sm border-b bg-white sticky bottom-0 md:hidden z-50 px-5 py-2 items-center">
      <div className="flex justify-between items-center">
        {session ? (
          <>
            <HomeIcon
              onClick={() => router.push("/")}
              className="navBtn block"
            />
            <PlusIcon
              onClick={() => setOpen(true)}
              className="navBtn block border-[2.5px] h-7 border-black rounded-lg"
            />
            <img
              src="https://img.icons8.com/material-outlined/96/000000/compass.png"
              className="navBtn block"
            />
            <img
              src="https://img.icons8.com/ios-glyphs/48/000000/like--v2.png"
              className="navBtn block"
            />

            <img
              src={session?.user?.image}
              alt="Profile Pic"
              className="h-10 w-10 cursor-pointer rounded-full md:block"
            />
          </>
        ) : (
          <button className="hidden">Sign In</button>
        )}
      </div>
    </div>
  );
};

export default Footer;
