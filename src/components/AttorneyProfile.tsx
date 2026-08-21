import React from 'react';
import { FIRM_INFO } from '../data/firmData';
import { IMAGES } from '../assets/imagePaths';
import { Award, Calendar, HeartHandshake, BookOpen, CheckCircle2, Phone, Send } from 'lucide-react';

export const AttorneyProfile: React.FC = () => {
  return (
    <section id="profile" className="py-14 bg-[#fbfaf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Profile Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold tracking-widest text-[#997424] uppercase font-seal">
            Dedicated Appearance Counsel
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-legal-title text-[#0f2238]">
            Attorney Isabel E. Freeman, Esq.
          </h2>
          <div className="w-12 h-0.5 bg-[#c59b27] mx-auto my-2"></div>
          <p className="text-slate-600 text-sm sm:text-base font-body-serif">
            Over 35 Years of Florida Bankruptcy Law Practice • Focused Exclusively on Appearance Coverage
          </p>
        </div>

        {/* Main Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Portrait & Credentials Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#ffffff] border-2 border-[#c59b27] rounded-lg p-5 shadow-sm">
              <div className="relative rounded overflow-hidden border border-slate-200 aspect-[3/4] bg-slate-100 mb-4">
                <img
                  src={IMAGES.attorneyPortrait}
                  alt="Attorney Isabel E. Freeman"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="text-center pb-3 border-b border-slate-100">
                <h3 className="text-xl font-bold font-legal-title text-[#0f2238]">
                  Isabel E. Freeman
                </h3>
                <span className="text-xs text-[#997424] font-semibold block uppercase tracking-wider">
                  Managing Attorney &amp; Coverage Counsel
                </span>
                <p className="text-xs text-slate-500 mt-1">
                  The Law Office of Isabel E. Freeman, P.A.
                </p>
              </div>

              {/* Quick Details */}
              <div className="space-y-2.5 pt-4 text-xs text-slate-700">
                <div className="flex items-center justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Florida Practice:</span>
                  <span className="font-bold text-[#0f2238]">Since 1988 (35+ Years)</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Practice Focus:</span>
                  <span className="font-bold text-[#0f2238]">Dedicated Coverage Counsel</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Coverage Scope:</span>
                  <span className="font-bold text-[#0f2238]">All FL Bankruptcy Districts</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Orlando Division:</span>
                  <span className="font-bold text-[#0f2238]">In-Person &amp; Virtual</span>
                </div>
              </div>

              <div className="pt-4 space-y-2">
                <a
                  href={`tel:${FIRM_INFO.phones.emergencyCellRaw}`}
                  className="w-full py-2 bg-[#0f2238] hover:bg-[#162a45] text-white text-xs font-semibold rounded flex items-center justify-center space-x-2 transition-colors border border-[#c59b27]/30"
                >
                  <Phone className="w-3.5 h-3.5 text-[#c59b27]" />
                  <span>Call for Coverage Request</span>
                </a>
                <a
                  href={FIRM_INFO.mailToLink}
                  className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded flex items-center justify-center space-x-2 transition-colors"
                >
                  <Send className="w-3.5 h-3.5 text-slate-600" />
                  <span>Request Coverage</span>
                </a>
              </div>
            </div>
          </div>

          {/* Narrative Bio & Career Experience */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Main Bio Card */}
            <div className="bg-[#ffffff] border border-[#e5dfd2] rounded-lg p-6 sm:p-8 space-y-6 shadow-xs">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#997424] block">
                  Professional Profile &amp; Background
                </span>
                <h3 className="text-2xl font-bold font-legal-title text-[#0f2238] mt-1">
                  Decades of Florida Bankruptcy Experience
                </h3>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base font-body-serif leading-relaxed">
                <p>
                  Attorney <strong>Isabel E. Freeman</strong> has practiced bankruptcy law in Florida <strong>since 1988</strong> and is available for Zoom and telephonic 341 meetings of creditors, plan confirmation hearings, motion dockets, evidentiary hearings, and non-evidentiary hearings across the Middle District of Florida.
                </p>
                <p>
                  After over <strong>30 years of bankruptcy debtor representation</strong>, her practice has been <strong>limited exclusively to appearance coverage for the past ten (10) years</strong>. This extensive, specialized background gives hiring attorneys complete peace of mind that their clients and files will be handled with unmatched procedural mastery, deep familiarity with local trustees and judges, and genuine empathy.
                </p>
                <p>
                  Attorney Freeman serves as a dependable, seamless extension of your law firm in the courtroom and on virtual Zoom dockets, ensuring your clients feel supported and your instructions are executed meticulously.
                </p>
              </div>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="p-4 bg-[#fbfaf7] border border-[#e7e2d6] rounded">
                  <div className="flex items-center space-x-2 text-[#0f2238] font-bold text-sm mb-1.5">
                    <Calendar className="w-4 h-4 text-[#c59b27]" />
                    <span>Practicing Since 1988</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Over 35 years of dedicated Florida bankruptcy experience, handling Chapter 7 and Chapter 13 proceedings with seasoned skill.
                  </p>
                </div>

                <div className="p-4 bg-[#fbfaf7] border border-[#e7e2d6] rounded">
                  <div className="flex items-center space-x-2 text-[#0f2238] font-bold text-sm mb-1.5">
                    <HeartHandshake className="w-4 h-4 text-[#c59b27]" />
                    <span>Client-Centered Coverage</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Over 10 years focused exclusively on professional appearance coverage. Every debtor is treated with compassion, dignity, and individualized care.
                  </p>
                </div>

                <div className="p-4 bg-[#fbfaf7] border border-[#e7e2d6] rounded">
                  <div className="flex items-center space-x-2 text-[#0f2238] font-bold text-sm mb-1.5">
                    <BookOpen className="w-4 h-4 text-[#c59b27]" />
                    <span>Same Day Hearing Notes</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Comprehensive written notes forwarded to hiring counsel via email on the same day following the conclusion of meetings or hearings.
                  </p>
                </div>

                <div className="p-4 bg-[#fbfaf7] border border-[#e7e2d6] rounded">
                  <div className="flex items-center space-x-2 text-[#0f2238] font-bold text-sm mb-1.5">
                    <Award className="w-4 h-4 text-[#c59b27]" />
                    <span>Middle District of Florida Coverage</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Providing virtual appearances in Fort Myers, Jacksonville, Ocala, and Tampa, with in-person coverage in the Orlando Division.
                  </p>
                </div>
              </div>

              {/* Action Banner */}
              <div className="p-5 bg-[#0f2238] text-white rounded-md flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-[#f3e5ab] font-bold uppercase tracking-wider block">
                    Reliable Coverage Counsel
                  </span>
                  <p className="text-sm font-semibold">
                    Schedule appearance coverage for an upcoming 341 meeting or hearing docket.
                  </p>
                </div>
                <div className="flex items-center space-x-2 shrink-0">
                  <a
                    href={FIRM_INFO.mailToLink}
                    className="px-5 py-2.5 bg-[#c59b27] hover:bg-[#d4af37] text-[#0f2238] font-bold text-xs rounded transition-colors flex items-center space-x-1.5"
                  >
                    <Send className="w-3.5 h-3.5 text-[#0f2238]" />
                    <span>Request Coverage</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
