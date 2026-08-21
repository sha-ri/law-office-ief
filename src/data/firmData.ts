import { RateItem, CourtDivisionInfo } from '../types';

export const FIRM_INFO = {
  name: "The Law Office of Isabel E. Freeman, P.A.",
  shortName: "Law Office of Isabel E. Freeman, P.A.",
  attorneyName: "Isabel E. Freeman, Esq.",
  tagline: "Bankruptcy Appearance and Coverage Throughout the Middle District",
  subTagline: "Appearance coverage for Section 341 Meetings of Creditors, Confirmation Hearings, Motion Dockets, and Evidentiary & Non-Evidentiary Hearings across the Middle District of Florida",
  establishedYear: 1988,
  coverageOnlyYears: 10,
  debtorExpYears: 30,
  phones: {
    primary: "(407) 434-1550",
    primaryRaw: "4074341550",
    emergencyCell: "(407) 902-7985",
    emergencyCellRaw: "4079027985",
  },
  emails: {
    primary: "isabel@florida341.com",
    secondary: "iefesq@gmail.com",
  },
  mailToLink: "mailto:isabel@florida341.com?cc=iefesq@gmail.com&subject=Bankruptcy%20Coverage%20Request&body=Hello%20Isabel,%0D%0A%0D%0APlease%20let%20us%20know%20your%20availability%20for%20the%20following%20appearance%20coverage:%0D%0A%0D%0ACase%20Name:%20%0D%0ACase%20Number:%20%0D%0AChapter:%20[7%20/%2013%20/%2011]%0D%0ADistrict%20/%20Division:%20%0D%0ATrustee%20or%20Judge:%20%0D%0AHearing%20Type:%20[341%20Meeting%20/%20Non-Evidentiary%20/%20Evidentiary]%0D%0ADate%20%26%20Time:%20%0D%0AIn-Person%20or%20Virtual/Zoom:%20%0D%0ASpecial%20Instructions:%20%0D%0A%0D%0AThank%20you,%0D%0A[Hiring%20Attorney%20Name]%0D%0A[Firm%20Name]%0D%0A[Phone%20Number]%0D%0A%0D%0A-----%0D%0A%0D%0AFor%20341%20Coverage%2C%20please%20provide%20a%20copy%20of%20the%20Notice%20of%20Commencement%2C%20as%20well%20as%20a%20legible%20copy%20of%20the%20Debtor(s)%20ID%20and%20proof%20of%20SSN%20as%20I%20will%20need%20to%20verify%20to%20the%20Trustee%20that%20I%20have%20reviewed%20same.%20If%20you%20would%20like%2C%20please%20also%20provide%20the%20Debtor(s)%20phone%20number%20and%20I%20will%20text%20them%20prior%20to%20the%20341%20Meeting%20including%20the%20Trustee%20link.%0D%0A%0D%0ATO%20ENSURE%20COVERAGE%2C%20please%20conform%2C%20file%2C%20and%20serve%20through%20ECF%20a%20Notice%20of%20Limited%20Appearance%20and%20Disclosure%20of%20Compensation%20in%20all%20matters%20for%20which%20you%20have%20requested%20attorney%20coverage.%20The%20form%20(in%20Word%20format)%20can%20be%20found%20at%3A%20https%3A%2F%2Fwww.dropbox.com%2Fs%2F854hse52jpyi2c0%2FNotice%2520of%2520Limited%2520Appearance%2520and%25202016%2520copy%25202.docx%3Fdl%3D0%0D%0A%0D%0AAdditional%20information%3A%0D%0ACh%207%20Trustee%20Doc%20Requirements%3A%0D%0Ahttp%3A%2F%2Fwww.flmb.uscourts.gov%2Fthesource%2Ftrustee7%2Fdefault.asp%3Fid%3D1%0D%0ATo%20be%20provided%20at%20least%207%20days%20prior%20to%20341.%0D%0A%0D%0AVISIT%20my%20LinkedIn%20Profile%20at%3A%0D%0Ahttp%3A%2F%2Flinkedin.com%2Fin%2Fisabel-e-freeman-86295125%0D%0A%0D%0AVISIT%20my%20Florida%20Bar%20Profile%20at%3A%0D%0Awww.floridabar.org%2Fmybarprofile%2F760481%0D%0A%0D%0AFor%20Easy%20Payment%20use%20PayPal.Me%20link%3A%0D%0Ahttps%3A%2F%2Fpaypal.me%2Forlando341%0D%0A%0D%0ACONFIDENTIALITY%20NOTICE%0D%0AThe%20information%20contained%20in%20this%20message%20is%20attorney-client%20privileged%20and%20confidential%20information%20intended%20exclusively%20for%20the%20use%20of%20the%20client%2Fs%20of%20Isabel%20E.%20Freeman%20and%20the%20Law%20Office%20of%20Isabel%20E.%20Freeman%2C%20P.A..%20If%20the%20reader%20of%20this%20message%20is%20not%20the%20intended%20recipient%2C%20you%20are%20hereby%20notified%20that%20any%20dissemination%2C%20distribution%20or%20copying%20of%20this%20message%20strictly%20is%20prohibited.%20If%20you%20have%20received%20this%20message%20in%20error%2C%20please%20immediately%20notify%20the%20party%20above%20by%20telephone%20and%20return%20the%20message%20via%20reply%20at%20the%20above%20e-mail%20address.",
  address: {
    street: "Post Office Box 2105",
    city: "Winter Park",
    state: "FL",
    zip: "32790-2105",
    full: "Post Office Box 2105 • Winter Park, FL 32790-2105",
  },
  quote: {
    text: "I never lose sight of your clients’ needs and concerns, treating them with the compassion and respect that they deserve during this stressful time in their lives.",
    author: "Isabel E. Freeman, Esq.",
  },
  emergencyNotice: "In the event of an emergency or for last minute coverage, please text (407) 902-7985 in addition to emailing isabel@florida341.com and cc'ing iefesq@gmail.com. This cellphone is monitored at all times during regular business hours.",
  courthouseNote: "Cell coverage for email can be spotty in the Courthouse, whereas texting is immediate.",
  bio: `Attorney Isabel E. Freeman has practiced bankruptcy law in Florida since 1988 and is available for Zoom and telephonic 341 meetings of creditors, plan confirmation hearings, motion dockets, evidentiary hearings, and non-evidentiary hearings across the Middle District of Florida. After over 30 years of bankruptcy debtor representation, her practice has been limited exclusively to appearance coverage for the past ten (10) years.`,
};

