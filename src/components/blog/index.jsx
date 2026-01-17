import { motion } from "framer-motion";
import { wordsContainerNoDelay } from "@/utils/AnimationVarients";
import BlogCard from "./BlogCard";
import blogs from "../../data/blogs.json";
import TextContainer from "../common/TextContainer";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Blog = () => {
  return (
    <section id="blog" className="pt-[6rem]">
      <div className="main-container flex flex-row items-center relative sm:px-0 px-4">
        <motion.h2
          variants={wordsContainerNoDelay}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="heading2 z-10"
        >
          <TextContainer text="Blog" />
        </motion.h2>

        <div className="h-[130px] w-[90px] absolute dots-background right-0 z-0"></div>
      </div>

      <div className="main-container pt-[3rem] px-[1.5rem]">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8">
          {blogs.slice(0, 3).map((data) => (
            <BlogCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

