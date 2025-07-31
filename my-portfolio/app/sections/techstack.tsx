"use client";
import { motion } from "framer-motion"; // Import the framer-motion library
import { div } from "motion/react-client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Techstack() {

  const Stack = () => {
    return (
      <div id="techstack" className="pb-10 md:pb-20">
        <h1 className="text-2xl sm:text-4xl text-center">My Tech Stack</h1>
      </div>
    );
  };

  const Uppermarquee = () => {
    const [duration, setDuration] = useState(60);

    useEffect(() => {
      const isMobile = window.innerWidth < 425;
      setDuration(isMobile ? 20 : 60); // Adjust duration based on screen size
    }, []);

    const marquee = [
    "/resources/marquee/01.svg",
    "/resources/marquee/02.svg",
    "/resources/marquee/03.svg",
    "/resources/marquee/05.svg",
    "/resources/marquee/06.svg",
    "/resources/marquee/07.svg",
    "/resources/marquee/08.svg",
    "/resources/marquee/09.svg",
    "/resources/marquee/10.svg",
    "/resources/marquee/11.svg",
    "/resources/marquee/12.svg",
    "/resources/marquee/13.svg",
    ];

    return (
      <div className="flex mx-5 xl:mx-20 mb-10 overflow-x-hidden marquee">
        
        <motion.div
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
              <div key={index} className="px-5 py-5 mr-20 bg-secondary rounded-lg">
                <div className="relative w-9 h-9 sm:w-20 sm:h-20">
                  <Image src={image} key={index} className="fill" alt="" fill />
                </div>
              </div>
            );
          })}
        </motion.div>

        <motion.div
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
              <div key={index} className="px-5 py-5 mr-20 bg-secondary rounded-lg">
                <div className="relative w-9 h-9 sm:w-20 sm:h-20">
                  <Image src={image} key={index} className="fill" alt="" fill />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    );
  };

  const Lowermarquee = () => {
    const [duration, setDuration] = useState(60);

    useEffect(() => {
      const isMobile = window.innerWidth < 425;
      setDuration(isMobile ? 20 : 60); // Adjust duration based on screen size
    }, []);

    const marquee = [
    "/resources/marquee/01.svg",
    "/resources/marquee/02.svg",
    "/resources/marquee/03.svg",
    "/resources/marquee/05.svg",
    "/resources/marquee/06.svg",
    "/resources/marquee/07.svg",
    "/resources/marquee/08.svg",
    "/resources/marquee/09.svg",
    "/resources/marquee/10.svg",
    "/resources/marquee/12.svg",
    "/resources/marquee/13.svg",
    ];

    return (
      <div className="flex mx-5 xl:mx-20 overflow-x-hidden marquee">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{
            duration: duration,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex flex-shrink-0"
        >
          {marquee.toReversed().map((image, index) => {
            return (
              <div key={index} className="px-5 py-5 mr-20 bg-secondary rounded-lg">
                <div className="relative w-9 h-9 sm:w-20 sm:h-20">
                  <Image src={image} key={index} className="fill" alt="" fill />
                </div>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{
            duration: duration,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex flex-shrink-0 "
        >
          {marquee.toReversed().map((image, index) => {
            return (
              <div key={index} className="px-5 py-5 mr-20 bg-secondary rounded-lg">
                <div className="relative w-9 h-9 sm:w-20 sm:h-20">
                  <Image src={image} key={index} className="fill" alt="" fill />
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
