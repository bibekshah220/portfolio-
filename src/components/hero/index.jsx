import Info from "./Info";
import Image from "next/image";
import { motion } from "framer-motion";
import { heroNameAnimation } from "@/utils/AnimationVarients";
import dynamic from "next/dynamic";

const ParticleBackground = dynamic(
  () => import("@/components/common/ParticleBackground"),
  { ssr: false }
);

const Hero = () => {
  return (
    <section
      id="hero"
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
    </section>
  );
};

export default Hero;
