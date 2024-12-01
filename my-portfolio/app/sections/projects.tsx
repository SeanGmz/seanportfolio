import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
const works = [
  {
    num: "01",
    title: "ShutterUP",
    description:
      "A photo sharing platform where users can upload their photos and share them with the world. Users can also like and comment on photos.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    type: "Personal Project",
    img: "/resources/projects/01.png",
    link: "",
  },
  {
    num: "02",
    title: "CSC-MIS",
    description:
      "A Management Information System for the HR Department of Cornersteel Systems Corporation. The system digitalizes the manual processes of the department.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    type: "Collaborative Work Project",
    img: "/resources/projects/02.png",
    link: "https://github.com/TopherGacad/cornersteel-hr-mis",
  },
  {
    num: "03",
    title: "RegiTech",
    description:
      "A web-based admission credentials document management system for Polytechnic University of the Philippines - Institute of Technology Registrar's Office. ",
    tech: ["React", "CSS3", "Bootstrap", "PHP", "MySQL", "Laravel"],

    type: "Collaborative Capstone Project",
    img: "/resources/projects/03.png",
    link: "https://github.com/jasxyke/regitech-system",
  },
  {
    num: "04",
    title: "GymBuddy",
    description:
      "A mobile fitness companion app that provides users with a personalized workout plan based on their fitness goals and preferences.",
    tech: ["React Native", "React Native paper", "AsyncStorage"],
    type: "Collaborative Capstone Project",
    img: "/resources/projects/04.png",
    link: "https://github.com/bob831/gymBuddy",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="pt-36 pb-14 border-2">
      <div className="justify-center">
        <h1 className="xl:text-4xl sm:text-4xl text-2xl text-center mb-20">
          My Previous Projects
        </h1>
      </div>

      {works.map((work, index) => {
        return (
          <div
            key={index}
            className="flex flex-col lg:flex-row justify-between mb-16 items-center mx-5 xl:px-32 py-5"
          >
            <div className="flex flex-col xl:w-[40%] lg:order-none order-2 lg:pr-5">
              <span className="md:text-6xl text-4xl text-accent/70 py-3">
                {work.num}
              </span>
              <h1 className="text-2xl md:text-4xl">{work.title}</h1>
              <span className="text-xs md:text-sm text-fore py-2 italic">
                {work.type}
              </span>
              <p className="text-xs md:text-sm text-fore/70 py-3">
                {work.description}
              </p>

              <div className=" ">
                {work.tech.map((techused, i) => (
                  <span key={i} className="text-accent text-xs md:text-sm">
                    {techused}
                    {i !== work.tech.length - 1 && ", "}
                  </span>
                ))}
              </div>
              <Link
                href={work.link}
                target="_blank"
                rel="noopener"
                className="mt-5 mx-auto xl:mx-0 xl:mt-5 w-48 flex flex-row items-center text-accent hover:text-background hover:bg-accent hover:border-accent border-accent border-[2px] rounded-full py-3 justify-center transition-all ease-in duration-150"
              >
                <span className="m-0 mr-2 lg:text-sm text-xs">
                  View Project
                </span>
                <FaGithub className="text-lg" />
              </Link>
            </div>
            <div className="flex xl:w-[50%] w-full justify-center items-center">
              <div className=" xl:w-[600px] xl:h-[350px] lg:w-[500px] lg:h-[300px] w-[370px] h-[250px] overflow-hidden lg:order-none order-1 ">
                <img
                  className=" w-full h-full object-cover object-center"
                  src={work.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
