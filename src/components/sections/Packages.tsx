"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
   X,
   MapPin,
   ArrowRight,
   ChevronRight,
   ChevronLeft,
   ArrowUpRight
} from 'lucide-react';

const packages = [
   {
      id: "rudraksh-greens",
      title: "Rudraksh Greens",
      location: "Super Corridor, Indore",
      duration: "T&CP Approved Plots",
      price: "Call for Price",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1200",
      description: "Premium residential plots in Indore's most sought-after location — the Super Corridor. T&CP approved with excellent connectivity and appreciation potential."
   },
   {
      id: "pithampur-plots",
      title: "Pithampur Residential Plots",
      location: "Betma Road, Pithampur",
      duration: "Starting ₹6 Lakhs",
      price: "₹6 Lakhs+",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200",
      description: "Affordable residential plots near Sagore Kuti, Betma Road, Pithampur. Legal, verified, and perfect for first-time property buyers."
   },
   {
      id: "ujjain-road",
      title: "Ujjain Road Development",
      location: "Ujjain Road, Indore",
      duration: "Prime Location Plots",
      price: "Call for Price",
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1200",
      description: "Strategic plots along Indore's booming Ujjain Road corridor. High growth potential with excellent road connectivity and infrastructure."
   },
   {
      id: "rau-projects",
      title: "Rau Area Projects",
      location: "Rau, Indore",
      duration: "Residential & Commercial",
      price: "Call for Price",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200",
      description: "Residential and commercial properties in the rapidly developing Rau area — one of Indore's fastest-growing investment zones."
   },
   {
      id: "vijay-nagar",
      title: "Vijay Nagar Colony Plots",
      location: "Vijay Nagar, Pithampur",
      duration: "Badi Bagdun Area",
      price: "Call for Price",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200",
      description: "Premium residential plots in the Vijay Nagar Colony, Badi Bagdun area near Pithampur Industrial Area — ideal for investment and settlement."
   }
];

export function Packages() {
   const [selectedPackage, setSelectedPackage] = useState<any>(null);
   const [dbPackages, setDbPackages] = useState<any[]>([]);
   const scrollContainerRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      // API fetch disabled to prevent loading travel packages from DB
   }, []);

   const displayPackages = packages;

   const scroll = (direction: 'left' | 'right') => {
      if (scrollContainerRef.current) {
         const { scrollLeft, clientWidth } = scrollContainerRef.current;
         const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
         scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
      }
   };

   // Hide main navbar when overlay is open
   useEffect(() => {
      const navbar = document.getElementById('main-navbar');
      if (selectedPackage) {
         if (navbar) navbar.style.display = 'none';
         document.body.style.overflow = 'hidden';
      } else {
         if (navbar) navbar.style.display = 'block';
         document.body.style.overflow = 'auto';
      }
      return () => {
         if (navbar) navbar.style.display = 'block';
         document.body.style.overflow = 'auto';
      };
   }, [selectedPackage]);

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

            {/* --- Phase 2: Card Canvas --- */}
            <div
               ref={scrollContainerRef}
               className="flex-grow flex flex-col md:flex-row gap-12 md:gap-6 md:overflow-x-auto no-scrollbar snap-y md:snap-x snap-mandatory pb-10"
               style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
               {displayPackages.map((pkg: any, index) => (
                  <motion.div
                     key={pkg._id || pkg.id}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: index * 0.1 }}
                     className="w-full md:min-w-full snap-center flex flex-col group cursor-pointer bg-[#f8f6f4] md:bg-transparent p-5 md:p-0 rounded-[40px] md:rounded-0"
                     onClick={() => setSelectedPackage(pkg)}
                  >
                     {/* --- Image Block (Top on Mobile, Bottom on Desktop) --- */}
                     <div className="order-1 md:order-2 h-[250px] sm:h-[300px] md:h-[300px] lg:h-[380px] w-full overflow-hidden rounded-[28px] md:rounded-[40px] relative shadow-lg mb-6 md:mb-8 md:mt-8">
                        <img
                           src={pkg.image}
                           className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms]"
                           alt={pkg.title}
                        />
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
                           <div className="flex flex-col">
                              <span className="text-[10px] font-bold text-black/20 uppercase tracking-widest leading-none mb-1">Starting Price</span>
                              <span className="text-[24px] md:text-[32px] lg:text-[38px] font-black text-black leading-none">{pkg.price}</span>
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

         </div>

         {/* --- Detail Overlay remains simple and stable --- */}
         <AnimatePresence>
            {selectedPackage && (
               <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  className="fixed inset-0 z-[500] bg-white flex flex-col h-screen overflow-hidden font-sans"
               >
                  <div className="flex justify-between items-center px-6 md:px-12 py-8 bg-white border-b border-black/5">
                     <span className="text-[14px] font-black uppercase tracking-widest text-black/40">{selectedPackage.title}</span>
                     <button onClick={() => setSelectedPackage(null)} className="p-3 bg-neutral-100 rounded-full hover:bg-black hover:text-white transition-all shadow-sm">
                        <X className="w-6 h-6" />
                     </button>
                  </div>
                  <div className="flex-grow overflow-y-auto">
                     <div className="max-w-[1400px] mx-auto py-12 md:py-24 px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        <div className="rounded-[24px] md:rounded-[48px] overflow-hidden shadow-2xl h-[300px] sm:h-[450px] lg:h-auto">
                           <img src={selectedPackage.image} className="w-full h-full object-cover" alt={`${selectedPackage.title} Detail View`} />
                        </div>
                        <div className="flex flex-col justify-center">
                           <h2 className="text-[32px] md:text-[54px] lg:text-[72px] font-black text-black uppercase leading-[0.85] tracking-tighter mb-8">{selectedPackage.title}</h2>
                           <p className="text-[16px] md:text-[18px] text-black/60 font-medium leading-relaxed mb-12">{selectedPackage.description}</p>

                           <div className="p-8 md:p-10 bg-[#f8f6f4] rounded-[32px] md:rounded-[48px] flex flex-col sm:flex-row items-center justify-between gap-6 md:gap-8 border border-black/5 shadow-inner">
                              <div className="text-center sm:text-left">
                                 <span className="text-[10px] md:text-[11px] font-bold text-black/30 uppercase tracking-widest block mb-1">Starting Price</span>
                                 <span className="text-[28px] md:text-[32px] font-black text-black">{selectedPackage.price}</span>
                              </div>
                              <button
                                 onClick={() => window.open(`https://wa.me/919009250061?text=Hi Rudraksha Properties! I'm interested in ${selectedPackage.title}.`, '_blank')}
                                 className="w-full sm:w-auto px-10 py-5 bg-black text-white rounded-full font-black text-[11px] md:text-[12px] uppercase tracking-widest hover:bg-primary transition-all shadow-xl flex items-center justify-center gap-3"
                              >
                                 Enquire via WhatsApp <ArrowRight className="w-4 h-4" />
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>

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