export const RATES_DATA: RateItem[] = [
  {
    id: '341_meetings',
    title: '341 Meetings of Creditors',
    rate: '$75.00',
    rateSubtext: 'Flat Fee',
    category: 'Chapter 7 & Chapter 13',
    description: 'Section 341 Meetings of Creditors conducted via Zoom or teleconference across Chapter 7 and Chapter 13 proceedings.',
    includes: [
      'Pre-meeting appearance and debtor verification',
      'Representation before Chapter 7 or Chapter 13 Trustee',
      'Assistance with identity and debtor oath requirements',
    ],
  },
  {
    id: 'non_evidentiary_hearings',
    title: 'Non-Evidentiary Hearings',
    rate: '$150.00',
    rateSubtext: 'Flat Fee',
    category: 'Court Dockets & Confirmations',
    description: 'Routine court appearances, Chapter 13 plan confirmations, motion dockets, and uncontested hearings.',
    includes: [
      'Comprehensive review of filed motion, objections, and docket',
      'Appearance before presiding Judge (In-Person Orlando or Virtual)',
      'Chapter 13 plan confirmation hearing representation',
    ],
  },
  {
    id: 'evidentiary_hearings',
    title: 'Evidentiary Hearings',
    rate: 'Contact Us',
    rateSubtext: 'Tailored Fee',
    category: 'Contested Matters & Trials',
    description: 'Contested evidentiary hearings, adversary proceedings, and complex matters requiring customized preparation.',
    includes: [
      'Docket, pleadings, and exhibit review with primary counsel',
      'Witness handling and legal argument as instructed',
      'Adversary proceeding and contested hearing representation',
    ],
  },
  {
    id: 'emergency_coverage',
    title: 'Emergency / After-Hours Coverage',
    rate: '$100.00',
    rateSubtext: 'If after 5:00 PM day prior to coverage event',
    category: 'Expedited & Last-Minute Requests',
    description: 'Expedited appearance coverage requests received after 5:00 PM on the day prior to the scheduled meeting or hearing.',
    includes: [
      'Expedited conflict clearance and document intake',
      'Monitored cellphone texting dispatch for urgent matters',
      'Immediate docket preparation and appearance coverage',
    ],
  },
];

