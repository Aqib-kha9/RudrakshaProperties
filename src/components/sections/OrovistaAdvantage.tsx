"use client";

import { motion } from 'framer-motion';
import { ShieldCheck, Star, Users, Eye, ArrowUpRight } from 'lucide-react';

const leftAdvantages = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "T&CP Approved Plots",
    desc: "All our residential plots carry full Town & Country Planning approval — your investment is 100% legal and secure."
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Market Transparency",
    desc: "No hidden costs, no misleading promises. We show you exactly what you're getting — full documentation, clear pricing."
  }
];

const rightAdvantages = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Hands-On Client Support",
    desc: "From site visits to registration, our team stays with you at every step. Rated 4.8★ on Justdial for a reason."
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Best Quality Guarantee",
    desc: "Residential, commercial, farmhouse, or construction — we never compromise on quality. Best-of-best, always."
  }
];

export function OrovistaAdvantage() {
  return (
    <section id="advantage" className="w-full bg-white pt-20 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-3 md:px-3">

        {/* --- CENTERED HEADER --- */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[42px] md:text-[64px] font-black text-black leading-tight uppercase tracking-tighter"
          >
            Why Choose <span className="italic text-black/20">Rudraksha?</span>
          </motion.h2>
          <p className="mt-4 text-[14px] md:text-[16px] text-black/40 font-semibold max-w-xl mx-auto uppercase tracking-widest italic">
            From T&CP approved plots to transparent dealings — we make real estate simple, safe and trustworthy.
          </p>
        </div>

        {/* --- DYNAMIC LAYOUT --- */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0 lg:justify-between">

          {/* VISUAL FOR MOBILE (Hidden on Desktop) */}
          <div className="w-full lg:hidden flex justify-center mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full max-w-[320px] md:max-w-[400px]"
            >
              <div className="absolute inset-0  blur-[80px] rounded-full filter transform scale-75" />
              <img
                src="/assets/whyus.jpg"
                className="relative z-10 w-full h-auto object-contain"
                alt="Why choose Rudraksha Properties"
              />
            </motion.div>
          </div>

          {/* LEFT COLUMN CARDS */}
          <div className="w-full lg:w-[32%] grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-col gap-6 md:gap-8 lg:gap-10">
            {leftAdvantages.map((adv, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 bg-white border border-black/5 rounded-[32px] hover:border-primary/30 transition-all duration-500 cursor-default"
              >
                <div className="w-10 h-10 mb-6 text-black group-hover:text-primary transition-colors duration-500">
                  {adv.icon}
                </div>
                <h4 className="text-[20px] font-black text-black uppercase tracking-tight mb-3">
                  {adv.title}
                </h4>
                <p className="text-[14px] text-black/40 font-medium leading-relaxed">
                  {adv.desc}
                </p>
                <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

          {/* CENTER HERO IMAGE (Desktop only) */}
          <div className="hidden lg:flex lg:w-[30%] justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="relative w-full max-w-[400px]"
            >
              <div className="absolute inset-0 blur-[100px] rounded-full filter" />
              <img
                src="/assets/whyus.jpg"
                className="relative z-10 w-full h-auto object-cover "
                alt="Why choose Rudraksha Properties"
              />
            </motion.div>
          </div>

          {/* RIGHT COLUMN CARDS */}
          <div className="w-full lg:w-[32%] grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-col gap-6 md:gap-8 lg:gap-10">
            {rightAdvantages.map((adv, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 bg-white border border-black/5 rounded-[32px] hover:border-primary/30 transition-all duration-500 cursor-default"
              >
                <div className="w-10 h-10 mb-6 text-black group-hover:text-primary transition-colors duration-500">
                  {adv.icon}
                </div>
                <h4 className="text-[20px] font-black text-black uppercase tracking-tight mb-3">
                  {adv.title}
                </h4>
                <p className="text-[14px] text-black/40 font-medium leading-relaxed">
                  {adv.desc}
                </p>
                <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
