import React from "react";
import socialIconsData from "../utility/socialicons.json";

function Socialicons() {
  return (
    <div className="flex flex-row items-center justify-between max-w-[1200px] mx-auto py-[35px] sm:py-[60px] px-2 sm:px-5">
      {socialIconsData.map((iconsList, index) => (
        <a key={index} href={iconsList.link} target="_blank">
        <img
          src={iconsList.icon}
          className={`w-auto ${
            iconsList.icon === "/icons/brandcamp.png"
              ? "max-h-[23px] md:max-h-[60px]"
              : "max-h-[50px] md:max-h-[140px]"
          }`}
        />
        </a>
      ))}
    </div>
  );
}

export default Socialicons;
