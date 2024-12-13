import React from "react";
import iconbg from "../assets/Remaining images/icon_bg.webp";

export const Cardpg3 = ({data}) => {
   

    return (
        <div className="inline-flex items-center justify-center gap-2.5 px-[10vw] py-[5vh] relative border-r [border-right-style:dashed] border-[#eaa2f3]">
            <div className=" flex flex-col w-[23vw]  items-center gap-2 relative">
                <div className={`w-[25vw] h-[15vh] justify-center p-2.5 bg-cover bg-[50%_50%] flex items-center gap-2.5 relative bg-[url('${iconbg.src}')]`}>
                    <img
                        className="relative w-[10vw] h-[10vw] object-cover"
                        alt="Icon"
                        src={data.iconSrc.src}
                    />
                </div>

                <div className="relative self-stretch font-nunitoBold font-bold text-white text-[2rem] text-center tracking-[0] leading-[normal]">
                    <h1>{data.heading}</h1>
                </div>

                <p className="relative self-stretch h-[20vh] font-nunitoReg text-[1rem] text-gray-400 font-bold text-center">
                    {data.content}
                </p>
            </div>
        </div>
    );
};
export default Cardpg3;