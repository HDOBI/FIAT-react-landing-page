import React,{useState} from "react";
import coverimg from "../images/shotout.png";
import drawingGif from "../images/transparent.gif";
import transparentSvgText from "../utility/transparentSvg-text.json";

function Shoutout() {

  const [showSvg, setShowSvg] = useState(false)
  
  return (
    <div className="relative" onClick={() => setShowSvg(!showSvg)}>
      <img src={coverimg} className="" />
      <div class="absolute top-0 left-0 right-0 bottom-0 flex justify-center text-center items-center">
        <div  className={`relative cursor-pointer transition-opacity ease-in-out duration-1000 ${showSvg ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <img src={drawingGif} className="max-w-[320px] xs:max-w-[400px] sm:max-w-[800px]" />
        <div className="absolute top-0 left-0 right-0 bottom-0 xs:px-5 uppercase text-center flex flex-col justify-between">
        <h1 className="text-[#FF0707] text-shadow font-bold text-[14px] leading-[15px] xs:text-[16px] xs:leading-[17px] sm:text-[25px] sm:leading-[26px]">SHoutout to ALL the producers who provided inspiration for this tape //</h1>
        <div className="flex flex-col gap-1.5 xs:gap-2.5 sm:gap-4">
        {transparentSvgText.map((textList, index) => (
            <h1 key={index} className="font-semibold text-[12px] leading-[13px] xs:text-[14px] xs:leading-[15px] sm:text-[22px] sm:leading-[23px] text-shadow  text-black">
              {textList.text}
            </h1>
          ))}
        </div>
        <p className="text-shadow font-semibold pb-1.5 text-[11px] xs:text-[12px] sm:text-[14.5px]">SPecial shout OUt To The Graphic designer @OLUYEMIJR</p>
        </div>
        </div>
      </div>
    
    </div>
  );
}

export default Shoutout;
