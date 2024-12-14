import React from "react";
import iconbg from "../assets/Remaining images/icon_bg.webp";

export const Cardpg3 = ({data,className}) => {
   

    return (
        <div className={`inline-flex items-center justify-center gap-2.5 px-[10vw] py-[5vh] ${className}`}>
            <div className="flex flex-col w-[23vw] items-center gap-2">
                <div className="w-[25vw] h-[15vh] flex items-center justify-center p-2.5 relative">
                    <img src={iconbg.src} className="absolute" />
                    <img
                        className="relative w-[10vw] h-[10vw] object-cover"
                        alt="Icon"
                        src={data.iconSrc.src}
                    />
                </div>
                <div className="font-nunitoBold font-bold text-white text-[2rem] text-center">
                    <h1>{data.heading}</h1>
                </div>
                <p className="h-[20vh] font-nunitoReg text-[1rem] text-gray-400 font-bold text-center">
                    {data.content}
                </p>
            </div>
        </div>
    );
};
export default Cardpg3;