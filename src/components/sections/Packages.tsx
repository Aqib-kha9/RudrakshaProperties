"use client";

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
   MapPin,
   ChevronRight,
   ChevronLeft,
   ArrowUpRight,
   Search
} from 'lucide-react';
import { properties as packages } from '@/data/properties';

export function Packages() {
   const router = useRouter();
   const scrollContainerRef = useRef<HTMLDivElement>(null);

   // Search & Filter States
   const [searchQuery, setSearchQuery] = useState("");
   const [selectedType, setSelectedType] = useState("All");
   const [selectedLocation, setSelectedLocation] = useState("All");
   const [selectedBudget, setSelectedBudget] = useState("All");

   const scroll = (direction: 'left' | 'right') => {
      if (scrollContainerRef.current) {
         const { scrollLeft, clientWidth } = scrollContainerRef.current;
         const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
         scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
      }
   };

   // Filter Logic
   const filteredPackages = packages.filter((pkg) => {
      const matchesSearch = pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            pkg.location.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            pkg.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesType = selectedType === "All" || pkg.type === selectedType;
      
      const matchesLocation = selectedLocation === "All" || 
                              pkg.location.toLowerCase().includes(selectedLocation.toLowerCase());
      
      let matchesBudget = true;
      if (selectedBudget === "under-10") {
         matchesBudget = pkg.budget < 10;
      } else if (selectedBudget === "10-20") {
         matchesBudget = pkg.budget >= 10 && pkg.budget <= 20;
      } else if (selectedBudget === "above-20") {
         matchesBudget = pkg.budget > 20;
      }

      return matchesSearch && matchesType && matchesLocation && matchesBudget;
   });

   const displayPackages = filteredPackages;

   return (
      <section id="packages" className="w-full bg-white font-sans overflow-hidden flex flex-col relative z-20">
         <div className="max-w-[1400px] mx-auto px-3 md:px-3 lg:px-3 w-full flex-grow flex flex-col">

            {/* --- Phase 1: Compact Split Header --- */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-12 flex-shrink-0">
               {/* Left Title */}
               <div className="md:col-span-6">
                  <motion.h2
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="text-[36px] md:text-[54px] lg:text-[72px] font-black text-black leading-[0.9] uppercase tracking-tighter"
                  >
                     Featured <br />
                     <span className="text-black/20 italic">Projects.</span>
                  </motion.h2>
               </div>

               {/* Right Info & Navigation Buttons */}
               <div className="md:col-span-6 flex justify-between items-end gap-12">
                  <p className="hidden md:block text-[14px] text-black/50 font-medium leading-relaxed max-w-[300px]">
                     Explore our featured property projects across Indore, Pithampur, and Madhya Pradesh.
                  </p>

                  {/* Navigation Arrows */}
                  <div className="hidden md:flex gap-4">
                     <button
                        onClick={() => scroll('left')}
                        className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm"
                     >
                        <ChevronLeft className="w-6 h-6" />
                     </button>
                     <button
                        onClick={() => scroll('right')}
                        className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm"
                     >
                        <ChevronRight className="w-6 h-6" />
                     </button>
                  </div>
               </div>
            </div>

            {/* --- Filters Panel --- */}
            <div className="bg-[#fdfcfb] border border-black/5 rounded-[24px] md:rounded-[32px] p-5 md:p-6 mb-12 flex flex-col lg:flex-row gap-4 items-center justify-between w-full shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)]">
               {/* Search Input */}
               <div className="relative w-full lg:w-[35%] flex items-center bg-[#f5f2ee] rounded-[18px] md:rounded-[22px] px-5 py-3 md:py-3.5">
                  <Search className="w-4 h-4 text-black/30 mr-3 flex-shrink-0" />
                  <input
                     type="text"
                     placeholder="Search plots, locations..."
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                     className="w-full bg-transparent border-0 text-[13px] font-semibold text-black placeholder-black/30 focus:ring-0 outline-none p-0"
                  />
                  {searchQuery && (
                     <button onClick={() => setSearchQuery("")} className="text-black/30 hover:text-black/60 text-[11px] font-bold uppercase ml-2">Clear</button>
                  )}
               </div>

               {/* Dropdown Filters Group */}
               <div className="flex flex-wrap lg:flex-nowrap gap-3 w-full lg:w-[65%] lg:justify-end">
                  {/* Location Filter */}
                  <div className="relative w-[48%] sm:w-auto min-w-[130px] flex-grow sm:flex-grow-0">
                     <select
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                        className="w-full bg-[#f5f2ee] border-0 rounded-[18px] md:rounded-[22px] px-5 py-3 md:py-3.5 text-[11px] md:text-[12px] font-extrabold uppercase tracking-wide text-black/70 outline-none cursor-pointer appearance-none pr-8"
                        style={{ backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`, backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em 1.5em', backgroundRepeat: 'no-repeat' }}
                     >
                        <option value="All">All Locations</option>
                        <option value="Betma">Betma Bypass</option>
                        <option value="Pithampur">Pithampur</option>
                     </select>
                  </div>

                  {/* Property Type Filter */}
                  <div className="relative w-[48%] sm:w-auto min-w-[130px] flex-grow sm:flex-grow-0">
                     <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="w-full bg-[#f5f2ee] border-0 rounded-[18px] md:rounded-[22px] px-5 py-3 md:py-3.5 text-[11px] md:text-[12px] font-extrabold uppercase tracking-wide text-black/70 outline-none cursor-pointer appearance-none pr-8"
                        style={{ backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`, backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em 1.5em', backgroundRepeat: 'no-repeat' }}
                     >
                        <option value="All">All Types</option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                     </select>
                  </div>

                  {/* Budget Filter */}
                  <div className="relative w-full sm:w-auto min-w-[140px] flex-grow sm:flex-grow-0">
                     <select
                        value={selectedBudget}
                        onChange={(e) => setSelectedBudget(e.target.value)}
                        className="w-full bg-[#f5f2ee] border-0 rounded-[18px] md:rounded-[22px] px-5 py-3 md:py-3.5 text-[11px] md:text-[12px] font-extrabold uppercase tracking-wide text-black/70 outline-none cursor-pointer appearance-none pr-8"
                        style={{ backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`, backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em 1.5em', backgroundRepeat: 'no-repeat' }}
                     >
                        <option value="All">All Budgets</option>
                        <option value="under-10">Under ₹10 Lakhs</option>
                        <option value="10-20">₹10 Lakhs - ₹20 Lakhs</option>
                        <option value="above-20">Above ₹20 Lakhs</option>
                     </select>
                  </div>
               </div>
            </div>

            {/* --- Phase 2: Card Canvas / Filter Results --- */}
            {displayPackages.length === 0 ? (
               <div className="w-full text-center py-20 bg-[#fbfaf9] rounded-[32px] md:rounded-[48px] border border-black/5 flex flex-col items-center justify-center">
                  <p className="text-[16px] font-bold text-black/40 uppercase tracking-wider">No matching projects found</p>
                  <button 
                     onClick={() => {
                        setSearchQuery("");
                        setSelectedType("All");
                        setSelectedLocation("All");
                        setSelectedBudget("All");
                     }}
                     className="mt-4 text-[11px] font-black uppercase tracking-widest text-[#968370] hover:text-black transition-colors"
                  >
                     Reset Filters
                  </button>
               </div>
            ) : (
               <div
                  ref={scrollContainerRef}
                  className="flex-grow flex flex-col md:flex-row gap-12 md:gap-6 md:overflow-x-auto no-scrollbar snap-y md:snap-x snap-mandatory pb-10"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
               >
                  {displayPackages.map((pkg: any, index) => (
                     <motion.div
                        key={pkg.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="w-full md:min-w-full snap-center flex flex-col group cursor-pointer bg-[#fdfcfb] md:bg-transparent p-5 md:p-0 rounded-[35px] md:rounded-0 border border-black/5 md:border-0"
                        onClick={() => router.push(`/packages/${pkg.id}`)}
                     >
                        {/* --- Image Block --- */}
                        <div className="order-1 md:order-2 h-[250px] sm:h-[300px] md:h-[300px] lg:h-[380px] w-full overflow-hidden rounded-[24px] md:rounded-[40px] relative shadow-lg mb-6 md:mb-8 md:mt-8">
                           <img
                              src={pkg.image}
                              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[1200ms]"
                              alt={pkg.title}
                           />
                           
                           {/* Badges Overlays */}
                           <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full shadow-md z-10">
                              <span className="text-[9px] font-black uppercase tracking-wider text-black">{pkg.type} Plot</span>
                           </div>

                           <div className={`absolute top-4 right-4 backdrop-blur-sm px-3.5 py-1.5 rounded-full shadow-md z-10 ${
                              pkg.status === "Available" ? "bg-green-600/90 text-white" :
                              pkg.status === "Sold" ? "bg-red-600/90 text-white" :
                              "bg-amber-500/95 text-white"
                           }`}>
                              <span className="text-[9px] font-black uppercase tracking-wider">{pkg.status}</span>
                           </div>
                        </div>

                        {/* --- Information Block --- */}
                        <div className="order-2 md:order-1 flex flex-col">
                           <div className="flex justify-between items-center mb-4 border-b border-black/5 pb-4">
                              <div className="flex items-center gap-3">
                                 <MapPin className="w-4 h-4 text-primary" />
                                 <span className="text-[11px] font-black uppercase tracking-widest text-black/40">{pkg.location}</span>
                              </div>
                              <span className="text-[11px] font-black uppercase tracking-widest text-black/40">{pkg.duration}</span>
                           </div>

                           <h3 className="text-[26px] md:text-[42px] lg:text-[54px] font-black uppercase tracking-tighter text-black leading-tight mb-4 md:mb-6 group-hover:text-primary transition-colors">
                              {pkg.title.includes(':') ? pkg.title.split(':')[1].trim() : pkg.title}
                           </h3>

                           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-0">
                              <div className="flex gap-8">
                                 <div className="flex flex-col">
                                    <span className="text-[10px] font-bold text-black/20 uppercase tracking-widest leading-none mb-1">Starting Price</span>
                                    <span className="text-[24px] md:text-[32px] lg:text-[38px] font-black text-black leading-none">{pkg.price}</span>
                                 </div>
                                 <div className="flex flex-col border-l border-black/10 pl-8">
                                    <span className="text-[10px] font-bold text-black/20 uppercase tracking-widest leading-none mb-1">Plot Size</span>
                                    <span className="text-[22px] md:text-[28px] font-black text-black leading-none">{pkg.size}</span>
                                 </div>
                              </div>
                              <button className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-black text-white rounded-full font-black uppercase text-[10px] lg:text-[11px] tracking-widest flex items-center justify-center gap-3 hover:bg-primary hover:text-black transition-all shadow-xl">
                                 VIEW PROJECT <ArrowUpRight className="w-4 h-4" />
                              </button>
                           </div>
                        </div>
                     </motion.div>
                  ))}

                  {/* Spacer at the end for scroll padding */}
                  <div className="hidden md:block min-w-[10vw]" />
               </div>
            )}

         </div>

         <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -webkit-overflow-scrolling: touch;
        }
      `}</style>

      </section>
   );
}
