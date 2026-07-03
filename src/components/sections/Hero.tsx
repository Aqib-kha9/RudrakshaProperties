"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PLAYLIST = [
  // --- Round 1: Part 1 of all Projects ---
  {
    videoSrc: "/206694_part1.webm",
    posterSrc: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1920&auto=format&fit=crop",
    label: "Rudraksha City, Betma Bypass",
    area: "T&CP Approved | Indore, MP",
    projectId: 1,
  },
  {
    videoSrc: "/302062_part1.webm",
    posterSrc: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1920&auto=format&fit=crop",
    label: "Sagore Kuti Plots, Pithampur",
    area: "Starting ₹6 Lakhs | Betma Road",
    projectId: 2,
  },
  {
    videoSrc: "/313454_part1.webm",
    posterSrc: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1920&auto=format&fit=crop",
    label: "Pithampur Residential Plots",
    area: "T&CP Approved | Legal & Verified",
    projectId: 3,
  },
  {
    videoSrc: "/345412_part1.webm",
    posterSrc: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1920&auto=format&fit=crop",
    label: "Premium Infrastructure & Construction",
    area: "Quality Turnkey Construction | MP",
    projectId: 4,
  },

  // --- Round 2: Part 2 of all Projects ---
  {
    videoSrc: "/206694_part2.webm",
    posterSrc: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1920&auto=format&fit=crop",
    label: "Rudraksha City, Betma Bypass",
    area: "T&CP Approved | Indore, MP",
    projectId: 1,
  },
  {
    videoSrc: "/302062_part2.webm",
    posterSrc: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1920&auto=format&fit=crop",
    label: "Sagore Kuti Plots, Pithampur",
    area: "Starting ₹6 Lakhs | Betma Road",
    projectId: 2,
  },
  {
    videoSrc: "/313454_part2.webm",
    posterSrc: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1920&auto=format&fit=crop",
    label: "Pithampur Residential Plots",
    area: "T&CP Approved | Legal & Verified",
    projectId: 3,
  },
  {
    videoSrc: "/345412_part2.webm",
    posterSrc: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1920&auto=format&fit=crop",
    label: "Premium Infrastructure & Construction",
    area: "Quality Turnkey Construction | MP",
    projectId: 4,
  },

  // --- Round 3: Remaining Parts ---
  {
    videoSrc: "/206694_part3.webm",
    posterSrc: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1920&auto=format&fit=crop",
    label: "Rudraksha City, Betma Bypass",
    area: "T&CP Approved | Indore, MP",
    projectId: 1,
  },
  {
    videoSrc: "/313454_part3.webm",
    posterSrc: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1920&auto=format&fit=crop",
    label: "Pithampur Residential Plots",
    area: "T&CP Approved | Legal & Verified",
    projectId: 3,
  },
  {
    videoSrc: "/345412_part3.webm",
    posterSrc: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1920&auto=format&fit=crop",
    label: "Premium Infrastructure & Construction",
    area: "Quality Turnkey Construction | MP",
    projectId: 4,
  },
  {
    videoSrc: "/345412_part4.webm",
    posterSrc: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1920&auto=format&fit=crop",
    label: "Premium Infrastructure & Construction",
    area: "Quality Turnkey Construction | MP",
    projectId: 4,
  }
];

const PROJECTS_METADATA = [
  { id: 1, label: "Rudraksha City" },
  { id: 2, label: "Sagore Kuti" },
  { id: 3, label: "Pithampur Plots" },
  { id: 4, label: "Infrastructure" },
];

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);

  // Strictly rotate video indexes every 5 seconds (no onEnded dependency, cuts mid-play seamlessly)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % PLAYLIST.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleProjectClick = (projectId: number) => {
    const idx = PLAYLIST.findIndex(item => item.projectId === projectId);
    if (idx !== -1) {
      setCurrentIdx(idx);
    }
  };

  const current = PLAYLIST[currentIdx];
  const activeProjectId = current?.projectId || 1;

  return (
    <section className="relative min-h-[99vh] flex flex-col justify-end pb-7 md:pb-15 px-3 lg:px-6 overflow-hidden rounded-b-[1rem] lg:rounded-b-[2rem]">
      {/* Background Section with Crossfade */}
      <div className="absolute inset-0 z-0 bg-black">
        <AnimatePresence mode="wait">
          <motion.video
            key={current.videoSrc}
            src={current.videoSrc}
            poster={current.posterSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover scale-105 origin-center"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/25 z-10 transition-all duration-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-transparent to-transparent z-10"></div>
      </div>

      {/* Floating Side Indicators */}
      <div className="absolute top-1/2 right-3 lg:right-6 transform -translate-y-1/2 flex flex-col gap-6 items-end z-30 hidden sm:flex">
        {PROJECTS_METADATA.map((prop, i) => (
          <button
            key={prop.id}
            onClick={() => handleProjectClick(prop.id)}
            className="flex items-center gap-4 group"
          >
            <span className={`text-[9px] font-bold uppercase tracking-[0.3em] transition-all duration-500 ${prop.id === activeProjectId ? "text-white" : "text-white/30"}`}>
              0{i + 1}
            </span>
            <div className={`h-[1px] transition-all duration-500 ${prop.id === activeProjectId ? "w-12 bg-white" : "w-4 bg-white/30 group-hover:w-8 group-hover:bg-white/60"}`} />
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 w-full flex flex-col justify-end h-full mt-auto">

        {/* Typography */}
        <div className="mb-20">

          <h1 className="sr-only">Rudraksha Properties & Construction | Premium Real Estate Indore</h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-headline text-7xl md:text-[100px] xl:text-[140px] font-light text-white tracking-tighter leading-none"
          >
            Invest In
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.8 }}
              className="flex flex-wrap items-center gap-4 mt-6 md:mt-10 lg:mt-12 mb-2 pl-2"
            >
              <span className="text-[10px] md:text-xs text-white tracking-[0.3em] uppercase font-light">{current.label}</span>
              <span className="text-[9px] md:text-[10px] text-white/50 tracking-[0.2em] uppercase font-light hidden md:block">— {current.area}</span>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-headline text-7xl md:text-[100px] xl:text-[140px] font-light text-white tracking-tighter leading-none"
          >
            <span className="italic pr-4 text-white/90">Your Dream.</span>
          </motion.div>

        </div>

        {/* Horizontal Action Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 pt-10 border-t border-white/30"
        >
          {/* Action Button & Icon */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="/contact" className="bg-white text-foreground px-10 py-4 rounded-full font-bold text-[13px] tracking-widest uppercase hover:scale-105 active:scale-95 transition-all duration-300">
              Book Site Visit
            </a>
            <a href="#services" className="bg-white text-foreground w-14 h-14 rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
            </a>
          </div>

          {/* Description Text */}
          <div className="flex-1 w-full text-left lg:px-3 xl:px-5">
            <p className="text-white/80 text-sm md:text-[15px] font-light leading-relaxed max-w-2xl">
              Discover premium residential plots, commercial spaces & turnkey construction. <br className="hidden md:block" />
              T&CP approved properties across Indore, Pithampur & Madhya Pradesh.
            </p>
          </div>

          {/* Explore More link */}
          <div className="shrink-0 pt-4 lg:pt-0">
            <a href="#about" className="text-white text-sm font-medium tracking-wide relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-white/50 hover:after:bg-white transition-all">
              Explore more
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
