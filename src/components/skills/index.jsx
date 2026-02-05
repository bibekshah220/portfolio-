import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNode,
  FaDocker,
  FaPython,
  FaPlay,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiJest,
  SiGit,
  SiGithub,
  SiAmazonwebservices,
  SiVercel,
  SiNetlify,
  SiN8N,
  SiPostgresql,
} from "react-icons/si";

import SkillCard from "./SkillCard";
import TextContainer from "../common/TextContainer";
import { motion } from "framer-motion";
import { wordsContainerNoDelay } from "@/utils/AnimationVarients";

const data = [
  {
    icon: <FaReact color="#61DAFB" />,
    title: "React.js",
  },
  {
    icon: <SiTypescript color="#3178C6" />,
    title: "TypeScript",
  },
  {
    icon: <FaHtml5 color="#E34F26" />,
    title: "HTML5",
  },
  {
    icon: <FaCss3Alt color="#1572B6" />,
    title: "CSS3",
  },
  {
    icon: <FaJs color="#F7DF1E" />,
    title: "JavaScript (ES6+)",
  },
  {
    icon: <SiTailwindcss color="#06B6D4" />,
    title: "Tailwind CSS",
  },
  {
    icon: <FaNode color="#339933" />,
    title: "Node.js",
  },
  {
    icon: <SiExpress color="#FFFFFF" />,
    title: "Express.js",
  },
  {
    icon: <SiMongodb color="#47A248" />,
    title: "MongoDB",
  },
  {
    icon: <SiGit color="#F05032" />,
    title: "Git",
  },
  {
    icon: <SiGithub color="#FFFFFF" />,
    title: "GitHub",
  },
  {
    icon: <SiPostman color="#FF6C37" />,
    title: "Postman",
  },
  {
    icon: <FaDocker color="#2496ED" />,
    title: "Docker (Basic)",
  },
  {
    icon: <FaPlay color="#2EAD33" />,
    title: "Playwright MCP",
  },
  {
    icon: <SiPostgresql color="#4169E1" />,
    title: "PostgreSQL",
  },
  {
    icon: <SiAmazonwebservices color="#FF9900" />,
    title: "AWS (EC2, S3, IAM)",
  },
  {
    icon: <FaPython color="#3776AB" />,
    title: "Python",
  },
  {
    icon: <SiN8N color="#EA4B71" />,
    title: "n8n",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="pt-[10rem]">
      <div className="py-[2rem]">
        <div className="flex flex-row items-center relative">
          <div className="h-[130px] w-[60px] absolute dots-background left-2 z-0" />
          <motion.h2
            variants={wordsContainerNoDelay}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="heading2 z-10 main-container sm:px-0 px-[1rem]"
          >
            <TextContainer text="Skills" />
          </motion.h2>
        </div>
        <div className="main-container pt-[3rem] px-[1.5rem] w-full overflow-hidden">
          <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-4 grid-cols-3 md:gap-x-12 md:gap-y-8 gap-x-4 gap-y-4 text-primary">
            {data.map((entry, key) => (
              <div className="col-span-1" key={key}>
                <SkillCard icon={entry.icon} title={entry.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
