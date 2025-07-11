"use client";

import { Button } from "@/components/ui/button";
import { FiEye, FiMail, FiGithub, FiExternalLink } from "react-icons/fi";
import { FaCode, FaDatabase, FaServer, FaWarehouse, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { TbCloudComputing } from "react-icons/tb";
import Image from "next/image";
import { motion } from "framer-motion";

// Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const skills = [
  { name: "Frontend Development", icon: FaCode, description: "HTML, CSS, JavaScript, React,Next.js" },
  { name: "Backend Development", icon: FaServer, description: "Node.js, Express, PHP,Go" },
  { name: "Database Management", icon: FaDatabase, description: "MySQL, PostgreSQL" },
  { name: "Cloud Computing", icon: TbCloudComputing, description: "Google Cloud Platform,Amazon Web Services, Microsoft Azure" },
];

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1",
    image: "/placeholder.svg",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2",
    image: "/placeholder.svg",
    github: "https://github.com",
    live: "https://example.com",
  },
  // Add more projects as needed
];

const timeline = [
  {
    year: "2024",
    title: "Application Developer Intern",
    description: "Worked on developing Application Internal,fullstack working on RESTful APIs and database optimization",
    icon: FaBriefcase,
  },
  {
    year: "2024",
    title: "Studied at Bangkit Academy",
    description: "Completed an intensive cloud computing program at Bangkit Academy",
    icon: FaGraduationCap,
  },
  {
    year: "2020",
    title: "Started Information Systems Degree",
    description: "Enrolled at Bina Sarana University",
    icon: FaGraduationCap,
  },
  {
    year: "2018",
    title: "Operator Production Warehouse",
    description: "Working as an operator in the production warehouse",
    icon: FaWarehouse,
  },
  {
    year: "2018",
    title: "Finished motorcycle engineering school",
    description: "finished motorcycle engineering school at SMKN 4 Sukabumi",
    icon: FaGraduationCap,
  },
];

const Home = () => {
  return (
    <div className="min-h-screen from-primary to-primary-dark">
      {/* Hero Section */}
      <section className="container mx-auto py-12 px-4">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:py-16">
          {/* Text */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold my-4">
              Hello, I'm <br /> <span className="text-accent">Hari Handika</span>
            </h1>

            <p className="max-w-[500px] mt-5 mx-auto xl:mx-0 mb-9 text-white/80 text-lg">
              I'm an Fresh Graduate from Information Systems student at Bina Sarana University, passionate about full-stack application development,building prototype business logic and analyzing system operation to deliver effective solutions for real-world problems. I am committed to constantly expanding my skills in this field to tackle more complex challenges.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-4 mb-8">
              <a href="https://drive.google.com/file/d/1CnIXD7mLKQ-6tB-_hJBtmnFS7BwJqLzt/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <FiEye className="mr-2" />
                  Preview CV
                </Button>
              </a>

            </div>

            <Social
              containerStyles="flex justify-center xl:justify-start gap-6"
              iconStyles="w-10 h-10 border border-accent rounded-full flex justify-center items-center text-accent text-xl hover:bg-accent hover:text-primary transition-all duration-300"
            />
          </motion.div>

          {/* Photo */}
          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Skills Section */}
      <section className="py-16 bg-primary-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12"></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-primary p-6 rounded-lg shadow-lg">
                <skill.icon className="text-4xl text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-white/80">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-accent">My Journey</h2>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-accent h-full"></div>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`relative flex justify-between items-center w-full mb-12 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
              >
                <div className="w-5/12"></div>

                {/* Timeline Marker */}
                <div className="z-20 flex items-center justify-center bg-accent text-primary shadow-xl w-10 h-10 rounded-full text-lg font-semibold border-4 border-white">
                  {item.year}
                </div>

                {/* Timeline Content */}
                <div className={`relative bg-primary rounded-lg shadow-lg w-5/12 p-6 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                  <h3 className="mb-3 font-bold text-accent text-xl">{item.title}</h3>
                  <p className="text-sm leading-snug tracking-wide text-white/80">{item.description}</p>
                  <item.icon className="text-3xl text-accent mt-4" />
                  {/* Decorative Glow */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-primary-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">My Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-primary rounded-lg overflow-hidden shadow-lg">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} width={400} height={200} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-white/80 mb-4">{project.description}</p>
                  <div className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <FiGithub className="mr-2" />
                      GitHub
                    </Button>
                    <Button variant="default" size="sm">
                      <FiExternalLink className="mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
