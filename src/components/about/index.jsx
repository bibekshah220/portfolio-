import { motion } from "framer-motion";
import {
  slideLeftAnimation,
  slideRightAnimation,
  wordsContainerNoDelay,
} from "@/utils/AnimationVarients";

import { BsBoxArrowInUpRight } from "react-icons/bs";
import Image from "next/image";
import { profile } from "@/assets";
import TextContainer from "../common/TextContainer";

const About = () => {
  return (
    <section id="about" className="pt-[7rem]">
      <div className="bg-backgroundSecondary w-full overflow-hidden">
        <div className="main-container relative py-[3rem]">
          <div className="h-[150px] w-[150px] absolute dots-background right-0 z-0"></div>
          <div className="sm:py-[4rem] py-[2rem] px-[1.5rem] flex sm:flex-row flex-col items-center justify-between md:gap-[4rem] gap-[2rem] sm:gap-[1rem] z-10">
            {/* LEFT SIDE IMAGE */}
            <div className="flex flex-col gap-4 z-10 basis-1/3">
              <motion.h2
                variants={wordsContainerNoDelay}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="sm:hidden block heading2 text-center"
              >
                <TextContainer text="About" />
              </motion.h2>

              <motion.div
                variants={slideRightAnimation}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                className="w-full z-10"
              >
                <Image
                  src={profile}
                  className="rounded-xl h-full w-full object-cover z-10"
                  alt="Profile"
                />
              </motion.div>
            </div>

            {/* RIGHT SIDE CONTENT */}
            <motion.div
              variants={slideLeftAnimation}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col gap-4 basis-2/3 z-10"
            >
              <h2 className="heading2 sm:block hidden">About</h2>

              <div className="flex flex-col gap-2">
                <p className="text-primary font-karla font-light">
                  Hey, I am <span className="font-semibold">Bibek Shah</span>, a
                  passionate
                  <span className="font-semibold">
                    {" "}
                    MERN Stack Developer
                  </span>{" "}
                  from Nepal with a strong foundation in full-stack web
                  development. I specialize in building scalable, secure, and
                  user-friendly web applications using the MERN Stack, backed by
                  additional experience in cloud computing, Linux systems, and
                  networking.
                  <br />
                  <br />I love creating modern, optimized, and responsive
                  digital experiences. My interests also extend to cloud
                  technologies, automation, and system administration, supported
                  by certifications in{" "}
                  <span className="font-semibold">AWS, CCNA, RHCSA</span>, and
                  more.
                  <br />
                  <br />
                  I’m always excited to collaborate with fellow developers,
                  learn modern technologies, and build impactful solutions that
                  solve real-world problems.
                </p>

                {/* EDUCATION SECTION */}
                <div>
                  <h3 className="heading3">Education</h3>
                  <div className="">
                    <p className="font-karla text-primary text-[20px]">
                      ISMT College — Kathmandu, Nepal
                    </p>
                    <p className="font-karla font-light text-primary">
                      BSc (Hons) in Computer Systems Engineering (2022–2025)
                    </p>

                    <ul className="list-disc font-karla text-primary font-extralight list-inside pt-2">
                      <li>+2 Science — V.S. Niketan College (2017–2019)</li>
                      <li>
                        SEE — P.V.M. Secondary English Boarding School
                        (2005–2016)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="w-max">
                <a
                  href="" // resume link here
                  target="_blank"
                  className="w-max flex flex-row gap-3 items-center text-primary rounded-xl py-2 pl-4 pr-5 bg-backgroundSecondary border border-backgroundLight duration-150 transition-all font-light font-karla hover:bg-backgroundLight"
                  rel="noreferrer"
                >
                  <BsBoxArrowInUpRight />
                  <span className="">Resume</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
