import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Header from "@/components/common/header";
import Seo, { SITE_URL } from "@/components/common/Seo";

export default function Home() {
  return (
    <>
      <Seo
        title="Bibek Shah - Full-Stack Software Engineer & MERN Stack Developer"
        description="Bibek Shah is a full-stack software engineer and MERN stack developer from Kathmandu, Nepal, building secure, scalable web applications with React, Node.js, MongoDB and cloud technologies."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": `${SITE_URL}/#person`,
              name: "Bibek Shah",
              url: SITE_URL,
              image: `${SITE_URL}/profile.jpeg`,
              jobTitle: "Full-Stack Software Engineer",
              description:
                "MERN stack developer and software engineer specializing in full-stack web development, cloud technologies and scalable applications.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kathmandu",
                addressCountry: "NP",
              },
              knowsAbout: [
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Next.js",
                "JavaScript",
                "AWS",
                "Docker",
                "Linux",
              ],
              sameAs: [
                "https://www.linkedin.com/in/bibekshah-dev/",
                "https://github.com/bibekshah220",
              ],
            },
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              url: SITE_URL,
              name: "Bibek Shah",
              inLanguage: "en",
              publisher: { "@id": `${SITE_URL}/#person` },
            },
          ],
        }}
      />
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

