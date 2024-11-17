import React from "react";
import coverimg from "../images/shotout.png";
import drawing from "../images/shotext.png";

function Shoutout() {
  return (
    <div className="relative">
      <img src={coverimg} className="" />
      <div class="absolute top-0 left-0 right-0 bottom-0 flex justify-center text-center items-center">
        <img src={drawing} className="p-[80px] sm:p-[100px] md:p-[170px]" />
      </div>
    
    </div>
  );
}

export default Shoutout;
