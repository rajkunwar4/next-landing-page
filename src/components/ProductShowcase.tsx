import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";

export const ProductShowcase = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-[96px] bg-gradient-to-b from-black to-[#5D2CA8]">
      <div className="container text-center">
        <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter">
          Intuitive interface
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-white/70 mt-6  ">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes,
            one task at a time.
          </p>
        </div>
        <div className="flex justify-center">
        <Image src={appScreen} alt="" className="mt-14" />
        </div>
        
      </div>
    </div>
  );
};
