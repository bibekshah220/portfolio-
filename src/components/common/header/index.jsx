import Link from "next/link";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";
import Hamburger from "hamburger-react";
import MobileNavBar from "./MobileNavBar";
import LongNavbar from "./LongNavbar";
import Image from "next/image";
import { useTheme } from "../../../utils/ThemeContext";

const navData = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Projects",
    link: "/projects",
  },
  {
    label: "Blog",
    link: "/blog",
  },
];

const Header = () => {
  const [mobileNavBar, setMobileNavBar] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`fixed top-0 w-full z-20 py-4 bg-background dark:bg-background bg-opacity-80 dark:bg-opacity-80 backdrop-blur-xl transition-all duration-500 overflow-hidden ${mobileNavBar ? "h-[216px]" : "h-[80px]"
        }`}
    >
      <div className="sm:main-container">
        <div className="flex flex-row justify-between items-center">
          <Link
            href="/"
            className="font-karla text-[2rem] font-bold tracking-tighter hover:text-primary dark:hover:text-primary text-textSecondary dark:text-textSecondary transition-all duration-150 px-4 relative flex items-center justify-center group"
          >
            <span className="relative z-10">BS</span>
            <motion.div
              className="absolute bg-primary/20 dark:bg-primary/30 rounded-full blur-md"
              initial={{ width: "0%", height: "0%", opacity: 0 }}
              animate={{
                width: "140%",
                height: "140%",
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ paddingBottom: "100%" }} // trick to keep aspect ratio if needed, but fixed size is safer for text
            />
            {/* Alternative Approach: Fixed size glow centered */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary/20 rounded-full blur-md -z-10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </Link>
          <div className="flex items-center gap-4">
            <LongNavbar data={navData} />
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-backgroundLight dark:hover:bg-backgroundSecondary transition-colors duration-200"
              aria-label="Toggle Theme"
              whileTap={{ rotate: 15, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              {theme === "light" ? (
                <FiMoon size={22} className="text-primary" />
              ) : (
                <FiSun size={22} className="text-primary" />
              )}
            </motion.button>
            <div className="sm:hidden block">
              <Hamburger
                toggled={mobileNavBar}
                toggle={setMobileNavBar}
                size={22}
                duration={0.5}
                color={theme === "light" ? "#000000" : "#FFFFFF"}
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
