"use client";
import { motion } from "framer-motion"; // Import the framer-motion library
import { div } from "motion/react-client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaHtml5,
  FaPhp,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa6";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";
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
    return (
      <div className="flex mx-5 xl:mx-20 mb-10 overflow-x-hidden marquee">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex flex-shrink-0"
        >
          {marquee.map((tech, index) => {
            return (
              <div
                key={index}
                className="px-5 py-5 mr-5 sm:mr-20 bg-secondary rounded-lg"
              >
                <div className="relative flex justify-center items-center w-6 h-6 sm:w-20 sm:h-20">
                  <div className=" text-accent text-[2.25rem] sm:text-[4.10rem]">
                    {tech.src}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: duration,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex flex-shrink-0"
        >
          {marquee.map((image, index) => {
            return (
              <div
                key={index}
                className="px-5 py-5 mr-20 bg-secondary rounded-lg"
              >
                <div className="relative w-9 h-9 sm:w-20 sm:h-20">
                  <Image src={image.src} key={index} className="fill" alt="" fill />
                </div>
              </div>
            );
          })}
        </motion.div> */}
      </div>
    );
  };

  // const Lowermarquee = () => {
  //   const [duration, setDuration] = useState(60);

  //   useEffect(() => {
  //     const isMobile = window.innerWidth < 425;
  //     setDuration(isMobile ? 10 : 60); // Adjust duration based on screen size
  //   }, []);

  //   return (
  //     <div className="flex mx-5 xl:mx-20 overflow-x-hidden marquee">
  //       <motion.div
  //         initial={{ x: "-100%" }}
  //         animate={{ x: 0 }}
  //         transition={{
  //           duration: duration,
  //           repeat: Infinity,
  //           ease: "linear",
  //         }}
  //         className="flex flex-shrink-0"
  //       >
  //         {marquee.toReversed().map((image, index) => {
  //           return (
  //             <div
  //               key={index}
  //               className="px-5 py-5 mr-20 bg-secondary rounded-lg"
  //             >
  //               <div className="relative w-9 h-9 sm:w-20 sm:h-20">
  //                 <Image
  //                   src={image.src}
  //                   key={index}
  //                   className="fill"
  //                   alt=""
  //                   fill
  //                 />
  //               </div>
  //             </div>
  //           );
  //         })}
  //       </motion.div>

  //       <motion.div
  //         initial={{ x: "-100%" }}
  //         animate={{ x: 0 }}
  //         transition={{
  //           duration: duration,
  //           repeat: Infinity,
  //           ease: "linear",
  //         }}
  //         className="flex flex-shrink-0 "
  //       >
  //         {marquee.toReversed().map((image, index) => {
  //           return (
  //             <div
  //               key={index}
  //               className="px-5 py-5 mr-20 bg-secondary rounded-lg"
  //             >
  //               <div className="relative w-9 h-9 sm:w-20 sm:h-20">
  //                 <Image
  //                   src={image.src}
  //                   key={index}
  //                   className="fill"
  //                   alt=""
  //                   fill
  //                 />
  //               </div>
  //             </div>
  //           );
  //         })}
  //       </motion.div>
  //     </div>
  //   );
  // };

  return (
    <div className="py-20 md:py-24 overflow-x-hidden">
      <Stack />
      <Uppermarquee />
      {/* <Lowermarquee /> */}
    </div>
  );
}
