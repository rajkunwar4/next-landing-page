import Arrow from "../assets/icons/arrow-w.svg";
import CursorImage from "../assets/images/cursor.png"
import MessageImage from "../assets/images/message.png"
import "../app/globals.css"; 

export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] custom-radial-bg top-[calc(100%-96px)] sm:top-[calc(100%-120px)] "></div>
      <div className="container relative">
        <div className="flex justify-center items-center ">
          <a
            href=""
            className="border border-white/30 rounded-lg inline-flex gap-3 items-center py-1 px-2  "
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text">
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Read more</span>
              <Arrow />
            </span>
          </a>
        </div>

        <div className="flex justify-center">
          <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center mt-8 inline-flex">
            One Task <br />
            at a Time
          </h1>
        </div>

        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>

        <div className="flex justify-center mt-8 ">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
};
