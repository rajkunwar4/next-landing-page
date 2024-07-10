import logoImage from "../assets/images/logosaas.png";
import Image from "next/image";
import MenuIcon from "../assets/icons/menu.svg";
import "../app/globals.css";

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className=" px-4 ">
        <div className=" py-4  flex justify-between items-center  ">
          <div className="relative ">
            <div className="absolute w-full top-2 bottom-0 logo-gradient blur-md"></div>
            <Image
              src={logoImage}
              alt="logo-img"
              priority
              className="h-12 w-12 relative"
            />
          </div>

          <div className="sm:hidden border border-white border-opacity-30 h-10 w-10 inline-flex items-center justify-center rounded-lg">
            <MenuIcon className="text-white" />
          </div>
          <nav className="hidden sm:flex text-white flex gap-6 text-opacity-60 items-center ">
            <a href="" className="hover:text-white transition">
              About
            </a>
            <a href="" className="hover:text-white transition">
              Features
            </a>
            <a href="" className="hover:text-white transition">
              Update
            </a>
            <a href="" className="hover:text-white transition">
              Help
            </a>
            <a href="" className="hover:text-white transition">
              Customers
            </a>
            <a href="" className="bg-white text-black py-2 px-4 rounded-lg">
              Get for free
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};
