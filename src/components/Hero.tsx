import React from 'react';
import { FIRM_INFO } from '../data/firmData';
import { IMAGES } from '../assets/imagePaths';
import { Scale, CheckCircle2, Zap, Video, Send, PhoneCall, AlertCircle, MessageSquare } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#0f2238] text-white">
      {/* Background with subtle courthouse image overlay */}
      <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-luminosity">
        <img
          src={IMAGES.courthouseHero}
          alt="Courthouse Backdrop"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1726] via-[#0f2238]/95 to-[#162a45]/90 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-8 space-y-6 text-left">
            {/* Top prestige pill */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#c59b27]/20 border border-[#c59b27]/40 text-[#f3e5ab] text-xs font-semibold tracking-wider uppercase">
              <Scale className="w-3.5 h-3.5 text-[#c59b27]" />
              <span>Florida Bankruptcy Appearance &amp; Coverage Counsel</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-legal-title leading-tight tracking-tight text-white">
              Bankruptcy Coverage You Can Count On
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-body-serif max-w-3xl">
              Offering experienced attorney appearance coverage of <strong>Section 341 Meetings of Creditors</strong>, <strong>Confirmation Hearings</strong>, <strong>Motion Dockets</strong>, and <strong>Evidentiary &amp; Non-Evidentiary Hearings</strong> across the Middle District of Florida.
            </p>

            {/* Core Value Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 bg-white/5 backdrop-blur-xs border border-white/10 rounded-md">
                <div className="flex items-center space-x-2 text-[#f3e5ab] text-sm font-semibold mb-1">
                  <Video className="w-4 h-4 text-[#c59b27]" />
                  <span>341 Creditors Meetings</span>
                </div>
                <p className="text-xs text-slate-300">
                  <strong>$75.00 flat fee</strong> for Chapter 7 &amp; 13 Zoom and telephonic meetings.
                </p>
              </div>

              <div className="p-3.5 bg-white/5 backdrop-blur-xs border border-white/10 rounded-md">
                <div className="flex items-center space-x-2 text-[#f3e5ab] text-sm font-semibold mb-1">
                  <Scale className="w-4 h-4 text-[#c59b27]" />
                  <span>Non-Evidentiary Hearings</span>
                </div>
                <p className="text-xs text-slate-300">
                  <strong>$150.00 flat fee</strong> for confirmations, motions &amp; status dockets.
                </p>
              </div>

              <div className="p-3.5 bg-white/5 backdrop-blur-xs border border-white/10 rounded-md">
                <div className="flex items-center space-x-2 text-[#f3e5ab] text-sm font-semibold mb-1">
                  <Zap className="w-4 h-4 text-[#c59b27]" />
                  <span>Emergency / After-Hours</span>
                </div>
                <p className="text-xs text-slate-300">
                  <strong>$100.00 fee</strong> if requested after 5:00 PM day prior to coverage event.
                </p>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-3">
              <a
                href={FIRM_INFO.mailToLink}
                id="hero-request-coverage-btn"
                className="px-6 py-3 bg-[#c59b27] hover:bg-[#d4af37] text-[#0f2238] font-bold text-sm rounded shadow-md hover:shadow-lg transition-all flex items-center space-x-2"
              >
                <Send className="w-4 h-4 text-[#0f2238]" />
                <span>Request Coverage</span>
              </a>

              <a
                href={`tel:${FIRM_INFO.phones.emergencyCellRaw}`}
                id="hero-call-cell-btn"
                className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded border border-white/20 transition-all flex items-center space-x-2"
              >
                <PhoneCall className="w-4 h-4 text-amber-200" />
                <span>Call for Coverage Request</span>
              </a>

              <a
                href={`sms:${FIRM_INFO.phones.emergencyCellRaw}`}
                id="hero-text-cell-btn"
                className="px-5 py-3 bg-[#781826]/80 hover:bg-[#781826] text-white font-semibold text-sm rounded border border-rose-400/30 transition-all flex items-center space-x-2"
              >
                <MessageSquare className="w-4 h-4 text-amber-200" />
                <span>Text for Coverage Request</span>
              </a>
            </div>

            {/* Emergency & Courthouse Cell Notice */}
            <div className="p-3 bg-amber-950/40 border border-amber-500/30 rounded-md text-xs text-amber-200/90 flex items-start space-x-2.5">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-300 font-semibold">Emergency &amp; Last-Minute Coverage:</strong>{' '}
                <span>Cell coverage in the Courthouse is unreliable.<br />For expedited or last-minute coverage, please text <strong>{FIRM_INFO.phones.emergencyCell}</strong>.</span>
              </div>
            </div>
          </div>

          {/* Attorney Featured Card / Photo / Quote */}
          <div className="lg:col-span-4">
            <div className="bg-[#ffffff] text-slate-800 rounded-lg border-2 border-[#c59b27] p-5 shadow-2xl space-y-4">
              {/* Attorney Photo */}
              <div className="relative rounded overflow-hidden border border-slate-200 aspect-[3/4] max-h-72 bg-slate-100">
                <img
                  src={IMAGES.attorneyPortrait}
                  alt="Attorney Isabel E. Freeman, Esq."
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0f2238] via-[#0f2238]/80 to-transparent p-3 text-white">
                  <span className="text-[11px] uppercase tracking-wider text-[#f3e5ab] font-bold block">
                    Managing Attorney
                  </span>
                  <p className="font-bold font-legal-title text-base">
                    Isabel E. Freeman, Esq.
                  </p>
                </div>
              </div>

              {/* Bio summary bullet points */}
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#c59b27] shrink-0 mt-0.5" />
                  <span><strong>Florida Bankruptcy Practice:</strong> Admitted &amp; practicing since 1988.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#c59b27] shrink-0 mt-0.5" />
                  <span><strong>10+ Years Dedicated Coverage:</strong> Practice focused exclusively on appearance counsel.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#c59b27] shrink-0 mt-0.5" />
                  <span><strong>Debtor Advocacy Background:</strong> Over 30 years prior debtor representation experience.</span>
                </div>
              </div>

              {/* Attorney Philosophy Quote */}
              <div className="p-3 bg-[#fbfaf7] border-l-4 border-[#c59b27] rounded-r text-xs italic text-slate-700 leading-relaxed">
                &ldquo;{FIRM_INFO.quote.text}&rdquo;
                <span className="block mt-1 font-bold not-italic text-[#0f2238] text-[11px]">
                  — {FIRM_INFO.quote.author}
                </span>
              </div>

              <div className="pt-1">
                <a
                  href={FIRM_INFO.mailToLink}
                  id="hero-card-email-btn"
                  className="w-full py-2 bg-[#0f2238] hover:bg-[#162a45] text-white text-xs font-semibold rounded text-center transition-colors flex items-center justify-center space-x-1.5"
                >
                  <Send className="w-3 h-3 text-[#f3e5ab]" />
                  <span>Email for Coverage Availability</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
