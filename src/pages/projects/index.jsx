import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

import Contact from "@/components/contact";
import Header from "@/components/common/header";
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
    title: "SQL Agent Application",
    url: "https://vercel.com/bibekshah425-gmailcoms-projects/sql-agent-n2qg",
    featuredImage: "/clothing-brand.svg.avif",
    stack: ["Next.js", "SQL", "AI/ML", "Vercel"],
    description: `
      <ul style='list-style: disc; padding-left: 1rem;'>
        <li>Created an intelligent SQL agent for database query automation.</li>
        <li>Integrated AI capabilities for natural language to SQL conversion.</li>
        <li>Deployed on Vercel with optimized performance and monitoring.</li>
      </ul>
    `,
  },
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Bibek Shah</title>
      </Head>
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
