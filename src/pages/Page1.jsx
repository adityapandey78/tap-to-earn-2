import React from "react";
import BannerBg from "../assets/Remaining images/Banner bg.webp";
const page1 = () => {
  return (
    <div className="relative w-full h-full flex justify-start items-end sm:w-[100vw] sm:h-[100vh] md:w-[100vw] md:h-[100vh] p-2 overflow-x-hidden">
      <div className="absolute w-full h-full sm:w-[100vw] sm:h-[100vh] md:w-[100vw] md:h-[100vh] sm:overflow-auto">
        
        <img src={BannerBg.src} alt="Banner-Image" className="w-full h-full object-cover" />
      </div>

      <div className=" relative flex flex-col justify-start items-start -my-[24vh] w-[70vw] px-16 sm:flex">

        <div className="flex flex-col justify-start">
          <div className="flex flex-row justify-start items-center rounded-3xl px-1 py-2 text-white font-nunitoBold text-5xl font-bold ">
            <div className="gradient-border px-2 py-7 flex justify-center items-center">
              Tap to earn
            </div>
            <p className="">Game</p>
          </div>
          <div>
            <p className=" font-nunitoBold text-gray-50 text-5xl font-bold font line-height-1.2">
              Development Company
            </p>
          </div>
        </div>
        <div className="w-[60vw] h-[27vh] my-2">
          <p className="text-gray-400 text-left text-xl font-nunitoReg weight-500">
            Metaprolane, a leading tap to earn game development company, excels
            in creating engaging tap to earn crypto games. Our innovative
            solutions offer simple gameplay, rewarding players with digital
            assets or cryptocurrencies. With accessible designs and blockchain
            integration, our tap to earn game development attracts a wide
            audience, ensuring maximum engagement and rewards
          </p>
        </div>
      </div>
    </div>
  );
};

export default page1;
