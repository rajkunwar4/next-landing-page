import Linkedin from "../assets/icons/linkedin.svg";
import Tiktok from "../assets/icons/tiktok.svg";
import Insta from "../assets/icons/insta.svg";
import Pinterest from "../assets/icons/pinterest.svg";
import X from "../assets/icons/x-social.svg";
import Youtube from "../assets/icons/youtube.svg";


export const Footer = () => {
  return (
    <div className="bg-black text-white  py-[20px] sm:py-[36px] border-t border-white/20">
      <div className="container flex flex-col sm:flex-row items-center justify-between">
        <p className="text-white/40 text-center">
          @ 2024 Your Company, Inc. All rights reserved
        </p>
        <div className="flex justify-center gap-2 mt-4 text-white/40 items-center">
          <Linkedin />
          <Insta />
          <X />
          <Youtube />
          <Pinterest />
          <Tiktok />
        </div>
      </div>
    </div>
  );
};
