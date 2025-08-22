"use client";

import { stackList } from "@/components/elements/stackItems";

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

export const List = () => {
  return (
    <div className="grid grid-cols-3 gap-y-3 gap-x-10 xs:gap-x-5 xs:gap-y-3 sm:gap-x-10 sm:gap-y-5 justify-center text-center items-center">
      <TooltipProvider delayDuration={0}>
        {...stackList.toReversed().map((tech, index) => (
          <Tooltip key={index}>
            <div className="justify-center flex">
              <TooltipTrigger asChild>
                <div className="group md:px-10 md:py-12 xs:px-9 xs:py-11 px-8  py-9 bg-secondary rounded-lg hover:bg-accent hover:text-[#18181b] text-accent transition ease-in-out duration-300 cursor-pointer transform-gpu will-change-transform hover:-translate-y-[2px]">
                  <div className="relative pt-3 flex flex-col justify-center items-center w-6 h-6 sm:w-10 sm:h-10">
                    <div className="text-[2.25rem] xs:text-[2.75rem] sm:text-[3.25rem]">
                      {tech.src}
                    </div>
                    <div className="mt-2 text-[0.60rem] xs:text-[0.70rem] whitespace-nowrap text-fore/70 group-hover:text-[#18181b] duration-300">
                      {tech.title}
                    </div>
                  </div>
                </div>
              </TooltipTrigger>
            </div>
            <TooltipContent className="z-50 rounded-md transition-colors duration-200 bg-secondary text-xs px-3 py-2 md:text-md text-fore shadow-[0_-4px_6px_-1px_#18181b,0_2px_4px_-2px_#000]">
              {tech.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
};
