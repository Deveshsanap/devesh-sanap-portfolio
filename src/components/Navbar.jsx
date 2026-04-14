import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl"
    >
      <div className="flex items-center justify-between px-6 py-3 md:px-8 md:py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-lg">
        
        {/* Logo / Initials */}
        <a href="#" className="text-white font-bold text-xl tracking-wider">
          DS<span className="text-indigo-500">.</span>
        </a>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Contact Button */}
        <a 
          href="#contact" 
          className="text-sm font-medium px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-colors shadow-[0_0_15px_rgba(79,70,229,0.3)]"
        >
          Let's Talk
        </a>
      </div>
    </motion.nav>
  );
}