export const COURT_JURISDICTIONS: CourtDivisionInfo[] = [
  {
    division: 'Orlando Division',
    district: 'Middle District of Florida',
    courthouse: 'George C. Young Federal Building & Courthouse',
    address: '400 W. Washington Street, Orlando, FL 32801',
    coverageTypes: [
      'Virtual Appearances & In-Person Coverage',
      '341 Creditors Meetings',
      'Confirmation Hearings',
      'Motion Dockets',
      'Non-Evidentiary Hearings',
      'Evidentiary Hearings',
    ],
  },
  {
    division: 'Fort Myers Division',
    district: 'Middle District of Florida',
    courthouse: 'U.S. Bankruptcy Court, Fort Myers Division',
    address: 'Fort Myers, FL',
    coverageTypes: [
      'Virtual Appearances',
      '341 Creditors Meetings',
      'Confirmation Hearings',
      'Motion Dockets',
      'Non-Evidentiary Hearings',
      'Evidentiary Hearings',
    ],
  },
  {
    division: 'Jacksonville Division',
    district: 'Middle District of Florida',
    courthouse: 'U.S. Bankruptcy Court, Jacksonville Division',
    address: 'Jacksonville, FL',
    coverageTypes: [
      'Virtual Appearances',
      '341 Creditors Meetings',
      'Confirmation Hearings',
      'Motion Dockets',
      'Non-Evidentiary Hearings',
      'Evidentiary Hearings',
    ],
  },
  {
    division: 'Ocala Division',
    district: 'Middle District of Florida',
    courthouse: 'U.S. Bankruptcy Court, Ocala Division',
    address: 'Ocala, FL',
    coverageTypes: [
      'Virtual Appearances',
      '341 Creditors Meetings',
      'Confirmation Hearings',
      'Motion Dockets',
      'Non-Evidentiary Hearings',
      'Evidentiary Hearings',
    ],
  },
  {
    division: 'Tampa Division',
    district: 'Middle District of Florida',
    courthouse: 'U.S. Bankruptcy Court, Tampa Division',
    address: 'Tampa, FL',
    coverageTypes: [
      'Virtual Appearances',
      '341 Creditors Meetings',
      'Confirmation Hearings',
      'Motion Dockets',
      'Non-Evidentiary Hearings',
      'Evidentiary Hearings',
    ],
  },
];

export const LEGAL_DISCLAIMER_TEXT = {
  title: "Firm Policies, Terms & Legal Disclaimers",
  ruleNotice: "The Florida Bar Mandatory Advertisement & Public Notice (Rule 4-7)",
  summary: "The hiring of a lawyer is an important decision that should not be based solely upon advertisements. Before you decide, ask us to send you free written information about our qualifications and experience.",
  sections: [
    {
      heading: "1. Firm Purpose & Coverage Scope Policy",
      body: "The Law Office of Isabel E. Freeman, P.A. operates as a dedicated bankruptcy coverage practice providing independent appearance counsel exclusively to licensed primary attorneys and law firms representing debtors or creditors. The firm does not solicit or accept direct debtor representation or legal retainers from the general public through this website."
    },
    {
      heading: "2. No Attorney-Client Relationship Created by Website Use",
      body: "Visiting this website, sending an email inquiry, or calling does not create an attorney-client relationship between you and The Law Office of Isabel E. Freeman, P.A. An appearance engagement is established solely upon explicit confirmation, satisfaction of conflict checks, and receipt of required docket materials."
    },
    {
      heading: "3. Conflict of Interest Check & Clearance Policy",
      body: "Prior to undertaking any coverage appearance (whether for 341 meetings of creditors, plan confirmation hearings, or contested motions), a conflict check is performed against the debtor, co-debtor, petitioning creditors, and opposing counsel of record."
    },
    {
      heading: "4. Confidentiality & Electronic Transmission Privacy Notice",
      body: "All docket instructions, debtor intake notes, and trustee communications provided by hiring counsel are treated with strict professional confidentiality in accordance with Florida Bar professional conduct rules and federal standards. Electronic transmissions are handled securely."
    },
    {
      heading: "5. Billing, Invoicing & Post-Hearing Reporting Policy",
      body: "Coverage services are provided at agreed flat rates (or as agreed for evidentiary matters). Detailed hearing notes are transmitted to hiring counsel promptly on the same day. Invoices are delivered electronically for prompt payment by the hiring firm."
    },
    {
      heading: "6. Florida Bar & Federal Court Jurisdiction Notice",
      body: "Attorney Isabel E. Freeman is an active member in good standing of The Florida Bar (admitted 1988), admitted to practice before the United States District Court and Bankruptcy Court for the Middle District of Florida."
    }
  ]
};
