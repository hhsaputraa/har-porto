"use client";

import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaJsSquare, FaBootstrap, FaPhp } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";

import { SiTailwindcss, SiNextdotjs, SiMysql, SiMongodb, SiGooglecloud, SiFirebase } from "react-icons/si";

//ABOUT DATA
const about = {
  title: "About me",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rem",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Hari Handika",
    },
    {
      fieldName: "Name",
      fieldValue: "Hari Handika",
    },
    {
      fieldName: "Name",
      fieldValue: "Hari Handika",
    },
    {
      fieldName: "Name",
      fieldValue: "Hari Handika",
    },
    {
      fieldName: "Name",
      fieldValue: "Hari Handika",
    },
  ],
};

//Experience data

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Over the course of my career, I have gained valuable experience in both Full Stack Development and Cloud Engineering.These experiences have equipped me with a strong technical foundation and the ability to deliver robust software solutions.",
  items: [
    {
      company: "Job Portal App",
      position: "Full Stack Developer",
      duration: "July - August 2024",
    },
    {
      company: "Thrive App ",
      position: "Cloud Engineer",
      duration: "May - June 2024",
    },
  ],
};

//non it experience
const nonit = {
  icon: "/assets/resume/badge.svg",
  title: "Non IT Experience",
  description: "",
  items: [
    {
      company: "Origami Foto Studio",
      position: "Editor",
      duration: "Jan 2023 - Des 2023",
    },
    {
      company: "PT Pancaran bumi segara (freelance)",
      position: "LPG 3KG delivery assistant",
      duration: "June 2020 - Desc 2022",
    },
    {
      company: "PT.ASTRA Honda Motor",
      position: "Operator Production",
      duration: "July 2018 - May 2020",
    },
  ],
};

//education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "",
  items: [
    {
      institutuion: "Bangkit Academy",
      degree: "Cloud Computing",
      duration: "Feb - Jun 2024",
    },
    {
      institutuion: "Bina Sarana University",
      degree: "Information System",
      duration: "2020 - Present",
    },
    {
      institutuion: "SMKN 4 Sukabumi",
      degree: "motorcycle engineering",
      duration: "2015 - 2018",
    },
  ],
};

//skill data
const skills = {
  title: "My skills",
  description: "",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaJsSquare />,
      name: "Javascript",
    },
    {
      icon: <FaPhp />,
      name: "PHP",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind css",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDb",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
    },
    {
      icon: <SiGooglecloud />,
      name: "Google Cloud Platform",
    },
    {
      icon: <DiCodeigniter />,
      name: "Codeigniter",
    },
    {
      icon: <FaNodeJs />,
      name: "node js",
    },
    {
      icon: <FaReact />,
      name: "React",
    },

    {
      icon: <SiNextdotjs />,
      name: "Next Js",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs defaultValue="experience " className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="nonit">Non IT Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            {/* <TabsTrigger value="about">About me</TabsTrigger> */}
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center  lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p>{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* non it */}
            <TabsContent value="nonit" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{nonit.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{nonit.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {nonit.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center  lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.company}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p>{item.position}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center  lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.institutuion}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p>{item.degree}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skill */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className=" flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            {/* <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent> */}
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};
export default Resume;
