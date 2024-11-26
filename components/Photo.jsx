"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="relative"
      >
        {/* Gambar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[200px] h-[200px] md:w-[350px] md:h-[350px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <Image src="/assets/pp.png" priority quality={100} fill alt="Profile picture" className="object-contain rounded-full" />
        </motion.div>

        {/* Lingkaran */}
        <motion.svg className="w-[220px] md:w-[400px] xl:w-[550px] h-[220px] md:h-[400px] xl:h-[550px]" fill="transparent" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
          <motion.circle
            cx="110"
            cy="110"
            r="105"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
