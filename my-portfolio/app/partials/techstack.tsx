"use client";
import { motion } from "motion/react"; // Import the framer-motion library

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
    return <> hello </>;
  };

  const Uppermarquee = () => {
    return (
      <div className="flex mx-20 mb-10 overflow-x-hidden marquee">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {marquee.map((image, index) => {
            return <img src={image} key={index} className="w-24 mr-20" />;
          })}
        </motion.div>

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {marquee.map((image, index) => {
            return <img src={image} key={index} className="w-24 mr-20" />;
          })}
        </motion.div>
      </div>
    );
  };

  const Lowermarquee = () => {
    return (
      <div className="flex mx-20 overflow-x-hidden marquee">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {marquee.toReversed().map((image, index) => {
            return <img src={image} key={index} className="w-24 mr-20" />;
          })}
        </motion.div>

        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {marquee.toReversed().map((image, index) => {
            return <img src={image} key={index} className="w-24 mr-20" />;
          })}
        </motion.div>
      </div>
    );
  };

  const Marquee = () => {
    return (
      <div className="py-12 border border-dashed border-red w-screen overflow-x-hidden">
        <Stack />
        <Uppermarquee />
        <Lowermarquee />
      </div>
    );
  };

  return (
    <div className="w-screen flex justify-center items-center border-solid border-2 border-red-600">
      <Marquee />
    </div>
  );
}
