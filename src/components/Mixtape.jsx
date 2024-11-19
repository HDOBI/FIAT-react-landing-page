import React from "react";
import image from "../images/mixtape-back.png";
import textData from "../utility/mixtape.json";

function Mixtape() {
  return (
    <div className="relative">
      <img src={image} />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center text-center items-center pt-1.5 pb-3 sm:pt-3 sm:pb-6 ">
        <div className="flex flex-col h-full justify-between uppercase text-[17px] leading-[24px] sm:text-[25px] sm:leading-[32px] md:text-[35px] md:leading-[42px] lg:text-[45px] lg:leading-[52px] xl:text-[55px] xl:leading-[63px] px-6">
          {textData.map((textList, index) => (
            <h1 key={index} className="font-bold text-[#893847]">
              {textList.text}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mixtape;
