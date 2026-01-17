import { motion } from "framer-motion";
import { wordsContainerNoDelay } from "@/utils/AnimationVarients";
import TextContainer from "../common/TextContainer";

const education = [
  {
    degree: "BSc (Hons) in Computer Systems Engineering",
    institution: "ISMT College, Kathmandu",
    year: "2022-2025",
  },
  {
    degree: "+2 Science",
    institution: "V.S. Niketan College, Minbhawan",
    year: "2017-2019",
  },
  {
    degree: "SEE",
    institution: "P.V.M. Secondary English Boarding School, Bandipur",
    year: "2005-2016",
  },
];

const Education = () => {
  return (
    <section id="education" className="pt-[6rem]">
      <div className="main-container sm:px-0 px-4">
        <motion.h2
          variants={wordsContainerNoDelay}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="heading2 z-10"
        >
          <TextContainer text="Education" />
        </motion.h2>

        <div className="pt-[3rem] px-[1.5rem]">
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border-l-2 border-primary pl-4 py-2"
              >
                <h3 className="text-primary font-semibold text-lg">
                  {edu.degree}
                </h3>
                <p className="text-textDim font-light">{edu.institution}</p>
                <p className="text-textDim font-light text-sm">{edu.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

