import React from "react";
import Stories from "./Stories";

const Feed = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 max-w-3xl xl:grid-cols-3 xl:max-x-6xl">
      <section>
        {/* Stories */}
        <Stories />
        {/* Posts */}
      </section>

      <section>
        {/* Mini Profile */}
        {/* Suggestions */}
      </section>
    </main>
  );
};

export default Feed;
