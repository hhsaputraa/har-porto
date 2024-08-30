"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+62) 818 1872 0454",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "harihandika12@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Indonesia",
  },
];

const Contact = () => {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="py-12 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className="text-4xl font-bold text-center text-accent mb-12">
          Get in Touch
        </motion.h2>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Info */}
          <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="lg:w-1/3 space-y-6">
            {info.map((item, index) => (
              <div key={index} className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg">
                <div className="text-accent text-2xl">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} className="lg:w-2/3">
            <form className="space-y-6 bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="Name" className="bg-gray-700 text-white" />
                <Input type="email" placeholder="Email" className="bg-gray-700 text-white" />
              </div>
              <Input type="tel" placeholder="Phone Number" className="bg-gray-700 text-white" />
              <Textarea className="h-40 bg-gray-700 text-white" placeholder="Your message" />
              <Button size="lg" className="w-full bg-accent hover:bg-accent-dark transition-colors">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
