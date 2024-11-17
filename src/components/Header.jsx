import React from "react";
import Marquee from "react-fast-marquee";
import headerData from "../utility/header.json";

function Header() {
  return (
    <Marquee className="bg-[#2C2B2B]">
      <div className="flex justify-between min-w-[165%]  sm:min-w-[170%] md:min-w-[180%] lg:min-w-[210%] xl:min-w-[250%]">
        {headerData.map((textList, index) => (
          <h1 key={index} className="text-[#FAE999] text-[21.5px] xs:text-[30px] sm:text-[35px] md:text-[40px] lg:text-[45px] font-semibold">
            {textList.text}
          </h1>
        ))}
      </div>
    </Marquee>
  );
}

export default Header;
