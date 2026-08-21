export interface RateItem {
  id: string;
  title: string;
  rate: string;
  rateSubtext?: string;
  description: string;
  includes: string[];
  category: string;
}

export interface CourtDivisionInfo {
  division: string;
  district: string;
  courthouse: string;
  address: string;
  coverageTypes: string[];
}
