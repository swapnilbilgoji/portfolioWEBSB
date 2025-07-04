import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2023
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="3" text="Years" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="23" text="Projects" />
      </div>
      <p className="text-center">
        With 3 years of experience building Data Science Models and
        Applications, I have successfully completed 23 projects, ranging from
        predictive analytics to natural language processing.
      </p>
    </div>
  );
};

export default ExperienceTopLeft;
