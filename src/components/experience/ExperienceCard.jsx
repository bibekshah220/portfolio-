import { motion } from "framer-motion";
import React from "react";
import { cardEntrance } from "@/utils/AnimationVarients";
import { BsBoxArrowInUpRight } from "react-icons/bs";

const ExperienceCard = ({ data, active, index }) => {
  const duration = React.useMemo(() => {
    const parseDate = (dateStr) => {
      if (dateStr === "Present") return new Date();
      return new Date(dateStr.replace(",", ""));
    };

    if (data.dateEnd === "Present") return "";

    const start = parseDate(data.dateStarted);
    const end = parseDate(data.dateEnd);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) return "";

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }
    if (months === 0 && years === 0) months = 1;

    let durationStr = "";
    if (years > 0) {
      durationStr += `${years} Year${years > 1 ? "s" : ""} `;
    }
    if (months > 0) {
      durationStr += `${months} Month${months > 1 ? "s" : ""}`;
    }
    return durationStr ? `(${durationStr.trim()})` : "";
  }, [data.dateStarted, data.dateEnd]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardEntrance}
      custom={index}
      className="sm:py-10 sm:px-8 py-8 px-6 bg-backgroundSecondary border border-white/5 rounded-xl flex flex-col gap-5 mx-3 hover:border-white/10 transition-all duration-300"
    >
      <div>
        <h3 className="font-prompt text-primary font-semibold text-[22px] tracking-wide">
          {data.title}
        </h3>
        <h4 className="font-prompt text-textSecondary font-medium text-[16px] mt-1">
          {data.company}
        </h4>
        <p className="font-karla text-textDim font-medium text-xs uppercase pt-3 tracking-widest">
          {data.dateStarted} - {data.dateEnd}{" "}
          <span className="text-textSecondary normal-case ml-2">{duration}</span>
        </p>
      </div>
      <ul className="font-karla text-textDim list-disc pl-5 max-w-prose leading-relaxed">
        {data.description.map((entry, key) => (
          <li key={key} className="pb-3 text-[15px]">
            {entry}
          </li>
        ))}
      </ul>
      {data.url && (
        <div className="mt-auto pt-2">
          <a
            href={data.url}
            target="_blank"
            rel="noreferrer"
            className="w-max flex flex-row gap-3 items-center text-primary rounded-xl py-2 px-4 bg-backgroundSecondary border border-white/5 duration-150 transition-all font-light font-karla text-sm hover:bg-white/5 hover:border-white/10"
          >
            <BsBoxArrowInUpRight />
            <span>View Project</span>
          </a>
        </div>
      )}
    </motion.div>
  );
};

export default ExperienceCard;
