"use client";
import { motion } from "framer-motion"; // Import the framer-motion library
import Image from "next/image";

export default function Techstack() {
  const marquee = [
    "/resources/01.svg",
    "/resources/02.svg",
    "/resources/03.svg",
    "/resources/04.svg",
    "/resources/05.svg",
    "/resources/06.svg",
    "/resources/07.svg",
    "/resources/08.svg",
    "/resources/09.svg",
    "/resources/10.svg",
    "/resources/12.svg",
    "/resources/13.svg",
    "/resources/14.svg",
  ];

  const Stack = () => {
    return (
      <div id="techstack" className="pb-10 md:pb-20">
        <h1 className="text-2xl sm:text-4xl text-center">My Tech Stack</h1>
      </div>
    );
  };

  const Uppermarquee = () => {
    return (
      <div className="flex mx-5 xl:mx-20 mb-10 overflow-x-hidden marquee">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: window.innerWidth < 425 ? 20 : 60, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {marquee.map((image, index) => {
            return (
              <Image
                src={image}
                key={index}
                className="w-9 mr-5 sm:w-20 sm:mr-20"
                alt=""
              />
            );
          })}
        </motion.div>

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: window.innerWidth < 425 ? 20 : 60, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {marquee.map((image, index) => {
            return (
              <Image
                src={image}
                key={index}
                className="w-9 mr-5 sm:w-20 sm:mr-20"
                alt=""
              />
            );
          })}
        </motion.div>
      </div>
    );
  };

  const Lowermarquee = () => {
    return (
      <div className="flex mx-5 xl:mx-20 overflow-x-hidden marquee">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{
            duration: window.innerWidth < 425 ? 20 : 60,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex flex-shrink-0"
        >
          {marquee.toReversed().map((image, index) => {
            return (
              <Image
                src={image}
                key={index}
                className="w-9 mr-5 sm:w-20 sm:mr-20"
                alt=""
              />
            );
          })}
        </motion.div>

        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{
            duration: window.innerWidth < 425 ? 20 : 60, // Change duration based on screen size
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex flex-shrink-0 "
        >
          {marquee.toReversed().map((image, index) => {
            return (
              <Image
                src={image}
                key={index}
                className="w-9 mr-5 sm:w-20 sm:mr-20"
                alt=""
              />
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
