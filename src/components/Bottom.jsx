import React from 'react'
import coverimg from "../images/bottom.png";
import logo from "../images/bottom-logo.png";

function Bottom() {
  return (
    <div className="relative">
    <img src={coverimg} className="" />
    <div class="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <img src={logo} className='max-w-[210px] sm:max-w-[400px] md:max-w-[600px]' />
    </div>
  </div>
  )
}

export default Bottom