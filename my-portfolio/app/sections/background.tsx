'use client';
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import { useState } from "react";

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
    company: "Cornersteel Systems Corporation ",
    position: "Intern (System Administrator/Systems Analyst)",
    duration: "April 2023 - July 2023",
    description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda ut voluptatem eos quia doloribus aperiam officiis in, asperiores adipisci non nesciunt, blanditiis sint iste itaque quibusdam fugit? Blanditiis, quidem vel?.",     
  },

  {
    company: "Sample Company",
    position: "Sample Work Position",
    duration: "Month YYYY - Month YYYY",
  },

  {
    company: "Sample Company",
    position: "Sample Work Position",
    duration: "Month YYYY - Month YYYY",
  },
];

const Background = () => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  const EducBg = () => {
    return (
      <div className="flex flex-col py-36 border-2 text-center lg:text-start">
        <div className="xl:px-32 md:px-14 md:mx-3 lg:px-20 pb-10">
          <h1 className="xl:text-4xl md:text-4xl text-2xl text-center md:text-start">
            My <span className="text-accent"> Education </span>
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between md:px-14 xl:px-32 lg:px-20 md:mx-3 px-0 mx-5">
          <div className="md:w-4/12 xl:mb-0 mb-10 md:text-base text-sm md:mr-5 text-center md:text-start text-fore/70">
            <p>
              Throughout my academic journey, I have developed a strong
              foundation in technology, programming, and system design,
              complemented by practical experience in projects that address
              real-world challenges.
            </p>
          </div>
          <ScrollArea className="md:pr-4 md:w-8/12 group">
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-5 md:max-h-[285px] pt-1">
              {education.map((ed, index) => (
                <li
                  className="bg-secondary rounded-xl xl:rounded-xl  text-xs h-[180px] md:h-[130px] flex flex-col justify-center items-center lg:items-start px-6 leading-5 transition ease-in-out hover:-translate-y-1 duration-300 hover:bg-fore/10"
                  key={index}
                >
                  <span className="h-2/6 md:py-6 pt-5 lg:text-[15px] text-[15px] text-accent ">
                    {ed.year}
                  </span>

                  <h3 className="h-2/6 lg:text-[17px] text-[15px] ">
                    {ed.school}
                  </h3>

                  <div className="h-2/6 flex flex-col sm:flex-row items-center sm:gap-2 lg:pb-3">
                    <span className="lg:w-[4px] lg:h-[4px] rounded-full bg-accent"></span>

                    <p className="xl:text-[11px] md:text-[15px] text-fore/60 text-ellipsis ">
                      {ed.program}
                    </p>
                  </div>

                </li>
              ))}
            </ul>
          </ScrollArea>
        </div>
      </div>
    );
  };

  const WorkBg = () => {
    return (
      <div className="flex flex-col py-36 border-2 text-center lg:text-start">
        <div className="xl:px-32 md:px-14 md:mx-3 lg:px-20 pb-10">
          <h1 className="xl:text-4xl md:text-4xl text-2xl text-center md:text-start">
            My <span className="text-accent"> Experience </span>
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between md:px-14 xl:px-32 md:mx-3 lg:px-20 px-0 mx-5">
          <div className="md:w-4/12 xl:mb-0 mb-10 md:text-base text-sm md:mr-5 text-center md:text-start text-fore/70">
            <p>
              Utilizing my sets of technical and skills and knowledge in
              practical settings. I have engaged in projects and
              responsibilities, building a strong professional foundation in the
              field. These experiences deepened my overall understanding of the
              professional world.
            </p>
          </div>
          <ScrollArea className="md:pr-4 md:w-8/12 group">
            <ul className={`${clickedIndex === null ? 'grid grid-cols-1 xl:grid-cols-2 gap-5 md:max-h-[290px] ' : 'grid-cols-1'} pt-1`}>
              {experience.map((ed, index) => (
                <li
                  className={`bg-secondary rounded-xl xl:rounded-xl text-xs transition ease-in-out hover:-translate-y-1 duration-300 hover:bg-fore/10 ${clickedIndex === null ? " h-[180px] md:h-[130px]" : " h-[600px] md:h-[290px] "}  flex flex-col justify-center items-center lg:items-start px-6 leading-5 }`}
                  key={index}
                  onClick={() => handleClick(index)}
                  style={{ display: clickedIndex === null || clickedIndex === index ? 'flex' : 'none'}}
              
                >
                  <span className={` ${clickedIndex === null ? 'h-2/6 md:py-6 pt-5' : 'h-[10%] ' }  lg:text-[15px] text-[15px] text-accent`}>
                    {ed.duration}
                  </span>

                  <h3 className={` ${clickedIndex === null ? 'h-2/6 ' : 'h-[10%]' } lg:text-[17px] text-[15px] `}>
                    {ed.company}
                  </h3>

                  <div className={` ${clickedIndex === null ? 'h-2/6 lg:pb-3' : 'h-[10%]' }  flex flex-col sm:flex-row items-center sm:gap-2 `}>
                    <span className="lg:w-[4px] lg:h-[4px] rounded-full bg-accent"></span>

                    <p className={` ${clickedIndex === null ? ' xl:text-[11px]' : ' xl:text-[15px]' } md:text-[15px] text-fore/60 text-ellipsis`}>
                      {ed.position}
                    </p>
                  </div>

                  {clickedIndex === index && (
                    <>
                    <div className="additional-content w-full h-[40%]">
                      {/* Add your additional content here */}
                      <p className="text-[12px] xl:text-[13px] text-fore/70 mt-4 ">
                        {ed.description}
                      </p>
                      
                    </div>
                    <p className={` ${clickedIndex === null ? ' xl:text-[12px]' : ' xl:text-[13px]' } align-bottom mx-auto pt-5 italic `}>  Click again to close</p>
                    </>
                  )}
                  
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
      <WorkBg />
    </div>
  );
};

export default Background;
