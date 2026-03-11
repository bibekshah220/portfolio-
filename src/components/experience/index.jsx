import Slider from "react-slick";
import { motion } from "framer-motion";
import { useState, useCallback } from "react";

import experienceData from "../../data/works.json";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const [activeSlide, setActiveSlide] = useState(0);

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
    <section id="experience" className="main-container pt-[5rem]">
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
