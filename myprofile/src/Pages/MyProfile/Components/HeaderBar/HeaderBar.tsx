import React from "react"

function HeaderBar () {
    return(
        <div className="HeaderBar">
        <div className="absolute top-[0px] left-[0px] [background:linear-gradient(90deg,_#5a2dc7,_#3c91ff)] w-[1600px] h-[84px] mix-blend-normal" />
        <div className="absolute top-[14px] left-[1267px] rounded-[70px] bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[142px] h-14 mix-blend-normal" />
        <div className="absolute top-[13px] left-[18px] text-[45px] text-white">
        Leave Tracker
      </div>
      <div className="absolute top-[30px] left-[1287px] text-xl tracking-[0.05em] inline-block w-[63px] h-[23px] [-webkit-text-stroke:1px_#000]">
        Elena
      </div>
      <img
        className="absolute top-[36px] left-[1376px] w-3.5 h-3"
        alt=""
        src="/24--arrows--chevronbottom.svg"
      />
        </div>
    )
    }

export default HeaderBar;