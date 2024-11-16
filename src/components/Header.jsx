import React from "react";
import Marquee from "react-fast-marquee";
import headerData from "../utility/header.json";

function Header() {
  return (
    <Marquee className="bg-[#2C2B2B]">
      <div className="flex justify-between min-w-[140%] sm:min-w-[150%] md:min-w-[180%] lg:min-w-[220%] xl:min-w-[250%]">
        {headerData.map((textList, index) => (
          <h1 key={index} className="text-[#FAE999] text-[35px] sm:text-[45px] font-semibold">
            {textList.text}
          </h1>
        ))}
      </div>
    </Marquee>
  );
}

export default Header;
