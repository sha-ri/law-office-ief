import React, { useEffect } from 'react';
import { LEGAL_DISCLAIMER_TEXT, FIRM_INFO } from '../data/firmData';
import { ShieldAlert, Scale, X, FileText, Lock, CheckCircle2 } from 'lucide-react';

interface DisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
}

export const DisclaimerModal: React.FC<DisclaimerModalProps> = ({
  isOpen,
  onClose,
  onAccept,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      id="legal-disclaimer-modal-overlay" 
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0f2238]/75 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-heading"
    >
      <div 
        id="legal-disclaimer-dossier" 
        className="relative w-full max-w-3xl bg-[#ffffff] border-2 border-[#c59b27] shadow-2xl rounded-lg overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0f2238] text-white px-6 py-5 border-b border-[#c59b27] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-[#c59b27]/20 rounded border border-[#c59b27]/40 text-[#f3e5ab]">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs tracking-wider uppercase text-[#c59b27] font-semibold block">
                Official Law Office Notice
              </span>
              <h2 id="disclaimer-heading" className="text-lg md:text-xl font-bold font-legal-title tracking-wide text-white">
                {LEGAL_DISCLAIMER_TEXT.title}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            id="close-disclaimer-dossier-btn"
            className="text-slate-300 hover:text-white p-1.5 rounded-md hover:bg-slate-800 transition-colors cursor-pointer"
            title="Close Policies & Disclaimers"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Florida Bar Mandatory Banner */}
        <div className="bg-[#fcf8e3] border-b border-[#faebcc] px-6 py-3.5 flex items-start space-x-3 text-sm text-[#8a6d3b]">
          <ShieldAlert className="w-5 h-5 text-[#b4831d] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#66512c] font-semibold block mb-0.5">
              {LEGAL_DISCLAIMER_TEXT.ruleNotice}
            </strong>
            <p className="leading-relaxed text-xs md:text-sm">
              &ldquo;{LEGAL_DISCLAIMER_TEXT.summary}&rdquo;
            </p>
          </div>
        </div>

        {/* Body Content */}
        <div className="px-6 py-5 max-h-[55vh] overflow-y-auto space-y-4 text-slate-700 text-sm leading-relaxed border-b border-slate-200">
          <div className="p-3 bg-slate-50 border border-slate-200 rounded text-xs text-slate-600 flex flex-wrap items-center justify-between gap-2">
            <span className="font-semibold text-slate-800">
              Firm: {FIRM_INFO.name}
            </span>
            <span className="text-slate-500">
              State of Florida • Bankruptcy Appearance Counsel
            </span>
          </div>

          {LEGAL_DISCLAIMER_TEXT.sections.map((section, idx) => (
            <div key={idx} className="space-y-1.5 pb-2">
              <h3 className="font-bold text-[#0f2238] flex items-center text-sm md:text-base">
                <FileText className="w-4 h-4 mr-2 text-[#c59b27] shrink-0" />
                {section.heading}
              </h3>
              <p className="text-slate-600 pl-6 text-xs md:text-sm leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}

          <div className="p-3.5 bg-[#f4f7fa] border border-[#d9e2ec] rounded flex items-start space-x-3 text-xs text-slate-700">
            <Lock className="w-4 h-4 text-[#0f2238] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#0f2238] block mb-0.5">Professional Standards &amp; Local Rules:</strong>
              Attorney Isabel E. Freeman provides appearance coverage exclusively to licensed counsel of record. All representations and appearances are governed by local rules of the United States Bankruptcy Courts across Florida and Federal Rules of Bankruptcy Procedure.
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-[#fbfaf7] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center text-xs text-slate-500">
            <CheckCircle2 className="w-4 h-4 text-[#997424] mr-1.5 shrink-0" />
            <span>The Law Office of Isabel E. Freeman, P.A. • Admitted 1988</span>
          </div>
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              id="acknowledge-disclaimer-btn"
              onClick={onAccept}
              className="w-full sm:w-auto px-6 py-2.5 bg-[#0f2238] hover:bg-[#162a45] text-white font-medium text-sm rounded shadow hover:shadow-md transition-all flex items-center justify-center space-x-2 border border-[#c59b27] cursor-pointer"
            >
              <span>Close &amp; Return to Page</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
