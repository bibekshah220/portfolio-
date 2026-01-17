import { motion } from "framer-motion";
import { BsArrowRight, BsClock, BsCalendar } from "react-icons/bs";
import { FaRobot, FaTerminal, FaGitAlt, FaCloud, FaCode } from "react-icons/fa";

const BlogCard = ({ data }) => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Automation":
        return <FaRobot />;
      case "Linux":
        return <FaTerminal />;
      case "Git & GitHub":
        return <FaGitAlt />;
      case "Cloud Computing":
        return <FaCloud />;
      case "JavaScript":
        return <FaCode />;
      default:
        return <FaCode />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Automation":
        return "#2EAD33";
      case "Linux":
        return "#FFCC33";
      case "Git & GitHub":
        return "#F05032";
      case "Cloud Computing":
        return "#FF9900";
      case "JavaScript":
        return "#F7DF1E";
      default:
        return "#64748b";
    }
  };

  const categoryColor = getCategoryColor(data.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="bg-backgroundSecondary border border-backgroundLight rounded-2xl overflow-hidden hover:border-primary transition-all duration-300 group shadow-sm hover:shadow-md h-full flex flex-col"
    >
      <div className="p-6 flex flex-col h-full">
        {/* Category Header */}
        <div className="flex justify-between items-start mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: `${categoryColor}15`, color: categoryColor }}
          >
            {getCategoryIcon(data.category)}
          </div>
          <span
            className="px-3 py-1 text-[10px] rounded-full font-bold uppercase tracking-wider"
            style={{ backgroundColor: `${categoryColor}15`, color: categoryColor }}
          >
            {data.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-prompt font-semibold text-primary mb-3 group-hover:text-primary transition-colors leading-tight">
          {data.title}
        </h3>

        {/* Excerpt */}
        <p className="text-textDim font-karla font-light text-sm mb-6 line-clamp-3">
          {data.excerpt}
        </p>

        {/* Meta & Footer */}
        <div className="mt-auto">
          <div className="flex items-center gap-4 text-textDim text-xs mb-6 border-t border-backgroundLight pt-4">
            <div className="flex items-center gap-1.5">
              <BsCalendar className="text-primary/50" />
              <span>{new Date(data.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BsClock className="text-primary/50" />
              <span>{data.readTime}</span>
            </div>
          </div>

          <a
            href={data.url}
            className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all duration-300"
          >
            Read More
            <BsArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;

