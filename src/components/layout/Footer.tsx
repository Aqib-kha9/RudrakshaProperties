"use client";

import Link from "next/link";
import { MessageCircle, Instagram, Facebook, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#eeeae7] font-sans overflow-hidden rounded-t-[2rem]">

      {/* Giant Watermark — TOP */}
      <div className="overflow-hidden">
        <p className="text-center mb-5 text-[40px] md:text-[80px] lg:text-[100px] font-black text-black/[0.06] uppercase tracking-tighter leading-none select-none">
          Rudraksha Properties
        </p>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-10 pb-8">

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-10 border-b border-black/8">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center font-black text-sm text-white">
                  R
                </div>
                <span className="text-[14px] font-black tracking-tight text-black/70 uppercase">
                  Rudraksha
                </span>
              </div>
              <p className="text-[10px] font-bold text-black/30 uppercase tracking-widest mt-1">
                Properties & Construction
              </p>
            </div>
            <p className="text-[12px] text-black/40 font-semibold uppercase tracking-tight leading-relaxed mb-5 max-w-[220px]">
              Premium real estate & construction firm in Indore, MP. T&CP approved plots & trusted quality.
            </p>
            <a
              href="https://wa.me/919009250061?text=Hi%20Rudraksha%20Properties!%20I'd%20like%20to%20enquire%20about%20a%20property."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-primary hover:text-black transition-all mb-5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp Us
            </a>
            <div className="flex gap-2">
              <a href="https://www.instagram.com/dharmendra_choudhary12?igsh=eTlldG9oYm4zdjhi" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-black/30 hover:text-black hover:border-black/30 transition-all">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.facebook.com/share/1GqateDssv/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-black/30 hover:text-black hover:border-black/30 transition-all">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="https://youtube.com/@dharmendrachoudhary2597?si=hjy1PoUJ9NFeUc48" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-black/30 hover:text-black hover:border-black/30 transition-all">
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Properties */}
          <div>
            <h5 className="text-[9px] font-black uppercase tracking-[0.4em] text-black/30 mb-4">Properties</h5>
            <ul className="space-y-2.5">
              {[
                { name: "Residential Plots", href: "#services" },
                { name: "Commercial Spaces", href: "#services" },
                { name: "Farmhouse Plots", href: "#services" },
                { name: "Agricultural Land", href: "#services" },
                { name: "Industrial Properties", href: "#services" },
                { name: "Highway Touch Lands", href: "#services" }
              ].map((d, i) => (
                <li key={i}>
                  <Link href={d.href} className="text-[12px] font-semibold text-black/40 hover:text-black uppercase tracking-tight transition-colors">{d.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-[9px] font-black uppercase tracking-[0.4em] text-black/30 mb-4">Company</h5>
            <ul className="space-y-2.5">
              {[
                { name: "About Us", href: "#about" },
                { name: "Our Team", href: "#team" },
                { name: "Projects", href: "#packages" },
                { name: "Gallery", href: "/gallery" },
                { name: "FAQs", href: "#faq" }
              ].map((c, i) => (
                <li key={i}>
                  <Link href={c.href} className="text-[12px] font-semibold text-black/40 hover:text-black uppercase tracking-tight transition-colors">{c.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-[9px] font-black uppercase tracking-[0.4em] text-black/30 mb-4">Contact</h5>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Clock className="w-3 h-3 text-black/30 mt-0.5 shrink-0" />
                <span className="text-[11px] font-semibold text-black/40 uppercase tracking-tight">10 AM – 7 PM (Daily)</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-3 h-3 text-black/30 mt-0.5 shrink-0" />
                <a href="mailto:rudrakshproperties7079@gmail.com" className="text-[11px] font-semibold text-black/40 hover:text-black tracking-tight transition-colors break-all">
                  rudrakshproperties7079@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-3 h-3 text-black/30 mt-0.5 shrink-0" />
                <div className="space-y-1">
                  <a href="tel:+919009250061" className="block text-[11px] font-semibold text-black/40 hover:text-black uppercase tracking-tight transition-colors">+91 9009250061</a>
                  <a href="tel:+918962336621" className="block text-[11px] font-semibold text-black/40 hover:text-black uppercase tracking-tight transition-colors">+91 8962336621</a>
                  <a href="tel:+919926658482" className="block text-[11px] font-semibold text-black/40 hover:text-black uppercase tracking-tight transition-colors">+91 9926658482</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3 h-3 text-black/30 mt-0.5 shrink-0" />
                <span className="text-[11px] font-semibold text-black/30 uppercase tracking-tight leading-relaxed">
                  Annapurna Road, Usha Nagar, Indore (MP)
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/25">
            © 2025 Rudraksha Properties & Construction. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { name: "Privacy", href: "/privacy-policy" },
              { name: "Terms", href: "/terms-of-service" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="text-[10px] font-black uppercase tracking-widest text-black/25 hover:text-black/60 transition-colors">{item.name}</Link>
            ))}
            <span className="w-px h-3 bg-black/15" />
            <a
              href="https://www.linkedin.com/in/aqib-kha9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-black uppercase tracking-widest text-black/25 hover:text-primary transition-colors"
            >
              Developed by <span className="text-black/40">Aqib</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
