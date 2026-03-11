import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/utils/AnimationVarients";
import { BsArrowRight } from "react-icons/bs";

const Info = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
      className="basis-7/12 flex flex-col gap-6 justify-center"
    >
      <div className="flex flex-col gap-4">
        {/* Greeting */}
        <motion.p
          variants={fadeInUp}
          className="text-[#d4d4d4] font-karla text-lg sm:text-xl"
        >
          Hi, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={fadeInUp}
          className="font-prompt font-bold lg:text-[4.5rem] md:text-[3.5rem] text-[2.5rem] text-primary leading-tight tracking-tight"
        >
          Bibek Shah
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={fadeInUp}
          className="font-prompt font-semibold lg:text-2xl md:text-xl text-lg text-[#38bdf8] uppercase tracking-widest"
        >
          Software Engineer
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={fadeInUp}
          className="sm:text-base text-sm text-[#d4d4d4] font-karla max-w-[90%] leading-relaxed mt-1"
        >
          Solving problems with code — building high-performance systems and cloud-native solutions.
        </motion.p>
      </div>

      {/* Connect Button */}
      <motion.div variants={fadeInUp} className="mt-2">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 border border-textDim text-textSecondary rounded-full px-6 py-3 font-karla font-medium text-sm hover:border-primary hover:text-primary transition-all duration-300 group"
        >
          <span>Connect</span>
          <BsArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Info;
