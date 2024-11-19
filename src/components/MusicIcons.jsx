import React from "react";
import musicIconsData from "../utility/musicIcons.json";

function MusicIcons() {
  return (
    <div className="flex flex-row items-center justify-between max-w-[1200px] mx-auto py-[35px] sm:py-[60px] px-2 sm:px-5">
      {musicIconsData.map((iconsList, index) => (
        <a href={iconsList.link} target="_blank">
        <img
          key={index}
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

export default MusicIcons;
