import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Swapnil, a passionate Data Scientist with strong expertise in Machine Learning, Deep Learning, and NLP. 
        I specialize in building data-driven solutions for real-world problems using Python, SQL, and visualization tools like Power BI. 
        With a background in Robotics and AI, 
        I bring a unique interdisciplinary perspective to data analysis, model deployment, and decision-making systems.
        <br />
        <h3 className="text-2xl text-orange mt-6 mb-2">"Data tells stories, I narrate them"</h3>
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
