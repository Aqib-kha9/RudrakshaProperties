"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { properties } from "@/data/properties";
import { motion, AnimatePresence } from "framer-motion";
import { 
   MapPin, 
   Download, 
   Calculator, 
   CheckCircle2, 
   X, 
   ArrowLeft, 
   ArrowRight 
} from "lucide-react";

export default function PackageDetailPage() {
   const { id } = useParams();
   const router = useRouter();

   // Find the matching package
   const pkg = properties.find((item) => item.id === id);

   // Brochure lead modal states
   const [showBrochureForm, setShowBrochureForm] = useState(false);
   const [brochureLead, setBrochureLead] = useState({ name: "", phone: "" });
   const [isSubmittingBrochure, setIsSubmittingBrochure] = useState(false);

   // Visit lead modal states
   const [showVisitForm, setShowVisitForm] = useState(false);
   const [visitLead, setVisitLead] = useState({ name: "", phone: "", date: "" });
   const [isSubmittingVisit, setIsSubmittingVisit] = useState(false);

   // EMI Calculator States
   const [loanAmount, setLoanAmount] = useState(6);
   const [tenure, setTenure] = useState(5);
   const [interestRate, setInterestRate] = useState(9.5);

   useEffect(() => {
      if (pkg) {
         setLoanAmount(pkg.budget || 6);
      }
   }, [pkg]);

   if (!pkg) {
      return (
         <div className="flex flex-col min-h-screen font-sans bg-white justify-center items-center">
            <h1 className="text-2xl font-black text-black">Project Not Found</h1>
            <button onClick={() => router.push('/')} className="mt-4 text-[#968370] font-black uppercase text-[12px] tracking-wider">Back to Home</button>
         </div>
      );
   }

   // Calculate EMI dynamically
   const calculateEmiValue = () => {
      const P = loanAmount * 100000; // Convert lakhs to actual amount
      const annualR = interestRate;
      const r = annualR / 12 / 100; // Monthly interest rate
      const n = tenure * 12; // Total months

      if (r === 0) return Math.round(P / n);
      
      const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      return Math.round(emi);
   };

   const calculatedEmi = calculateEmiValue();
   const totalPayback = ((calculatedEmi * tenure * 12) / 100000); // in lakhs

   const handleBrochureSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmittingBrochure(true);

      try {
         // Send lead to SMTP contact endpoint
         await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
               phone: brochureLead.phone,
               name: brochureLead.name,
               projectName: pkg.title,
            }),
         });

         // Trigger PDF download
         const link = document.createElement('a');
         link.href = pkg.brochure || '/assets/rudraksha_city_brochure.pdf';
         link.download = `${pkg.title.replace(/[\s,]+/g, '_')}_Brochure.pdf`;
         document.body.appendChild(link);
         link.click();
         document.body.removeChild(link);

         // Reset and close
         setBrochureLead({ name: "", phone: "" });
         setShowBrochureForm(false);
      } catch (error) {
         console.error('Brochure download error:', error);
      } finally {
         setIsSubmittingBrochure(false);
      }
   };

   const handleVisitSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmittingVisit(true);

      try {
         await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
               phone: visitLead.phone,
               name: visitLead.name,
               projectName: `Site Visit Request for ${pkg.title} on Date: ${visitLead.date}`,
            }),
         });

         setVisitLead({ name: "", phone: "", date: "" });
         setShowVisitForm(false);
         alert("Thank you! Your site visit request has been received. We will call you shortly to confirm details.");
      } catch (error) {
         console.error('Visit booking error:', error);
      } finally {
         setIsSubmittingVisit(false);
      }
   };

   return (
      <div className="flex flex-col min-h-screen font-body bg-white">
         <Navbar isSolid={true} />

         <main className="flex-grow pt-32 pb-24 px-4 md:px-8">
            <div className="max-w-[1400px] mx-auto">
               
               {/* Back navigation link */}
               <button 
                  onClick={() => router.push('/#packages')}
                  className="mb-10 text-[11px] font-black uppercase tracking-widest text-[#968370] hover:text-black transition-colors flex items-center gap-2"
               >
                  <ArrowLeft className="w-4 h-4" /> Back to Projects
               </button>

               {/* Grid Layout: Left Project Image/Map, Right Stats/Details/Calculator */}
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                  
                  {/* Left Column: Image and Map */}
                  <div className="lg:col-span-6 space-y-8">
                     {/* Image Wrapper */}
                     <div className="rounded-[28px] md:rounded-[40px] overflow-hidden shadow-2xl relative aspect-[4/3] w-full">
                        <img src={pkg.image} className="w-full h-full object-cover" alt={`${pkg.title} Cover View`} />
                        <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-md z-10">
                           <span className="text-[10px] font-black uppercase tracking-wider text-black">{pkg.type} Plot</span>
                        </div>
                        <div className={`absolute top-6 right-6 backdrop-blur-sm px-4 py-2 rounded-full shadow-md z-10 ${
                           pkg.status === "Available" ? "bg-green-600 text-white" :
                           pkg.status === "Sold" ? "bg-red-600 text-white" :
                           "bg-amber-500 text-white"
                        }`}>
                           <span className="text-[10px] font-black uppercase tracking-wider">{pkg.status}</span>
                        </div>
                     </div>

                     {/* Live Location Map */}
                     <div className="bg-[#fbfaf9] border border-black/5 rounded-[32px] md:rounded-[40px] p-6 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.05)]">
                        <h4 className="text-[14px] font-black uppercase tracking-tight text-black mb-4 flex items-center gap-2">
                           <MapPin className="w-4 h-4 text-[#968370]" />
                           Project Location Map
                        </h4>
                        <div className="w-full h-[300px] md:h-[350px] rounded-[24px] overflow-hidden border border-black/5 bg-neutral-100">
                           <iframe
                              src={`https://maps.google.com/maps?q=${encodeURIComponent(pkg.location)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                              width="100%"
                              height="100%"
                              style={{ border: 0 }}
                              allowFullScreen
                              loading="lazy"
                           />
                        </div>
                     </div>
                  </div>

                  {/* Right Column: Title, Details, EMI Calculator */}
                  <div className="lg:col-span-6 flex flex-col justify-center">
                     <h1 className="text-[36px] md:text-[54px] lg:text-[72px] font-black text-black uppercase leading-[0.85] tracking-tighter mb-4">{pkg.title}</h1>
                     
                     <div className="flex items-center gap-3 mb-8">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-[12px] font-black uppercase tracking-widest text-black/50">{pkg.location}</span>
                     </div>

                     {/* Details Grid */}
                     <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="bg-[#fcfbf9] border border-black/5 rounded-2xl p-4 text-center">
                           <span className="text-[9px] font-bold text-black/30 uppercase tracking-widest block mb-1">Type</span>
                           <span className="text-[13px] font-black uppercase text-[#968370]">{pkg.type} Plot</span>
                        </div>
                        <div className="bg-[#fcfbf9] border border-black/5 rounded-2xl p-4 text-center">
                           <span className="text-[9px] font-bold text-black/30 uppercase tracking-widest block mb-1">Plot Size</span>
                           <span className="text-[13px] font-black uppercase text-[#968370]">{pkg.size}</span>
                        </div>
                        <div className="bg-[#fcfbf9] border border-black/5 rounded-2xl p-4 text-center">
                           <span className="text-[9px] font-bold text-black/30 uppercase tracking-widest block mb-1">Status</span>
                           <span className="text-[13px] font-black uppercase text-[#968370]">{pkg.status}</span>
                        </div>
                     </div>

                     {/* Description */}
                     <p className="text-[16px] md:text-[18px] text-black/60 font-medium leading-relaxed mb-8">{pkg.description}</p>

                     {/* Amenities Grid */}
                     {pkg.amenities && (
                        <div className="mb-10">
                           <h4 className="text-[14px] font-black uppercase tracking-tight text-black mb-4">Project Amenities</h4>
                           <div className="grid grid-cols-2 gap-3">
                              {pkg.amenities.map((amenity, idx) => (
                                 <div key={idx} className="flex items-center gap-2 bg-[#fcfbf9] border border-black/5 rounded-2xl p-3.5">
                                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                                    <span className="text-[12px] font-semibold text-black/70">{amenity}</span>
                                 </div>
                              ))}
                           </div>
                        </div>
                     )}

                     {/* EMI Calculator */}
                     <div className="bg-[#fdfcfb] border border-black/5 rounded-[32px] p-6 md:p-8 mb-8 shadow-sm">
                        <h4 className="text-[14px] font-black uppercase tracking-tight mb-6 flex items-center gap-2 text-black">
                           <Calculator className="w-5 h-5 text-primary" />
                           EMI & Loan Calculator
                        </h4>
                        
                        <div className="space-y-5">
                           {/* Loan Amount */}
                           <div>
                              <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider mb-2 text-black/50">
                                 <span>Loan Amount</span>
                                 <span className="text-black">₹{loanAmount.toLocaleString()} Lakhs</span>
                              </div>
                              <input 
                                 type="range" 
                                 min={2} 
                                 max={50} 
                                 step={1}
                                 value={loanAmount} 
                                 onChange={(e) => setLoanAmount(Number(e.target.value))}
                                 className="w-full h-1 bg-black/10 rounded-lg appearance-none cursor-pointer accent-black"
                              />
                           </div>

                           {/* Tenure */}
                           <div>
                              <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider mb-2 text-black/50">
                                 <span>Tenure (Years)</span>
                                 <span className="text-black">{tenure} Years</span>
                              </div>
                              <input 
                                 type="range" 
                                 min={1} 
                                 max={15} 
                                 step={1}
                                 value={tenure} 
                                 onChange={(e) => setTenure(Number(e.target.value))}
                                 className="w-full h-1 bg-black/10 rounded-lg appearance-none cursor-pointer accent-black"
                              />
                           </div>

                           {/* Interest Rate */}
                           <div>
                              <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider mb-2 text-black/50">
                                 <span>Interest Rate</span>
                                 <span className="text-black">{interestRate}% p.a.</span>
                              </div>
                              <input 
                                 type="range" 
                                 min={6} 
                                 max={16} 
                                 step={0.5}
                                 value={interestRate} 
                                 onChange={(e) => setInterestRate(Number(e.target.value))}
                                 className="w-full h-1 bg-black/10 rounded-lg appearance-none cursor-pointer accent-black"
                              />
                           </div>
                        </div>

                        {/* Results Display */}
                        <div className="mt-8 pt-6 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                           <div className="text-center sm:text-left">
                              <span className="text-[10px] font-bold text-black/30 uppercase tracking-widest block mb-1">Estimated Monthly EMI</span>
                              <span className="text-[28px] font-black text-black">₹{calculatedEmi.toLocaleString()} / mo</span>
                           </div>
                           <div className="text-center sm:text-right text-[11px] font-bold text-black/40 uppercase tracking-wider">
                              <div>Total Payback: <span className="text-black font-extrabold">₹{totalPayback.toFixed(2)} L</span></div>
                              <div className="mt-1">Interest: <span className="text-black font-extrabold">₹{(totalPayback - loanAmount).toFixed(2)} L</span></div>
                           </div>
                        </div>
                     </div>

                     {/* Price and CTA Block */}
                     <div className="p-8 md:p-10 bg-[#f8f6f4] rounded-[32px] md:rounded-[48px] flex flex-col xl:flex-row items-center justify-between gap-6 border border-black/5 shadow-inner">
                        <div className="text-center xl:text-left w-full xl:w-auto shrink-0">
                           <span className="text-[10px] md:text-[11px] font-bold text-black/30 uppercase tracking-widest block mb-1">Starting Price</span>
                           <span className="text-[28px] md:text-[32px] font-black text-black">{pkg.price}</span>
                        </div>
                        <div className="flex flex-wrap gap-2.5 w-full xl:w-auto justify-center xl:justify-end">
                           <button
                              onClick={() => setShowBrochureForm(true)}
                              className="px-5 py-4 border-2 border-black text-black rounded-full font-black text-[10px] md:text-[11px] uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-md flex items-center justify-center gap-1.5 shrink-0"
                           >
                              Brochure <Download className="w-4 h-4" />
                           </button>
                           <button
                              onClick={() => setShowVisitForm(true)}
                              className="px-5 py-4 bg-[#968370] text-white rounded-full font-black text-[10px] md:text-[11px] uppercase tracking-widest hover:bg-black transition-all shadow-md flex items-center justify-center shrink-0"
                           >
                              Book Site Visit
                           </button>
                           <button
                              onClick={() => window.open(`https://wa.me/919009250061?text=Hi Rudraksha Properties! I'm interested in ${pkg.title}.`, '_blank')}
                              className="px-5 py-4 bg-black text-white rounded-full font-black text-[10px] md:text-[11px] uppercase tracking-widest hover:bg-primary hover:text-black transition-all shadow-xl flex items-center justify-center gap-1.5 shrink-0"
                           >
                              WhatsApp <ArrowRight className="w-4 h-4" />
                           </button>
                        </div>
                     </div>
                  </div>

               </div>

            </div>
         </main>

         {/* --- Brochure Lead Form Modal --- */}
         <AnimatePresence>
            {showBrochureForm && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[600] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
               >
                  <motion.div
                     initial={{ scale: 0.95, y: 20 }}
                     animate={{ scale: 1, y: 0 }}
                     exit={{ scale: 0.95, y: 20 }}
                     className="bg-white rounded-[32px] p-8 max-w-md w-full relative shadow-2xl border border-black/5"
                  >
                     <button
                        onClick={() => setShowBrochureForm(false)}
                        className="absolute top-6 right-6 p-2 bg-[#f3f0ec] rounded-full hover:bg-black hover:text-white transition-all"
                     >
                        <X className="w-4 h-4" />
                     </button>

                     <div className="mb-6">
                        <span className="text-[9px] font-black text-primary uppercase tracking-[0.3em] block mb-2">Brochure Download</span>
                        <h3 className="text-[24px] font-black text-black uppercase leading-tight tracking-tight">
                           Get the details for <br />
                           <span className="text-black/55">{pkg.title}</span>
                        </h3>
                        <p className="text-[13px] text-black/50 mt-2 font-medium">Please enter your details to download the complete project brochure.</p>
                     </div>

                     <form onSubmit={handleBrochureSubmit} className="space-y-4">
                        <div>
                           <label className="text-[9px] font-bold text-black/40 uppercase tracking-widest block mb-2 pl-1">Full Name</label>
                           <input
                              type="text"
                              required
                              placeholder="Dharmendra Choudhary"
                              value={brochureLead.name}
                              onChange={(e) => setBrochureLead({ ...brochureLead, name: e.target.value })}
                              className="w-full bg-[#f8f6f4] border-0 rounded-[18px] px-5 py-3.5 text-[13px] font-semibold text-black placeholder-black/25 focus:ring-1 focus:ring-black/20 outline-none"
                           />
                        </div>
                        <div>
                           <label className="text-[9px] font-bold text-black/40 uppercase tracking-widest block mb-2 pl-1">Phone Number</label>
                           <input
                              type="tel"
                              required
                              pattern="[0-9]{10}"
                              placeholder="9009250061"
                              value={brochureLead.phone}
                              onChange={(e) => setBrochureLead({ ...brochureLead, phone: e.target.value })}
                              className="w-full bg-[#f8f6f4] border-0 rounded-[18px] px-5 py-3.5 text-[13px] font-semibold text-black placeholder-black/25 focus:ring-1 focus:ring-black/20 outline-none"
                           />
                        </div>

                        <button
                           type="submit"
                           disabled={isSubmittingBrochure}
                           className="w-full py-4 bg-black text-white rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-primary hover:text-black transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-50 mt-2"
                        >
                           {isSubmittingBrochure ? "Generating Link..." : "Download PDF Brochure"}
                        </button>
                     </form>
                  </motion.div>
               </motion.div>
            )}
         </AnimatePresence>

         {/* --- Book Site Visit Form Modal --- */}
         <AnimatePresence>
            {showVisitForm && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[600] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
               >
                  <motion.div
                     initial={{ scale: 0.95, y: 20 }}
                     animate={{ scale: 1, y: 0 }}
                     exit={{ scale: 0.95, y: 20 }}
                     className="bg-white rounded-[32px] p-8 max-w-md w-full relative shadow-2xl border border-black/5"
                  >
                     <button
                        onClick={() => setShowVisitForm(false)}
                        className="absolute top-6 right-6 p-2 bg-[#f3f0ec] rounded-full hover:bg-black hover:text-white transition-all"
                     >
                        <X className="w-4 h-4" />
                     </button>

                     <div className="mb-6">
                        <span className="text-[9px] font-black text-primary uppercase tracking-[0.3em] block mb-2">Schedule Site Visit</span>
                        <h3 className="text-[24px] font-black text-black uppercase leading-tight tracking-tight">
                           Book a Visit for <br />
                           <span className="text-black/55">{pkg.title}</span>
                        </h3>
                        <p className="text-[13px] text-black/50 mt-2 font-medium">Specify your preferred date and contact details. Our team will arrange a free pickup/drop facility.</p>
                     </div>

                     <form onSubmit={handleVisitSubmit} className="space-y-4">
                        <div>
                           <label className="text-[9px] font-bold text-black/40 uppercase tracking-widest block mb-2 pl-1">Full Name</label>
                           <input
                              type="text"
                              required
                              placeholder="Enter your name"
                              value={visitLead.name}
                              onChange={(e) => setVisitLead({ ...visitLead, name: e.target.value })}
                              className="w-full bg-[#f8f6f4] border-0 rounded-[18px] px-5 py-3.5 text-[13px] font-semibold text-black placeholder-black/25 focus:ring-1 focus:ring-black/20 outline-none"
                           />
                        </div>
                        <div>
                           <label className="text-[9px] font-bold text-black/40 uppercase tracking-widest block mb-2 pl-1">Phone Number</label>
                           <input
                              type="tel"
                              required
                              pattern="[0-9]{10}"
                              placeholder="Enter 10-digit number"
                              value={visitLead.phone}
                              onChange={(e) => setVisitLead({ ...visitLead, phone: e.target.value })}
                              className="w-full bg-[#f8f6f4] border-0 rounded-[18px] px-5 py-3.5 text-[13px] font-semibold text-black placeholder-black/25 focus:ring-1 focus:ring-black/20 outline-none"
                           />
                        </div>
                        <div>
                           <label className="text-[9px] font-bold text-black/40 uppercase tracking-widest block mb-2 pl-1">Preferred Visit Date</label>
                           <input
                              type="date"
                              required
                              value={visitLead.date}
                              onChange={(e) => setVisitLead({ ...visitLead, date: e.target.value })}
                              className="w-full bg-[#f8f6f4] border-0 rounded-[18px] px-5 py-3.5 text-[13px] font-semibold text-black focus:ring-1 focus:ring-black/20 outline-none cursor-pointer"
                           />
                        </div>

                        <button
                           type="submit"
                           disabled={isSubmittingVisit}
                           className="w-full py-4 bg-black text-white rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-primary hover:text-black transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-50 mt-2"
                        >
                           {isSubmittingVisit ? "Booking..." : "Request Site Visit Callback"}
                        </button>
                     </form>
                  </motion.div>
               </motion.div>
            )}
         </AnimatePresence>

         <Footer />
      </div>
   );
}
