"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export function About() {
  const [lang, setLang] = useState<'en' | 'hi'>('en');

  const content = {
    en: {
      subHeading: "Premium Real Estate & Construction Firm, Indore",
      description: "Rudraksha Properties & Construction is a highly-rated real estate firm based in Indore, MP. With 12 years of excellence, we specialize in property investment, residential plot development, and turnkey construction — maintaining a 4.8★ customer rating on Justdial.",
      missionTitle: "Our Mission & Vision",
      missionText: "At Rudraksha Properties, our mission is to deliver transparent, legally verified, and high-quality properties to every client. From residential plots to commercial developments, we ensure every investment is backed by trust and integrity. Our vision is to be Madhya Pradesh's most trusted real estate brand — a journey of 12 years, From Zero To Peak."
    },
    hi: {
      subHeading: "इंदौर की प्रीमियम रियल एस्टेट और कंस्ट्रक्शन फर्म",
      description: "रुद्राक्ष प्रॉपर्टीज एंड कंस्ट्रक्शन इंदौर (MP) की एक टॉप-रेटेड रियल एस्टेट फर्म है। पिछले 12 सालों से हम प्रॉपर्टी इन्वेस्टमेंट, रेसिडेंशियल प्लॉट डेवलपमेंट और कंस्ट्रक्शन के काम में एक्सपर्ट हैं। Justdial पर हमारी 4.8★ कस्टमर रेटिंग है।",
      missionTitle: "हमारा मिशन और विजन",
      missionText: "रुद्राक्ष प्रॉपर्टीज में हमारा मिशन हर कस्टमर को पूरी तरह से लीगल, वेरीफाइड और बेस्ट क्वालिटी प्रॉपर्टीज देना है। चाहे रेसिडेंशियल प्लॉट हो या कमर्शियल काम, हम हर डील में भरोसा और ईमानदारी पक्की करते हैं। हमारा विजन मध्य प्रदेश का सबसे भरोसेमंद रियल एस्टेट ब्रांड बनना है — 12 साल का यह सफर, शून्य से शिखर तक (From Zero To Peak)।"
    }
  };

  return (
    <section id="about" className="w-full bg-white pb-12 md:pb-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-3 md:px-3 lg:px-3">

        {/* Row 1: The "ABOUT" Title & Tagline (Opposite Sides) */}
        <div className="w-full flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-4 md:mb-[-10px] lg:mb-[-20px]">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[70px] md:text-[100px] lg:text-[140px] font-extrabold leading-none tracking-[0.05em] text-black uppercase"
          >
            About
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start md:items-end text-left md:text-right md:pb-4 z-20 bg-[#eeeae7]/60 md:bg-transparent p-5 md:p-0 rounded-[24px] md:rounded-none w-full md:w-auto border border-black/5 md:border-none shadow-sm md:shadow-none"
          >
            <span className="text-[9px] md:text-[12px] font-black text-[#968370] uppercase tracking-[0.25em] mb-1">Our Tagline</span>
            <span className="text-[18px] md:text-[32px] font-black text-black tracking-tight leading-none uppercase mb-1.5">From Zero To Peak</span>
            <span className="text-[14px] md:text-[22px] font-serif italic text-black/40">शून्य से शिखर तक</span>
          </motion.div>
        </div>

        {/* Row 2: The Modular Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-3 items-start">

          {/* Column 1: "US" and Descriptions */}
          <div className="lg:col-span-3 flex flex-col z-10 relative">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[70px] md:text-[100px] lg:text-[140px] font-extrabold leading-none tracking-[0.05em] text-black uppercase mb-4"
            >
              Us
            </motion.h2>

            {/* Language Switcher */}
            <div className="flex gap-1 items-center bg-[#eeeae7]/60 p-1 rounded-full w-fit mb-6 border border-black/5">
              <button 
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded-full text-[10px] font-black tracking-wider transition-all duration-300 ${lang === 'en' ? 'bg-[#968370] text-white shadow-sm' : 'text-black/60 hover:text-black'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLang("hi")}
                className={`px-3 py-1 rounded-full text-[10px] font-black tracking-wider transition-all duration-300 ${lang === 'hi' ? 'bg-[#968370] text-white shadow-sm' : 'text-black/60 hover:text-black'}`}
              >
                हिंदी
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-4 max-w-[280px]"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={lang}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <p className="text-[11px] md:text-[13px] font-bold text-black uppercase tracking-[0.05em] leading-normal">
                    {content[lang].subHeading}
                  </p>
                  <p className="text-[14px] md:text-[16px] text-black/60 font-medium leading-relaxed">
                    {content[lang].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Column 2: Large Center Image */}
          <div className="lg:col-span-6 pt-4 lg:pt-[40px] xl:pt-[60px]">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[16/10] w-full rounded-[40px] md:rounded-[50px] overflow-hidden shadow-2xl shadow-black/5 group"
            >
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200"
                alt="Rudraksha Properties & Construction - Premium Real Estate Indore"
                fill
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500" />
              <div className="absolute bottom-6 left-8 md:bottom-10 md:left-12">
                <p className="text-white text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em] drop-shadow-md">T&CP Approved</p>
                <h4 className="text-white text-[20px] md:text-[28px] font-bold tracking-tighter drop-shadow-md">Rudraksha City, Betma Bypass, Indore, Madhya Pradesh</h4>
              </div>
            </motion.div>
          </div>

          {/* Column 3: Philosophy Block */}
          <div className="lg:col-span-3 pt-4 lg:pt-[40px] xl:pt-[60px] flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-col gap-5"
            >
              <div className="relative aspect-[16/10] w-full rounded-[32px] md:rounded-[40px] overflow-hidden shadow-xl shadow-black/5 group">
                <Image
                  src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=800"
                  alt="Residential Plots - Rudraksha Properties Pithampur"
                  fill
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500" />
                <div className="absolute bottom-5 left-6">
                  <p className="text-white text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] drop-shadow-md">Plot Starting</p>
                  <h4 className="text-white text-[16px] md:text-[20px] font-bold tracking-tighter drop-shadow-md">₹6 Lakhs, Pithampur</h4>
                </div>
              </div>

              <div className="space-y-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={lang}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2"
                  >
                    <h3 className="text-[20px] md:text-[10px] lg:text-[20px] font-extrabold tracking-tight text-black leading-none">
                      {content[lang].missionTitle}
                    </h3>
                    <p className="text-[14px] md:text-[15px] text-black/60 font-medium leading-relaxed">
                      {content[lang].missionText}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
