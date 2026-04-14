import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact'; // Import Contact
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden font-sans">
      <Toaster position="bottom-right" toastOptions={{
        style: { background: '#1e293b', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }
      }} />

      <Navbar />

      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/20 blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[120px] pointer-events-none z-0" />
      
      <main className="relative z-10 container mx-auto px-6 md:px-12 py-8 flex flex-col items-center">
        <Hero />
        <About />
        <Projects />
        <Contact /> {/* Added Contact Section */}
        
        {/* Simple Minimalist Footer */}
        <footer className="w-full max-w-5xl border-t border-white/10 mt-12 py-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Devesh Sanap. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with React & Tailwind</p>
        </footer>
      </main>
    </div>
  );
}

export default App;