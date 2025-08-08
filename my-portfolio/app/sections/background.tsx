"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { WorkExperience } from "@/components/elements/experience";
import React from "react";

// Educational Background data
const education = [
  {
    year: "2023 - 2025",
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

const Background = () => {
  const EducBg = () => {
    return (
      <div
        id="background"
        className="flex flex-col pt-32 text-center lg:text-start lg:h-[80%]"
      >
        <div className="xl:px-32 md:px-14 md:mx-3 lg:px-20 pb-10">
          <h1 className="xl:text-4xl sm:text-4xl text-2xl text-center lg:text-start">
            My <span className="text-accent"> Education </span>
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-between md:px-14 xl:px-32 lg:px-20 md:mx-3 px-0 mx-5">
          <div className="lg:w-4/12 xl:mb-0 mb-10 md:text-base text-sm md:mr-5 text-center lg:text-start text-fore/70">
            <p>
              Throughout my academic journey, I have developed a strong
              foundation in technology, programming, and system design,
              complemented by practical experience in projects that address
              real-world challenges.
            </p>
          </div>
          <ScrollArea className="lg:pr-4 lg:w-8/12 group">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 lg:max-h-[285px] pt-1">
              {education.map((ed, index) => (
                <div
                  className="bg-secondary rounded-xl xl:rounded-xl  text-xs h-[180px] md:h-[130px] flex flex-col justify-center items-center lg:items-start px-6 leading-5 transition ease-in-out hover:-translate-y-1 duration-300 hover:bg-fore/10"
                  key={index}
                >
                  <span className="h-2/6 md:py-6 pt-5 lg:text-[15px] text-[15px] text-accent ">
                    {ed.year}
                  </span>

                  <h3 className="h-2/6 lg:text-[16px] text-[15px] ">
                    {ed.school}
                  </h3>

                  <div className="h-2/6 flex flex-col sm:flex-row items-center sm:gap-2 lg:pb-3">
                    <span className="lg:w-[4px] lg:h-[4px] rounded-full bg-accent"></span>

                    <p className="xl:text-[10px] md:text-[15px] text-fore/60 text-ellipsis ">
                      {ed.program}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    );
  };

  const WorkBg = () => {
    return (
      <div className="flex flex-col py-28 justify-center text-center lg:text-start lg:h-[80%]">
        <div className="xl:px-32 md:px-14 md:mx-3 lg:px-20 pb-10">
          <h1 className="xl:text-4xl sm:text-4xl text-2xl text-center lg:text-start">
            My <span className="text-accent"> Experience </span>
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-between md:px-14 xl:px-32 md:mx-3 lg:px-20 px-0 mx-5">
          <div className="lg:w-4/12 xl:mb-0 mb-10 md:text-base text-sm md:mr-5 text-center lg:text-start text-fore/70">
            <p>
              Utilizing my sets of technical and skills and knowledge in
              practical settings. I have engaged in projects and
              responsibilities, building a strong professional foundation in the
              field. These experiences deepened my overall understanding of the
              professional world.
            </p>
          </div>
          <WorkExperience />
        </div>
      </div>
    );
  };

  return (
    <div>
      <EducBg />
      <WorkBg />
    </div>
  );
};

export default Background;
