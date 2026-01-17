import { motion } from "framer-motion";
import React from "react";
import { cardEntrance } from "@/utils/AnimationVarients";

// Defining props for better code clarity
// data: { title, company, dateStarted, dateEnd, description }
// active: boolean
// index: number

const ExperienceCard = ({ data, active, index }) => {
  const duration = React.useMemo(() => {
    const parseDate = (dateStr) => {
      if (dateStr === "Present") return new Date();
      // Remove comma if present to help parsing
      return new Date(dateStr.replace(",", ""));
    };

    if (data.dateEnd === "Present") return "";

    const start = parseDate(data.dateStarted);
    const end = parseDate(data.dateEnd);

    // Check if dates are valid
    if (isNaN(start.getTime()) || isNaN(end.getTime())) return "";

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }
    // minimal 1 month if same month
    if (months === 0 && years === 0) months = 1;

    // Adjust for partial months roughly if needed or just keep simple month diff

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
      className={`sm:py-12 sm:px-10 py-8 px-6 ${active ? "bg-backgroundSecondary shadow-lg" : "cursor-pointer hover:-translate-y-1 hover:shadow-xl"
        } rounded-xl flex flex-col gap-5 mx-6 transition-all duration-300`}
    >
      <div>
        <h3 className="font-prompt text-textPrimary font-semibold text-[24px] tracking-wide">
          {data.title}
        </h3>
        <h4 className="font-prompt text-primary font-medium text-[19px] mt-1">
          {data.company}
        </h4>
        <p className="font-karla text-textDim font-medium text-sm uppercase pt-3 tracking-widest">
          {data.dateStarted} - {data.dateEnd} <span className="text-primary normal-case ml-2">{duration}</span>
        </p>
      </div>
      <ul className="font-karla text-textSecondary list-disc pl-5 max-w-prose leading-relaxed">
        {data.description.map((entry, key) => (
          <li key={key} className="pb-3 text-lg">
            {entry}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceCard;
