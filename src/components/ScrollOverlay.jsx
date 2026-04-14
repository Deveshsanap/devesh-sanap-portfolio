import React from 'react';

export default function ScrollOverlay() {
  return (
    // Mobile-first padding, scaling up for larger screens
    <div className="w-full px-6 py-12 md:px-24 md:py-24">
      {/* Section 1: Hero */}
      <section className="min-h-screen flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          Devesh Vijay Sanap.
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 max-w-2xl">
          Building production-ready web applications with React.js, Spring Boot, and modern UI architectures.
        </p>
      </section>

      {/* Section 2: Space for GSAP to scroll into */}
      <section className="min-h-screen flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Selected Works</h2>
        {/* We will build the project cards here later */}
      </section>
      
      {/* Section 3: Extra scroll space */}
      <section className="min-h-screen flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Technical Arsenal</h2>
      </section>
    </div>
  );
}