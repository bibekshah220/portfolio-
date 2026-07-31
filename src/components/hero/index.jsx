import Info from "./Info";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { heroNameAnimation } from "@/utils/AnimationVarients";
import { usePointerOffset, useParallaxLayer } from "@/utils/pointerMotion";
import { useRef } from "react";

const Hero = () => {
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();

  // Scroll parallax: the hero drifts down as the page scrolls, so it lags
  // behind the sections below it.
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, 80]), {
    stiffness: 100,
    damping: 20,
    restDelta: 0.5,
  });

  // Mouse parallax: text and portrait drift opposite ways, which separates
  // them into two planes without moving either enough to notice as motion.
  const pointer = usePointerOffset({ disabled: reduceMotion });
  const textLayer = useParallaxLayer(pointer.offsetX, pointer.offsetY, {
    strength: 8,
  });
  const imageLayer = useParallaxLayer(pointer.offsetX, pointer.offsetY, {
    strength: 14,
    invert: true,
  });

  return (
    <motion.section
      id="hero"
      ref={heroRef}
      style={{ y }}
      className="pt-[80px] main-container relative z-10 w-screen overflow-hidden"
      {...pointer.bind}
    >
      <div className="sm:py-[6rem] py-[3rem] lg:px-16 lg:gap-16 px-6 gap-12 relative flex sm:flex-row flex-col justify-between items-center w-full min-h-[calc(100vh-80px)]">
        <motion.div className="basis-7/12" style={{ x: textLayer.x, y: textLayer.y }}>
          <Info />
        </motion.div>
        <motion.div
          className="basis-5/12 flex items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={heroNameAnimation}
          style={{ x: imageLayer.x, y: imageLayer.y }}
        >
          {/* Idle float keeps the portrait from reading as a static cut-out. */}
          <motion.div
            className="relative w-[300px] h-[300px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden glow-ring"
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, -10, 0],
                    transition: {
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }
            }
          >
            <Image
              src="/profile.jpeg"
              alt="Bibek Shah"
              fill
              className="object-cover object-top"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
