"use client";
import { useAnimate, motion } from "framer-motion"; // Import the framer-motion library
import { useEffect, useRef, useState } from "react";
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

export default function Techstack() {
  const Stack = () => {
    return (
      <div id="techstack" className="pb-10 md:pb-20">
        <h1 className="text-2xl sm:text-4xl text-center">My Tech Stack</h1>
      </div>
    );
  };

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

  const Uppermarquee = () => {
    const [scope, animate] = useAnimate();
    const triggerRef = useRef<any>(null);

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
      return () => triggerRef.current.stop();
    }, []);

    const handlePause = () => {
      triggerRef.current.pause();
    };
    const handlePlay = () => {
      triggerRef.current.play();
    };

    return (
      <div className="flex mx-5 xl:mx-20 mb-10 overflow-x-hidden marquee">
        <motion.div
          ref={scope}
          onMouseEnter={handlePause}
          onMouseLeave={handlePlay}
          className="flex flex-shrink-0 mt-2"
        >
          {[...marquee, ...marquee].map((tech, index) => {
            return (
              <div
                key={index}
                className="px-5 py-5 mr-5 sm:mr-10 lg:mr-20 bg-secondary rounded-lg hover:bg-accent hover:text-[#18181b] text-accent transition ease-in-out duration-300 hover:-translate-y-1"
              >
                <div className="relative flex justify-center items-center w-6 h-6 sm:w-10 sm:h-10 lg:w-20 lg:h-20">
                  <div className="text-[2.25rem] sm:text-[3.25rem] lg:text-[4.10rem]">
                    {tech.src}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    );
  };

  const Lowermarquee = () => {
    const [scope, animate] = useAnimate();
    const triggerRef = useRef<any>(null);

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
      return () => triggerRef.current.stop();
    }, []);

    const handlePause = () => {
      triggerRef.current.pause();
    };
    const handlePlay = () => {
      triggerRef.current.play();
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
          {[...marquee, ...marquee].toReversed().map((tech, index) => {
            return (
              <div
                key={index}
                className="px-5 py-5 mr-5 sm:mr-10 lg:mr-20 bg-secondary rounded-lg hover:bg-accent hover:text-[#18181b] text-accent transition ease-in-out duration-300 hover:-translate-y-1"
              >
                <div className="relative flex justify-center items-center w-6 h-6 sm:w-10 sm:h-10 lg:w-20 lg:h-20">
                  <div className="text-[2.25rem] sm:text-[3.25rem] lg:text-[4.10rem]">
                    {tech.src}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    );
  };

  return (
    <div className="py-20 md:py-24 overflow-x-hidden">
      <Stack />
      <Uppermarquee />
      <Lowermarquee />
    </div>
  );
}
