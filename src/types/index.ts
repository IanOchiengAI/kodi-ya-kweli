export type RentBand = {
  min: number; // KSh per month
  max: number;
};

export type UnitTypes = {
  bedsitter?: RentBand;
  oneBR?: RentBand;
  twoBR?: RentBand;
  threeBR?: RentBand;
};

export type UtilityProfile = {
  kplcRetailRateKSh: number;       // Regulated KPLC tariff (KSh/kWh) — typically 24–32
  landlordResaleRateKSh: number;   // What submetered landlords actually charge (KSh/kWh)
  waterRationingDaysPerWeek: number; // NCWSC scheduled rationing days
  boreholeWater: boolean;           // Does the estate rely primarily on borehole?
  serviceChargeRange: RentBand;     // KSh/month mandatory service charge
};

export type DepositProfile = {
  monthsRentRequired: number;      // Standard upfront rent deposit (months)
  waterDepositKSh: RentBand;
  electricityDepositKSh: RentBand;
  keyDepositKSh: number;
};

export type CommuteProfile = {
  matatuToCBD_peak: RentBand;     // KSh one-way, peak hours
  matatuToCBD_offpeak: RentBand;
  brtOrRailAvailable: boolean;
};

export type Estate = {
  slug: string;
  name: string;                    // Display name
  zone: 'central-west' | 'central' | 'north' | 'north-west' | 'south-west' | 'north-east' | 'south' | 'east' | 'south-east';
  tier: 'budget' | 'mid-range' | 'upper-mid' | 'premium';
  tagline: string;                 // One-line editorial description for cards
  profileSummary: string;          // 2–3 sentence editorial summary for estate page hero
  askingRent: UnitTypes;
  transactedRent: UnitTypes;
  utilities: UtilityProfile;
  deposit: DepositProfile;
  commute: CommuteProfile;
  groundRealityNote: string;       // Key negotiation insight from field research
  updatedAt: string;               // ISO date string, e.g. '2026-09'
};

// ---- Toolkit types ----

export type DemandLetterData = {
  tenantFullName: string;
  tenantPhoneOrEmail: string;
  landlordOrAgencyName: string;
  landlordAddress: string;
  premisesAddress: string;         // e.g. 'Unit 4B, ABC Apartments, Roysambu'
  moveInDate: string;              // ISO date
  moveOutDate: string;             // ISO date
  noticeDateServed: string;        // ISO date
  depositBreakdown: {
    rentDepositKSh: number;
    waterDepositKSh: number;
    electricityDepositKSh: number;
    otherDepositKSh: number;
    otherDepositLabel: string;
  };
  claimedDeductionsKSh: number;    // What landlord claims to deduct
  disputedReason: string;          // Tenant's basis for dispute
  letterDate: string;              // ISO date — date letter is drafted
};

export type ConditionRating = 'good' | 'fair' | 'poor' | 'not-applicable';

export type InspectionItem = {
  id: string;
  room: 'living-room' | 'bedroom-1' | 'bedroom-2' | 'bedroom-3' | 'kitchen' | 'bathroom' | 'exterior' | 'general';
  itemLabel: string;               // e.g. 'Walls — paint & plaster condition'
  standardDescription: string;    // What 'good' looks like, to anchor objective comparison
  moveInCondition: ConditionRating;
  moveOutCondition: ConditionRating;
  moveInNotes: string;
  moveOutNotes: string;
};
