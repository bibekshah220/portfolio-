import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

import Contact from "@/components/contact";
import Header from "@/components/common/header";
import TextContainer from "@/components/common/TextContainer";
import BlogCard from "@/components/blog/BlogCard";
import { wordsContainerNoDelay } from "@/utils/AnimationVarients";
import blogs from "../../data/blogs.json";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - Bibek Shah</title>
      </Head>
      <main className="bg-background">
        <Header />

        {/* Blog Section */}
        <section className="main-container pt-[12rem] px-[1.5rem]">
          <motion.h2
            variants={wordsContainerNoDelay}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="heading2 z-10 text-center mb-12"
          >
            <TextContainer text="Blog" />
          </motion.h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8 pb-[6rem]">
            {blogs.map((data) => (
              <BlogCard key={data.id} data={data} />
            ))}
          </div>
        </section>

        <Contact />
      </main>
    </>
  );
}

