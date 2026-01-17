import { heroNameAnimation } from "@/utils/AnimationVarients";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const HeroImage = () => {
  return (
    <motion.div
      className="basis-5/12 flex items-center justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={heroNameAnimation}
    >
      <div className="w-full max-w-[380px] mx-auto text-primary transition-colors duration-300">
        <svg
          viewBox="0 0 500 350"
          className="w-full h-auto overflow-visible"
          aria-labelledby="hero-name"
          role="img"
        >
          <title id="hero-name">BIBEK SHAH</title>
          <g transform="rotate(-5 250 175)">
            <text
              x="50%"
              y="120"
              textAnchor="middle"
              className="font-permanent fill-current tracking-[5px]"
              fontSize="110"
              fontWeight="bold"
            >
              BIBEK
            </text>
            <text
              x="55%"
              y="260"
              textAnchor="middle"
              className="font-permanent fill-current tracking-[8px]"
              fontSize="140"
              fontWeight="bold"
            >
              SHAH
            </text>
          </g>
        </svg>
        <p className="font-karla text-textDim/70 lg:text-xl md:text-lg text-base -mt-4 tracking-[0.25em] uppercase italic text-center select-none">
          Full-Stack Developer
        </p>
      </div>
    </motion.div>
  );
};

export default HeroImage;
