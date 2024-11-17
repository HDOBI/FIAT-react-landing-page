import React from "react";
import socialData from "../utility/socialicons.json";

function Socialicons() {
  return (
    <div className="flex flex-col gap-[45px] sm:gap-0 md:flex-row items-center justify-between max-w-[1200px] mx-auto py-[35px] sm:py-[60px] px-2 sm:px-5">
      {socialData.map((iconsList, index) => (
        <img
          key={index}
          src={iconsList.icon}
          className={`w-auto ${
            iconsList.icon === "/icons/brandcamp.png"
              ? "max-h-[85px] md:max-h-[60px] pt-[25px] md:pt-0"
              : "max-h-[140px]"
          }`}
        />
      ))}
    </div>
  );
}

export default Socialicons;
