import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const LongNavbar = ({ data }) => {
  const router = useRouter();

  return (
    <nav>
      <div className="sm:flex hidden items-center sm:gap-10 gap-6">
        {data.map((entry, key) => {
          const isActive = router.pathname === entry.link;
          return (
            <Link
              href={entry.link}
              key={key}
              className="relative py-1 px-1 group"
            >
              <span
                className={`relative z-10 uppercase transition-colors duration-200 ${isActive ? "text-primary font-medium" : "text-textSecondary group-hover:text-primary"
                  }`}
              >
                {entry.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="navbar-underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {/* Hover effect for non-active items */}
              {!isActive && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"
                />
              )}
            </Link>
          );
        })}

        {/* SOCIAL ICONS */}
        <div className="flex flex-row gap-4 items-center text-primary text-[22px]">
          <a
            href="https://www.linkedin.com/in/bibek-shah-8b460b2bb"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 duration-200 transition-transform"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://github.com/bibekshah220"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 duration-200 transition-transform"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default LongNavbar;
