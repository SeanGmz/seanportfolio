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
      <div className="flex flex-col py-36 border-2 text-center lg:text-start">
        <div className="xl:px-32 md:px-14 md:mx-3 lg:px-20 pb-10">
          <h1 className="xl:text-4xl md:text-4xl text-2xl text-center md:text-start">
            My Education
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between md:px-14 xl:px-32 lg:px-20 px-0 mx-3">
          <div className="md:w-4/12 xl:mb-0 mb-10 md:text-base text-sm md:mr-5 text-center md:text-start text-fore/70">
            <p>
              Throughout my academic journey, I have developed a strong
              foundation in technology, programming, and system design,
              complemented by practical experience in projects that address
              real-world challenges.
            </p>
          </div>
          <ScrollArea className="md:pr-4 md:w-8/12 group">
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-5 md:max-h-[280px]">
              {education.map((ed, index) => (
                <li
                  className="bg-secondary rounded-xl xl:rounded-xl text-xs h-[180px] md:h-[130px] "
                  key={index}
                >
                  <div className="rounded-xl xl:rounded-xl text-xs h-[180px] md:h-[130px] flex flex-col justify-center items-center lg:items-start px-6 leading-5 hover:bg-accent w-full">
                    <span className="h-2/6 md:py-6 pt-5 lg:text-[15px] text-[15px] text-accent">
                      {ed.year}
                    </span>

                    <h3 className="h-2/6 lg:text-[17px] text-[15px]">
                      {ed.school}
                    </h3>

                    <div className="h-2/6 flex flex-col sm:flex-row items-center sm:gap-2 lg:pb-3">
                      <span className="lg:w-[4px] lg:h-[4px] rounded-full bg-accent"></span>

                      <p className="xl:text-[11px] md:text-[15px] text-fore/60 text-ellipsis">
                        {ed.program}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </div>
      </div>
    );
  };

  return (
    <div>
      <EducBg />
    </div>
  );
};

export default Background;
