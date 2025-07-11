"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import { handleClientScriptLoad } from "next/script";
import WorksliderButton from "@/components/WorksliderButton";

const projects = [
  {
    num: "01",
    category: "Thrive",
    title: "Backend & Cloud Engineer",
    description:
      "Thrive is an Android application that utilizes the power of artificial intelligence to analyze speech patterns and detect potential signs of depression. By recording a short audio sample, Thrive can help individuals gain a better understanding of their mental well-being and encourage them to seek professional support when needed.",
    stack: [{ name: "Javascript" }, { name: "Node Js " }, { name: "Google Cloud Platform" }, { name: "Python " }, { name: "Docker" }],
    image: "/assets/work/project1.jpg",
    live: "",
    github: "https://github.com/Thrive-Depression-Speech-Analytics/thrive-backend",
  },
  {
    num: "02",
    category: "JobsSukabumi",
    title: "Fullstack Developer",
    description:
      "JobsSukabumi is a dedicated job portal designed to connect job seekers with the best employment opportunities in the Sukabumi region. Our platform provides a seamless experience for finding and applying to specialized roles across various industries. JobsSukabumi is your go-to resource for local job opportunities.",
    stack: [{ name: "React" }, { name: "Next JS" }, { name: "Typescript" }, { name: "Firebase" }, { name: "MongoDB" }, { name: "Google AI Studio" }],
    image: "/assets/work/project2.jpg",
    live: "",
    github: "https://github.com/hhsaputraa/job-portal",
  },
  {
    num: "03",
    category: "SukaEvent",
    title: "Fullstack Developer",
    description: "SukaEvent is a web application that allows users to create and manage events. It is built using Next.js and Tailwind CSS.",
    stack: [{ name: "Next Js" }, { name: "Express" }, { name: "PostgreSQL" }, { name: "Sequelize" }, { name: "cloudinary" }],
    image: "/assets/work/",
    live: "",
    github: "",
  },
];
const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.3, ease: "easeIn" } }} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 ">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30-px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
            </div>
            {/* project category */}
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize my-5">{project.category}</h2>
            {/* project description */}
            <p className="text-white/60 my-5">{project.description}</p>
            {/* stack */}
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((item, index) => {
                return (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && <span className="ml-1">,</span>}
                  </li>
                );
              })}
            </ul>

            {/* border */}
            <div className="border border-white/20"></div>
            {/* button */}
            <div className="flex items-center gap-4">
              {/* live project button */}
              <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              {/* github project button */}
              <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github Repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-cover" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider button */}
              <WorksliderButton
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default Work;
