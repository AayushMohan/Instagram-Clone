import React, { useEffect, useState } from "react";
import faker from "faker";

const Stories = () => {
  const [suggestions, setSuggestions] = useState();

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    console.log(suggestions);
  }, []);

  return (
    <div>
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
      {/* Story */}
    </div>
  );
};

export default Stories;
