import BasM from "./Modal";
function Profile() {
    return (
      <div className="Profile">
      <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white w-[165px] h-[137px]" />
       <div className="absolute top-[1.08%] right-[7.27%] bottom-[86.02%] left-[78.18%]">
         <BasM /></div>
        <img
          className="absolute top-[21.51%] right-[32.73%] bottom-[47.31%] left-[32.12%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/24--basic--user1.svg"
        />
        <div className="absolute top-[162px] left-[54px] tracking-[0.04em]">
          Elena
        </div>
      </div>
    );
  }
  
  export default Profile;
  