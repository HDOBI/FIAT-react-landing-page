import React from "react";
import socialData from "../utility/socialicons.json";

function Socialicons() {

    console.log(socialData.icon)
  return (
    <div className="flex flex-row items-center justify-between max-w-[1200px] mx-auto py-[15px] sm:py-[20px]">
      {socialData.map((iconsList, index) => (
        <img
          key={index}
          src={iconsList.icon}
          className={`w-auto ${
            iconsList.icon === "/icons/brandcamp.png" ? "max-h-[60px]" : "max-h-[140px]"
          }`}
        />
      ))}
    </div>
  );
}

export default Socialicons;
