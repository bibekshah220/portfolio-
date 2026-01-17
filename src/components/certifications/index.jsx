import { motion } from "framer-motion";
import { wordsContainerNoDelay } from "@/utils/AnimationVarients";
import TextContainer from "../common/TextContainer";
import {
  SiAmazonwebservices,
  SiCisco,
  SiRedhat,
  SiNutanix,
} from "react-icons/si";
import { FaCode, FaRobot, FaShieldAlt, FaReact } from "react-icons/fa";

const certifications = [
  {
    title: "MERN Stack Development Training",
    issuer: "Self-learning",
    date: "2025",
    icon: <FaReact />,
    color: "#61DAFB",
  },
  {
    title: "AWS Certified Solutions Architect - Associate",
    issuer: "Broadway Infosys",
    date: "2024",
    icon: <SiAmazonwebservices />,
    color: "#FF9900",
  },
  {
    title: "Cisco Certified Network Associate (CCNA)",
    issuer: "Broadway Infosys",
    date: "2023",
    icon: <SiCisco />,
    color: "#1BA0D7",
  },
  {
    title: "Red Hat Certified System Administrator (RHCSA)",
    issuer: "IT Security",
    date: "2023",
    icon: <SiRedhat />,
    color: "#EE0000",
  },
  {
    title: "Nutanix Certified Associate (NCA 6.5)",
    issuer: "Nutanix",
    date: "2023",
    icon: <SiNutanix />,
    color: "#00A9E0",
  },
  {
    title: "CCNP Enterprise",
    issuer: "Cisco - Udemy",
    date: "2023",
    icon: <SiCisco />,
    color: "#1BA0D7",
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    date: "2023",
    icon: <SiAmazonwebservices />,
    color: "#FF9900",
  },
  {
    title: "Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    date: "2023",
    icon: <FaShieldAlt />,
    color: "#005073",
  },
  {
    title: "Playwright MCP Automation Training",
    issuer: "Self-learning",
    date: "2025",
    icon: <FaRobot />,
    color: "#2EAD33",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="pt-[6rem]">
      <div className="main-container sm:px-0 px-4">
        <motion.h2
          variants={wordsContainerNoDelay}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="heading2 z-10"
        >
          <TextContainer text="Certifications & Trainings" />
        </motion.h2>

        <div className="pt-[4rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-backgroundSecondary border border-backgroundLight rounded-2xl p-6 hover:border-primary transition-all duration-300 group shadow-sm hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${cert.color}15`, color: cert.color }}
                  >
                    {cert.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-primary font-prompt font-semibold text-lg leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-textSecondary font-karla text-sm">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="px-2 py-0.5 bg-backgroundLight text-textDim text-[10px] rounded uppercase tracking-wider font-bold">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

