"use client";

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

import { useEffect, useRef } from "react";
import { useAnimate, motion } from "framer-motion";

import { stackList } from "@/components/elements/stackItems";

export const Uppermarquee = () => {
  const [scope, animate] = useAnimate();
  const triggerRef = useRef<ReturnType<typeof animate> | null>(null);

  useEffect(() => {
    triggerRef.current = animate(
      scope.current,
      {
        x: "-50%",
      },
      {
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      }
    );
    return () => triggerRef.current?.stop();
  }, [scope, animate]);

  const handlePause = () => {
    triggerRef.current?.pause();
  };
  const handlePlay = () => {
    triggerRef.current?.play();
  };

  return (
    <div className="flex mx-5 xl:mx-20 mb-10 overflow-x-hidden marquee">
      <motion.div
        ref={scope}
        onMouseEnter={handlePause}
        onMouseLeave={handlePlay}
        className="flex flex-shrink-0 mt-2"
      >
        <TooltipProvider delayDuration={500}>
          {[...stackList, ...stackList].map((tech, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <div className="px-5 py-5 mr-5 sm:mr-11 lg:mr-14 xl:mr-20 bg-secondary rounded-lg hover:bg-accent hover:text-[#18181b] text-accent transition ease-in-out duration-300 hover:-translate-y-1 cursor-pointer">
                  <div className="relative flex justify-center items-center w-6 h-6 sm:w-10 sm:h-10 lg:w-14 lg:h-14 xl:w-20 xl:h-20">
                    <div className="text-[2.25rem] sm:text-[3.25rem] lg:text-[3.45rem] xl:text-[4.10rem]">
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
      </motion.div>
    </div>
  );
};

export const Lowermarquee = () => {
  const [scope, animate] = useAnimate();
  const triggerRef = useRef<ReturnType<typeof animate> | null>(null);

  useEffect(() => {
    triggerRef.current = animate(
      scope.current,
      {
        x: "0%",
      },
      {
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      }
    );
    return () => triggerRef.current?.stop();
  }, [scope, animate]);

  const handlePause = () => {
    triggerRef.current?.pause();
  };
  const handlePlay = () => {
    triggerRef.current?.play();
  };

  return (
    <div className="flex mx-5 xl:mx-20 mb-10 overflow-x-hidden marquee">
      <motion.div
        ref={scope}
        initial={{ x: "-50%" }}
        onMouseEnter={handlePause}
        onMouseLeave={handlePlay}
        className="flex flex-shrink-0 mt-2"
      >
        <TooltipProvider delayDuration={0}>
          {[...stackList, ...stackList].toReversed().map((tech, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                 <div className="px-5 py-5 mr-5 sm:mr-11 lg:mr-14 xl:mr-20 bg-secondary rounded-lg hover:bg-accent hover:text-[#18181b] text-accent transition ease-in-out duration-300 hover:-translate-y-1 cursor-pointer">
                  <div className="relative flex justify-center items-center w-6 h-6 sm:w-10 sm:h-10 lg:w-14 lg:h-14 xl:w-20 xl:h-20">
                    <div className="text-[2.25rem] sm:text-[3.25rem] lg:text-[3.45rem] xl:text-[4.10rem]">
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
      </motion.div>
    </div>
  );
};
