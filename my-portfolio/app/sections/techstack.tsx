"use client";
import { useAnimate, motion } from "framer-motion"; // Import the framer-motion library
import { useEffect, useRef } from "react";
import {Marquee1, Marquee2} from "./components/maquee"; // Import the stackMarquee function

const Techstack = () => {
  const Stack = () => {
    return (
      <div id="techstack" className="pb-10 md:pb-20">
        <h1 className="text-2xl sm:text-4xl text-center">My Tech Stack</h1>
      </div>
    );
  };

  const Uppermarquee = () => {
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
          <Marquee1 />
          
        </motion.div>
      </div>
    );
  };

  const Lowermarquee = () => {
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
          <Marquee2 />
          
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

export default Techstack;
