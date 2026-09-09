import { z } from 'zod';

export const RentBandSchema = z
  .object({
    min: z.number().positive(),
    max: z.number().positive(),
  })
  .refine((b) => b.max >= b.min, { message: 'max must be >= min' });

export const DemandLetterSchema = z.object({
  tenantFullName: z.string().min(2, 'Enter your full name'),
  tenantPhoneOrEmail: z.string().min(5, 'Enter a phone number or email'),
  landlordOrAgencyName: z.string().min(2, 'Enter landlord or agency name'),
  landlordAddress: z.string().min(5, 'Enter landlord address or P.O. Box'),
  premisesAddress: z.string().min(5, 'Enter full premises address'),
  moveInDate: z.string().min(1, 'Select move-in date'),
  moveOutDate: z.string().min(1, 'Select move-out date'),
  noticeDateServed: z.string().min(1, 'Select notice date'),
  depositBreakdown: z.object({
    rentDepositKSh: z.number().min(0),
    waterDepositKSh: z.number().min(0),
    electricityDepositKSh: z.number().min(0),
    otherDepositKSh: z.number().min(0),
    otherDepositLabel: z.string(),
  }),
  claimedDeductionsKSh: z.number().min(0),
  disputedReason: z.string().min(10, 'Briefly describe why the deductions are unjustified'),
  letterDate: z.string().min(1, 'Select letter date'),
});

export type DemandLetterFormData = z.infer<typeof DemandLetterSchema>;
