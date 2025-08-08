"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ProfilePic = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.5, duration: 0.3, ease: "easeIn" },
        }}
        className="z-10"
      >
        <div className="div w-[297px] h-[297px] xl:w-[427px] xl:h-[427px] absolute">
          <Image
            src="/resources/profile/pugi1.png"
            className="object-contain"
            quality={100}
            fill
            alt="Sean Gomez"
          />
        </div>
      </motion.div>

      {/* rotating effect */}
      <motion.svg
        className="w-[300px] h-[300px] xl:w-[430px] xl:h-[430px] z-20"
        fill="transparent"
        viewBox="0 0 516 516"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="255"
          cy="265"
          r="252"
          stroke="#fba087"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{strokeDasharray: "24 10 0 0"}}
          animate={{strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],  rotate: [120, 360]}}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>
    </div>
  );
};

export default ProfilePic;
