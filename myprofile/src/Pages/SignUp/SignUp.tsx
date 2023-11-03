import { FunctionComponent } from "react";
import BCard from './components/AddLeave/Card';

const SignUp: FunctionComponent = () => {
  return (
    <div className="relative  w-full h-[900px] overflow-hidden text-left text-smi text-black font-inter">
      <div className="absolute top-[118px] left-[241px] text-[24px]"><BCard/></div>
      <img
        className="absolute top-[183px] left-[596px] w-[606px] h-[498px] object-cover"
        alt=""
        src="/3235815-1@2x.png"
      />
      <div className="absolute top-[25px] left-[241px] [background:linear-gradient(90deg,_#5a2dc7,_#3c91ff)] w-[966px] h-[84px] mix-blend-normal" />
      <div className="absolute top-[38px] left-[256px] text-26xl text-white">
        HCL Technologies
      </div>
      <div className="absolute top-[38px] left-[855px] text-26xl text-white inline-block w-[310px] h-14">
        Leave Tracker
      </div>
    </div>
  );
};

export default SignUp;
