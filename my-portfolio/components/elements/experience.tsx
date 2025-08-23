import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { useState } from "react";

// Work Experience data
const experience = [
  {
    company: "Cornersteel Systems Corporation ",
    position: "Intern (System Administrator/Systems Analyst)",
    duration: "April 2023 - July 2023",
    description:
      "Tasked on learning the ERP system of the company, identify missing key featuers that are crucial to business processes of the company, and provide easy-to-understand documentations for other departments to use. Utilized HTML5, CSS3, and JavaScript and collaborated with fellow interns using Github and Git create a local-hosted Management Information System for the HR Department of the company digitalize the manual processes of the department.",
  },

  {
    company: "Placeholder Company",
    position: "Placeholder Work Position",
    duration: "Month YYYY - Month YYYY",
    description: "This tab is just a placeholder for future work experience.",
  },

  {
    company: "Placeholder Company",
    position: "Placeholder Work Position",
    duration: "Month YYYY - Month YYYY",
    description: "This tab is just a placeholder for future work experience.",
  },
];

export const WorkExperience = () => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  const RenderExperiences = () => {
    if (clickedIndex === null) {
      return (
        <ScrollArea className="lg:pr-4 lg:w-8/12 group">
          <div
            className={`${
              clickedIndex === null
                ? "grid grid-cols-1 xl:grid-cols-2 gap-5 lg:max-h-[290px] "
                : "grid-cols-1 md:h-auto"
            } pt-1`}
          >
            <TooltipProvider>
              {experience.map((ed, index) => (
                <Tooltip delayDuration={500} key={index}>
                  <TooltipTrigger asChild>
                    <div
                      className={`bg-secondary rounded-xl xl:rounded-xl text-xs transition ease-in-out hover:-translate-y-1 duration-300 hover:bg-fore/10 cursor-pointer ${
                        clickedIndex === null
                          ? " h-[180px] md:h-[130px]"
                          : " h-auto md:h-auto overflow-y-auto"
                      }  flex flex-col justify-center items-center lg:items-start px-6 leading-5 }`}
                      onClick={() => handleClick(index)}
                      style={{
                        display:
                          clickedIndex === null || clickedIndex === index
                            ? "flex"
                            : "none",
                      }}
                    >
                      <span
                        className={` ${
                          clickedIndex === null
                            ? "h-2/6 md:py-6 pt-5"
                            : "h-[10%] pt-5 "
                        }  lg:text-[15px] text-[15px] text-accent`}
                      >
                        {ed.duration}
                      </span>

                      <h3
                        className={` ${
                          clickedIndex === null ? "h-2/6 " : "h-[10%] pt-1 "
                        } lg:text-[16px] text-[15px] `}
                      >
                        {ed.company}
                      </h3>

                      <div
                        className={` ${
                          clickedIndex === null
                            ? "h-2/6 lg:pb-3"
                            : "h-[10%] pt-3"
                        }  flex flex-col sm:flex-row items-center sm:gap-2 `}
                      >
                        <span className="lg:w-[4px] lg:h-[4px] rounded-full bg-accent"></span>

                        <p
                          className={` ${
                            clickedIndex === null
                              ? " xl:text-[10px]"
                              : " xl:text-[15px]"
                          } md:text-[15px] text-fore/60 text-ellipsis`}
                        >
                          {ed.position}
                        </p>
                      </div>

                      {clickedIndex === index && (
                        <div className="additional-content w-full h-[40%]  pb-6">
                          {/* Add your additional content here */}
                          <p className="text-[12px] xl:text-[13px] text-fore/70 mt-4">
                            {ed.description}
                          </p>
                          <p
                            className={` ${
                              clickedIndex === null
                                ? " xl:text-[12px] "
                                : " xl:text-[13px] "
                            } align-bottom mx-auto mt-5 pt-5 italic text-center`}
                          >
                            Click again to close
                          </p>
                        </div>
                      )}
                    </div>
                  </TooltipTrigger>

                  <TooltipContent className="z-50 rounded-md bg-secondary text-xs px-3 py-2 md:text-md text-fore shadow-[0_-4px_6px_-1px_#18181b,0_2px_4px_-2px_#000]">
                    Click to expand
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
        </ScrollArea>
      );
    } else {
      return (
        <ScrollArea className="lg:pr-4 lg:w-8/12 group">
          <div
            className={`${
              clickedIndex === null
                ? "grid grid-cols-1 xl:grid-cols-2 gap-5 md:max-h-[290px] "
                : "grid-cols-1 md:h-auto"
            } pt-1`}
          >
            {experience.map((ed, index) => (
              <div
                className={`bg-secondary rounded-xl xl:rounded-xl text-xs transition ease-in-out hover:-translate-y-1 duration-300 hover:bg-fore/10 cursor-pointer ${
                  clickedIndex === null
                    ? " h-[180px] md:h-[130px]"
                    : " h-auto md:h-auto overflow-y-auto"
                }  flex flex-col justify-center items-center lg:items-start px-6 leading-5 }`}
                onClick={() => handleClick(index)}
                key={index}
                style={{
                  display:
                    clickedIndex === null || clickedIndex === index
                      ? "flex"
                      : "none",
                }}
              >
                <span
                  className={` ${
                    clickedIndex === null
                      ? "h-2/6 md:py-6 pt-5"
                      : "h-[10%] pt-5 "
                  }  lg:text-[15px] text-[15px] text-accent`}
                >
                  {ed.duration}
                </span>

                <h3
                  className={` ${
                    clickedIndex === null ? "h-2/6 " : "h-[10%] pt-1 "
                  } lg:text-[16px] text-[15px] `}
                >
                  {ed.company}
                </h3>

                <div
                  className={` ${
                    clickedIndex === null ? "h-2/6 lg:pb-3" : "h-[10%] pt-3"
                  }  flex flex-col sm:flex-row items-center sm:gap-2 `}
                >
                  <span className="lg:w-[4px] lg:h-[4px] rounded-full bg-accent"></span>

                  <p
                    className={` ${
                      clickedIndex === null
                        ? " xl:text-[10px]"
                        : " xl:text-[15px]"
                    } md:text-[15px] text-fore/60 text-ellipsis`}
                  >
                    {ed.position}
                  </p>
                </div>

                {clickedIndex === index && (
                  <div className="additional-content w-full h-[40%]  pb-6">
                    {/* Add your additional content here */}
                    <p className="text-[12px] xl:text-[13px] text-fore/70 mt-4">
                      {ed.description}
                    </p>
                    <p
                      className={` ${
                        clickedIndex === null
                          ? " xl:text-[12px] "
                          : " xl:text-[13px] "
                      } align-bottom mx-auto mt-5 pt-5 italic text-center`}
                    >
                      Click again to close
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      );
    }
  };

  return <RenderExperiences />; // Render the experiences
};
