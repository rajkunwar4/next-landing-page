import helixImage from "../assets/images/helix2.png";
import emojiStar from "../assets/images/emojistar.png";

import Image from "next/image";

export const CallToAction = () => {
  return (
    <div className="bg-black text-white  py-[72px] sm:py-[96px]">
      <div className="container max-w-xl mx-auto relative ">
      
        <Image src={helixImage} alt="helix"  className="hidden sm:inline absolute top-6 left-[calc(100%+36px)]  "/>
        <Image src={emojiStar} alt="emoji"  className="hidden sm:inline absolute -top-[120px] right-[calc(100%+24px)]"/>
        <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter text-center ">
          Get instant access
        </h2>
        <p className="text-white/80 text-center mt-6 text-xl ">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <form className="flex flex-col sm:flex-row mt-10 gap-2.5">
          <input
            placeholder="name@email.com"
            className="rounded-md h-12 bg-white/20 px-5 font-medium sm:flex-1 placeholder:text-[#9CA3F] outline-none"
          />

          <button className="rounded-md text-black h-12 px-5 bg-white font-medium tracking-tighter ">
            Get access
          </button>
        </form>
      </div>
    </div>
  );
};
