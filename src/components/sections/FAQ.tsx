"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    number: "01",
    question: "Which areas do you operate in?",
    answer: "We operate across Indore and surrounding areas including Super Corridor, Ujjain Road, Rau, Annapurna Road (Usha Nagar), and Pithampur (Vijay Nagar Colony, Badi Bagdun, Betma Road, Sagore Kuti). We serve clients across Madhya Pradesh."
  },
  {
    number: "02",
    question: "Are your plots T&CP approved?",
    answer: "Yes. All our residential plots carry full T&CP (Town & Country Planning) approval. This ensures complete legal compliance, clear titles, and secure investment for all our buyers."
  },
  {
    number: "03",
    question: "What is the starting price for plots?",
    answer: "Residential plots start from ₹6 Lakhs in the Pithampur area (near Sagore Kuti, Betma Road). Pricing varies by location, size, and project. Contact us for current pricing in specific areas."
  },
  {
    number: "04",
    question: "Do you offer turnkey construction services?",
    answer: "Yes! We offer complete turnkey construction — from custom home design to final finishing. We handle foundation, structure, plumbing, electrical, flooring, painting, and interior finishing. Best-of-best quality guaranteed."
  },
  {
    number: "05",
    question: "How do I book a site visit?",
    answer: "Simply reach out via WhatsApp or call any of our team members. Our Customer & Relationship Manager Mr. Suraj Singh Panwar (9926658482) will coordinate a site visit at your convenience within 24 hours."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full bg-white py-10 md:py-20 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-3 md:px-3 lg:px-3">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-black/40 italic">Got Questions?</span>
            </div>
            <h2 className="text-[42px] md:text-[64px] lg:text-[80px] font-black text-black leading-[0.88] uppercase tracking-tighter">
              Frequently <br />
              <span className="text-black/10 italic">Asked.</span>
            </h2>
          </div>
          <p className="text-[13px] md:text-[14px] text-black/40 font-bold uppercase tracking-widest leading-relaxed max-w-sm border-l-2 border-primary pl-5">
            Can&apos;t find your answer? WhatsApp us directly — we reply within minutes. +91 9009250061
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                layout
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className={`cursor-pointer border-t border-black/8 py-7 md:py-9 group transition-colors duration-300 ${isOpen ? 'border-black/20' : ''}`}
              >
                <div className="flex items-start gap-6 md:gap-10">

                  {/* Number */}
                  <span className={`text-[11px] font-black tracking-[0.2em] mt-1 shrink-0 transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-black/20 group-hover:text-black/40'}`}>
                    {faq.number}
                  </span>

                  {/* Question + Answer */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-6">
                      <h3 className={`text-[16px] md:text-[20px] lg:text-[24px] font-black uppercase tracking-tighter leading-tight transition-colors duration-300 ${isOpen ? 'text-black' : 'text-black/40 group-hover:text-black'}`}>
                        {faq.question}
                      </h3>

                      {/* Toggle Icon */}
                      <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full shrink-0 flex items-center justify-center border transition-all duration-400 ${isOpen ? 'bg-black border-black rotate-45' : 'bg-transparent border-black/10 group-hover:border-black/30'}`}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M6 1V11M1 6H11" stroke={isOpen ? "white" : "black"} strokeOpacity={isOpen ? 1 : 0.4} strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pt-5 text-[14px] md:text-[16px] text-black/50 font-semibold leading-relaxed tracking-tight max-w-3xl">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </div>
              </motion.div>
            );
          })}
          {/* Bottom Border */}
          <div className="border-t border-black/8" />
        </div>

      </div>
    </section>
  );
}
