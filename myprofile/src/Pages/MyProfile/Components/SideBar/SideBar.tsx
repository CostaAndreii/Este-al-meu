import React from "react"


function SideBar() {
  return (
    <div className="SideBar">
      <div className="absolute top-[83px] left-[0px] [background:linear-gradient(180deg,_#5a2dc7,_#3c91ff)] w-[142px] h-[900px]" />
      <div className="absolute top-[159px] left-[18px] rounded-[300px] bg-blueviolet w-28 h-20" />
      <img
        className="absolute h-[6.44%] w-[4.03%] top-[34.33%] right-[92.85%] bottom-[59.22%] left-[3.13%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/24--basic--send.svg"
      />
      <img
        className="absolute h-[6.44%] w-[4.03%] top-[49.67%] right-[92.85%] bottom-[43.89%] left-[3.13%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/24--shopping--gift.svg"
      />
      <img
        className="absolute h-[6.44%] w-[4.03%] top-[18.89%] right-[92.85%] bottom-[74.67%] left-[3.13%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/24--basic--user.svg"
      />
    </div>
  );
}

export default SideBar;
