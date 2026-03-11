import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Head from "next/head";
import Header from "@/components/common/header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Full-Stack Software Engineer - Bibek Shah</title>
      </Head>
      <main className="bg-background">
        <Header />
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  );
}

