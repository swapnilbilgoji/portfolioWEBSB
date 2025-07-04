import { FaPython } from "react-icons/fa";
import { HiCog } from "react-icons/hi2";
import { FaBrain } from "react-icons/fa";
import { MdTranslate } from "react-icons/md";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { HiChartBar } from "react-icons/hi";
import { SiTableau } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "Python",
    icon: FaPython,
  },
  {
    skill: "ML",
    icon: HiCog,
  },
  {
    skill: "DL",
    icon: FaBrain,
  },
  {
    skill: "NLP",
    icon: MdTranslate,
  },
  {
    skill: "MySQL",
    icon: SiMysql,
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
  },
  {
    skill: "Power BI",
    icon: HiChartBar,
  },
  {
    skill: "Tableau",
    icon: SiTableau,
  },
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
