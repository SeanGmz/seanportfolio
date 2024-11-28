import { ScrollArea } from "@/components/ui/scroll-area";

// Educational Background data
const education = [
  {
    year: "2023 - Present",
    school: "La Consolacion College Manila",
    program: "Bachelor of Science in Information Technology",
  },
  {
    year: "2020 - 2023",
    school: "Polytechnic University of the Philippines",
    program: "Diploma in Information Communication Technology",
  },
  {
    year: "2018 - 2020",
    school: "La Consolacion College Manila",
    program: "Senior High School | STEM Strand",
  },
  {
    year: "2014 - 2018",
    school: "La Consolacion College Manila",
    program: "High School",
  },
  {
    year: "2008 - 2014",
    school: "La Consolacion College Manila",
    program: "Elementary",
  },
];

// Work Experience data
const experience = [
  {
    company: "Cornersteel Systems Corporation",
    position: "Intern",
    duration: "April 2023 - July 2023",
  },
];

const Background = () => {
  const EducBg = () => {
    return (
      <div className="flex flex-col my-20">
        <div className="xl:px-52 pb-10 text-center xl:text-left">
          <h1 className="xl:text-4xl md:text-4xl text-2xl">adsfa;lsdkfasdf</h1>
        </div>
        <div className="flex flex-col xl:flex-row justify-between xl:px-52 px-0 mx-3">
          <div className="xl:w-4/12 xl:mb-0 mb-10 text-center xl:text-left md:text-base text-xs">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              perferendis obcaecati quasi omnis, eum earum atque qui,
              voluptatibus, quia laudantium delectus reiciendis necessitatibus
              deserunt reprehenderit numquam officia dolor explicabo nemo!
            </p>
          </div>
          <ScrollArea className="xl:pr-4 xl:w-7/12 ">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 max-h-[300px] xl:max-h-[260px]">
              {education.map((ed, index) => (
                <div
                  className="bg-red-400 rounded-xl xl:rounded-xl text-sm h-[100px] xl:h-[120px]"
                  key={index}
                >
                  <span>{ed.year}</span>
                  <h3>{ed.school}</h3>
                  <p>{ed.program}</p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    );
  };

  return (
    <div>
      <EducBg />
      <EducBg />
    </div>
  );
};

export default Background;
