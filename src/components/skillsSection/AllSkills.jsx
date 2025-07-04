import SingleSkill from "./SingleSkill";
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

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
