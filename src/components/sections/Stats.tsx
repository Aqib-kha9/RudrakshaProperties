"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Stats() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl px-3 md:px-3 lg:px-3 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">

          {/* Card 1: Satisfied Clients */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[24px] xl:rounded-[32px] p-6 md:p-8 flex flex-col justify-between overflow-hidden h-[160px] md:h-[190px]"
          >
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop"
              alt="Satisfied Clients - Rudraksha Properties"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-black/25"></div>

            <div className="relative z-10 flex justify-end w-full">
              <div className="flex -space-x-3 mt-1">
                <div className="w-10 h-10 rounded-full border-2 border-white/20 z-10 shadow-sm overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100" className="w-full h-full object-cover" alt="Happy client 1" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white/20 z-20 shadow-sm overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100" className="w-full h-full object-cover" alt="Happy client 2" />
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border-2 border-white/20 z-30 shadow-sm">
                  <span className="text-white text-xs font-bold leading-none">+</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <h3 className="text-[40px] md:text-[48px] font-normal text-white leading-none mb-1 md:mb-2 tracking-tight">5000+</h3>
              <p className="text-white/70 text-[12px] md:text-[14px] font-medium tracking-wide">Satisfied Clients</p>
            </div>
          </motion.div>

          {/* Card 2: Expert Team */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[24px] xl:rounded-[32px] p-6 md:p-8 flex flex-col justify-center overflow-hidden h-[160px] md:h-[190px]"
          >
            <img
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1000&auto=format&fit=crop"
              alt="Expert Team - Rudraksha Properties"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-black/25"></div>
            <div className="relative z-10 flex flex-col justify-end h-full">
              <h3 className="text-[40px] md:text-[48px] font-normal text-white leading-none mb-1 md:mb-2 tracking-tight">100+</h3>
              <p className="text-white/70 text-[12px] md:text-[14px] font-medium tracking-wide">Expert Team Members</p>
            </div>
          </motion.div>

          {/* Card 3: Rating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[24px] xl:rounded-[32px] p-6 md:p-8 flex flex-col justify-between overflow-hidden h-[160px] md:h-[190px]"
          >
            <img
              src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1000&auto=format&fit=crop"
              alt="4.8 Star Rating - Rudraksha Properties"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-black/25"></div>

            <div className="relative z-10 flex justify-end w-full">
              <div className="flex gap-0.5 mt-1">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className={`w-4 h-4 ${i <= 4 ? "text-amber-400 fill-amber-400" : "text-amber-400/50"}`} />
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <h3 className="text-[40px] md:text-[48px] font-normal text-white leading-none mb-1 md:mb-2 tracking-tight">4.8★</h3>
              <p className="text-white/70 text-[12px] md:text-[14px] font-medium tracking-wide">Rating on Justdial</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
