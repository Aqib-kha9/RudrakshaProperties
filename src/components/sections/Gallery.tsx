"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Play, X, Maximize2, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const GALLERY_ITEMS = [
  {
    id: 1,
    type: "image",
    url: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1200",
    location: "Betma Bypass, Indore",
    category: "Residential Plots",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    type: "image",
    url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200",
    location: "Sagore Kuti, Pithampur",
    category: "Plots Starting 6L",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    type: "image",
    url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800",
    location: "Turnkey Construction, Indore",
    category: "Custom House Construction",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    id: 4,
    type: "image",
    url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=800",
    location: "Vijay Nagar Colony, Pithampur",
    category: "Active Developments",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 5,
    type: "image",
    url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200",
    location: "Betma Road Area",
    category: "Highway Touch Land",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: 6,
    type: "image",
    url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=800",
    location: "Badi Bagdun, Pithampur",
    category: "Appreciating Assets",
    span: "md:col-span-1 md:row-span-1",
  }
];

export function Gallery() {
  const [dbItems, setDbItems] = useState<any[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  useEffect(() => {
    // API fetch disabled to prevent loading travel gallery items from DB
  }, []);

  const displayItems = GALLERY_ITEMS;

  return (
    <section id="gallery" className="w-full bg-white py-24 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-2">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
             <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-[10px] font-black uppercase tracking-[0.4em] text-black/20 mb-4 block"
              >
                Our Portfolios
             </motion.span>
             <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-[42px] md:text-[64px] font-black uppercase tracking-tighter leading-[0.9] text-black"
             >
                Project <br />
                <span className="text-black/20 italic">Gallery.</span>
             </motion.h2>
          </div>
          <div className="max-w-[350px] flex flex-col items-start md:items-end md:text-right">
             <p className="text-[14px] text-black/50 font-medium leading-relaxed italic mb-8">
                A visual narrative of our T&CP approved plot layouts, construction developments, and site projects.
             </p>
             <Link 
                href="/gallery"
                className="inline-flex items-center gap-3 text-black font-black uppercase tracking-[0.2em] text-[10px] group border-b border-black/10 pb-2 hover:border-black transition-all"
             >
                Explore Full Gallery
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-none md:grid-rows-3 gap-3 md:gap-4 h-auto md:h-[680px]">
          {displayItems.map((item: any, index) => (
            <motion.div
              key={item._id || item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-[15px] md:rounded-[30px] group cursor-pointer aspect-square md:aspect-auto ${item.span}`}
              onClick={() => setSelectedItem(item)}
            >
              <Image 
                src={item.type === 'video' ? item.thumbnail : item.url}
                alt={item.location}
                fill
                className="object-cover transition-all duration-[2000ms] group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
              />
              
              {/* Type Indicator */}
              {item.type === 'video' && (
                <div className="absolute top-6 left-6 z-10 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/10">
                   <Play className="w-4 h-4 fill-white" />
                </div>
              )}

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                 <div className="flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div>
                       <span className="text-[9px] font-black uppercase tracking-widest text-white/60 mb-2 block">{item.category}</span>
                       <div className="flex items-center gap-2 text-white">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="text-[18px] font-black uppercase tracking-tighter">{item.location}</span>
                       </div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                       <Maximize2 className="w-5 h-5" />
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Overlay */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
              onClick={() => setSelectedItem(null)}
            >
              <button 
                className="absolute top-8 right-8 p-4 bg-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all"
                onClick={() => setSelectedItem(null)}
              >
                <X className="w-6 h-6" />
              </button>
              
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative w-full max-w-[1200px] aspect-video md:aspect-[21/9] rounded-[32px] md:rounded-[64px] overflow-hidden shadow-2xl bg-black"
                onClick={(e) => e.stopPropagation()}
              >
                {selectedItem.type === 'video' ? (
                  <video 
                    src={selectedItem.url}
                    autoPlay
                    controls
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image 
                    src={selectedItem.url} 
                    alt={selectedItem.location}
                    fill
                    className="object-cover"
                  />
                )}
                
                <div className="absolute bottom-12 left-12">
                   <span className="text-[12px] font-black uppercase tracking-[0.4em] text-white/60 mb-4 block">{selectedItem.category}</span>
                   <h3 className="text-[32px] md:text-[64px] font-black uppercase tracking-tighter text-white leading-none">
                     {selectedItem.location}
                   </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
