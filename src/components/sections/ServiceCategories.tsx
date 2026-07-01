"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  ArrowUpRight,
  X,
  CheckCircle2,
  ShieldCheck,
  Map,
  Zap,
  Home,
  Building2,
  Landmark,
  Trees,
  ChevronRight,
  ArrowRight,
  Star,
  Plus
} from 'lucide-react';

const categories = [
  {
    id: "01",
    title: "Residential Plots",
    description: "T&CP approved residential plots across Super Corridor, Ujjain Road, and Rau. Starting from ₹6 Lakhs in Pithampur.",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=800",
    color: "bg-[#eeeae7]",
    span: "md:col-span-8",
    details: {
      headline: "Your Ideal Plot, Legally Verified.",
      philosophy: "We believe every family deserves a safe and legal plot to call their own. Our residential plots are T&CP approved, with full documentation and transparent pricing — no hidden costs, ever.",
      quote: "A home starts with a plot you can trust. At Rudraksha, every square foot comes with our promise.",
      features: [
        { icon: <ShieldCheck />, title: "T&CP Approved", desc: "All residential plots carry full Town & Country Planning approval for complete legal security." },
        { icon: <Map />, title: "Prime Locations", desc: "Super Corridor, Ujjain Road, Rau, and Pithampur — Indore's fastest growing areas." },
        { icon: <CheckCircle2 />, title: "Transparent Pricing", desc: "Starting ₹6 Lakhs in Pithampur. No hidden charges, full clarity on every deal." },
        { icon: <Star />, title: "4.8★ Trust", desc: "Consistent 4.8★ rating on Justdial from 5000+ satisfied property buyers." }
      ],
      process: ["Site Selection Consultation", "Legal Documentation Review", "Plot Booking & Registration", "Possession & Handover"],
      faqs: [
        { q: "Are the plots T&CP approved?", a: "Yes. All our residential plots carry full T&CP (Town & Country Planning) approval ensuring complete legal compliance." },
        { q: "What is the starting price?", a: "Residential plots start at ₹6 Lakhs in the Pithampur area, near Sagore Kuti, Betma Road." }
      ]
    }
  },
  {
    id: "02",
    title: "Commercial Spaces",
    description: "Premium commercial developments across Indore's key commercial corridors. Shops, offices & business spaces.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=800",
    color: "bg-white",
    span: "md:col-span-4",
    details: {
      headline: "Business Locations That Work.",
      philosophy: "The right commercial address defines your business success. We provide premium commercial spaces in Indore's most sought-after locations.",
      quote: "The best investment a business can make is in its address.",
      features: [
        { icon: <Building2 />, title: "Prime Commercial", desc: "Strategically located in Indore's commercial hotspots for maximum business visibility." },
        { icon: <ShieldCheck />, title: "Legal Clarity", desc: "All commercial properties come with clear titles and proper documentation." },
        { icon: <Zap />, title: "Ready Infrastructure", desc: "Properties with ready road access, utilities, and modern infrastructure." },
        { icon: <CheckCircle2 />, title: "Selling Only", desc: "We focus exclusively on property selling — ensuring your investment is our priority." }
      ],
      process: ["Requirement Understanding", "Property Shortlisting", "Legal Verification", "Final Registration"],
      faqs: [
        { q: "Do you offer commercial rentals?", a: "We focus primarily on selling commercial properties. Contact us to discuss available options." }
      ]
    }
  },
  {
    id: "03",
    title: "Farmhouse & Agricultural",
    description: "Agricultural lands, farmhouse plots, and highway-touch properties across Madhya Pradesh.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800",
    color: "bg-white",
    span: "md:col-span-4",
    details: {
      headline: "Land Investment That Grows.",
      philosophy: "Agricultural and farmhouse plots represent some of the best long-term investments in MP. We connect you with verified, accessible, and appreciating land assets.",
      quote: "Land is the only thing in the world that amounts to anything — Margaret Mitchell",
      features: [
        { icon: <Trees />, title: "Farmhouse Plots", desc: "Premium farmhouse plots near Indore with good highway connectivity." },
        { icon: <Map />, title: "Highway Touch", desc: "Very good highway-touch land options for investors seeking appreciating assets." },
        { icon: <Landmark />, title: "Agricultural Land", desc: "Verified agricultural lands with clear titles across MP." },
        { icon: <ShieldCheck />, title: "Verified Titles", desc: "All agricultural properties come with thoroughly verified legal documentation." }
      ],
      process: ["Investment Goals Discussion", "Land Shortlisting", "Title & Documentation Check", "Registration & Handover"],
      faqs: [
        { q: "Can non-farmers buy agricultural land?", a: "Please consult with our team — we provide complete guidance on eligibility and legal procedures for agricultural land purchase in MP." }
      ]
    }
  },
  {
    id: "04",
    title: "Turnkey Construction",
    description: "End-to-end customized home construction. From foundation to finishing — we build your dream home.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800",
    color: "bg-[#eeeae7]",
    span: "md:col-span-8",
    details: {
      headline: "We Build, You Dream.",
      philosophy: "Our turnkey construction service takes care of everything — design, material procurement, labor, and finishing. You get the keys to your dream home without the stress.",
      quote: "From blueprint to your front door — Rudraksha Construction handles every brick with precision and care.",
      features: [
        { icon: <Home />, title: "Custom Home Design", desc: "Fully customized architectural plans based on your vision and budget." },
        { icon: <ShieldCheck />, title: "Best Quality Materials", desc: "Best-of-best quality guarantee — only premium materials for your home." },
        { icon: <CheckCircle2 />, title: "Turnkey Delivery", desc: "Complete project from foundation to interior finishing — delivered on time." },
        { icon: <Zap />, title: "Transparent Costs", desc: "Fixed-price contracts with detailed cost breakdowns. Zero surprises." }
      ],
      process: ["Design Consultation", "Cost Estimation & Contract", "Construction Begins", "Quality Check & Handover"],
      faqs: [
        { q: "What is included in turnkey construction?", a: "Everything — from foundation, structure, plumbing, electrical, flooring, painting to final finishing. You just move in." },
        { q: "How long does construction take?", a: "Timeline depends on size and complexity. We provide a detailed project schedule during the consultation phase." }
      ]
    }
  }
];

