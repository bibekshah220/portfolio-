import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNode,
  FaDocker,
  FaRobot,
  FaPython,
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
} from "react-icons/si";

import SkillCard from "./SkillCard";
import TextContainer from "../common/TextContainer";
import { motion } from "framer-motion";
import { wordsContainerNoDelay } from "@/utils/AnimationVarients";

const data = [
  {
    icon: <FaReact />,
    title: "React.js",
  },
  {
    icon: <SiTypescript />,
    title: "TypeScript",
  },
  {
    icon: <FaHtml5 />,
    title: "HTML5",
  },
  {
    icon: <FaCss3Alt />,
    title: "CSS3",
  },
  {
    icon: <FaJs />,
    title: "JavaScript (ES6+)",
  },
  {
    icon: <SiTailwindcss />,
    title: "Tailwind CSS",
  },
  {
    icon: <FaNode />,
    title: "Node.js",
  },
  {
    icon: <SiExpress />,
    title: "Express.js",
  },
  {
    icon: <SiMongodb />,
    title: "MongoDB",
  },
  {
    icon: <SiGit />,
    title: "Git",
  },
  {
    icon: <SiGithub />,
    title: "GitHub",
  },
  {
    icon: <SiPostman />,
    title: "Postman",
  },
  {
    icon: <FaDocker />,
    title: "Docker (Basic)",
  },
  {
    icon: <FaRobot />,
    title: "Playwright MCP",
  },
  {
    icon: <SiAmazonwebservices />,
    title: "AWS (EC2, S3, IAM)",
  },
  {
    icon: <FaPython />,
    title: "Python",
  },
  {
    icon: <SiN8N />,
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
