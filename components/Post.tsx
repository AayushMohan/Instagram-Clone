import React from "react";
import {
  BookmarkIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

import Comments from "../Assets/comment.svg";

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import Image from "next/image";

const Post = ({ id, username, userImg, img, caption }: any) => {
  return (
    <div className="bg-white my-7 border rounded-md">
      {/* Header */}
      <div className="flex items-center p-5">
        <img
          src={userImg}
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          alt=""
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5 " />
      </div>

      {/* Image */}
      <img src={img} className="object-cover w-full" alt="" />

      {/* Buttons */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <Image src={Comments} alt="" className="btn" />
          <PaperAirplaneIcon className="btn h-6 rotate-45" />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      {/* Caption */}
      <p className="p-5 truncate">
        <span>{username} </span>
        {caption}
      </p>

      {/* Comments */}

      {/* Input Box*/}
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  );
};

export default Post;
