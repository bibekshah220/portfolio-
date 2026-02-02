import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/utils/AnimationVarients";
import { BsDownload } from "react-icons/bs";

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
        {/* Hello, I'm */}
        <motion.p
          variants={fadeInUp}
          className="text-textSecondary font-karla text-lg sm:text-xl"
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={fadeInUp}
          className="font-prompt font-bold lg:text-[4.5rem] md:text-[3.5rem] text-[2.5rem] text-primary leading-tight"
        >
          Bibek Shah
        </motion.h1>

        {/* Title with highlight */}
        <motion.p
          variants={fadeInUp}
          className="font-karla lg:text-2xl md:text-xl text-lg text-textSecondary"
        >
          And I&apos;m a{" "}
          <span className="text-[#38bdf8] font-semibold">
            Full-Stack Developer
          </span>
        </motion.p>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          className="sm:text-base text-sm text-textDim font-karla max-w-[90%] leading-relaxed mt-2"
        >
          Solving problems with code.
        </motion.p>
      </div>

      {/* Buttons */}
      <motion.div variants={fadeInUp} className="mt-4 flex flex-wrap gap-4">
        <a
          href="#"
          className="inline-flex items-center gap-2 border border-[#38bdf8] text-[#38bdf8] rounded-lg px-6 py-3 font-karla font-medium hover:border-white hover:text-white hover:shadow-[0_0_20px_#38bdf8,0_0_40px_#38bdf8] transition-all duration-300"
        >
          <BsDownload />
          <span>Download CV</span>
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 border border-[#38bdf8] text-[#38bdf8] rounded-lg px-6 py-3 font-karla font-medium hover:shadow-[0_0_20px_#38bdf8,0_0_40px_#38bdf8] transition-all duration-300"
        >
          <span>Let's Connect</span>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Info;
