import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Diamond Price Prediction",
    year: "April2023",
    align: "right",
    image: "../../public/images/Diamond.png",
    link: "https://github.com/swapnilbilgoji/DiamondPricePrediction",
  },
  {
    name: "Credit Card Fraud Detection",
    year: "Jun2023",
    align: "left",
    image: "../../public/images/Fraud.png",
    link: "https://github.com/swapnilbilgoji/Credit-Card-Default-Payment-Prediction",
  },
  {
    name: "Web Scrapping",
    year: "Jan2023",
    align: "right",
    image: "../../public/images/webscrapping.png",
    link: "https://github.com/swapnilbilgoji/Python_web_scrapping_aws",
  },
  {
    name: "Flower Classification",
    year: "May2024",
    align: "left",
    image: "../../public/images/FlowerClassify.png",
    link: "https://github.com/swapnilbilgoji/Flower-Classification",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
