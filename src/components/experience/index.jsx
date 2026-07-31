import Slider from "react-slick";
import { motion, useScroll, useSpring } from "framer-motion";
import { useState, useCallback, useRef } from "react";

import experienceData from "../../data/works.json";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sectionRef = useRef(null);

  // Progress line: fills as the section passes through the viewport, so the
  // reader gets a sense of where they are inside the section.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 60%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  const handleAfterChange = useCallback((index) => {
    setActiveSlide(index);
  }, []);

  const settings = {
    dots: true,
    infinite: experienceData.length > 1,
    cssEase: "linear",
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: experienceData.length > 1,
    draggable: false,
    afterChange: handleAfterChange,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          draggable: true,
        },
      },
    ],
  };

  return (
    <section id="experience" ref={sectionRef} className="main-container pt-[5rem]">
      <div className="text-center flex flex-row items-center relative justify-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="font-prompt text-primary text-[3rem] sm:text-[4rem] z-10 font-bold"
        >
          Experience
        </motion.h2>
        <div className="h-[100px] w-[150px] absolute dots-background right-0 z-0"></div>
      </div>
      {/* Hairline rail under the heading, scrubbed by scroll position. */}
      <div className="mx-auto mt-8 h-[2px] w-[120px] overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="h-full w-full origin-left rounded-full bg-primary/70"
          style={{ scaleX: progress }}
        />
      </div>
      <div className="pt-[2.5rem] md:px-[3rem]">
        <Slider {...settings} infinite={experienceData.length > 1} focusOnSelect={experienceData.length > 1}>
          {experienceData.map((entry, index) => (
            <ExperienceCard
              data={entry}
              key={index}
              index={index}
              active={activeSlide === index}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Experience;
