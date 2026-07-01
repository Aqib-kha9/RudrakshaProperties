"use client";

import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Ajesh Rathore",
    role: "Accounts & Finance Manager",
    phone: "8962336621",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600",
    isMain: false,
  },
  {
    name: "Suraj Singh Panwar",
    role: "Customer & Relationship Manager",
    phone: "9926658482",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600",
    isMain: false,
  },
  {
    name: "Siddhi Soni",
    role: "HR Manager",
    phone: "9244274345",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600",
    isMain: false,
  },
  {
    name: "Dharmendra Choudhary",
    role: "CEO & Founder Director",
    phone: "9009250061",
    image: "/assets/ceo_image_1.jpeg",
    isMain: true,
  },
];

export function Team() {
  return (
    <section id="team" className="w-full bg-white overflow-hidden font-sans pt-6 pb-20 md:py-0">
      <div className="max-w-[1400px] mx-auto px-4 md:px-3">

        {/* --- DESKTOP LAYOUT (Hidden on Mobile) --- */}
        <div className="hidden md:flex relative bg-[#eeeae7] rounded-[35px] px-16 pt-10 flex-row items-end justify-between overflow-hidden">

          {/* Left — Vision Block */}
          <div className="relative z-10 w-[28%] flex flex-col -ml-10 mb-20 self-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start"
            >
              <div className="h-20 w-[1px] bg-black/10 mb-6 ml-1"></div>
              <span className="text-[10px] font-bold text-black/30 tracking-[0.4em] uppercase mb-4">Our Vision</span>
              <h3 className="text-[28px] font-serif italic text-black/60 leading-tight max-w-[240px]">
                &ldquo;Building trust, one property at a time.&rdquo;
              </h3>
              <p className="mt-6 text-[11px] font-medium text-black/40 tracking-wider uppercase">Real Estate Excellence</p>
            </motion.div>
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
                <h3 className="text-[52px] font-black leading-[0.8] text-black tracking-tighter uppercase mb-10">TEAM</h3>
                <div className="flex -space-x-4 mb-10 justify-center">
                  {teamMembers.map((m, i) => (
                    <div key={i} className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 border-2 border-white shadow-sm flex-shrink-0">
                      <img src={m.image} className="w-full h-full object-cover" alt={m.name} />
                    </div>
                  ))}
                </div>
                <p className="text-[14px] leading-relaxed text-black/50 font-medium max-w-[320px] mx-auto italic">
                  Our dedicated team of real estate professionals brings expertise, integrity, and client-first values to every transaction.
                </p>
                <div className="absolute bottom-0 -right-[25px] w-[25px] h-[25px] bg-white"><div className="w-full h-full bg-[#eeeae7] rounded-bl-[25px]"></div></div>
                <div className="absolute bottom-0 -left-[25px] w-[25px] h-[25px] bg-white"><div className="w-full h-full bg-[#eeeae7] rounded-br-[25px]"></div></div>
              </div>
              <div className="absolute top-[43px] left-[7.5%] w-[40px] h-[40px] bg-white -z-10 -translate-x-full"><div className="w-full h-full bg-[#eeeae7] rounded-tr-[32px]"></div></div>
              <div className="absolute top-[43px] right-[7.5%] w-[40px] h-[40px] bg-white -z-10 translate-x-full"><div className="w-full h-full bg-[#eeeae7] rounded-tl-[32px]"></div></div>
            </motion.div>
          </div>

          {/* Right — CEO Photo */}
          <div className="relative z-10 w-[28%] flex flex-col -mr-10 mb-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[1/1.1] w-full rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/20"
            >
              {/* Use /assets/ceo_image.jpeg once client sends photo */}
              <img src={teamMembers[3].image} alt={teamMembers[3].name} className="w-full h-full object-cover object-top" />
            </motion.div>
          </div>
        </div>

        {/* --- DESKTOP FOOTER — Team Names --- */}
        <div className="hidden md:grid md:grid-cols-4 mt-12 gap-4 px-2">
          {teamMembers.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="flex flex-col"
            >
              <h4 className="text-[20px] md:text-[24px] lg:text-[28px] font-black tracking-tighter text-black uppercase leading-[0.9] mb-2">{m.name}</h4>
              <p className="text-[10px] font-bold text-black/30 tracking-[0.2em] uppercase">{m.role}</p>
              <a href={`tel:+91${m.phone}`} className="text-[11px] font-semibold text-black/40 hover:text-primary transition-colors mt-1 tracking-wide">
                +91 {m.phone}
              </a>
            </motion.div>
          ))}
        </div>

        {/* --- MOBILE LAYOUT --- */}
        <div className="flex md:hidden flex-col gap-6">
          <div className="flex flex-col mb-4">
            <span className="text-[10px] font-black text-black/30 tracking-[0.4em] uppercase mb-1">Rudraksha Properties</span>
            <h3 className="text-[42px] font-black text-black leading-none tracking-tighter uppercase">THE TEAM</h3>
          </div>

          {teamMembers.map((m, i) => (
            <div key={i} className="group">
              <div className="bg-[#eeeae7] rounded-[35px] overflow-hidden py-8 px-6 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <img src={m.image} className="w-full h-full object-cover object-top" alt={m.name} />
                  </div>
                  <div>
                    <h4 className="text-[22px] font-black text-black tracking-tighter uppercase leading-none">{m.name}</h4>
                    <p className="text-[10px] font-bold text-black/40 tracking-[0.15em] uppercase mt-1">{m.role}</p>
                    <a href={`tel:+91${m.phone}`} className="text-[12px] font-semibold text-primary mt-1 block">+91 {m.phone}</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
