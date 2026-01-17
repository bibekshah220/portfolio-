import { motion } from "framer-motion";
import { CiMail, CiPhone } from "react-icons/ci";
import Footer from "./Footer";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import {
  fadeAnimation,
  scaleOutAnimation,
  slideOutAnimation,
  wordsContainerNoDelay,
} from "@/utils/AnimationVarients";
import TextContainer from "../common/TextContainer";

const Contact = () => {
  return (
    <section id="contact" className="main-container">
      <div className="py-[5rem] flex flex-col justify-center items-center gap-8">
        {/* Heading */}
        <div>
          <motion.p
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideOutAnimation}
            className="text-textDim font-karla sm:max-w-[60%] text-center mx-auto"
          >
            Have an idea?
          </motion.p>

          <motion.h2
            variants={wordsContainerNoDelay}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="heading2 text-center"
          >
            <TextContainer text="Let's Connect" />
          </motion.h2>
        </div>

        {/* Email + Phone */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeAnimation}
          className="flex sm:flex-row flex-col sm:gap-8 gap-4 items-center"
        >
          {/* Email */}
          <a
            href="mailto:bibekshah425@gmail.com"
            className="py-3 px-5 flex flex-row gap-2 text-primary bg-backgroundSecondary rounded-xl shadow-md items-center hover:bg-backgroundLight duration-150 transition-all font-light text-base"
          >
            <CiMail className="text-[1.4rem]" />
            <span className="">bibekshah425@gmail.com</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+9779847306600"
            className="py-3 px-5 flex flex-row gap-2 text-primary bg-backgroundSecondary rounded-xl shadow-md items-center hover:bg-backgroundLight duration-150 transition-all font-light text-base"
          >
            <CiPhone className="text-[1.4rem]" />
            <span className="">+977 9847306600</span>
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={scaleOutAnimation}
          className="flex flex-row gap-4 items-center flex-wrap justify-center"
        >
          {/* GitHub */}
          <a
            href="https://github.com/bibekshah220"
            target="_blank"
            rel="noreferrer"
          >
            <div className="text-primary bg-backgroundSecondary hover:bg-backgroundLight duration-150 transition-all p-3 rounded-full">
              <FaGithub className="text-[1.5rem]" />
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/bibek-shah-8b460b2bb"
            target="_blank"
            rel="noreferrer"
          >
            <div className="text-primary bg-backgroundSecondary hover:bg-backgroundLight duration-150 transition-all p-3 rounded-full">
              <FaLinkedinIn className="text-[1.5rem]" />
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/9779847306600"
            target="_blank"
            rel="noreferrer"
          >
            <div className="text-primary bg-backgroundSecondary hover:bg-backgroundLight duration-150 transition-all p-3 rounded-full">
              <FaWhatsapp className="text-[1.5rem]" />
            </div>
          </a>
        </motion.div>
      </div>

      <Footer />
    </section>
  );
};

export default Contact;
