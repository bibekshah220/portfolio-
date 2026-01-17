import { motion } from "framer-motion";
import { wordsContainerNoDelay } from "@/utils/AnimationVarients";
import TextContainer from "../common/TextContainer";

const languages = [
  { name: "English", proficiency: "Fluent" },
  { name: "Nepali", proficiency: "Native" },
];

const Languages = () => {
  return (
    <section id="languages" className="pt-[6rem] pb-[6rem]">
      <div className="main-container sm:px-0 px-4">
        <motion.h2
          variants={wordsContainerNoDelay}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="heading2 z-10"
        >
          <TextContainer text="Languages" />
        </motion.h2>

        <div className="pt-[3rem] px-[1.5rem]">
          <div className="flex flex-wrap gap-6">
            {languages.map((lang, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-backgroundSecondary border border-backgroundLight rounded-lg px-6 py-4 min-w-[150px]"
              >
                <h3 className="text-primary font-semibold text-lg">
                  {lang.name}
                </h3>
                <p className="text-textDim font-light text-sm">
                  {lang.proficiency}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;

