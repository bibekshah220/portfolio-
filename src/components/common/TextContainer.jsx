import React from "react";
import { motion } from "framer-motion";
import { letterAnimation } from "@/utils/AnimationVarients";

const TextContainer = ({ text }) => {
  const letters = Array.from(text);

  return letters.map((letter, index) => (
    <motion.span variants={letterAnimation} key={index} className="font-prompt">
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  ));
};

export default TextContainer;
