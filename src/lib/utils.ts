/**
 * Format a number as Kenyan Shillings, e.g. 45000 -> 'KSh 45,000'
 */
export function formatKSh(amount: number): string {
  return `KSh ${amount.toLocaleString('en-KE')}`;
}

/**
 * Format a rent band as a range string, e.g. 'KSh 45,000 – KSh 58,000'
 */
export function formatBand(band?: { min: number; max: number }): string {
  if (!band) return 'N/A';
  return `${formatKSh(band.min)} – ${formatKSh(band.max)}`;
}

/**
 * Calculate the asking-to-transacted discount percentage
 * Returns e.g. 15 for 15%
 */
export function discountPercent(asking?: { min: number; max: number }, transacted?: { min: number; max: number }): number {
  if (!asking || !transacted) return 0;
  const askingMid = (asking.min + asking.max) / 2;
  const transactedMid = (transacted.min + transacted.max) / 2;
  return Math.round(((askingMid - transactedMid) / askingMid) * 100);
}

/**
 * Calculate total deposit move-in cost
 */
export function totalDepositKSh(
  monthlyRent: number,
  monthsRequired: number,
  waterMin: number,
  electricityMin: number,
  keyDeposit: number
): number {
  return monthlyRent * monthsRequired + waterMin + electricityMin + keyDeposit;
}

/**
 * Calculate Total Cost of Tenancy per month
 */
export function calcTCT(params: {
  baseRent: number;
  serviceCharge: number;
  monthlyKwh: number;
  landlordRateKSh: number;
  kplcRateKSh: number;
  monthlyWaterMarkupKSh: number;
  matatuFareOneway: number;
  workdaysPerMonth: number;
}): number {
  const tokenMarkup = Math.max(0, params.monthlyKwh * (params.landlordRateKSh - params.kplcRateKSh));
  const commuteCost = params.matatuFareOneway * 2 * params.workdaysPerMonth;
  return (
    params.baseRent +
    params.serviceCharge +
    tokenMarkup +
    params.monthlyWaterMarkupKSh +
    commuteCost
  );
}

/**
 * Convert estate name to URL slug
 */
export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/**
 * Format ISO date string to Kenyan readable format, e.g. '2026-09-09' -> '9 September 2026'
 */
export function formatDateKE(isoDate: string): string {
  if (!isoDate) return '';
  const parsed = new Date(isoDate);
  if (isNaN(parsed.getTime())) return isoDate;
  return parsed.toLocaleDateString('en-KE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/**
 * Calculate the total deposit amount from the demand letter form data
 */
export function totalDepositFromForm(breakdown: {
  rentDepositKSh: number;
  waterDepositKSh: number;
  electricityDepositKSh: number;
  otherDepositKSh: number;
}): number {
  return (
    (breakdown.rentDepositKSh || 0) +
    (breakdown.waterDepositKSh || 0) +
    (breakdown.electricityDepositKSh || 0) +
    (breakdown.otherDepositKSh || 0)
  );
}
