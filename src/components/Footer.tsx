import React from 'react';
import { FIRM_INFO, LEGAL_DISCLAIMER_TEXT } from '../data/firmData';
import { Scale, Phone, Mail, MapPin, ShieldAlert, Lock, MessageSquare, Send } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenDisclaimer: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenDisclaimer }) => {
  const handleNavClick = (id: string) => {
    onNavigate(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-law-firm-footer" className="bg-[#0a1726] text-slate-300 border-t-2 border-[#c59b27] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-800">
          
          {/* Col 1: Firm Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#0f2238] border border-[#c59b27] flex items-center justify-center text-[#f3e5ab]">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold font-legal-title text-white">
                  {FIRM_INFO.name}
                </h4>
                <span className="text-[11px] text-[#c59b27] font-semibold block">
                  {FIRM_INFO.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-body-serif leading-relaxed">
              Offering professional attorney appearance coverage of Section 341 Meetings of Creditors, Chapter 13 plan confirmations, motion dockets, and evidentiary &amp; non-evidentiary hearings across the Middle District of Florida.
            </p>

            <div className="text-xs text-slate-400 space-y-1.5 pt-1">
              <p className="flex items-center text-slate-300">
                <MapPin className="w-3.5 h-3.5 mr-2 text-[#c59b27] shrink-0" />
                <span>{FIRM_INFO.address.full}</span>
              </p>
              <p className="flex items-center text-slate-300">
                <Phone className="w-3.5 h-3.5 mr-2 text-[#c59b27] shrink-0" />
                <span>Call for Coverage Request: <strong className="text-white ml-1">{FIRM_INFO.phones.emergencyCell}</strong></span>
              </p>
              <p className="flex items-center text-slate-300">
                <MessageSquare className="w-3.5 h-3.5 mr-2 text-rose-400 shrink-0" />
                <span>Text for Coverage Request: <strong className="text-white ml-1">{FIRM_INFO.phones.emergencyCell}</strong></span>
              </p>
              <p className="flex items-center text-slate-300">
                <Mail className="w-3.5 h-3.5 mr-2 text-[#c59b27] shrink-0" />
                <span>{FIRM_INFO.emails.primary} • {FIRM_INFO.emails.secondary}</span>
              </p>
            </div>
          </div>

          {/* Col 2: Navigation & Direct Actions */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#f3e5ab] font-seal">
              Practice Overview
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home &amp; Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Services &amp; Flat Rates
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('venues')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Court Jurisdictions &amp; Venues
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('profile')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Attorney Profile (Isabel E. Freeman, Esq.)
                </button>
              </li>
              <li className="pt-2">
                <a
                  href={FIRM_INFO.mailToLink}
                  className="inline-flex items-center text-[#c59b27] hover:text-[#f3e5ab] font-bold"
                >
                  <Send className="w-3 h-3 mr-1.5" />
                  <span>Request Coverage via Email &rarr;</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Florida Bar & Compliance Notice */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#f3e5ab] font-seal flex items-center">
              <ShieldAlert className="w-3.5 h-3.5 mr-1.5 text-[#c59b27]" />
              <span>Florida Bar Legal Notice &amp; Policies</span>
            </h5>
            <p className="text-[11px] text-slate-400 leading-relaxed font-body-serif">
              &ldquo;{LEGAL_DISCLAIMER_TEXT.summary}&rdquo;
            </p>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              The information on this website is for informational and attorney-to-attorney collaboration purposes only. Submitting information does not create an attorney-client relationship.
            </p>
            <div className="pt-1">
              <button
                onClick={onOpenDisclaimer}
                id="footer-open-disclaimer-btn"
                className="inline-flex items-center text-xs text-[#c59b27] hover:text-[#f3e5ab] font-semibold underline underline-offset-4 decoration-[#c59b27]/60 hover:decoration-[#f3e5ab] cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5 mr-1.5 shrink-0" />
                <span>View Firm Policies &amp; Legal Disclaimers</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} {FIRM_INFO.name} All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <button 
              onClick={onOpenDisclaimer} 
              id="footer-bottom-policies-link"
              className="text-slate-400 hover:text-[#f3e5ab] underline transition-colors cursor-pointer"
            >
              Firm Policies &amp; Disclaimers
            </button>
            <span>•</span>
            <button 
              onClick={onOpenDisclaimer} 
              className="text-slate-400 hover:text-[#f3e5ab] transition-colors cursor-pointer"
            >
              Florida Bar Rule 4-7 Notice
            </button>
            <span>•</span>
            <span>Winter Park, FL Office</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
