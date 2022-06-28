import React from "react";
import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "thisisaayushmohan",
    userImg: 'https://avatars.githubusercontent.com/u/66319691?v=4"',
    img: 'https://avatars.githubusercontent.com/u/66319691?v=4"',
    caption: "This is a DOPE!",
  },
  {
    id: "124",
    username: "thisisaayushmohan",
    userImg: 'https://avatars.githubusercontent.com/u/66319691?v=4"',
    img: 'https://avatars.githubusercontent.com/u/66319691?v=4"',
    caption: "This is a DOPE!",
  },
];

const Posts = () => {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
