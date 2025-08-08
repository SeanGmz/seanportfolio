"use client";
import {
  FaHtml5,
  FaPhp,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa6";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { RiGithubFill, RiReactjsLine } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { LuFigma } from "react-icons/lu";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider
} from "@/components/ui/tooltip";

const marquee = [
  { src: <FaHtml5 />, title: "HTML5" },
  { src: <FaCss3Alt />, title: "CSS3" },
  { src: <IoLogoJavascript />, title: "JavaScript" },
  { src: <FaBootstrap />, title: "Bootstrap" },
  { src: <SiTailwindcss />, title: "Tailwind CSS" },
  { src: <BiLogoTypescript />, title: "TypeScript" },
  { src: <RiReactjsLine />, title: "React.js" },
  { src: <FaPhp />, title: "PHP" },
  { src: <FaNodeJs />, title: "Node.js" },
  { src: <GrMysql />, title: "MySQL" },
  { src: <SiNextdotjs />, title: "Next.js" },
  { src: <FaGitAlt />, title: "Git" },
  { src: <RiGithubFill />, title: "GitHub" },
  { src: <LuFigma />, title: "Figma" },
];

export const Marquee1 = () => {
  return (
    <>
      <TooltipProvider delayDuration={500}>
        {[...marquee, ...marquee].map((tech, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <div className="px-5 py-5 mr-5 sm:mr-10 lg:mr-20 bg-secondary rounded-lg hover:bg-accent hover:text-[#18181b] text-accent transition ease-in-out duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="relative flex justify-center items-center w-6 h-6 sm:w-10 sm:h-10 lg:w-20 lg:h-20">
                  <div className="text-[2.25rem] sm:text-[3.25rem] lg:text-[4.10rem]">
                    {tech.src}
                  </div>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent className="z-50 rounded-md bg-secondary text-xs px-3 py-2 md:text-md text-fore shadow-[0_-4px_6px_-1px_#18181b,0_2px_4px_-2px_#000]">
              {tech.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </>
  );
};

export const Marquee2 = () => {
  return (
    <>
      <TooltipProvider delayDuration={0}>
        {[...marquee, ...marquee].toReversed().map((tech, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <div className="px-5 py-5 mr-5 sm:mr-10 lg:mr-20 bg-secondary rounded-lg hover:bg-accent hover:text-[#18181b] text-accent transition ease-in-out duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="relative flex justify-center items-center w-6 h-6 sm:w-10 sm:h-10 lg:w-20 lg:h-20">
                  <div className="text-[2.25rem] sm:text-[3.25rem] lg:text-[4.10rem]">
                    {tech.src}
                  </div>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent className="z-50 rounded-md bg-secondary text-xs px-3 py-2 md:text-md text-fore shadow-[0_-4px_6px_-1px_#18181b,0_2px_4px_-2px_#000]">
              {tech.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </>
  );
};
