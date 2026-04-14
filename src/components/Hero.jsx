import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const techStack = ['React.js', 'Java', 'Spring Boot', 'MySQL', 'Tailwind CSS'];

const images = [
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1522337360788-8b13fee7a3ce?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80"
];

export default function Hero() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]); 
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex flex-col justify-center items-center text-center pt-16 mt-[-2rem] mb-12">
      
      {/* THE PARALLAX BACKGROUND GRID */}
      <div 
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[100vw] h-[120%] z-0 flex gap-4 sm:gap-6 md:gap-8 justify-center opacity-25 pointer-events-none overflow-hidden"
        style={{
          /* This CSS mask creates a flawless fade at the top and bottom of the images themselves */
          maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
        }}
      >
        <motion.div style={{ y: y1 }} className="flex flex-col gap-4 sm:gap-6 md:gap-8 min-w-[150px] md:min-w-[250px] pt-12">
          {[images[0], images[1], images[2], images[0]].map((src, i) => (
            <img key={`c1-${i}`} src={src} alt="Project context" className="w-full rounded-xl object-cover h-40 md:h-64 shadow-2xl" />
          ))}
        </motion.div>

        <motion.div style={{ y: y2 }} className="hidden sm:flex flex-col gap-4 sm:gap-6 md:gap-8 min-w-[150px] md:min-w-[250px] -mt-48">
          {[images[3], images[4], images[5], images[3]].map((src, i) => (
            <img key={`c2-${i}`} src={src} alt="Project context" className="w-full rounded-xl object-cover h-40 md:h-64 shadow-2xl" />
          ))}
        </motion.div>

        <motion.div style={{ y: y3 }} className="flex flex-col gap-4 sm:gap-6 md:gap-8 min-w-[150px] md:min-w-[250px] pt-32">
          {[images[2], images[5], images[0], images[2]].map((src, i) => (
            <img key={`c3-${i}`} src={src} alt="Project context" className="w-full rounded-xl object-cover h-40 md:h-64 shadow-2xl" />
          ))}
        </motion.div>
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10 w-full flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-sm md:text-base font-semibold tracking-widest text-indigo-400 uppercase mb-4 drop-shadow-md">
            Welcome to my portfolio
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Devesh Sanap</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-3xl text-gray-400 mb-10 h-12 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]"
        >
          <span>I build </span>
          <span className="text-white font-medium">
            <Typewriter
              words={[
                'production-ready web apps.', 
                'scalable Spring Boot APIs.', 
                'seamless responsive UIs.'
              ]}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-2xl"
        >
          {techStack.map((tech, index) => (
            <div 
              key={index}
              className="px-4 py-2 md:px-6 md:py-3 rounded-full bg-[#0a0a0a] border border-white/20 text-sm md:text-base text-gray-200 hover:bg-white/10 hover:border-white/40 hover:-translate-y-1 transition-all duration-300 cursor-default shadow-xl"
            >
              {tech}
            </div>
          ))}
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.6, delay: 0.6 }}
           className="mt-14 flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6 sm:px-0"
        >
           <a 
              href="#projects" 
              className="px-8 py-3 sm:py-4 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors text-center shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)]"
           >
             View Projects
           </a>
           <a 
              href="https://github.com/Deveshsanap" 
              target="_blank" 
              rel="noreferrer" 
              className="px-8 py-3 sm:py-4 rounded-full bg-[#0a0a0a] border border-white/20 hover:bg-white/10 text-white font-medium transition-colors text-center shadow-lg"
           >
             GitHub Profile
           </a>
        </motion.div>
      </div>

    </section>
  );
} 