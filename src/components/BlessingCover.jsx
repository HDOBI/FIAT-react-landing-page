import React from "react";
import coverimg from "../images/cover.png";

function BlessingCover() {
  return (
    <div className="relative">
      <img src={coverimg} className="max-h-[35vh]" />
      <div class="absolute top-0 left-0 right-0 bottom-0 flex justify-center text-center items-center">
        <div
          className="cover
         flex text-[15.5px] sm:text-[25px] md:text-[35px] lg:text-[45px] xl:text-[65px]"
        >
          <h1 className="font-bold text-white uppercase px-2 sm:px-4">
            blessings from my mother // music video
          </h1>
        </div>
      </div>
    </div>
  );
}

export default BlessingCover;
