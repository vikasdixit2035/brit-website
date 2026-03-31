"use client";

import { motion } from 'framer-motion';
import { Code, UserPlus, Layers, Star, Clock, CheckCircle, BarChart } from 'lucide-react';
import useReveal from "@/hooks/useReveal";

const PROGRAMS = [
  {
    id: 'data-analytics',
    topBadge: 'IN DEMAND',
    bottomLeftBadge: 'DATA ANALYTICS',
    isPopular: true,
    title: 'Data Analytics Course with Generative AI',
    desc: 'Learn data analysis, dashboards and AI tools for job-ready skills.',
    duration: '4-6 Months',
    projects: 'Real-world use cases',
    gradient: 'from-blue-500 to-blue-700',
    icon: <BarChart size={56} color="white" strokeWidth={1.5} />
  },
  {
    id: 'data-science',
    topBadge: 'ADVANCED',
    bottomLeftBadge: 'DATA SCIENCE',
    isPopular: true,
    title: 'Data Science & Machine Learning Course',
    desc: 'Build predictive models and advanced data systems.',
    duration: '6 Months',
    projects: 'Predictive modeling',
    gradient: 'from-teal-400 to-teal-600',
    icon: <Code size={56} color="white" strokeWidth={1.5} />
  },
  {
    id: 'ai-automation',
    topBadge: 'FEATURED',
    bottomLeftBadge: 'AI & AUTOMATION',
    isPopular: true,
    title: 'AI & Automation Course',
    desc: 'Create intelligent workflows and automation solutions.',
    duration: '4 Months',
    projects: 'Workflow automation',
    gradient: 'from-purple-500 to-purple-700',
    icon: <Layers size={56} color="white" strokeWidth={1.5} />
  }
];

export default function Programs() {
  const r = useReveal();

  // Duplicate the array to create a seamless, infinite loop effect
  const duplicatedPrograms = [...PROGRAMS, ...PROGRAMS];

  return (
    <section id="programs" className="w-full bg-[#0F1218] py-24 font-sans overflow-hidden" ref={r.ref}>
      {/* Embedded CSS for the continuous marquee animation */}
      <style>{`
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-marquee {
          /* Adjust the 40s to make it scroll faster or slower */
          animation: infinite-scroll 40s linear infinite;
          width: max-content;
        }

        /* Pauses the animation when the user hovers over the section */
        .marquee-container:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>

      <div className={`max-w-[1400px] mx-auto ${r.cls}`}>

        {/* Header */}
        <header className="text-center mb-16 px-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-semibold tracking-wider mb-4 uppercase"
          >
            Curated Excellence
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Start learning with our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">top programs</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore our highly rated curriculum, designed with industry partners to help you land premium roles.
          </p>
        </header>

        {/* Marquee Wrapper */}
        <div className="relative w-full overflow-hidden mt-4 marquee-container">

          {/* Left & Right Gradient Masks (Optional but looks highly premium) */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0F1218] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0F1218] to-transparent z-10 pointer-events-none"></div>

          {/* The Scrolling Track */}
          <div className="animate-marquee flex flex-nowrap gap-6 pb-12 pt-4 px-6">
            {duplicatedPrograms.map((prog, idx) => (
              <div
                // Use a combination of id and index for a unique key since items are duplicated
                key={`${prog.id}-${idx}`}
                className="w-[340px] md:w-[380px] flex-none bg-[#1A1D24] rounded-2xl border border-gray-800 overflow-hidden flex flex-col group hover:-translate-y-2 transition-transform duration-300 shadow-xl cursor-pointer"
              >

                {/* Card Top: Gradient & Icon */}
                <div className={`relative h-56 w-full bg-gradient-to-br ${prog.gradient} flex items-center justify-center p-6`}>

                  <span className="absolute top-4 right-4 bg-white text-gray-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                    {prog.topBadge}
                  </span>

                  <div className="transform group-hover:scale-110 transition-transform duration-500">
                    {prog.icon}
                  </div>

                  <div className="absolute bottom-4 left-4 bg-black/30 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/10 uppercase tracking-wide">
                    {prog.bottomLeftBadge}
                  </div>

                  {prog.isPopular && (
                    <div className="absolute bottom-4 right-4 bg-yellow-400 text-yellow-950 text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-md">
                      <Star size={12} className="fill-yellow-950" />
                      Popular
                    </div>
                  )}
                </div>

                {/* Card Bottom: Content & Buttons */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white leading-tight mb-3">
                    {prog.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {prog.desc}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-300 font-medium">
                    <div className="flex items-center gap-1.5">
                      <Clock size={16} className="text-blue-400" />
                      {prog.duration}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle size={16} className="text-emerald-400" />
                      {prog.projects}
                    </div>
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-xl text-sm transition-colors duration-200">
                      View Details
                    </button>
                    <button className="flex-1 bg-transparent border border-gray-700 hover:border-gray-500 hover:bg-white/5 text-white font-semibold py-3 px-4 rounded-xl text-sm transition-all duration-200">
                      Apply Now
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}