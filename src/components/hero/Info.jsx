import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/utils/AnimationVarients";
import Link from "next/link";
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
        <motion.h1
          variants={fadeInUp}
          className="font-prompt font-semibold lg:text-[4rem] text-[2.3rem] text-textPrimary leading-tight"
        >
          Solving problems with <span className="text-primary relative inline-block">code<span className="text-accent animate-pulse">.</span></span>
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="sm:text-lg text-textSecondary font-karla max-w-[90%] leading-relaxed"
        >
          BSc (Hons) Computer Systems Engineering graduate<br className="hidden sm:block" />
          Building innovative solutions with the MERN stack.
        </motion.p>
      </div>
      <div className="flex-none z-10">
        <motion.div variants={fadeInUp}>
          <Link
            href="#contact"
            className="w-max flex flex-row gap-3 items-center text-primary rounded-xl py-2 px-6 bg-backgroundSecondary border border-backgroundLight duration-300 transition-all font-medium font-karla hover:bg-backgroundLight hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] z-10 group sm:text-base text-sm"
            scroll={false}
          >
            <p className="flex">Let&apos;s Connect</p>
            <BsArrowRight className="group-hover:translate-x-1 duration-300 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Info;