export function ServiceCategories() {
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <section id="services" className="w-full bg-white py-32 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-3 md:px-3">

        {/* Editorial Section Header */}
        <div className="relative mb-24 md:mb-32">
          <div className="absolute -top-12 -left-4 text-[120px] md:text-[200px] font-black text-black/[0.03] select-none pointer-events-none tracking-tighter italic leading-none">
            04
          </div>

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-[40px] md:text-[54px] lg:text-[72px] font-bold leading-[0.8] text-black tracking-tighter uppercase flex flex-col"
                >
                  <span>Mastering</span>
                  <span className="text-[60px] md:text-[80px] lg:text-[110px] font-black leading-[0.8] text-black tracking-tighter uppercase md:ml-12 lg:ml-20 mt-4">THE ART OF</span>
                  <span className="text-[40px] md:text-[54px] lg:text-[72px] font-bold leading-[0.8] text-black tracking-tighter uppercase self-end md:self-start md:ml-40 lg:ml-60 mt-4">REAL ESTATE.</span>
                </motion.h2>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-[320px] pb-4 flex gap-6"
            >
              <div className="w-[1px] h-20 bg-black/10 hidden md:block" />
              <p className="text-[14px] md:text-[16px] text-black/50 font-medium leading-relaxed">
                From residential plots to commercial spaces and turnkey construction — we handle everything for you with full legal transparency.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Modular Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 auto-rows-[450px]">

          {/* Card 01 - Residential Plots */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-[#eeeae7] rounded-[24px] overflow-hidden flex flex-col md:flex-row group border border-black/5"
          >
            <div className="p-10 md:w-1/2 flex flex-col justify-between">
              <div>
                <span className="text-[14px] font-black text-black/20 italic mb-4 block">#01</span>
                <h3 className="text-[32px] md:text-[42px] font-black tracking-tighter text-black uppercase leading-none mb-6">Residential <br /> Plots</h3>
                <p className="text-[14px] text-black/50 font-medium leading-relaxed max-w-[280px]">{categories[0].description}</p>
              </div>
              <button
                onClick={() => setSelectedService(categories[0])}
                className="mt-8 flex items-center gap-2 text-black font-black uppercase text-[11px] tracking-widest cursor-pointer group-hover:gap-4 transition-all"
              >
                LEARN MORE <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            <div className="md:w-1/2 relative overflow-hidden p-3">
              <div className="w-full h-full overflow-hidden rounded-[30px]">
                <img src={categories[0].image} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" alt="Residential Plots - T&CP Approved Indore" />
              </div>
            </div>
          </motion.div>

          {/* Card 02 - Commercial Spaces */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 bg-white border border-black/5 rounded-[24px] overflow-hidden group flex flex-col shadow-sm"
          >
            <div className="p-10 pb-0">
              <div className="flex justify-between items-start">
                <span className="text-[14px] font-black text-black/20 mb-4 block tracking-tighter italic">#02</span>
                <button onClick={() => setSelectedService(categories[1])} className="text-black/40 hover:text-black">
                  <ArrowUpRight className="w-6 h-6" />
                </button>
              </div>
              <h3 className="text-[28px] md:text-[32px] font-black tracking-tighter text-black uppercase leading-none mb-4">Commercial <br /> Spaces</h3>
            </div>
            <div className="mt-auto relative h-[250px] overflow-hidden rounded-t-[30px]">
              <img src={categories[1].image} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" alt="Commercial Spaces - Indore Business Properties" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent flex items-end p-10">
                <p className="text-[13px] text-black/60 font-bold leading-tight uppercase tracking-tight">{categories[1].description}</p>
              </div>
            </div>
          </motion.div>

          {/* Card 03 - Farmhouse & Agricultural */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 bg-white border border-black/5 rounded-[24px] overflow-hidden group flex flex-col shadow-sm"
          >
            <div className="p-10 pb-0">
              <div className="flex justify-between items-start">
                <span className="text-[14px] font-black text-black/20 mb-4 block tracking-tighter italic">#03</span>
                <button onClick={() => setSelectedService(categories[2])} className="text-black/40 hover:text-black">
                  <ArrowUpRight className="w-6 h-6" />
                </button>
              </div>
              <h3 className="text-[28px] md:text-[32px] font-black tracking-tighter text-black uppercase leading-none mb-4">Farmhouse & <br /> Agricultural</h3>
            </div>
            <div className="mt-auto relative h-[250px] overflow-hidden rounded-t-[40px]">
              <img src={categories[2].image} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" alt="Farmhouse and Agricultural Land - Madhya Pradesh" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent flex items-end p-10">
                <p className="text-[13px] text-black/60 font-bold leading-tight uppercase tracking-tight">{categories[2].description}</p>
              </div>
            </div>
          </motion.div>

          {/* Card 04 - Turnkey Construction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-8 bg-[#eeeae7] rounded-[24px] overflow-hidden group flex flex-col md:flex-row-reverse shadow-sm border border-black/5"
          >
            <div className="p-10 md:w-1/2 flex flex-col justify-between">
              <div>
                <span className="text-[14px] font-black text-black/20 italic mb-4 block">#04</span>
                <h3 className="text-[32px] md:text-[42px] font-black tracking-tighter text-black uppercase leading-none mb-6">Turnkey <br /> Construction</h3>
                <p className="text-[14px] text-black/50 font-medium leading-relaxed max-w-[280px]">{categories[3].description}</p>
              </div>
              <button
                onClick={() => setSelectedService(categories[3])}
                className="mt-8 flex items-center gap-2 text-black font-black uppercase text-[11px] tracking-widest cursor-pointer group-hover:gap-4 transition-all"
              >
                LEARN MORE <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            <div className="md:w-1/2 relative overflow-hidden p-3">
              <div className="w-full h-full overflow-hidden rounded-[30px]">
                <img src={categories[3].image} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" alt="Turnkey Construction - Custom Home Building Indore" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- Service Detail Overlay --- */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="fixed inset-0 z-[300] bg-white flex flex-col h-screen overflow-hidden font-sans"
            >
              {/* Top Navigation */}
              <div className="flex justify-between items-center px-6 md:px-12 py-6 border-b border-black/5 z-[310] bg-white">
                <div className="flex items-center gap-4">
                  <span className="text-[14px] font-black text-black uppercase tracking-widest">{selectedService.title} Details</span>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-3 bg-neutral-100 text-black rounded-full hover:bg-black hover:text-white transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Scrollable Content Area */}
              <div className="flex-grow overflow-y-auto">
                <div className="max-w-[1400px] mx-auto">

                  {/* Hero & Philosophy Split */}
                  <div className="flex flex-col lg:flex-row min-h-[60vh] border-b border-black/5">
                    <div className="lg:w-1/2 h-[40vh] lg:h-auto overflow-hidden">
                      <img src={selectedService.image} className="w-full h-full object-cover" alt={`${selectedService.title} Detail`} />
                    </div>
                    <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-[#f8f6f4]">
                      <span className="text-amber-600 text-[12px] font-bold uppercase tracking-[0.3em] mb-4">Our Approach</span>
                      <h3 className="text-[32px] md:text-[48px] font-black text-black leading-tight uppercase mb-6">
                        {selectedService.details.headline}
                      </h3>
                      <p className="text-[16px] md:text-[18px] text-black/60 font-medium leading-relaxed max-w-xl">
                        {selectedService.details.philosophy}
                      </p>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="p-8 md:p-16 py-24">
                    <h3 className="text-[24px] md:text-[32px] font-black text-black uppercase mb-12 tracking-tight">What We Offer</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {selectedService.details.features.map((feature: any, i: number) => (
                        <div key={i} className="p-8 rounded-[32px] border border-black/5 bg-white hover:border-black/10 transition-all shadow-sm">
                          <div className="p-4 bg-neutral-50 rounded-2xl w-fit text-black mb-6">
                            {feature.icon || <Plus className="w-5 h-5" />}
                          </div>
                          <h5 className="text-[18px] font-bold text-black uppercase mb-3">{feature.title}</h5>
                          <p className="text-[14px] text-black/50 leading-relaxed font-medium">{feature.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Process & CTA Split */}
                  <div className="flex flex-col md:flex-row border-t border-black/5 p-8 md:p-16 gap-16 bg-neutral-50">
                    <div className="md:w-1/2">
                      <h4 className="text-[20px] font-bold text-black uppercase mb-8">How it works</h4>
                      <div className="space-y-8">
                        {selectedService.details.process.map((step: string, i: number) => (
                          <div key={i} className="flex gap-6 items-start">
                            <span className="text-[14px] font-black text-black/20 mt-1">0{i + 1}</span>
                            <p className="text-[16px] font-extrabold text-black uppercase tracking-tight">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="md:w-1/2 flex items-center">
                      <div className="bg-black p-12 rounded-[48px] w-full text-white">
                        <h4 className="text-[24px] font-black uppercase mb-4">Ready to invest?</h4>
                        <p className="text-white/50 text-[14px] mb-10 leading-relaxed">Contact our property experts today to find your perfect {selectedService.title.toLowerCase()} in Indore or Pithampur.</p>
                        <button
                          onClick={() => {
                            const message = `Hello Rudraksha Properties! I would like to enquire about ${selectedService.title}.`;
                            window.open(`https://wa.me/919009250061?text=${encodeURIComponent(message)}`, '_blank');
                          }}
                          className="w-full py-5 bg-white text-black rounded-full font-black uppercase text-[12px] tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-amber-400 transition-all font-sans"
                        >
                          WhatsApp Us <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
