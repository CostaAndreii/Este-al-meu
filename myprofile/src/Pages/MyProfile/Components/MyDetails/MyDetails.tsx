import React from "react"

function MyDetails() {
    return (
      <div className="MyDetails">
      <div className="absolute top-[602px] left-[962px] bg-white box-border w-[336px] h-[265px] border-[1px] border-solid border-black" />
      <div className="absolute top-[641px] left-[1025px] text-mid tracking-[0.04em]">
        Username
      </div>
      <a
        className="absolute top-[674px] left-[1069px] [text-decoration:underline] tracking-[0.04em] text-[inherit]"
        href="mailto:elena@hcl.com"
      >
        elena@hcl.com
      </a>
      <img
        className="absolute h-[2.67%] w-[1.67%] top-[641px] right-[13.82%] bottom-[26.06%] left-[1150px] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/24--basic--eye.svg"
      />
      <div className="absolute top-[719px] left-[1025px] text-mid tracking-[0.04em]">
        Password
      </div>
      <div className="absolute top-[751px] left-[1069px] tracking-[0.04em]">
        ***************
      </div>   
      <div className="absolute top-[791px] left-[1025px] text-mid tracking-[0.04em]">
        Status
      </div>
      <div className="absolute top-[823px] left-[1066px] tracking-[0.04em]">
        Employee
      </div>
      </div>
    );
  }
  
  export default MyDetails;