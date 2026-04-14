import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    {
      title: "Education",
      value: "B.Tech AI & Data Science",
      subtitle: "MIT • Expected 2026"
    },
    {
      title: "Current Role",
      value: "Web Dev Intern",
      subtitle: "Building client applications"
    },
    {
      title: "Core Focus",
      value: "Production Ready",
      subtitle: "Scalable backend & responsive UI"
    }
  ];

  return (
    <section id="about" className="py-20 flex flex-col items-center">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">About Me</h2>
        <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
      </motion.div>

      {/* Bio Text */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-3xl text-center px-6 mb-16"
      >
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
          I am a Full-Stack Developer with a foundation in Artificial Intelligence and Data Science. 
          Currently, I am working in a professional internship capacity, transforming complex requirements into 
          production-ready web applications. My focus is on architecting clean, component-based frontends 
          and robust REST API backends.
        </p>
      </motion.div>

      {/* Glassmorphism Stat Cards */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-6"
      >
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors duration-300"
          >
            <h3 className="text-indigo-400 text-sm font-semibold uppercase tracking-wider mb-2">
              {stat.title}
            </h3>
            <p className="text-white text-xl font-bold mb-2">
              {stat.value}
            </p>
            <p className="text-gray-400 text-sm">
              {stat.subtitle}
            </p>
          </div>
        ))}
      </motion.div>

    </section>
  );
}