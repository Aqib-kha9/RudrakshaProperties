"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, CheckCircle2, Clock, ArrowRight } from "lucide-react";

export default function ContactPage() {
   const [formData, setFormData] = useState({
      name: "",
      phone: "",
      interest: "Residential Plots",
      message: ""
   });
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [submitSuccess, setSubmitSuccess] = useState(false);

   const [quickCallPhone, setQuickCallPhone] = useState("");
   const [quickCallSuccess, setQuickCallSuccess] = useState(false);
   const [isSubmittingQuick, setIsSubmittingQuick] = useState(false);

   // Map Toggle State
   const [selectedMapOffice, setSelectedMapOffice] = useState<"head" | "branch">("head");

   const handleFormSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);

      try {
         const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
               phone: formData.phone,
               name: formData.name,
               projectName: `Full Contact Page Inquiry (${formData.interest}) - ${formData.message}`
            })
         });

         if (res.ok) {
            setSubmitSuccess(true);
            setFormData({ name: "", phone: "", interest: "Residential Plots", message: "" });
         }
      } catch (err) {
         console.error(err);
      } finally {
         setIsSubmitting(false);
      }
   };

   const handleQuickSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmittingQuick(true);

      try {
         const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
               phone: quickCallPhone,
               name: "Quick Callback Request"
            })
         });

         if (res.ok) {
            setQuickCallSuccess(true);
            setQuickCallPhone("");
         }
      } catch (err) {
         console.error(err);
      } finally {
         setIsSubmittingQuick(false);
      }
   };

   return (
      <div className="flex flex-col min-h-screen font-body bg-white">
         <Navbar isSolid={true} />

         <main className="flex-grow pt-32 pb-24 px-4 md:px-8">
            <div className="max-w-[1400px] mx-auto">
               
               {/* Header Section */}
               <div className="mb-16">
                  <span className="text-[10px] font-black text-[#968370] uppercase tracking-[0.4em] mb-4 block">Connect with us</span>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-black leading-none mb-6">
                     Contact <br />
                     <span className="text-black/20 italic">Rudraksha.</span>
                  </h1>
                  <p className="text-black/50 font-medium text-[15px] md:text-[16px] max-w-xl">
                     Get in touch with our team for property visits, site bookings, turnkey construction consultations, or general enquiries.
                  </p>
               </div>

               {/* Grid Layout */}
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                  
                  {/* Left Column: Full Enquiry Form */}
                  <div className="lg:col-span-7 bg-[#fbfaf9] border border-black/5 rounded-[40px] p-8 md:p-12 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.05)]">
                     <div className="mb-8">
                        <h2 className="text-[28px] font-black text-black uppercase tracking-tight mb-2">Send an Enquiry</h2>
                        <p className="text-[13px] text-black/40 font-semibold uppercase tracking-wider">Our relationship managers will contact you within 24 hours.</p>
                     </div>

                     {submitSuccess ? (
                        <motion.div 
                           initial={{ opacity: 0, scale: 0.95 }}
                           animate={{ opacity: 1, scale: 1 }}
                           className="bg-[#eeeae7] border border-[#968370]/20 rounded-3xl p-8 text-center flex flex-col items-center justify-center py-16"
                        >
                           <CheckCircle2 className="w-16 h-16 text-[#968370] mb-4" />
                           <h3 className="text-[20px] font-black uppercase text-black tracking-tight mb-2">Thank you!</h3>
                           <p className="text-[14px] text-black/50 font-medium max-w-xs">Your request has been successfully submitted. We will contact you shortly.</p>
                           <button 
                              onClick={() => setSubmitSuccess(false)}
                              className="mt-6 text-[11px] font-black uppercase tracking-widest text-[#968370] hover:text-black transition-colors"
                           >
                              Send another enquiry
                           </button>
                        </motion.div>
                     ) : (
                        <form onSubmit={handleFormSubmit} className="space-y-6">
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                 <label className="text-[9px] font-black text-black/40 uppercase tracking-widest block mb-2 pl-1">Full Name</label>
                                 <input
                                    type="text"
                                    required
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-white border border-black/10 rounded-[20px] px-6 py-4 text-[13px] font-semibold text-black placeholder-black/25 focus:ring-1 focus:ring-black/20 focus:border-black/20 outline-none transition-all"
                                 />
                              </div>
                              <div>
                                 <label className="text-[9px] font-black text-black/40 uppercase tracking-widest block mb-2 pl-1">Phone Number</label>
                                 <input
                                    type="tel"
                                    required
                                    pattern="[0-9]{10}"
                                    placeholder="Enter 10-digit number"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full bg-white border border-black/10 rounded-[20px] px-6 py-4 text-[13px] font-semibold text-black placeholder-black/25 focus:ring-1 focus:ring-black/20 focus:border-black/20 outline-none transition-all"
                                 />
                              </div>
                           </div>

                           <div>
                              <label className="text-[9px] font-black text-black/40 uppercase tracking-widest block mb-2 pl-1">What are you looking for?</label>
                              <select
                                 value={formData.interest}
                                 onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                                 className="w-full bg-white border border-black/10 rounded-[20px] px-6 py-4 text-[13px] font-bold text-black/70 focus:ring-1 focus:ring-black/20 focus:border-black/20 outline-none transition-all cursor-pointer"
                              >
                                 <option value="Residential Plots">Residential Plots (Indore / Pithampur)</option>
                                 <option value="Commercial Plots">Commercial Plots (Betma Bypass / Pithampur)</option>
                                 <option value="Turnkey Construction">Turnkey Home / Office Construction</option>
                                 <option value="Other Properties">Other Real Estate Consultation</option>
                              </select>
                           </div>

                           <div>
                              <label className="text-[9px] font-black text-black/40 uppercase tracking-widest block mb-2 pl-1">Message / Requirements</label>
                              <textarea
                                 rows={4}
                                 placeholder="Tell us about your budget, size requirements, or key questions..."
                                 value={formData.message}
                                 onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                 className="w-full bg-white border border-black/10 rounded-[20px] px-6 py-4 text-[13px] font-semibold text-black placeholder-black/25 focus:ring-1 focus:ring-black/20 focus:border-black/20 outline-none transition-all resize-none"
                              />
                           </div>

                           <button
                              type="submit"
                              disabled={isSubmitting}
                              className="w-full py-5 bg-black text-white rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-primary hover:text-black transition-all shadow-xl flex items-center justify-center gap-3 disabled:opacity-50"
                           >
                              {isSubmitting ? "Submitting..." : "Send Request"} <ArrowRight className="w-4 h-4" />
                           </button>
                        </form>
                     )}
                  </div>

                  {/* Right Column: Quick Callback & Contact info */}
                  <div className="lg:col-span-5 space-y-10">
                     
                     {/* Quick Callback Card */}
                     <div className="bg-black text-white rounded-[40px] p-8 md:p-10 shadow-[0_20px_45px_-15px_rgba(0,0,0,0.15)] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-[100px]" />
                        
                        <div className="mb-6 flex items-center gap-3">
                           <Clock className="w-5 h-5 text-primary" />
                           <span className="text-[9px] font-black uppercase tracking-[0.25em] text-primary">Instant Response</span>
                        </div>
                        <h3 className="text-[24px] font-black uppercase tracking-tight leading-none mb-3">Quick Callback</h3>
                        <p className="text-[13px] text-white/50 mb-6 font-medium">Leave your phone number below and we will call you back immediately.</p>

                        {quickCallSuccess ? (
                           <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="bg-white/10 rounded-2xl p-4 text-center text-primary text-[12px] font-bold uppercase tracking-wider"
                           >
                              Success! We will call you shortly.
                           </motion.div>
                        ) : (
                           <form onSubmit={handleQuickSubmit} className="flex gap-2">
                              <input
                                 type="tel"
                                 required
                                 pattern="[0-9]{10}"
                                 placeholder="Enter phone number"
                                 value={quickCallPhone}
                                 onChange={(e) => setQuickCallPhone(e.target.value)}
                                 className="flex-grow bg-white/10 border-0 rounded-2xl px-5 py-4 text-[13px] font-semibold text-white placeholder-white/30 focus:ring-1 focus:ring-white/20 outline-none"
                              />
                              <button
                                 type="submit"
                                 disabled={isSubmittingQuick}
                                 className="px-6 bg-white text-black hover:bg-primary font-black uppercase text-[10px] tracking-widest rounded-2xl transition-all flex items-center justify-center shrink-0"
                              >
                                 {isSubmittingQuick ? "..." : "Call Me"}
                              </button>
                           </form>
                        )}
                     </div>

                     {/* Office details */}
                     <div className="bg-[#fbfaf9] border border-black/5 rounded-[40px] p-8 md:p-10 space-y-6">
                        <h3 className="text-[20px] font-black text-black uppercase tracking-tight mb-4">Direct Contact</h3>

                        <div className="space-y-4">
                           <div className="flex gap-4">
                              <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-black/5 flex items-center justify-center shrink-0">
                                 <Phone className="w-4 h-4 text-[#968370]" />
                              </div>
                              <div>
                                 <span className="text-[9px] font-bold text-black/30 uppercase tracking-widest block mb-0.5">Call Us</span>
                                 <a href="tel:+919009250061" className="text-[13px] font-extrabold text-black hover:text-[#968370] transition-colors">+91 90092 50061</a>
                              </div>
                           </div>

                           <div className="flex gap-4">
                              <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-black/5 flex items-center justify-center shrink-0">
                                 <Mail className="w-4 h-4 text-[#968370]" />
                              </div>
                              <div>
                                 <span className="text-[9px] font-bold text-black/30 uppercase tracking-widest block mb-0.5">Email</span>
                                 <a href="mailto:rudrakshproperties7079@gmail.com" className="text-[13px] font-extrabold text-black hover:text-[#968370] transition-colors">rudrakshproperties7079@gmail.com</a>
                              </div>
                           </div>

                           <div className="flex gap-4">
                              <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-black/5 flex items-center justify-center shrink-0">
                                 <MapPin className="w-4 h-4 text-[#968370]" />
                              </div>
                              <div>
                                 <span className="text-[9px] font-bold text-black/30 uppercase tracking-widest block mb-0.5">Head Office</span>
                                 <p className="text-[12px] font-semibold text-black/60 leading-relaxed">
                                    Hortus conclusus, JHQR+4F2, Pithampur Industrial Area, Vijay Nagar Colony, Madhya Pradesh 454774
                                 </p>
                              </div>
                           </div>

                           <div className="flex gap-4 border-t border-black/5 pt-4">
                              <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-black/5 flex items-center justify-center shrink-0">
                                 <MapPin className="w-4 h-4 text-[#968370]" />
                              </div>
                              <div>
                                 <span className="text-[9px] font-bold text-black/30 uppercase tracking-widest block mb-0.5">Branch Office</span>
                                 <p className="text-[12px] font-semibold text-black/60 leading-relaxed">
                                    Annapurna Rd, Usha Nagar, Indore, Madhya Pradesh 452009
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>

                  </div>

               </div>

               {/* Interactive Map Section */}
               <div className="mt-16 bg-[#fbfaf9] border border-black/5 rounded-[40px] p-8 md:p-12 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.05)]">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                     <div>
                        <h2 className="text-[28px] font-black text-black uppercase tracking-tight mb-2">Our Office Locations</h2>
                        <p className="text-[13px] text-black/40 font-semibold uppercase tracking-wider">Select an office to view on the map</p>
                     </div>
                     {/* Toggle Buttons */}
                     <div className="flex bg-[#f3f0ec] p-1.5 rounded-2xl shrink-0">
                        <button
                           onClick={() => setSelectedMapOffice("head")}
                           className={`px-6 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${
                              selectedMapOffice === "head" ? "bg-black text-white shadow-md" : "text-black/50 hover:text-black"
                           }`}
                        >
                           Head Office
                        </button>
                        <button
                           onClick={() => setSelectedMapOffice("branch")}
                           className={`px-6 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${
                              selectedMapOffice === "branch" ? "bg-black text-white shadow-md" : "text-black/50 hover:text-black"
                           }`}
                        >
                           Branch Office
                        </button>
                     </div>
                  </div>

                  <div className="w-full h-[400px] md:h-[500px] rounded-[24px] md:rounded-[36px] overflow-hidden border border-black/5 bg-neutral-100 shadow-inner">
                     <iframe
                        key={selectedMapOffice}
                        src={`https://maps.google.com/maps?q=${encodeURIComponent(
                           selectedMapOffice === "head"
                              ? "Hortus conclusus, JHQR+4F2, Pithampur Industrial Area, Vijay Nagar Colony, Madhya Pradesh 454774"
                              : "Annapurna Rd, Usha Nagar, Indore, Madhya Pradesh 452009"
                        )}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                     />
                  </div>
               </div>

            </div>
         </main>

         <Footer />
      </div>
   );
}
