import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Python Developer",
    company: "Maratha Mandal Engineering College",
    date: "01/01/2025 - 03/30/2025",
    responsibilities: [
      "Developed memory-efficient Python code for robotic experiments.",
      "Enhanced code reusability and maintainability across projects.",
      "Successfully deployed code into CoppeliaSim for robotic simulations.",
      "Mentored 20+ students on writing scalable, efficient Python code.",
    ],
  },
  {
    job: "Data Analyst",
    company: "Archana Industries",
    date: "03/01/2025 - Present",
    responsibilities: [
      "Performed in-depth data analysis to track sales growth over the past 5 years.",
      "Developed strategies and actionable insights based on data trends.",
      "Identified new product categories to help expand paper bag sales.",
      "Contributed to a 30% increase in sales within 3 months through data-driven initiatives.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
