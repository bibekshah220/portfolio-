import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import experienceData from "../../../data/works.json";

const MobileNavBar = ({ data }) => {
  const router = useRouter();

  // Calculate total experience
  const totalExperience = React.useMemo(() => {
    let totalMonths = 0;

    // Helper to parse date string "Month DD, YYYY"
    const parseDate = (dateStr) => {
      if (dateStr === "Present") return new Date();
      return new Date(dateStr);
    };

    experienceData.forEach(job => {
      const start = parseDate(job.dateStarted);
      const end = parseDate(job.dateEnd);

      // Calculate difference in months roughly
      const yearsDiff = end.getFullYear() - start.getFullYear();
      const monthsDiff = end.getMonth() - start.getMonth();

      totalMonths += (yearsDiff * 12) + monthsDiff;
    });

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (years > 0) {
      return `${years}+ Years Experience`;
    }
    return `${months} Months Experience`;
  }, []);

  return (
    <div className="flex flex-col gap-6 py-5 w-full justify-center items-center">
      {/* NAV LINKS */}
      {data.map((entry, key) => (
        <Link
          href={entry.link}
          key={key}
          className={`relative uppercase py-1 ${router.pathname == entry.link
            ? "text-primary after:border-primary"
            : "text-textSecondary after:border-textSecondary"
            } duration-150 transition-all after:absolute after:bottom-0 after:left-0 after:w-full after:border-b-2 hover:text-primary`}
        >
          {entry.label}
        </Link>
      ))}

      {/* EXPERIENCE BADGE */}
      <div className="px-4 py-1 border border-primary/30 rounded-full bg-primary/5 text-primary text-sm font-medium">
        {totalExperience}
      </div>

      {/* SOCIAL ICONS */}
      <div className="flex flex-row gap-6 items-center text-primary text-[24px] pt-2">
        <a
          href="https://www.linkedin.com/in/bibek-shah-8b460b2bb"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-125 duration-300 transition-all"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://github.com/bibekshah220"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-125 duration-300 transition-all"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default MobileNavBar;
