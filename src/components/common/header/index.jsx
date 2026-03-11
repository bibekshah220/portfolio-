import Link from "next/link";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Hamburger from "hamburger-react";
import MobileNavBar from "./MobileNavBar";
import LongNavbar from "./LongNavbar";

const navData = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Projects",
    link: "/projects",
  },
];

const Header = () => {
  const [mobileNavBar, setMobileNavBar] = useState(false);

  return (
    <div
      className={`fixed top-0 w-full z-20 py-4 bg-background bg-opacity-80 backdrop-blur-xl transition-all duration-500 overflow-hidden ${mobileNavBar ? "h-[180px]" : "h-[80px]"
        }`}
    >
      <div className="sm:main-container">
        <div className="flex flex-row justify-between items-center">
          <Link
            href="/"
            className="font-karla text-[2rem] font-bold tracking-tighter hover:text-textSecondary text-primary transition-all duration-150 px-4 relative flex items-center justify-center"
          >
            <span className="relative z-10">BS</span>
          </Link>
          <div className="flex items-center gap-4">
            <LongNavbar data={navData} />
            <div className="sm:hidden block">
              <Hamburger
                toggled={mobileNavBar}
                toggle={setMobileNavBar}
                size={22}
                duration={0.5}
                color="#FFFFFF"
                rounded
              />
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden block w-full z-50">
        <MobileNavBar data={navData} />
      </div>
    </div>
  );
};

export default Header;
