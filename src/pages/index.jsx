import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Certifications from "@/components/certifications";
import Languages from "@/components/languages";
import Head from "next/head";
import Header from "@/components/common/header";
import AIAssistant from "@/components/common/AIAssistant";

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
        <Certifications />
        <Languages />
        <About />
        <Contact />
        <AIAssistant />
      </main>
    </>
  );
}
