import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import type { DemandLetterData } from '@/types';
import { formatKSh, formatDateKE, totalDepositFromForm } from './utils';
import {
  LETTER_HEADING,
  STATUTORY_BASIS,
  SMALL_CLAIMS_WARNING,
  EVIDENCE_CLAUSE,
  WEAR_AND_TEAR_CLAUSE,
  LEGAL_DISCLAIMER,
} from '@/data/legalTemplates';

const styles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 45,
    fontSize: 10,
    fontFamily: 'Helvetica',
    lineHeight: 1.45,
    color: '#1a1a1a',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  addressBlock: {
    maxWidth: 220,
  },
  recipientBlock: {
    marginBottom: 16,
    maxWidth: 280,
  },
  bold: {
    fontFamily: 'Helvetica-Bold',
  },
  title: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    textAlign: 'center',
    marginVertical: 12,
    textDecoration: 'underline',
    lineHeight: 1.3,
  },
  paragraph: {
    marginBottom: 10,
    textAlign: 'justify',
  },
  table: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 2,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#e5e7eb',
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  tableHeader: {
    backgroundColor: '#f3f4f6',
    fontFamily: 'Helvetica-Bold',
  },
  tableCol1: {
    flex: 2,
  },
  tableCol2: {
    flex: 1,
    textAlign: 'right',
  },
  totalRow: {
    backgroundColor: '#fafafa',
    fontFamily: 'Helvetica-Bold',
  },
  signatureSection: {
    marginTop: 25,
  },
  disclaimer: {
    marginTop: 25,
    paddingTop: 8,
    borderTopWidth: 1,
    borderColor: '#e5e7eb',
    fontSize: 8,
    color: '#6b7280',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export const DemandLetterPDFDocument = ({ data }: { data: DemandLetterData }) => {
  const totalDeposit = totalDepositFromForm(data.depositBreakdown);
  const deductions = data.claimedDeductionsKSh || 0;
  const netDue = Math.max(0, totalDeposit - deductions);

  return (
    <Document title={`Demand_Notice_${data.tenantFullName.replace(/\s+/g, '_')}`}>
      <Page size='A4' style={styles.page}>
        {/* Top meta */}
        <View style={styles.headerRow}>
          <View style={styles.addressBlock}>
            <Text style={styles.bold}>{data.tenantFullName}</Text>
            <Text>{data.tenantPhoneOrEmail}</Text>
            <Text>Former Tenant: {data.premisesAddress}</Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text>Date: {formatDateKE(data.letterDate)}</Text>
          </View>
        </View>

        {/* Recipient */}
        <View style={styles.recipientBlock}>
          <Text style={styles.bold}>TO:</Text>
          <Text style={styles.bold}>{data.landlordOrAgencyName}</Text>
          <Text>{data.landlordAddress}</Text>
          <Text>Re: Tenancy at {data.premisesAddress}</Text>
        </View>

        {/* Title */}
        <Text style={styles.title}>{LETTER_HEADING}</Text>

        <Text style={styles.paragraph}>Dear Sir/Madam,</Text>

        <Text style={styles.paragraph}>
          I write in formal reference to the residential tenancy of the above-referenced premises occupied by myself from{' '}
          <Text style={styles.bold}>{formatDateKE(data.moveInDate)}</Text> until lawful handover of vacant possession on{' '}
          <Text style={styles.bold}>{formatDateKE(data.moveOutDate)}</Text>, following written notice delivered on{' '}
          <Text style={styles.bold}>{formatDateKE(data.noticeDateServed)}</Text>.
        </Text>

        <Text style={styles.paragraph}>{STATUTORY_BASIS}</Text>

        {/* Financial Reconciliation Table */}
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={styles.tableCol1}>Deposit Category / Line Item</Text>
            <Text style={styles.tableCol2}>Amount Paid</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCol1}>Security / Rent Deposit</Text>
            <Text style={styles.tableCol2}>{formatKSh(data.depositBreakdown.rentDepositKSh)}</Text>
          </View>
          {data.depositBreakdown.waterDepositKSh > 0 && (
            <View style={styles.tableRow}>
              <Text style={styles.tableCol1}>Water Connection Deposit</Text>
              <Text style={styles.tableCol2}>{formatKSh(data.depositBreakdown.waterDepositKSh)}</Text>
            </View>
          )}
          {data.depositBreakdown.electricityDepositKSh > 0 && (
            <View style={styles.tableRow}>
              <Text style={styles.tableCol1}>Electricity / Sub-Meter Deposit</Text>
              <Text style={styles.tableCol2}>{formatKSh(data.depositBreakdown.electricityDepositKSh)}</Text>
            </View>
          )}
          {data.depositBreakdown.otherDepositKSh > 0 && (
            <View style={styles.tableRow}>
              <Text style={styles.tableCol1}>{data.depositBreakdown.otherDepositLabel || 'Other Deposit'}</Text>
              <Text style={styles.tableCol2}>{formatKSh(data.depositBreakdown.otherDepositKSh)}</Text>
            </View>
          )}
          <View style={[styles.tableRow, styles.totalRow]}>
            <Text style={styles.tableCol1}>Total Deposits Paid</Text>
            <Text style={styles.tableCol2}>{formatKSh(totalDeposit)}</Text>
          </View>
          {deductions > 0 && (
            <View style={styles.tableRow}>
              <Text style={styles.tableCol1}>Contested Deductions</Text>
              <Text style={styles.tableCol2}>- {formatKSh(deductions)}</Text>
            </View>
          )}
          <View style={[styles.tableRow, styles.totalRow]}>
            <Text style={styles.tableCol1}>Net Refund Demanded</Text>
            <Text style={[styles.tableCol2, styles.bold]}>{formatKSh(netDue)}</Text>
          </View>
        </View>

        {data.disputedReason ? (
          <Text style={styles.paragraph}>
            <Text style={styles.bold}>Rebuttal of Contested Deductions: </Text>
            {data.disputedReason}
          </Text>
        ) : null}

        <Text style={styles.paragraph}>{WEAR_AND_TEAR_CLAUSE}</Text>

        <Text style={styles.paragraph}>{EVIDENCE_CLAUSE}</Text>

        <Text style={styles.paragraph}>{SMALL_CLAIMS_WARNING}</Text>

        {/* Signature */}
        <View style={styles.signatureSection}>
          <Text>Yours faithfully,</Text>
          <View style={{ height: 25 }} />
          <Text style={styles.bold}>{data.tenantFullName}</Text>
          <Text>{data.tenantPhoneOrEmail}</Text>
        </View>

        <Text style={styles.disclaimer}>{LEGAL_DISCLAIMER}</Text>
      </Page>
    </Document>
  );
};
