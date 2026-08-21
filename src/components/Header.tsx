import React, { useState } from 'react';
import { FIRM_INFO } from '../data/firmData';
import { Phone, Mail, MessageSquare, Scale, Menu, X, ShieldAlert, Send } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenDisclaimer: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenDisclaimer,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services & Rates' },
    { id: 'venues', label: 'Court Venues' },
    { id: 'profile', label: 'Attorney Profile' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    
    // If on page, smooth scroll to anchor
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header id="main-law-firm-header" className="w-full bg-[#ffffff] border-b border-[#e5dfd2] sticky top-0 z-40 shadow-xs">
      {/* Top Emergency & Contact Strip */}
      <div className="bg-[#0f2238] text-slate-100 text-xs py-2 px-4 border-b border-[#c59b27]/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Emergency Alert Tag */}
          <div className="flex items-center space-x-2 text-center md:text-left">
            <span className="inline-flex items-center px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/40 text-[11px]">
              Last-Minute &amp; Emergency Coverage Available
            </span>
          </div>

          {/* Quick Communication Links */}
          <div className="flex items-center flex-wrap justify-center gap-4 text-slate-300">
            <span
              id="header-phone-cell"
              className="flex items-center"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-[#c59b27]" />
              <span>
                <a href={`tel:${FIRM_INFO.phones.emergencyCellRaw}`} className="hover:text-white transition-colors">Call</a>
                {' or '}
                <a href={`sms:${FIRM_INFO.phones.emergencyCellRaw}`} className="hover:text-white transition-colors">Text</a>
                : <strong className="text-white">{FIRM_INFO.phones.emergencyCell}</strong>
              </span>
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <a
              href={FIRM_INFO.mailToLink}
              id="header-email-link"
              className="flex items-center hover:text-[#f3e5ab] transition-colors text-amber-200"
            >
              <Mail className="w-3.5 h-3.5 mr-1.5 text-[#c59b27]" />
              <span>{FIRM_INFO.emails.primary}</span>
            </a>
            <button
              onClick={onOpenDisclaimer}
              id="open-disclaimer-top-btn"
              className="flex items-center text-slate-400 hover:text-amber-300 transition-colors ml-1 pl-2 border-l border-slate-700 cursor-pointer"
              title="View Firm Policies & Legal Disclaimers"
            >
              <ShieldAlert className="w-3.5 h-3.5 mr-1 text-[#c59b27]" />
              <span className="underline text-[11px]">Policies &amp; Disclaimers</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Firm Identity Banner */}
      <div className="bg-[#fbfaf7] border-b border-[#e7e2d6] py-5 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Emblem + Typography */}
          <div className="flex items-center space-x-4 text-center md:text-left">
            <div className="hidden sm:flex w-14 h-14 rounded-full bg-[#0f2238] border-2 border-[#c59b27] items-center justify-center text-[#f3e5ab] shadow-sm shrink-0">
              <Scale className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[11px] md:text-xs font-semibold tracking-widest uppercase text-[#997424] font-seal block">
                State of Florida • Dedicated Bankruptcy Coverage
              </span>
              <h1 className="text-2xl md:text-3xl font-bold text-[#0f2238] font-legal-title tracking-tight">
                {FIRM_INFO.name}
              </h1>
              <p className="text-xs md:text-sm text-slate-600 font-medium mt-0.5">
                {FIRM_INFO.tagline}
              </p>
            </div>
          </div>

          {/* Direct Dispatch Action Buttons */}
          <div className="flex items-center space-x-3 w-full md:w-auto justify-center">
            <a
              href={FIRM_INFO.mailToLink}
              id="header-request-coverage-cta"
              className="px-5 py-2.5 bg-[#0f2238] hover:bg-[#162a45] text-white font-semibold text-xs md:text-sm rounded border border-[#c59b27] shadow-sm hover:shadow transition-all flex items-center space-x-2"
            >
              <Send className="w-4 h-4 text-[#f3e5ab]" />
              <span>Request Coverage</span>
            </a>
            <a
              href={`sms:${FIRM_INFO.phones.emergencyCellRaw}`}
              id="header-sms-emergency-btn"
              className="px-4 py-2.5 bg-[#781826] hover:bg-[#991b1b] text-white font-semibold text-xs md:text-sm rounded shadow-sm hover:shadow transition-all flex items-center space-x-1.5"
            >
              <MessageSquare className="w-4 h-4 text-amber-200" />
              <span>Text for Coverage Request</span>
            </a>
          </div>
        </div>
      </div>

      {/* Classic Navigation Bar */}
      <nav id="desktop-navigation-bar" className="bg-[#ffffff] px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-1 py-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-3 text-sm font-semibold transition-all border-b-2 cursor-pointer ${
                    isActive
                      ? 'text-[#0f2238] border-[#c59b27] bg-[#fbfaf7]'
                      : 'text-slate-600 border-transparent hover:text-[#0f2238] hover:border-slate-300'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Quick Notice Tag */}
          <div className="hidden lg:flex items-center text-xs text-slate-600 space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Same day hearing notes forwarded via email</span>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center justify-between w-full py-2.5">
            <span className="text-xs font-bold text-[#0f2238] tracking-wide uppercase">
              {navItems.find(i => i.id === activeTab)?.label || 'Navigation'}
            </span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-nav-toggle-btn"
              className="p-2 text-[#0f2238] rounded-md hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu-drawer" className="md:hidden border-t border-slate-200 py-2 space-y-1 bg-[#ffffff]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2.5 text-sm font-medium ${
                  activeTab === item.id
                    ? 'bg-[#0f2238] text-white font-bold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="p-3 border-t border-slate-100 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDisclaimer();
                }}
                className="w-full text-left text-xs text-[#997424] font-semibold py-1.5 flex items-center"
              >
                <ShieldAlert className="w-4 h-4 mr-2" />
                Firm Policies &amp; Legal Disclaimers
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
