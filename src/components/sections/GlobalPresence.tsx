"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export function GlobalPresence() {
  const [activeQuery, setActiveQuery] = useState("Betma Bypass Indore OR Sagore Kuti Pithampur OR Pithampur Industrial Area OR Annapurna Rd Usha Nagar Indore");

  return (
    <section className="relative w-full bg-white py-12 md:py-24 overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto px-3 md:px-3">

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-5">

          {/* 1. LEFT LARGE CARD (Interactive Google Map) */}
          <div id="presence-map" className="lg:col-span-7 relative h-[400px] md:h-[450px] lg:h-[550px] rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden group border border-black/5 bg-[#f0f0f0]">
            {/* Dynamic Google Map */}
            <iframe
              key={activeQuery}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(activeQuery)}&t=&z=${activeQuery.includes('OR') ? 10 : 14}&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              className="absolute inset-0 grayscale-[0.6] contrast-[1.1] group-hover:grayscale-0 transition-all duration-[2000ms]"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
            <div className="absolute inset-0 bg-black/5 pointer-events-none" />

            <div className="hidden sm:block absolute bottom-[-1px] left-[-1px] bg-white p-6 md:p-8 pr-10 md:pr-14 rounded-tr-[2.5rem] md:rounded-tr-[3.5rem] z-10 w-[92%] sm:w-auto max-w-[450px]">
              {/* Inverted Curves */}
              <div className="absolute -top-[30px] md:-top-[40px] left-0 w-[30px] md:w-[40px] h-[30px] md:h-[40px] bg-white"
                style={{ maskImage: 'radial-gradient(circle at 100% 0%, transparent 70%, black 72%)', WebkitMaskImage: 'radial-gradient(circle at 100% 0%, transparent 70%, black 72%)' }}
              />
              <div className="absolute bottom-0 -right-[30px] md:-right-[40px] w-[30px] md:w-[40px] h-[30px] md:h-[40px] bg-white"
                style={{ maskImage: 'radial-gradient(circle at 100% 0%, transparent 70%, black 72%)', WebkitMaskImage: 'radial-gradient(circle at 100% 0%, transparent 70%, black 72%)' }}
              />

              <div className="flex flex-col items-start">
                <h3 className="text-[28px] sm:text-[34px] md:text-[42px] lg:text-[48px] font-black text-black leading-[0.95] tracking-tight uppercase">
                  INDORE & <br />
                  <span className="text-black/20 italic">PITHAMPUR.</span>
                </h3>
                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                  {[
                    { label: "🗺️ All Projects Spread", query: "Betma Bypass Indore OR Sagore Kuti Pithampur OR Pithampur Industrial Area OR Annapurna Rd Usha Nagar Indore" },
                    { label: "📍 Head Office", query: "Hortus conclusus, JHQR+4F2, Pithampur Industrial Area, Vijay Nagar Colony, Madhya Pradesh 454774" },
                    { label: "📍 Branch Office", query: "Annapurna Rd, Usha Nagar, Indore, Madhya Pradesh 452009" },
                    { label: "Usha Nagar, Indore", query: "Annapurna Road, Usha Nagar, Indore, Madhya Pradesh" },
                    { label: "Betma Bypass", query: "Betma Bypass, Indore, Madhya Pradesh" },
                    { label: "Sagore Kuti", query: "Sagore Kuti, Pithampur, Madhya Pradesh" },
                    { label: "Pithampur", query: "Pithampur, Madhya Pradesh" },
                  ].map((loc, i) => (
                    <span
                      key={i}
                      onMouseEnter={() => setActiveQuery(loc.query)}
                      onClick={() => setActiveQuery(loc.query)}
                      className={`text-[11px] md:text-[12px] font-black uppercase tracking-widest cursor-pointer transition-all flex items-center gap-2 ${activeQuery === loc.query ? 'text-black font-extrabold' : 'text-black/30 hover:text-black'}`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full transition-all ${activeQuery === loc.query ? 'bg-primary scale-125' : 'bg-primary/20'}`} />
                      {loc.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Location Selector (Only visible on Mobile) */}
          <div className="sm:hidden w-full bg-[#fbfaf9] border border-black/5 p-6 rounded-[2rem] mt-2 mb-4 col-span-1">
            <h3 className="text-[18px] font-black text-black leading-none uppercase mb-4">
              INDORE & <span className="text-black/20 italic">PITHAMPUR.</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "🗺️ All Projects", query: "Betma Bypass Indore OR Sagore Kuti Pithampur OR Pithampur Industrial Area OR Annapurna Rd Usha Nagar Indore" },
                { label: "📍 Head Office", query: "Hortus conclusus, JHQR+4F2, Pithampur Industrial Area, Vijay Nagar Colony, Madhya Pradesh 454774" },
                { label: "📍 Branch Office", query: "Annapurna Rd, Usha Nagar, Indore, Madhya Pradesh 452009" },
                { label: "Usha Nagar", query: "Annapurna Road, Usha Nagar, Indore, Madhya Pradesh" },
                { label: "Betma Bypass", query: "Betma Bypass, Indore, Madhya Pradesh" },
                { label: "Sagore Kuti", query: "Sagore Kuti, Pithampur, Madhya Pradesh" },
                { label: "Pithampur", query: "Pithampur, Madhya Pradesh" },
              ].map((loc, i) => (
                <button
                  key={i}
                  onClick={() => setActiveQuery(loc.query)}
                  className={`text-[9px] font-black uppercase tracking-widest px-3 py-2 rounded-xl transition-all border ${
                    activeQuery === loc.query 
                      ? 'bg-black text-white border-black' 
                      : 'bg-white text-black/50 border-black/5 hover:border-black/20'
                  }`}
                >
                  {loc.label}
                </button>
              ))}
            </div>
          </div>

          {/* 2. RIGHT COLUMN */}
          <div className="lg:col-span-3 flex flex-col gap-5">

            {/* TOP TEXT CARD */}
            <div className="flex-1 bg-[#f5f1ed] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-7 flex flex-col justify-start relative overflow-hidden min-h-[250px]">
              <div className="inline-flex px-4 py-1.5 border border-black/10 rounded-full mb-6 self-start bg-white/50 text-[10px] font-black uppercase tracking-wider">
                Indore Projects
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-7">
                {[
                  { label: "Rudraksha City", query: "Betma Bypass, Indore, Madhya Pradesh" },
                  { label: "Betma Bypass", query: "Betma Bypass, Indore, Madhya Pradesh" },
                  { label: "Sagore Kuti", query: "Sagore Kuti, Pithampur, Madhya Pradesh" },
                  { label: "Pithampur", query: "Pithampur, Madhya Pradesh" },
                  { label: "Betma Road", query: "Betma Road, Pithampur, Madhya Pradesh" },
                  { label: "Usha Nagar", query: "Usha Nagar, Indore, Madhya Pradesh" },
                ].map((loc, i) => (
                  <span
                    key={i}
                    onMouseEnter={() => setActiveQuery(loc.query)}
                    onClick={() => setActiveQuery(loc.query)}
                    className={`text-[11px] font-black uppercase tracking-tight flex items-center gap-2 cursor-pointer transition-all ${activeQuery === loc.query ? 'text-black translate-x-1' : 'text-black/50 hover:text-black'}`}
                  >
                    <div className={`w-1 h-1 rounded-full ${activeQuery === loc.query ? 'bg-primary scale-125' : 'bg-primary/20'}`} />
                    {loc.label}
                  </span>
                ))}
              </div>

              <h3 className="text-[22px] md:text-[24px] font-black text-black leading-[1] tracking-tight uppercase mt-auto">
                Serving All of <br /> Indore & MP.
              </h3>
            </div>

            {/* BOTTOM IMAGE CARD (Pithampur) */}
            <div className="flex-1 relative group rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-black/5 min-h-[260px]">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200"
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-[2000ms]"
                alt="Pithampur Industrial Area - Rudraksha Properties"
              />
              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute top-8 left-8 right-8">
                <div className="inline-flex px-4 py-1.5 border border-white/20 rounded-full bg-black/20 backdrop-blur-md text-[10px] font-black uppercase tracking-wider text-white mb-6">
                  Pithampur Projects
                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {[
                    { label: "Betma Road", query: "Betma Road, Pithampur, Madhya Pradesh" },
                    { label: "Sagore Kuti", query: "Sagore Kuti, Pithampur, Madhya Pradesh" },
                    { label: "Pithampur", query: "Pithampur, Madhya Pradesh" },
                    { label: "Betma Bypass", query: "Betma Bypass, Indore, Madhya Pradesh" },
                  ].map((loc, i) => (
                    <span
                      key={i}
                      onMouseEnter={() => setActiveQuery(loc.query)}
                      onClick={() => setActiveQuery(loc.query)}
                      className={`text-[11px] font-black text-white uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all ${activeQuery === loc.query ? 'text-white scale-105' : 'text-white/50 hover:text-white'}`}
                    >
                      <div className={`w-1 h-1 rounded-full ${activeQuery === loc.query ? 'bg-primary scale-125' : 'bg-white/20'}`} />
                      {loc.label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-[-1px] right-[-1px] bg-white p-4 md:p-5 pt-6 md:pt-7 pl-6 md:pl-7 rounded-tl-[2.5rem] md:rounded-tl-[3.5rem] z-20">
                <div className="absolute -top-[30px] md:-top-[40px] right-0 w-[30px] md:w-[40px] h-[30px] md:h-[40px] bg-white"
                  style={{ maskImage: 'radial-gradient(circle at 0% 0%, transparent 70%, black 72%)', WebkitMaskImage: 'radial-gradient(circle at 0% 0%, transparent 70%, black 72%)' }}
                />
                <div className="absolute bottom-0 -left-[30px] md:-left-[40px] w-[30px] md:w-[40px] h-[30px] md:h-[40px] bg-white"
                  style={{ maskImage: 'radial-gradient(circle at 0% 0%, transparent 70%, black 72%)', WebkitMaskImage: 'radial-gradient(circle at 0% 0%, transparent 70%, black 72%)' }}
                />
                <a
                  href="https://maps.app.goo.gl/fYFz5ULABsU7NIWB2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-black text-white flex items-center justify-center hover:bg-primary hover:text-black transition-all group/btn shadow-xl"
                >
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* STATS STRIP BELOW */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 px-2">
          {[
            { 
              label: "Head Office", 
              val: "Hortus Conclusus, Pithampur", 
              query: "Hortus conclusus, JHQR+4F2, Pithampur Industrial Area, Vijay Nagar Colony, Madhya Pradesh 454774",
              clickable: true 
            },
            { 
              label: "Branch Office", 
              val: "Usha Nagar, Indore", 
              query: "Annapurna Rd, Usha Nagar, Indore, Madhya Pradesh 452009",
              clickable: true 
            },
            { 
              label: "Key Projects", 
              val: "Betma Bypass, Sagore Kuti & Pithampur",
              clickable: false 
            },
            { 
              label: "Starting Price", 
              val: "₹6 Lakhs Onwards",
              clickable: false 
            }
          ].map((stat, i) => {
            const isSelected = stat.query === activeQuery;
            return (
              <div 
                key={i} 
                onClick={() => {
                  if (stat.clickable && stat.query) {
                    setActiveQuery(stat.query);
                    const mapEl = document.getElementById("presence-map");
                    if (mapEl) {
                      mapEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }
                }}
                className={`flex flex-col group border-l pl-6 md:pl-8 transition-all duration-300 ${
                  stat.clickable 
                    ? 'cursor-pointer hover:border-[#968370]/50' 
                    : 'cursor-default'
                } ${
                  stat.clickable && isSelected 
                    ? 'border-[#968370] scale-102 bg-[#eeeae7]/30 rounded-r-xl py-2 -my-2' 
                    : 'border-black/5'
                }`}
              >
                <span className={`text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] transition-colors mb-2 italic ${
                  stat.clickable && isSelected ? 'text-[#968370]' : 'text-black/20 group-hover:text-[#968370]'
                }`}>
                  {stat.label} {stat.clickable && isSelected && "📍"}
                </span>
                <span className={`text-[14px] sm:text-[16px] md:text-[18px] font-black tracking-tight uppercase leading-none transition-colors ${
                  stat.clickable && isSelected ? 'text-black' : 'text-black/80'
                }`}>
                  {stat.val}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
