import React from 'react';
import { RATES_DATA, COURT_JURISDICTIONS, FIRM_INFO } from '../data/firmData';
import { Check, MapPin, Send, Phone, MessageSquare, Clock, AlertCircle } from 'lucide-react';

export const CoverageServices: React.FC = () => {
  return (
    <section id="services" className="py-14 bg-[#fbfaf7] border-b border-[#e5dfd2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold tracking-widest text-[#997424] uppercase font-seal">
            Appearance Counsel &amp; Legal Support
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-legal-title text-[#0f2238]">
            Coverage Services &amp; Flat Rates
          </h2>
          <div className="w-12 h-0.5 bg-[#c59b27] mx-auto my-2"></div>
          <p className="text-slate-600 text-sm sm:text-base font-body-serif leading-relaxed">
            Reliable, punctual appearance coverage across Chapter 7 and Chapter 13 proceedings for primary counsel and law firms throughout Florida.
          </p>
        </div>

        {/* 2x2 Rates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RATES_DATA.map((item) => (
            <div
              key={item.id}
              className={`bg-[#ffffff] border rounded-lg p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-all relative overflow-hidden group ${
                item.id === 'emergency_coverage'
                  ? 'border-amber-400/80 bg-amber-50/20'
                  : 'border-[#e5dfd2] hover:border-[#c59b27]'
              }`}
            >
              <div
                className={`absolute top-0 inset-x-0 h-1 ${
                  item.id === 'emergency_coverage' ? 'bg-[#781826]' : 'bg-[#0f2238] group-hover:bg-[#c59b27]'
                } transition-colors`}
              ></div>
              
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#997424] block">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold font-legal-title text-[#0f2238] mt-0.5">
                      {item.title}
                    </h3>
                  </div>
                  {item.id === 'emergency_coverage' && (
                    <span className="shrink-0 px-2 py-0.5 bg-[#781826]/10 text-[#781826] border border-[#781826]/20 text-[10px] font-bold uppercase rounded">
                      After Hours
                    </span>
                  )}
                </div>

                {/* Price Display */}
                <div className="py-2.5 border-y border-slate-100 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="flex items-baseline">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#0f2238] font-legal-title">
                      {item.rate}
                    </span>
                  </div>
                  {item.rateSubtext && (
                    <span className={`text-xs font-semibold ${item.id === 'emergency_coverage' ? 'text-amber-800' : 'text-slate-500'}`}>
                      {item.rateSubtext}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body-serif">
                  {item.description}
                </p>

                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider block">
                    Scope of Service:
                  </span>
                  <ul className="space-y-1.5">
                    {item.includes.map((inc, i) => (
                      <li key={i} className="flex items-start text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#c59b27] shrink-0 mr-2 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                <a
                  href={FIRM_INFO.mailToLink}
                  className="w-full py-2.5 bg-[#0f2238] hover:bg-[#162a45] text-white text-xs font-semibold rounded flex items-center justify-center space-x-1.5 transition-colors border border-[#c59b27]/30"
                >
                  <Send className="w-3.5 h-3.5 text-[#f3e5ab]" />
                  <span>Request Coverage</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Single Same Day Hearing Notes Commitment Card */}
        <div className="bg-[#ffffff] border-l-4 border-[#c59b27] border-y border-r border-[#e7e2d6] rounded-r-lg p-5 sm:p-6 shadow-xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start space-x-3.5">
              <div className="p-2.5 rounded-full bg-[#0f2238] text-[#f3e5ab] shrink-0 mt-0.5">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold font-legal-title text-[#0f2238]">
                  Same Day Hearing Notes Commitment
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-body-serif max-w-4xl">
                  Hearing notes from covering counsel are forwarded the same day via e-mail. This facilitates your prompt communication with your client regarding any inquiries or items raised at the meeting or hearing, ensuring timely completion of all trustee and court requirements.
                </p>
              </div>
            </div>
            <div className="shrink-0 w-full md:w-auto">
              <a
                href={FIRM_INFO.mailToLink}
                className="inline-flex w-full md:w-auto items-center justify-center px-4 py-2 bg-[#0f2238] hover:bg-[#162a45] text-white text-xs font-semibold rounded border border-[#c59b27] transition-colors whitespace-nowrap"
              >
                <Send className="w-3 h-3 text-[#f3e5ab] mr-1.5" />
                <span>Email Coverage Details</span>
              </a>
            </div>
          </div>
        </div>

        {/* Court Jurisdictions and Venues Section */}
        <div id="venues" className="bg-[#ffffff] border border-[#e5dfd2] rounded-lg p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#997424] uppercase font-seal">
                Middle District of Florida Bankruptcy Coverage
              </span>
              <h3 className="text-2xl font-bold font-legal-title text-[#0f2238]">
                Court Jurisdictions &amp; Venues
              </h3>
            </div>
            <p className="text-xs text-slate-600 max-w-md">
              Handling virtual Zoom appearances across all Middle District of Florida divisions, with dedicated in-person coverage in the Orlando Division.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {COURT_JURISDICTIONS.map((div, idx) => (
              <div key={idx} className="p-4 sm:p-5 bg-[#fbfaf7] border border-[#e7e2d6] rounded-lg space-y-3">
                <div className="flex items-center space-x-2 text-[#0f2238] font-bold text-base font-legal-title">
                  <MapPin className="w-4 h-4 text-[#c59b27] shrink-0" />
                  <span>{div.division}</span>
                </div>
                <div className="text-xs text-slate-600">
                  <span className="text-slate-800 font-semibold block">{div.district}</span>
                  <span className="text-slate-500 text-[11px]">{div.address}</span>
                </div>
                <div className="pt-2 border-t border-slate-200">
                  <span className="text-[11px] font-bold text-slate-700 block mb-1.5 uppercase tracking-wide">
                    Covered Proceedings:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {div.coverageTypes.map((t, ti) => {
                      const isFormat = t.includes('Virtual') || t.includes('In-Person');
                      return (
                        <span 
                          key={ti} 
                          className={`text-xs px-2 py-0.5 rounded font-medium ${
                            isFormat 
                              ? 'bg-[#0f2238] text-[#f3e5ab] font-bold' 
                              : 'bg-white border border-slate-200 text-slate-700'
                          }`}
                        >
                          {t}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Dispatch Action Strip */}
          <div className="pt-2">
            <div className="bg-[#0f2238] text-white p-4 sm:p-5 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-0.5 text-center sm:text-left">
                <span className="text-xs font-bold text-[#f3e5ab] uppercase tracking-wider block">
                  Quick Docket Dispatch
                </span>
                <p className="text-xs sm:text-sm text-slate-200">
                  Send your case number, hearing details, and trustee notes for swift confirmation.
                </p>
              </div>
              <div className="flex items-center flex-wrap justify-center gap-2 shrink-0">
                <a
                  href={FIRM_INFO.mailToLink}
                  className="px-4 py-2 bg-[#c59b27] hover:bg-[#d4af37] text-[#0f2238] text-xs font-bold rounded flex items-center space-x-1.5 transition-colors"
                >
                  <Send className="w-3.5 h-3.5 text-[#0f2238]" />
                  <span>Request Coverage</span>
                </a>
                <a
                  href={`tel:${FIRM_INFO.phones.emergencyCellRaw}`}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded flex items-center space-x-1.5 transition-colors border border-white/20"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-200" />
                  <span>Call for Coverage</span>
                </a>
                <a
                  href={`sms:${FIRM_INFO.phones.emergencyCellRaw}`}
                  className="px-4 py-2 bg-[#781826] hover:bg-[#991b1b] text-white text-xs font-semibold rounded flex items-center space-x-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-amber-200" />
                  <span>Text for Coverage</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
