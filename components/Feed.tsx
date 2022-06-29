import React from "react";
import MiniProfile from "./MIniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

const Feed = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 max-w-3xl xl:grid-cols-3 xl:max-x-6xl mx-auto">
      <section className="col-span-2">
        {/* Stories */}
        <Stories />
        {/* Posts */}
        <Posts />
      </section>

      <section>
        {/* Mini Profile */}
        <MiniProfile />
        {/* Suggestions */}
        <Suggestions />
      </section>
    </main>
  );
};

export default Feed;
