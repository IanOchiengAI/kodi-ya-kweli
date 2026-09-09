import type { Estate } from '@/types';

export const ESTATES: Estate[] = [
  {
    slug: 'kilimani',
    name: 'Kilimani',
    zone: 'central-west',
    tier: 'upper-mid',
    tagline: 'High-rise supply glut — negotiate hard or walk away.',
    profileSummary:
      'Kilimani has been flooded with high-density apartment blocks along Kindaruma, Chania, and Wood Avenue. Vacancy rates are high, and many landlords quietly offer 1 month rent-free on 12-month leases. The advertised prices on Property24 and BuyRentKenya are anchoring figures — real move-in prices are 10–18% lower.',
    askingRent: {
      oneBR: { min: 55000, max: 75000 },
      twoBR: { min: 80000, max: 120000 },
    },
    transactedRent: {
      oneBR: { min: 45000, max: 58000 },
      twoBR: { min: 65000, max: 95000 },
    },
    utilities: {
      kplcRetailRateKSh: 28,
      landlordResaleRateKSh: 35,
      waterRationingDaysPerWeek: 2,
      boreholeWater: false,
      serviceChargeRange: { min: 5000, max: 10000 },
    },
    deposit: {
      monthsRentRequired: 2,
      waterDepositKSh: { min: 2500, max: 5000 },
      electricityDepositKSh: { min: 2500, max: 5000 },
      keyDepositKSh: 1000,
    },
    commute: {
      matatuToCBD_peak: { min: 50, max: 80 },
      matatuToCBD_offpeak: { min: 30, max: 50 },
      brtOrRailAvailable: false,
    },
    groundRealityNote:
      'Always counter-offer by at least 12%. Mention that you have viewed 3 other units this week — high vacancy means landlords fear extended empty-unit losses. Ask specifically for 1 month rent-free on a 12-month lease. Airbnb operator turnover is creating a wave of units coming back to long-term leasing.',
    updatedAt: '2026-09',
  },
  {
    slug: 'westlands',
    name: 'Westlands',
    zone: 'central',
    tier: 'upper-mid',
    tagline: 'Corporate anchor rents — negotiate with a bank standing order.',
    profileSummary:
      'Westlands serves Nairobi expatriate and young professional market. Estate agents deliberately anchor asking prices to corporate housing allowances. Individual tenants who offer a direct bank standing order signal creditworthiness and typically secure 12–15% below asking price.',
    askingRent: {
      oneBR: { min: 65000, max: 90000 },
      twoBR: { min: 95000, max: 150000 },
    },
    transactedRent: {
      oneBR: { min: 52000, max: 75000 },
      twoBR: { min: 80000, max: 120000 },
    },
    utilities: {
      kplcRetailRateKSh: 28,
      landlordResaleRateKSh: 33,
      waterRationingDaysPerWeek: 1,
      boreholeWater: false,
      serviceChargeRange: { min: 6000, max: 12000 },
    },
    deposit: {
      monthsRentRequired: 2,
      waterDepositKSh: { min: 3000, max: 5000 },
      electricityDepositKSh: { min: 3000, max: 5000 },
      keyDepositKSh: 1000,
    },
    commute: {
      matatuToCBD_peak: { min: 50, max: 70 },
      matatuToCBD_offpeak: { min: 30, max: 50 },
      brtOrRailAvailable: false,
    },
    groundRealityNote:
      'Offering to pay via direct bank standing order signals a reliable tenant and dramatically improves your negotiating position. Always ask: \"Is this the best price for a direct monthly bank transfer?\" Expatriate corporate demand has softened since 2024.',
    updatedAt: '2026-09',
  },
  {
    slug: 'roysambu',
    name: 'Roysambu / TRM Drive / Lumumba',
    zone: 'north',
    tier: 'budget',
    tagline: 'Student hub with aggressive broker street markups — go to the caretaker directly.',
    profileSummary:
      'Roysambu is the primary student and entry-level tech worker rental market, serving USIU, KCA University, and corporate call-centre staff. Street brokers operate aggressively around TRM and Lumumba Drive, adding KSh 2,000–3,000 to every listing. Electricity token resale here is the highest markup in Nairobi — KSh 40/kWh vs. the KPLC regulated rate of KSh 25–30.',
    askingRent: {
      bedsitter: { min: 11000, max: 15000 },
      oneBR: { min: 18000, max: 26000 },
    },
    transactedRent: {
      bedsitter: { min: 9500, max: 12500 },
      oneBR: { min: 15000, max: 21000 },
    },
    utilities: {
      kplcRetailRateKSh: 28,
      landlordResaleRateKSh: 40,
      waterRationingDaysPerWeek: 3,
      boreholeWater: true,
      serviceChargeRange: { min: 1500, max: 3000 },
    },
    deposit: {
      monthsRentRequired: 1,
      waterDepositKSh: { min: 2500, max: 3500 },
      electricityDepositKSh: { min: 2500, max: 3500 },
      keyDepositKSh: 500,
    },
    commute: {
      matatuToCBD_peak: { min: 50, max: 80 },
      matatuToCBD_offpeak: { min: 30, max: 50 },
      brtOrRailAvailable: false,
    },
    groundRealityNote:
      'CRITICAL: Do not pay a broker viewing fee here. Walk into the building and ask for the caretaker directly. The KSh 2,000–3,000 broker markup disappears when you deal direct. Also ask for the KPLC meter number and verify sub-meter token rates before signing.',
    updatedAt: '2026-09',
  },
  {
    slug: 'ruaka',
    name: 'Ruaka / Joyland',
    zone: 'north-west',
    tier: 'mid-range',
    tagline: 'Overbuilt commuter hub — landlords secretly discount 15% while posting higher figures for SACCO loans.',
    profileSummary:
      'Ruaka has experienced heavy apartment construction across Joyland, Slaughterhouse Road, and Ruaka Town. Landlords publicly advertise higher prices to maintain high collateral values for SACCO and bank mortgage loans, but routinely sign leases at 15% below asking.',
    askingRent: {
      oneBR: { min: 22000, max: 30000 },
      twoBR: { min: 38000, max: 55000 },
    },
    transactedRent: {
      oneBR: { min: 18000, max: 25000 },
      twoBR: { min: 30000, max: 44000 },
    },
    utilities: {
      kplcRetailRateKSh: 28,
      landlordResaleRateKSh: 35,
      waterRationingDaysPerWeek: 2,
      boreholeWater: true,
      serviceChargeRange: { min: 2000, max: 4000 },
    },
    deposit: {
      monthsRentRequired: 1,
      waterDepositKSh: { min: 2500, max: 4000 },
      electricityDepositKSh: { min: 2500, max: 4000 },
      keyDepositKSh: 500,
    },
    commute: {
      matatuToCBD_peak: { min: 70, max: 120 },
      matatuToCBD_offpeak: { min: 50, max: 80 },
      brtOrRailAvailable: false,
    },
    groundRealityNote:
      'The listing price is often the loan-valuation price. When a landlord asks 22,000, offer 18,000 based on realistic tenancy data. Vacant units cost landlords more than a KSh 4,000 monthly discount. Verify borehole water quality as salinity varies.',
    updatedAt: '2026-09',
  },
  {
    slug: 'ongata-rongai',
    name: 'Ongata Rongai / Magadi Road',
    zone: 'south-west',
    tier: 'budget',
    tagline: 'Weakest landlord bargaining power in Nairobi — but factor in 2-hour peak commutes.',
    profileSummary:
      'Ongata Rongai is Nairobi most accessible residential corridor along Magadi Road. High tenant turnover gives tenants strong negotiating power. Landlords here regularly accept staggered deposit payments and below-asking leases.',
    askingRent: {
      bedsitter: { min: 6500, max: 9000 },
      oneBR: { min: 11000, max: 16000 },
      twoBR: { min: 18000, max: 28000 },
    },
    transactedRent: {
      bedsitter: { min: 5500, max: 7500 },
      oneBR: { min: 9000, max: 13500 },
      twoBR: { min: 15000, max: 22000 },
    },
    utilities: {
      kplcRetailRateKSh: 28,
      landlordResaleRateKSh: 32,
      waterRationingDaysPerWeek: 3,
      boreholeWater: true,
      serviceChargeRange: { min: 500, max: 2000 },
    },
    deposit: {
      monthsRentRequired: 1,
      waterDepositKSh: { min: 1500, max: 3000 },
      electricityDepositKSh: { min: 1500, max: 3000 },
      keyDepositKSh: 300,
    },
    commute: {
      matatuToCBD_peak: { min: 60, max: 120 },
      matatuToCBD_offpeak: { min: 40, max: 70 },
      brtOrRailAvailable: false,
    },
    groundRealityNote:
      'Ask for: 1-month deposit instead of 2, staggered deposit payment across 2–3 months, and negotiated rent. Factor in KSh 6,000–10,000/month in matatu fare before signing — transit costs can offset the rent savings.',
    updatedAt: '2026-09',
  },
  {
    slug: 'kasarani',
    name: 'Kasarani / Sunton / Hunters / Mwiki',
    zone: 'north-east',
    tier: 'budget',
    tagline: 'Mass-market hub — street posters have broker markups baked in.',
    profileSummary:
      'Kasarani is a vast mass-market residential zone along Thika Superhighway. Street brokers control flyers on walls and utility poles, adding KSh 1,000–2,000. Going directly to the building caretaker eliminates this cost.',
    askingRent: {
      bedsitter: { min: 7500, max: 11000 },
      oneBR: { min: 13000, max: 19000 },
      twoBR: { min: 20000, max: 28000 },
    },
    transactedRent: {
      bedsitter: { min: 6500, max: 9500 },
      oneBR: { min: 11000, max: 16500 },
      twoBR: { min: 17500, max: 24000 },
    },
    utilities: {
      kplcRetailRateKSh: 28,
      landlordResaleRateKSh: 36,
      waterRationingDaysPerWeek: 3,
      boreholeWater: true,
      serviceChargeRange: { min: 800, max: 2500 },
    },
    deposit: {
      monthsRentRequired: 1,
      waterDepositKSh: { min: 2000, max: 3500 },
      electricityDepositKSh: { min: 2000, max: 3500 },
      keyDepositKSh: 500,
    },
    commute: {
      matatuToCBD_peak: { min: 50, max: 80 },
      matatuToCBD_offpeak: { min: 30, max: 50 },
      brtOrRailAvailable: false,
    },
    groundRealityNote:
      'Thika Superhighway ensures good accessibility. Deal directly with building caretakers. Inspect the main KPLC meter vs your unit sub-meter; excessive markups above KSh 28/kWh inflate real living costs significantly.',
    updatedAt: '2026-09',
  },
  {
    slug: 'south-b-south-c',
    name: 'South B / South C',
    zone: 'south',
    tier: 'mid-range',
    tagline: 'Established residential estates — check water rationing variability block by block.',
    profileSummary:
      'South B and South C are established residential estates close to the CBD, popular with families and professionals. Water rationing is the primary variable — some courts have consistent supply while others rely on private water bowsers.',
    askingRent: {
      oneBR: { min: 25000, max: 38000 },
      twoBR: { min: 40000, max: 65000 },
      threeBR: { min: 60000, max: 90000 },
    },
    transactedRent: {
      oneBR: { min: 20000, max: 32000 },
      twoBR: { min: 33000, max: 55000 },
      threeBR: { min: 50000, max: 75000 },
    },
    utilities: {
      kplcRetailRateKSh: 28,
      landlordResaleRateKSh: 34,
      waterRationingDaysPerWeek: 4,
      boreholeWater: false,
      serviceChargeRange: { min: 3000, max: 7000 },
    },
    deposit: {
      monthsRentRequired: 2,
      waterDepositKSh: { min: 2500, max: 5000 },
      electricityDepositKSh: { min: 2500, max: 5000 },
      keyDepositKSh: 1000,
    },
    commute: {
      matatuToCBD_peak: { min: 40, max: 60 },
      matatuToCBD_offpeak: { min: 20, max: 40 },
      brtOrRailAvailable: false,
    },
    groundRealityNote:
      'Before signing, ask neighbours about weekly water availability and whether the building has adequate rooftop and ground storage tanks to buffer during rationing days.',
    updatedAt: '2026-09',
  },
];

export function getEstateBySlug(slug: string): Estate | undefined {
  return ESTATES.find((e) => e.slug === slug);
}

export function getAllEstateSlugs(): string[] {
  return ESTATES.map((e) => e.slug);
}
