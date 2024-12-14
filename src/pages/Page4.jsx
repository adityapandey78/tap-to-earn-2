import React from "react";

const Page4 = () => {
    const data=[
        {
            title: "Growing Popularity of Crypto Gaming",
            content: "Tap-to-earn crypto games are in demand, offering players real-world rewards and giving businesses a profitable way to enter the booming blockchain gaming market."
        },
        {
            title: "Simplified Gameplay Mechanics",
            content: "T2E game development focuses on simple and engaging mechanics, making these games accessible to a wide audience and ensuring consistent player engagement."
        },
        {
            title: "Seamless Platform Integration",
            content: "Tap-to-earn game development services ensure effortless integration with platforms like Telegram, allowing players to access games directly without additional downloads or account creation."
        },
        {
            title: "Monetization Opportunities",
            content: "Tap-to-earn crypto games generate diverse revenue streams through in-game purchases, cryptocurrency rewards, subscriptions, and advertising, maximizing profits for businesses."
        },
        {
            title: "Scalability and Customization",
            content: "A top tap-to-earn game development company offers scalable, flexible solutions tailored to your brand’s goals, ensuring a unique and competitive gaming platform."
        },
        {
            title: "Low Development Costs",
            content: "Clone scripts and prebuilt frameworks reduce tap-to-earn game development costs, helping businesses quickly enter the market with minimal investment and faster deployment."
        },
        {
            title: "Global Appeal",
            content: "Tap-to-earn games attract worldwide audiences by merging simple gameplay with crypto rewards, creating widespread interest and participation in various regions."
        },
        {
            title: "Blockchain Integration Benefits",
            content: "Tap-to-earn game development leverages blockchain technology for secure transactions, transparency, decentralized ecosystems, and a trust-building gaming experience for all participants."
        },
        {
            title: "Branding Opportunities",
            content: "White-label solutions enable businesses to brand tap-to-earn crypto games, enhancing visibility and creating unique gaming experiences under their exclusive name and identity."
        },
        {
            title: "Future-Ready Investment",
            content: "Tap-to-earn game development is a forward-looking opportunity, aligning with the rising adoption of blockchain gaming and the growing popularity of cryptocurrency rewards."
        }
    ]
    return (
        <div className="w-full h-[100vh] relative m-2">
            <div id="box1" className="relative border-l-2 border-r-2 border-dashed border-[#eaa2f3] mx-32 pt-1">
                <div id="box2" className="relative h-auto mx-32 my-24 border-2 border-r-2 border-l-2 border-dashed border-[#eaa2f3]">
                    <div id="title" className="flex flex-col items-center justify-center gap-4 mt-10">
                        <h1 className="text-white font-nunitoBold text-5xl text-center font-bold mt-4 text-wrap w-[48vw] leading-normal h-auto">
                            Why Invest in Tap-To-Earn Game Development?
                        </h1>
                        <p className="text-gray-400 text-center font-nunitoReg font-bold mt-4 leading-6 text-xl text-wrap">
                            Tap-to-earn game development combines simple gameplay with cryptocurrency rewards, providing businesses a lucrative opportunity to attract players and create engaging blockchain-powered gaming experiences.
                        </p>
                    </div>
                    <div id="table" className="grid grid-cols-1 mx-3 my-3">
                        {data.map((item, index) => (
                            <div key={index} className={`relative flex flex-row items-center justify-between border-2 border-dashed border-[#eaa2f3] p-2 ${index % 2 === 0 ? 'border-t-2' : 'border-y-0'} ${index === data.length - 1 ? 'border-b-2' : ''}`}>
                                <div className="w-[24vw] h-[16vh] flex items-center">
                                    <h1 className="text-white text-wrap font-nunitoBold text-3xl text-start font-bold leading-normal">
                                        {item.title}
                                    </h1>
                                </div>
                                <div className="flex items-center w-[24vw] p-2">
                                    <p className="text-gray-400 text-wrap text-start font-nunitoReg font-bold leading-6 text-lg">
                                        {item.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page4;
