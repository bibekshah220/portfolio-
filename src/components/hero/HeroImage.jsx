import { heroNameAnimation } from "@/utils/AnimationVarients";
import { motion } from "framer-motion";
import React from "react";
import GlowingAvatar from "../GlowingAvatar";
import { profile } from "@/assets";

const HeroImage = () => {
  return (
    <motion.div
      className="basis-5/12 flex items-center justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={heroNameAnimation}
    >
      <GlowingAvatar
        src={profile}
        size={400}
        className="w-full max-w-[450px] mx-auto"
      />
    </motion.div>
  );
};

export default HeroImage;
