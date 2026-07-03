"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export function Team() {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);
  return (
    <section id="team" className="w-full bg-white overflow-hidden font-sans pt-6 pb-20 md:py-0">
      <div className="max-w-[1400px] mx-auto px-4 md:px-3">
        
        {/* --- DESKTOP LAYOUT (Hidden on Mobile) --- */}
        <div className="hidden md:flex relative bg-[#eeeae7] rounded-[35px] px-16 pt-10 flex-row items-end justify-between overflow-hidden">
          {/* Left Principal - Owner Image */}
          <div 
            className="relative z-10 w-[32%] flex flex-col -ml-2 mb-0 h-[440px] overflow-hidden cursor-zoom-in"
            onClick={() => setActivePhoto("/assets/ceo_image.png")}
          >
            <motion.img
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              src="/assets/ceo_image.png"
              alt="Dharmendra Choudhary"
              className="w-full h-full object-cover object-top scale-130 origin-top"
            />
          </div>

          {/* Center Info Block */}
          <div className="relative z-30 w-[40%] self-stretch flex flex-col justify-end items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full flex flex-col items-center"
            >
              <div className="bg-white px-10 pt-5 pb-2 rounded-t-[30px] w-[85%] flex flex-col items-center">
                <span className="text-[18px] font-bold text-black tracking-widest uppercase mb-1">MEET THE</span>
              </div>
              <div className="bg-white w-full rounded-t-[30px] px-12 pb-12 pt-0 text-center shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col items-center relative">
                <h2 className="text-[64px] font-black leading-[0.8] text-black tracking-tighter uppercase mb-10">FOUNDER</h2>
                <div className="mb-8">
                  <h4 className="text-[24px] font-black text-black tracking-tight uppercase leading-none mb-2">Dharmendra Choudhary</h4>
                  <p className="text-[11px] font-bold text-black/30 tracking-[0.2em] uppercase mb-3">FOUNDER & CEO</p>
                  <a 
                     href="tel:+919009250061" 
                     className="text-[12px] font-extrabold text-[#968370] hover:text-black transition-colors flex items-center gap-1.5 justify-center"
                  >
                     <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                     </svg>
                     +91 90092 50061
                  </a>
                </div>
                <p className="text-[14px] leading-relaxed text-black/50 font-medium max-w-[320px] mx-auto italic">As a visionary of real estate, our founder Dharmendra Choudhary oversees the curation of our firm&apos;s bespoke property portfolios.</p>
                <div className="absolute bottom-0 -right-[25px] w-[25px] h-[25px] bg-white"><div className="w-full h-full bg-[#eeeae7] rounded-bl-[25px]"></div></div>
                <div className="absolute bottom-0 -left-[25px] w-[25px] h-[25px] bg-white"><div className="w-full h-full bg-[#eeeae7] rounded-br-[25px]"></div></div>
              </div>
              <div className="absolute top-[43px] left-[7.5%] w-[40px] h-[40px] bg-white -z-10 -translate-x-full"><div className="w-full h-full bg-[#eeeae7] rounded-tr-[32px]"></div></div>
              <div className="absolute top-[43px] right-[7.5%] w-[40px] h-[40px] bg-white -z-10 translate-x-full"><div className="w-full h-full bg-[#eeeae7] rounded-tl-[32px]"></div></div>
            </motion.div>
          </div>

          {/* Right Principal - Founder Bio Block */}
          <div className="relative z-10 w-[32%] flex flex-col -mr-10 mb-20 self-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-end text-right"
            >
              <span className="text-[10px] font-bold text-black/30 tracking-[0.4em] uppercase mb-4">Founder Journey</span>
              <h3 className="text-[26px] font-serif italic text-black leading-tight max-w-[320px] mb-4">
                12+ Years of Real Estate Excellence
              </h3>
              <p className="text-[14px] text-black/75 font-medium leading-relaxed max-w-[320px]">
                A visionary entrepreneur who built Rudraksha Properties & Construction from the ground up. With over 12 successful years, Dharmendra Choudhary has transformed countless dreams of property ownership into reality. His journey — From Zero To Peak — is a testament to unwavering commitment, transparency, and client-first values.
              </p>
            </motion.div>
          </div>
        </div>


        {/* --- MOBILE LAYOUT (Only for Mobile) --- */}
        <div className="flex md:hidden flex-col gap-6">
           {/* Mobile Header */}
           <div className="flex flex-col mb-4">
              <span className="text-[10px] font-black text-black/30 tracking-[0.4em] uppercase mb-1">Company Founder</span>
              <h2 className="text-[42px] font-black text-black leading-none tracking-tighter uppercase">THE FOUNDER</h2>
           </div>

           {/* Principal: Dharmendra Choudhary */}
           <div className="group">
              <div className="bg-[#eeeae7] rounded-[35px] overflow-hidden pt-8 px-4 flex flex-col items-center">
                 <div className="text-center mb-6">
                    <h4 className="text-[34px] font-black text-black tracking-tighter uppercase leading-none">Dharmendra Choudhary</h4>
                    <p className="text-[10px] font-bold text-black/40 tracking-[0.15em] uppercase mt-2 mb-3">Founder & CEO</p>
                    <a 
                       href="tel:+919009250061" 
                       className="text-[12px] font-extrabold text-[#968370] hover:text-black transition-colors flex items-center gap-1.5 justify-center"
                    >
                       <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                       </svg>
                       +91 90092 50061
                    </a>
                 </div>
                 <div 
                    className="w-full aspect-square relative rounded-[30px] overflow-hidden shadow-xl cursor-zoom-in"
                    onClick={() => setActivePhoto("/assets/ceo_image.png")}
                 >
                    <img src="/assets/ceo_image.png" alt="Dharmendra Choudhary" className="w-full h-full object-cover object-top" />
                 </div>
              </div>
           </div>

           {/* Mobile Philosophy */}
           <div className="px-2 mt-6">
              <h4 className="text-[18px] font-serif italic text-black leading-tight mb-2 border-l-2 border-[#eeeae7] pl-4">
                12+ Years of Real Estate Excellence
              </h4>
              <p className="text-[13px] leading-relaxed text-black/60 font-medium border-l-2 border-[#eeeae7] pl-4 mt-2">
                A visionary entrepreneur who built Rudraksha Properties & Construction from the ground up. With over 12 successful years, Dharmendra Choudhary has transformed countless dreams of property ownership into reality. His journey — From Zero To Peak — is a testament to unwavering commitment, transparency, and client-first values.
              </p>
           </div>
        </div>

         {/* --- NEW SECTION: CORE TEAM / LEADERSHIP --- */}
         <div className="mt-24 md:mt-32">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
               <div>
                  <span className="text-[10px] font-black text-black/30 tracking-[0.4em] uppercase mb-2 block">Our Strength</span>
                  <h2 className="text-[36px] md:text-[54px] font-black text-black leading-none tracking-tighter uppercase">MANAGEMENT TEAM</h2>
               </div>
               <p className="text-[14px] text-black/50 font-medium max-w-[380px] mt-4 md:mt-0">
                  Meet the professional management experts driving our projects forward with precision, transparency, and operational excellence.
               </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
               {[
                  {
                     name: "Kalyan Singh Makwana",
                     role: "Sales Head",
                     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600",
                     desc: "Leads our sales strategies and property consultations, matching clients with their ideal real estate opportunities."
                  },
                  {
                     name: "Ajesh Rathore",
                     role: "Accounts & Finance Manager",
                     phone: "8962336621",
                     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600",
                     desc: "Manages all financial operations, transaction compliance, and budget planning with high transparency."
                  },
                  {
                     name: "Surat Singh Panwar",
                     role: "Customer Relationship Manager",
                     phone: "9926658482",
                     image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600",
                     desc: "Focuses on maintaining strong client connections and providing dedicated support throughout the ownership process."
                  },
                  {
                     name: "Siddhi Soni",
                     role: "Human Resources Manager",
                     phone: "9244274345",
                     image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600",
                     desc: "Oversees talent acquisition, company culture, and employee welfare to foster a high-performance environment."
                  }
               ].map((member, index) => (
                  <motion.div
                     key={member.name}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                     className="group flex flex-col bg-[#fbfaf9] rounded-[30px] p-6 hover:bg-[#eeeae7] transition-colors duration-500"
                  >
                     <div 
                        className="relative aspect-[4/3] w-full rounded-[20px] overflow-hidden mb-6 cursor-zoom-in"
                        onClick={() => setActivePhoto(member.image)}
                     >
                        <img
                           src={member.image}
                           alt={member.name}
                           className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                        />
                     </div>
                     <div className="flex flex-col flex-grow">
                        <h4 className="text-[19px] font-black text-black tracking-tight leading-none mb-1">{member.name}</h4>
                        <p className="text-[11px] font-bold text-black/40 tracking-[0.1em] uppercase mb-3">{member.role}</p>
                        {member.phone && (
                           <a 
                              href={`tel:+91${member.phone}`} 
                              className="text-[12px] font-extrabold text-[#968370] hover:text-black transition-colors mb-3 flex items-center gap-1.5 self-start"
                           >
                              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              +91 {member.phone.replace(/(\d{5})(\d{5})/, "$1 $2")}
                           </a>
                        )}
                        <p className="text-[13px] leading-relaxed text-black/60 font-medium">{member.desc}</p>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>

         {/* --- NEW SECTION: CHANNEL PARTNERS --- */}
         <div className="mt-24 md:mt-32 pb-16">
            <div className="text-center mb-12">
               <span className="text-[10px] font-black text-black/30 tracking-[0.4em] uppercase mb-2 block">Strong Network</span>
               <h2 className="text-[36px] md:text-[54px] font-black text-black leading-none tracking-tighter uppercase">CHANNEL PARTNERS</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
               {[
                  { name: "Pankaj Solanki", label: "01. Channel Partner", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" },
                  { name: "Vasudev Choudhary", label: "02. Channel Partner", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400" },
                  { name: "Lokendra Singh Panwar", label: "03. Channel Partner", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400" },
                  { name: "Gokul Choudhary", label: "04. Channel Partner", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" },
                  { name: "Dinesh Minawa", label: "05. Channel Partner", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400" },
                  { name: "Arjun Verma", label: "06. Channel Partner", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400" },
                  { name: "Gabbar Singh Rana", label: "07. Channel Partner", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=400" },
                  { name: "Mahesh Deshwali", label: "08. Channel Partner", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400" },
                  { name: "Shekhar Patel", label: "09. Channel Partner", image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=400" },
                  { name: "Pradeep Khanve", label: "10. Channel Partner", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400" },
                  { name: "Kavita Selar", label: "11. Channel Partner", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400" }
               ].map((partner, index) => (
                  <motion.div
                     key={partner.name}
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                     className="group flex flex-col bg-[#fbfaf9] border border-black/5 rounded-[24px] p-4 hover:bg-[#eeeae7] hover:border-black/15 transition-all duration-300"
                  >
                     <div 
                        className="relative aspect-[4/3] w-full rounded-[16px] overflow-hidden mb-4 cursor-zoom-in"
                        onClick={() => setActivePhoto(partner.image)}
                     >
                        <img
                           src={partner.image}
                           alt={partner.name}
                           className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                        />
                     </div>
                     <div className="flex flex-col flex-grow text-center">
                        <span className="text-[15px] font-black text-black tracking-tight leading-tight mb-1">{partner.name}</span>
                        <span className="text-[9px] font-bold text-black/40 tracking-[0.05em] uppercase">{partner.label}</span>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
         {/* --- LIGHTBOX MODAL --- */}
         <AnimatePresence>
            {activePhoto && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setActivePhoto(null)}
                  className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
               >
                  <button 
                     onClick={() => setActivePhoto(null)}
                     className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full bg-white/10 transition-colors"
                  >
                     <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                     </svg>
                  </button>
                  <motion.img
                     initial={{ scale: 0.9, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     exit={{ scale: 0.9, opacity: 0 }}
                     transition={{ type: "spring", damping: 25, stiffness: 200 }}
                     src={activePhoto}
                     alt="Zoomed View"
                     className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
                  />
               </motion.div>
            )}
         </AnimatePresence>

      </div>
    </section>
  );
}
