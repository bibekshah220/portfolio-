import { motion } from "framer-motion";
import { wordsContainerNoDelay } from "@/utils/AnimationVarients";

import ProjectCard from "./ProjectCard";
import projects from "../../data/projects.json";
import TextContainer from "../common/TextContainer";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Projects = () => {
  return (
    <section id="projects" className="pt-[6rem]">
      <div className="main-container flex flex-row items-center relative sm:px-0 px-4">
        <motion.h2
          variants={wordsContainerNoDelay}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="heading2 z-10"
        >
          <TextContainer text="Projects" />
        </motion.h2>

        <div className="flex-none z-10 ml-auto">
          <Link
            href="/projects"
            className="w-max flex flex-row gap-3 items-center text-primary rounded-xl py-2 pl-4 pr-3 sm:bg-backgroundSecondary bg-backgroundLight border border-backgroundLight duration-150 transition-all font-light font-karla text-sm hover:bg-backgroundLight z-10"
          >
            <p className="flex">
              Explore&nbsp;<span className="sm:block hidden">More</span>
            </p>
            <BsArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="h-[130px] w-[90px] absolute dots-background right-0 z-0"></div>
      </div>

      <div className="main-container pt-[3rem] px-[1.5rem]">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-12">
          {projects.slice(0, 3).map((data) => (
            <ProjectCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
