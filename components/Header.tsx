import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between max-w-6xl">
        {/* Left */}
        <div className="relative w-24 h-24">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Middle */}

        {/* Right */}
      </div>
    </div>
  );
};

export default Header;
