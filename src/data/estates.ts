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
      'Offering to pay via direct bank standing order signals a reliable tenant and dramatically improves your negotiating position. Always ask: "Is this the best price for a direct monthly bank transfer?" Expatriate corporate demand has softened since 2024.',
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
  {
    slug: 'juja',
    name: 'Juja / Kenyatta Road / JKUAT',
    zone: 'north-east',
    tier: 'budget',
    tagline: 'University town with a split market — students pay 40% more than savvy long-term tenants.',
    profileSummary:
      'Juja straddles two very different rental markets: a dense student cluster around JKUAT and Juja town centre with bedsitters at KSh 3,000–10,000, and a growing middle-income corridor along Kenyatta Road with gated 1BR–2BR apartments targeting Nairobi commuters. The 30 km Thika Superhighway journey is fast off-peak but brutal during morning rush. New constructions with borehole backup are rising fast along Juja Farm Road and Sukari Estate.',
    askingRent: {
      bedsitter: { min: 8000, max: 14000 },
      oneBR: { min: 16000, max: 28000 },
      twoBR: { min: 28000, max: 45000 },
    },
    transactedRent: {
      bedsitter: { min: 6500, max: 11000 },
      oneBR: { min: 13000, max: 22000 },
      twoBR: { min: 23000, max: 36000 },
    },
    utilities: {
      kplcRetailRateKSh: 28,
      landlordResaleRateKSh: 35,
      waterRationingDaysPerWeek: 3,
      boreholeWater: true,
      serviceChargeRange: { min: 800, max: 2500 },
    },
    deposit: {
      monthsRentRequired: 1,
      waterDepositKSh: { min: 1500, max: 3000 },
      electricityDepositKSh: { min: 1500, max: 3000 },
      keyDepositKSh: 500,
    },
    commute: {
      matatuToCBD_peak: { min: 80, max: 150 },
      matatuToCBD_offpeak: { min: 50, max: 90 },
      brtOrRailAvailable: false,
    },
    groundRealityNote:
      'Avoid letting landlords quote you "student rate" prices — if you are a working professional, present as a long-term tenant and negotiate 15–20% below asking. Always factor in KSh 8,000–15,000/month in Thika Road matatu fare before deciding on Juja vs a slightly pricier Kasarani or Roysambu unit. Morning rush Juja–CBD can exceed 2.5 hours.',
    updatedAt: '2026-09',
  },
  {
    slug: 'waiyaki-way',
    name: 'Waiyaki Way / Westlands Corridor',
    zone: 'central-west',
    tier: 'mid-range',
    tagline: 'Westlands adjacent pricing at a 15% discount — watch the service charge small print.',
    profileSummary:
      'The Waiyaki Way corridor from Westlands through Mountain View, Kangemi, and towards Kikuyu has emerged as a significant mid-range rental zone. It offers proximity to the Westlands business hub and GTC at 10–20% lower rents than prime Westlands, attracting young professionals priced out of Kilimani. Many complexes here have modern amenities but bury significant costs in service charges (KSh 5,000–12,000/month) that are not disclosed upfront.',
    askingRent: {
      oneBR: { min: 45000, max: 75000 },
      twoBR: { min: 75000, max: 120000 },
    },
    transactedRent: {
      oneBR: { min: 38000, max: 62000 },
      twoBR: { min: 62000, max: 100000 },
    },
    utilities: {
      kplcRetailRateKSh: 28,
      landlordResaleRateKSh: 33,
      waterRationingDaysPerWeek: 2,
      boreholeWater: false,
      serviceChargeRange: { min: 5000, max: 12000 },
    },
    deposit: {
      monthsRentRequired: 2,
      waterDepositKSh: { min: 3000, max: 5000 },
      electricityDepositKSh: { min: 3000, max: 5000 },
      keyDepositKSh: 1000,
    },
    commute: {
      matatuToCBD_peak: { min: 50, max: 90 },
      matatuToCBD_offpeak: { min: 30, max: 55 },
      brtOrRailAvailable: false,
    },
    groundRealityNote:
      'Always ask for the total monthly cost inclusive of service charge — many landlords quote rent exclusive of a KSh 8,000–12,000 service charge, making actual out-of-pocket costs equivalent to mid-Westlands. Negotiate the rent itself down 12% from asking, and push to cap the service charge in writing. Waiyaki Way traffic is severe westbound during evening rush — test your commute direction before signing.',
    updatedAt: '2026-09',
  },
  {
    slug: 'fedha-tassia',
    name: 'Fedha / Tassia / Embakasi',
    zone: 'east',
    tier: 'mid-range',
    tagline: 'JKIA-adjacent value corridor — reliable matatu links but factor in 3-day water rationing.',
    profileSummary:
      "Fedha Estate and Tassia in Embakasi form one of Nairobi's most consistent mid-range rental belts, located 12–14 km from the CBD. They attract airport staff, EPZ workers, and civil servants. The original Fedha Phase 1 and Phase 2 gated blocks offer quieter environments, while newer mid-rises (Fedha Park, 90 Degrees, Iman Heights) include elevators and backup generators. Matatu routes 33 and 34 provide reliable CBD connectivity.",
    askingRent: {
      bedsitter: { min: 9000, max: 16000 },
      oneBR: { min: 16000, max: 28000 },
      twoBR: { min: 30000, max: 55000 },
    },
    transactedRent: {
      bedsitter: { min: 7500, max: 13000 },
      oneBR: { min: 13000, max: 23000 },
      twoBR: { min: 25000, max: 45000 },
    },
    utilities: {
      kplcRetailRateKSh: 28,
      landlordResaleRateKSh: 35,
      waterRationingDaysPerWeek: 3,
      boreholeWater: true,
      serviceChargeRange: { min: 1500, max: 5000 },
    },
    deposit: {
      monthsRentRequired: 1,
      waterDepositKSh: { min: 2000, max: 4000 },
      electricityDepositKSh: { min: 2000, max: 4000 },
      keyDepositKSh: 500,
    },
    commute: {
      matatuToCBD_peak: { min: 50, max: 90 },
      matatuToCBD_offpeak: { min: 30, max: 55 },
      brtOrRailAvailable: false,
    },
    groundRealityNote:
      'Fedha has two distinct submarkets: the quieter gated Phases 1 and 2, and the busier Church Road / Tassia strip. For the gated phases, deal directly with the management company — brokers add KSh 2,000–4,000. For newer mid-rises, compare total monthly cost (rent + service charge + token rates) across buildings before signing.',
    updatedAt: '2026-09',
  },
  {
    slug: 'lower-kabete',
    name: 'Lower Kabete / Loresho',
    zone: 'north-west',
    tier: 'mid-range',
    tagline: 'Quiet professional enclave — limited public transit is the hidden cost to budget for.',
    profileSummary:
      "Lower Kabete Road and the adjacent Loresho ridge offer a rare combination of serenity, security, and proximity to Westlands — popular with NGO workers, university lecturers, and small families. Supply is tighter than most Nairobi corridors because older houses are not being demolished for high-density development at the same pace as Kilimani or Ruaka. Fewer available units means landlord bargaining power is stronger here than the wider market average.",
    askingRent: {
      oneBR: { min: 22000, max: 38000 },
      twoBR: { min: 40000, max: 70000 },
      threeBR: { min: 65000, max: 110000 },
    },
    transactedRent: {
      oneBR: { min: 18000, max: 32000 },
      twoBR: { min: 33000, max: 58000 },
      threeBR: { min: 55000, max: 90000 },
    },
    utilities: {
      kplcRetailRateKSh: 28,
      landlordResaleRateKSh: 32,
      waterRationingDaysPerWeek: 2,
      boreholeWater: false,
      serviceChargeRange: { min: 3000, max: 8000 },
    },
    deposit: {
      monthsRentRequired: 2,
      waterDepositKSh: { min: 2500, max: 5000 },
      electricityDepositKSh: { min: 2500, max: 5000 },
      keyDepositKSh: 1000,
    },
    commute: {
      matatuToCBD_peak: { min: 60, max: 100 },
      matatuToCBD_offpeak: { min: 35, max: 60 },
      brtOrRailAvailable: false,
    },
    groundRealityNote:
      "Lower Kabete's matatu network is sparse — routes 23 and 48 pass but frequency drops sharply past 9 PM. If you depend on public transport, factor in the inconvenience before signing. For those with private vehicles or remote-work flexibility, it offers better value-per-square-metre than comparable Kilimani units at 20–30% lower price. Negotiate a 2-year lease in exchange for a 10% discount — landlords here value long-term, quiet tenants.",
    updatedAt: '2026-09',
  },
];

export function getEstateBySlug(slug: string): Estate | undefined {
  return ESTATES.find((e) => e.slug === slug);
}

export function getAllEstateSlugs(): string[] {
  return ESTATES.map((e) => e.slug);
}
