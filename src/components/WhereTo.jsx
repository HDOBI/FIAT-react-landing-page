import React from "react";
import whereCover from "../images/where-cover.png";
import whereWhite from "../images/where-white.png";

function WhereTo() {
  return (
    <a href="https://ditto.fm/where-yo-fiat" target="_blank">
      <div>
        <div className="relative">
          <img src={whereCover} />
          <div class="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-center text-white uppercase">
            <div className="flex flex-col gap-[15px] sm:gap-[60px]">
              <div>
                <a href="https://ditto.fm/where-yo-fiat" target="_blank">
                  <h1 className="text-[28px] sm:text-[50px] font-semibold">
                    Where yo fi@T?
                  </h1>
                </a>
                <p className="font-medium text-[14.5px] sm:text-[20px] -mt-[8px] sm:-mt-[15px]">
                  Produced by <span className="underline">FPWONDERFUL</span>
                </p>
              </div>
              <h1 className="text-[32px] sm:text-[60px] font-bold">
                click to stream
              </h1>
            </div>
          </div>
        </div>
        <img src={whereWhite} />
      </div>
    </a>
  );
}

export default WhereTo;
