import Image from "next/image";
import React from "react";
// import swarlatter from "@/Image/swarlatter.svg";
import swlatter from "@/Image/swlatter.svg";
import valatter from "@/Image/valatter.svg";

const Loading = () => {
  return (
    // <div className="flex justify-center items-center h-screen relative">
    //   <div className="multi-spinner-container">
    //     <div className="multi-spinner">
    //       <div className="multi-spinner">
    //         <div className="multi-spinner">

    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className=" w-[140px] h-[140px] ">
    //     {/* Animated Border Circle */}
    //     {/* <div className="absolute inset-0 rounded-full border-[8px] border-[--orange] border-t-transparent animate-spin "></div> */}
    //     {/* Static Image */}
    //     <Image
    //       src={swarlatter}
    //       alt="swarlatter"
    //       className="rounded-full w-[60px] h-[60px] absolute left-[45.5%] top-1/2 transform -translate-x-1/2 -translate-y-1/2"
    //     />
    //   </div>
    // </div>

    <div className="flex justify-center items-center h-screen">
      <div className="flex items-center relative p-6">
        <div className="absolute inset-0 rounded-full border-[8px] border-[--orange] border-t-transparent animate-spin p-14 -left-[130%] -top-[90%]"></div>
        <Image
          src={swlatter}
          alt="swlatter"
          className="w-[50px] h-[50px] absolute -left-[100%] loading-image slide animate-full-to-static"
        />
        <Image
          src={valatter}
          alt="valatter"
          className="w-[90px] h-[90px] absolute left-[0%] loading-image animate-full-to-static"
        />
      </div>

      {/* <div className="flex items-center relative p-6">
        <Image
          src={swlatter}
          alt="swlatter"
          className=" w-[90px] h-[90px] absolute -left-[100%]"
        />
        <Image
          src={valatter}
          alt="valatter"
          className=" w-[90px] h-[90px] absolute left-[0%]"
        />
      </div> */}
    </div>
  );
};

export default Loading;
