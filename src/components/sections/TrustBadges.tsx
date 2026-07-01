"use client";

import { motion } from 'framer-motion';
import { ShieldCheck, Award, Star, CheckCircle2 } from 'lucide-react';

const trustPillars = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "T&CP Approved",
    desc: "All our plots carry full Town & Country Planning approval — ensuring complete legal security for your investment."
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "4.8★ on Justdial",
    desc: "Consistently rated 4.8 stars by hundreds of verified buyers on Justdial — a testament to our integrity."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Market Transparency",
    desc: "We believe in complete transparency. Every deal comes with clear documentation, honest pricing, and no hidden costs."
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "5000+ Clients Served",
    desc: "Over 5000 satisfied clients across Indore, Pithampur, and Madhya Pradesh have trusted us with their property dreams."
  }
];

export function TrustBadges() {
  return (
    <section className="w-full bg-white font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-3 md:px-3 lg:px-3">

        {/* --- STANDARD DUAL HEADER --- */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <div className="flex gap-0.5 text-black">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-2 md:w-2.5 h-2 md:h-2.5 fill-current" />)}
              </div>
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-black/40 italic">Verified Assurance</span>
            </div>
            <h3 className="text-[34px] md:text-[52px] lg:text-[64px] font-light text-black leading-[1.1] tracking-tighter">
              Trust & <br />
              <span className="text-black/20 italic">Excellence.</span>
            </h3>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-[13px] md:text-[14px] text-black/40 font-bold uppercase tracking-widest leading-relaxed max-w-sm border-l-2 border-primary pl-5"
          >
            Every property we sell is backed by legal verification, transparent pricing, and our decade of real estate expertise in Madhya Pradesh.
          </motion.p>
        </div>

        {/* --- PILLARS --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12 md:gap-y-16">
          {trustPillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left group"
            >
              {/* Heading at the TOP */}
              <div className="mb-3 md:mb-4">
                <h4 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-black group-hover:text-primary transition-colors duration-500">
                  {pillar.title}
                </h4>
              </div>

              {/* Number in the MIDDLE */}
              <div className="mb-6 md:mb-8">
                <span className="text-[90px] md:text-[80px] lg:text-[100px] xl:text-[120px] font-medium leading-[0.8] tracking-tighter text-black select-none">
                  0{i + 1}
                </span>
              </div>

              {/* Description at the BOTTOM */}
              <div className="border-t border-black/5 pt-6 md:pt-8 w-full">
                <p className="text-[13px] md:text-[14px] text-black/50 font-medium leading-relaxed max-w-full lg:max-w-[240px] group-hover:text-black transition-colors duration-500">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- SIGNATURE FOOTER --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mt-16 md:mt-24 pt-10 md:pt-12 border-t border-black/5 flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16"
        >
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="text-[32px] md:text-[44px] lg:text-[56px] font-signature text-black opacity-90 select-none">
              Rudraksha Properties
            </span>
            <p className="text-[9px] md:text-[10px] font-black text-black/20 uppercase tracking-[0.4em] md:tracking-[0.5em] mt-1 md:mt-2">
              The Rudraksha Promise of Quality & Trust
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            <div className="flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
              <div className="px-4 py-2 border border-black/20 rounded-full">
                <span className="text-[11px] font-black uppercase tracking-widest text-black">T&CP Approved</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
              <div className="px-4 py-2 border border-black/20 rounded-full flex items-center gap-2">
                <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                <span className="text-[11px] font-black uppercase tracking-widest text-black">4.8★ Justdial</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
              <div className="px-4 py-2 border border-black/20 rounded-full">
                <span className="text-[11px] font-black uppercase tracking-widest text-black">5000+ Clients</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
