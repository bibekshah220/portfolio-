import React from "react";
import { motion } from "framer-motion";

import Contact from "@/components/contact";
import Header from "@/components/common/header";
import Seo from "@/components/common/Seo";
import TextContainer from "@/components/common/TextContainer";
import ProjectCard from "@/components/projects/ProjectCard";
import { wordsContainerNoDelay } from "@/utils/AnimationVarients";
import projects from "@/data/projects.json";


export default function Projects() {
  return (
    <>
      <Seo
        title="Projects - Bibek Shah | MERN Stack & Full-Stack Web Projects"
        description="Selected full-stack projects by Bibek Shah, including MERN stack e-commerce platforms, AI tooling, tour management systems and cloud-deployed web applications."
        path="/projects"
      />
      <main className="bg-background">
        <Header />

        {/* Projects Section */}
        <section className="main-container pt-[12rem] px-[1.5rem]">
          <motion.h2
            variants={wordsContainerNoDelay}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="heading2 z-10 text-center mb-12"
          >
            <TextContainer text="Projects" />
          </motion.h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-12 pb-[6rem]">
            {projects.map((data) => (
              <ProjectCard key={data.id} data={data} />
            ))}
          </div>
        </section>

        <Contact />
      </main>
    </>
  );
}
