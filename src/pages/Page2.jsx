import React from "react";
import SquaredImg from "../assets/Remaining images/squaredhand-page2.webp";

const Page2 = () => {
  return (
    <div>
      <div id="first-half" className="flex flex-col md:flex-row w-full items-center justify-between px-[4vw] mx-[3vw] relative mb-4">
        <img
          className="relative w-full md:w-[30vw] h-auto md:h-[75vh] object-cover rounded-xl mb-4 md:mb-0"
          alt="Rectangle"
          src={SquaredImg.src}
        />

        <div className="inline-flex flex-col items-start gap-[1rem] relative flex-[0_0_auto]">
          <div className="relative w-full md:w-[55vw] mt-[-0.1rem] font-nunitoBold font-bold text-white text-3xl md:text-5xl tracking-[0] leading-[normal]">
            <h1>What Are Tap-to-Earn Games?</h1>
          </div>

          <p className="relative w-full md:w-[55vw] font-nunitoReg font-bold text-[#b8b8b8] text-base md:text-l tracking-[0] leading-[2.25rem]">
            Tap-to-earn games are revolutionizing the gaming landscape by
            rewarding players with digital assets or cryptocurrencies for
            engaging in simple in-game activities. These games rely on intuitive
            mechanics, allowing players to earn rewards just by tapping their
            screens. Similar to play-to-earn games, these games allow users to
            collect in-game tokens or unique digital assets with real-world
            value. The gameplay is simple and intuitive, requiring players to
            click buttons, complete tasks, or progress through levels to unlock
            cryptocurrency rewards. Unlike traditional blockchain games, T2E
            games focus on straightforward mechanics, making them accessible to
            all.
            <br />
            <br />
            Telegram tap-to-earn games take this concept further, combining the
            power of gaming with the massive reach of Telegram’s 1.5 billion
            users. These games feature engaging elements such as daily missions,
            upgradeable boosters, and referral programs, which multiply players’
            earning potential. With no need for separate apps, users can enjoy
            these games directly on Telegram, ensuring effortless accessibility
            and wide appeal.
          </p>
        </div>
      </div>
      <div id="second-half">
        <div className="flex flex-col items-center justify-center gap-[1.5vh] px-[5vw] py-[5vh] mx-4 md:mx-20 relative border-2 border-dashed border-[#eaa2f3] border-spacing-3">
          <h1 className="relative w-full md:w-[70vw] mt-[-0.5vh] font-nunitoBold font-bold text-white text-3xl md:text-5xl text-center tracking-[0] leading-[normal]">
            Tap Into Success with our Tap-to-Earn Game Development Services!
          </h1>

          <p className="relative w-full md:w-[70vw] font-nunitoReg font-bold text-[#b8b8b8] text-base md:text-xl text-center tracking-[0] leading-[2.25rem]">
            Tap-to-earn game development transforms gaming by allowing players
            to earn cryptocurrency with simple taps or clicks. Designed for
            seamless integration with platforms like Telegram, these games
            eliminate the need for downloads or complex setups, offering players
            an effortless and engaging experience. Particularly on Telegram,
            their popularity has exploded as games like Hamster Kombat, Catizen,
            DOGS, BLUM, and more go viral. As a trusted tap to earn game
            development company, Metaprolane specializes in creating captivating
            tap to earn crypto games from scratch. Our expert tap to earn game
            development services include fully customizable solutions, allowing
            businesses to launch branded T2E games that stand out in the market.
            <br />
            <br />
            For those seeking a faster entry into the gaming market, we offer a
            ready-to-use, cost-effective Tap-to-Earn clone script replicating
            the features of popular T2E games. Our tap to earn game development
            expertise includes creating intuitive gameplay, secure blockchain
            integration, and scalable solutions designed to attract and retain a
            global audience. These frameworks are fully adaptable, helping you
            deploy a unique and scalable gaming platform quickly. Partner with
            us to launch impactful tap to earn crypto games that deliver value
            to players and businesses alike.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page2;
