import Info from "./Info";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { heroNameAnimation } from "@/utils/AnimationVarients";
import dynamic from "next/dynamic";
import { useRef } from "react";

const ParticleBackground = dynamic(
  () => import("@/components/common/ParticleBackground"),
  { ssr: false }
);

const Hero = () => {
  const heroRef = useRef(null);

  // Scroll parallax: the hero drifts down as the page scrolls, so it lags
  // behind the sections below it (ported from the v2 landing hero).
  // ponytail: 80px instead of the source's 20vh — enough for the depth cue
  // while keeping the drift inside the next section's top padding.
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, 80]), {
    stiffness: 100,
    damping: 20,
    restDelta: 0.5,
  });

  return (
    <motion.section
      id="hero"
      ref={heroRef}
      style={{ y }}
      className="pt-[80px] main-container relative z-10 w-screen overflow-hidden"
    >
      {/* Animated Particle Background */}
      <ParticleBackground />

      <div className="sm:py-[6rem] py-[3rem] lg:px-16 lg:gap-16 px-6 gap-12 relative flex sm:flex-row flex-col justify-between items-center w-full min-h-[calc(100vh-80px)]">
        <Info />
        <motion.div
          className="basis-5/12 flex items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={heroNameAnimation}
        >
          <div className="relative w-[300px] h-[300px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden glow-ring">
            <Image
              src="/profile.jpeg"
              alt="Bibek Shah"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
