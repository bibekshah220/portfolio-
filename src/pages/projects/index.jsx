import React from "react";
import { motion } from "framer-motion";

import Contact from "@/components/contact";
import Header from "@/components/common/header";
import Seo from "@/components/common/Seo";
import TextContainer from "@/components/common/TextContainer";
import ProjectCard from "@/components/projects/ProjectCard";
import { wordsContainerNoDelay } from "@/utils/AnimationVarients";

// Projects
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform (MERN Stack)",
    url: "https://e-commerce-client-omega-ashen.vercel.app/",
    featuredImage: "/ecommerce-project.png",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    description: `
      <ul style='list-style: disc; padding-left: 1rem;'>
        <li>Developed a full-featured e-commerce system with authentication, cart management, and secure checkout.</li>
        <li>Built reusable React components and backend APIs using Node.js and Express.</li>
        <li>Integrated MongoDB for dynamic product and inventory management.</li>
      </ul>
    `,
  },
  {
    id: 2,
    title: "Product Hunt Clone",
    url: "https://client-ph-git-main-bibekshah425-gmailcoms-projects.vercel.app/auth",
    featuredImage: "/tour.png",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
    ],
    description: `
      <ul style='list-style: disc; padding-left: 1rem;'>
        <li>Built a product discovery platform with authentication and user management.</li>
        <li>Implemented secure user authentication with JWT tokens.</li>
        <li>Developed RESTful APIs for product submissions and voting system.</li>
      </ul>
    `,
  },
  {
    id: 3,
    title: "Multi-Agent AI Research System",
    url: "https://multi-agent-ai-o2ssfixv3gvbjdnyhhtmtl.streamlit.app/",
    featuredImage: "/multi-agent-ai.png",
    stack: ["Python", "LangChain", "LangGraph", "Streamlit", "Google Gemini"],
    description: `
      <ul style='list-style: disc; padding-left: 1rem;'>
        <li>Built an autonomous multi-agent pipeline that researches, reads, writes, and critiques reports end to end.</li>
        <li>Orchestrated Research, Reader, Writer, and Critic agents using LangChain and LangGraph.</li>
        <li>Integrated live web search, scraping, and a Google Gemini LLM behind a Streamlit UI.</li>
      </ul>
    `,
  },
  {
    id: 4,
    title: "M-EACH Group of Technology",
    url: "https://m-each.vercel.app/",
    featuredImage: "/m-each-browser-mockup.svg",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    description: `
      <ul style='list-style: disc; padding-left: 1rem;'>
        <li>Built a corporate website for a telecom infrastructure firm offering network deployment, site management, and power distribution.</li>
        <li>Developed responsive pages with light/dark theming and smooth animated sections.</li>
        <li>Showcased services, projects, and company milestones with an interactive, modern UI.</li>
      </ul>
    `,
  },
];

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
