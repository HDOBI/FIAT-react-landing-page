import React from "react";
import image from "../images/mixtape-back.png";
import textData from "../utility/mixtape.json";

function Mixtape() {
  return (
    <div className="relative">
      <img src={image} />
      <div class="absolute top-0 left-0 right-0 bottom-0 flex justify-center text-center items-center">
        <div className="flex flex-col h-full justify-between uppercase text-[15.5px] sm:text-[25px] md:text-[35px] lg:text-[45px] xl:text-[65px]">
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
