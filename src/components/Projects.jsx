import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
  </svg>
);

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "Moolgranth",
      category: "Full-Stack",
      description: "A comprehensive e-commerce platform with dynamic product management. Built a robust Spring Boot backend handling REST APIs and integrated secure JWT authorization.",
      tech: ["React", "Spring Boot", "Razorpay"],
      live: "https://moolgranth.com",
      github: "https://github.com/Deveshsanap/mool-granth",
      image: "/MoolgranthHero.png",
      screenshots: [
        "/MoolgranthHero.png",
        "/MoolgranthProducts.png",
        "/MoolgranthCheckout.png"
      ]
    },
    {
      title: "Alday Healthcare",
      category: "Medical Platform",
      description: "Healthcare e-commerce featuring dynamic product listings and specialized frontend tools like a custom DermaAnalyser. Engineered strictly mobile-first.",
      tech: ["React.js", "Tailwind", "REST API"],
      live: "https://alday-healthcare.pages.dev",
      github: "https://github.com/Deveshsanap/alday-healthcare",
      image: "/aldayHero.png",
      screenshots: [
        "/aldayHero.png",
        "/aldayAdminPanel.png",
        "/aldayProfile.png"
      ]
    },
    {
      title: "Devika Industries",
      category: "B2B SaaS",
      description: "An industrial product platform utilizing scalable, reusable UI components. Engineered a secure role-based authentication system.",
      tech: ["React.js", "Tailwind", "REST API"],
      live: "https://devika-industries.pages.dev",
      github: "https://github.com/Deveshsanap/devika-industries",
      image: "/devikaHero.png",
      screenshots: [
        "/devikaHero.png",
        "/devikaCatalog.png",
        "/devikaAuth.png"
      ]
    },
    {
      title: "Pure Revive",
      category: "Service Platform",
      description: "A responsive professional beauty training platform featuring a streamlined content management system for courses and services.",
      tech: ["React.js", "Tailwind"],
      live: "https://vi-purerevive.com",
      github: "#",
      image: "/purereviveHero.png",
      screenshots: [
        "/purereviveHero.png",
        "/purereviveCourses.png",
        "/purereviveServices.png"
      ]
    }
  ];

  return (
    <section id="projects" className="relative py-20 flex flex-col items-center w-full min-h-screen overflow-hidden">
      
      {/* --- THE HOVER BACKGROUND MARQUEE --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AnimatePresence>
          {hoveredProject !== null && (
            <motion.div
              key={hoveredProject}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }} 
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex items-center"
            >
              {/* Softened gradient edge fade so images span further across the screen */}
              <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0a0a0a_100%)]" />
              
              <motion.div 
                animate={{ x: ["0%", "-50%"] }}
                transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                className="flex gap-8 w-max pl-8"
              >
                {[...projects[hoveredProject].screenshots, ...projects[hoveredProject].screenshots, ...projects[hoveredProject].screenshots, ...projects[hoveredProject].screenshots].map((src, i) => (
                  <img 
                    key={i} 
                    src={src} 
                    alt="Project screenshot" 
                    className="h-[40vh] md:h-[60vh] object-cover rounded-2xl shadow-2xl"
                  />
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- THE FOREGROUND CONTENT --- */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">Selected Works</h2>
          <div className="w-12 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl px-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100, damping: 20 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative flex flex-col rounded-2xl bg-[#0a0a0a]/50 border border-white/10 overflow-hidden backdrop-blur-md shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl z-0" />

              <div className="relative h-48 overflow-hidden z-10 border-b border-white/10">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
              </div>

              <div className="p-6 flex flex-col flex-grow relative z-10 bg-[#0a0a0a]/80">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-indigo-400 text-[10px] font-bold uppercase tracking-widest">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {project.title}
                    </h3>
                  </div>
                  
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-transparent transition-all duration-300 transform group-hover:rotate-12 group-hover:scale-110 shadow-lg"
                  >
                    <ArrowIcon />
                  </a>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 text-[10px] font-medium tracking-wide text-gray-200 bg-black/60 rounded border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}