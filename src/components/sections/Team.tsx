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

             <div className="flex flex-col gap-8">
                {/* Kalyan Singh Makwana - Executive Spotlight (Full Width Banner) */}
                <motion.div
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                   className="w-full bg-[#eeeae7] rounded-[40px] overflow-hidden border border-black/5 flex flex-col md:flex-row items-stretch min-h-[350px] group"
                >
                   {/* Left Side: Image */}
                   <div 
                      className="relative w-full md:w-[40%] min-h-[320px] md:min-h-full overflow-hidden cursor-zoom-in"
                      onClick={() => setActivePhoto("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600")}
                   >
                      <img
                         src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600"
                         alt="Kalyan Singh Makwana"
                         className="w-full h-full object-cover object-center transition-all duration-1000 group-hover:scale-105 absolute inset-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/50 via-transparent to-transparent md:from-black/30" />
                   </div>

                   {/* Right Side: Info Content */}
                   <div className="w-full md:w-[60%] p-8 md:p-12 flex flex-col justify-center relative">
                      {/* Decorative Frame */}
                      <div className="absolute inset-4 border border-[#968370]/10 rounded-[30px] pointer-events-none group-hover:border-[#968370]/25 transition-colors duration-700" />
                      
                      <div className="relative z-10">
                         <div className="flex items-center gap-2 mb-3">
                            <span className="h-[1px] w-8 bg-[#968370]" />
                            <span className="text-[11px] font-black text-[#968370] tracking-[0.3em] uppercase">Sales Leadership</span>
                         </div>
                         
                         <h3 className="text-[36px] md:text-[44px] font-serif italic text-black leading-none mb-2">Kalyan Singh Makwana</h3>
                         <p className="text-[13px] font-extrabold text-[#968370] tracking-[0.15em] uppercase mb-5">Sales Head</p>
                         
                         <p className="text-[15px] md:text-[16px] leading-relaxed text-black/70 font-medium max-w-[580px]">
                            Leads our sales strategies and property consultations, matching clients with their ideal real estate opportunities. With deep market expertise, Kalyan drives growth while ensuring our clients receive top-tier advisory.
                         </p>
                      </div>
                   </div>
                </motion.div>

                {/* Grid of 3 Managers (Without Photos) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   {[
                      {
                         name: "Ajesh Rathore",
                         role: "Accounts & Finance Manager",
                         phone: "8962336621",
                         desc: "Manages all financial operations, transaction compliance, and budget planning with high transparency.",
                         icon: (
                            <svg className="w-5 h-5 text-[#968370]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                               <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                         )
                      },
                      {
                         name: "Suraj Singh Panwar",
                         role: "Customer Relationship Manager",
                         phone: "9926658482",
                         desc: "Focuses on maintaining strong client connections and providing dedicated support throughout the ownership process.",
                         icon: (
                            <svg className="w-5 h-5 text-[#968370]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                               <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                            </svg>
                         )
                      },
                      {
                         name: "Siddhi Soni",
                         role: "Human Resources Manager",
                         phone: "9244274345",
                         desc: "Oversees talent acquisition, company culture, and employee welfare to foster a high-performance environment.",
                         icon: (
                            <svg className="w-5 h-5 text-[#968370]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                               <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75s.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                            </svg>
                         )
                      }
                   ].map((member, index) => (
                      <motion.div
                         key={member.name}
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                         className="group flex flex-col bg-[#fbfaf9] rounded-[30px] p-6 hover:bg-[#eeeae7]/40 hover:shadow-lg transition-all duration-500 border border-black/5"
                      >
                         <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-white border border-black/5 text-[#968370] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-500">
                               {member.icon}
                            </div>
                            <div>
                               <h4 className="text-[18px] font-serif text-black leading-none group-hover:text-[#968370] transition-colors duration-300">{member.name}</h4>
                               <p className="text-[10px] font-bold text-[#968370] tracking-[0.15em] uppercase mt-1">{member.role}</p>
                            </div>
                         </div>
                         <p className="text-[13px] leading-relaxed text-black/60 font-medium mb-6 flex-grow">{member.desc}</p>
                         
                         {member.phone && (
                            <a 
                               href={`tel:+91${member.phone}`} 
                               className="w-full inline-flex items-center justify-center gap-1.5 text-[11px] font-extrabold text-[#968370] bg-[#eeeae7] group-hover:bg-[#968370] group-hover:text-white transition-all duration-500 py-2.5 rounded-2xl shadow-sm"
                            >
                               <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                               </svg>
                               +91 {member.phone.replace(/(\d{5})(\d{5})/, "$1 $2")}
                            </a>
                         )}
                      </motion.div>
                   ))}
                </div>
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
                  { name: "Pankaj Solanki", label: "01. Channel Partner", image: "/channelpartners/Pankaj_solanki_1.jpeg", position: "center" },
                  { name: "Vasudev Choudhary", label: "02. Channel Partner", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400", position: "center" },
                  { name: "Lokendra Singh Panwar", label: "03. Channel Partner", image: "/channelpartners/Lokendra_Panwar_3.jpeg" },
                  { name: "Gokul Choudhary", label: "04. Channel Partner", image: "/channelpartners/Gokul_choudhary_4.jpeg" },
                  { name: "Dinesh Minawa", label: "05. Channel Partner", image: "/channelpartners/Dinesh_minawa_5.jpeg", position: "center 15%" },
                  { name: "Arjun Verma", label: "06. Channel Partner", image: "/channelpartners/Arjun_verma_6.jpeg", position: "center 30%" },
                  { name: "Gabbar Singh Rana", label: "07. Channel Partner", image: "/channelpartners/Gabbar_Singh_Rana_7.jpeg" },
                  { name: "Mahesh Deshwali", label: "08. Channel Partner", image: "/channelpartners/Mahesh_deshwali_8.jpeg", position: "center 20%" },
                  { name: "Shekhar Patel", label: "09. Channel Partner", image: "/channelpartners/Shekhar_patel_9.jpeg" },
                  { name: "Kavita Selar", label: "10. Channel Partner", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400", position: "center" },
                  { name: "Pradeep Khanve", label: "11. Channel Partner", image: "/channelpartners/pradeep_khanve_11.jpeg", position: "center 15%" }
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
                           style={{ objectPosition: partner.position || "top" }}
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
