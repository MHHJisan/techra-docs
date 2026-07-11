import {
  houseOrFlatRentalAgreementTemplate,
  affidavitTemplate,
  moneyReceiptTemplate,
  powerOfAttorneyTemplate,
  comingSoonTemplate,
  comingSoon_shopRentalAgreementTemplate,
} from ".";
import { comingSoon_garageRentalAgreementTemplate } from "./coming-soon_garage_rental_agreement";
import { comingSoonTemplate_BuyerAgreement } from "./land/coming-soon_buyerAgreement";
import { comingSoonTemplate_Mutation } from "./land/coming-soon_mutation";
import { comingSoonTemplate_SellerAgreement } from "./land/coming-soon_sellerAgreement";

export const TEMPLATE_REGISTRY = {
  // ==========================
  // Rental
  // ==========================

  houseOrFlatRentalAgreement: houseOrFlatRentalAgreementTemplate,

  //   officeRentalAgreement: rentalAgreementTemplate,

  shopRentalAgreement: comingSoon_shopRentalAgreementTemplate,

  garageRentalAgreement: comingSoon_garageRentalAgreementTemplate,

  // ==========================
  // Legal
  // ==========================

  affidavit: affidavitTemplate,

  powerOfAttorney: powerOfAttorneyTemplate,

  agreement: comingSoonTemplate,

  declaration: comingSoonTemplate,

  legalNotice: comingSoonTemplate,

  stampPaper: comingSoonTemplate,

  // ==========================
  // Land
  // ==========================

  saleDeed: comingSoonTemplate_SellerAgreement,

  purchaseDeed: comingSoonTemplate_BuyerAgreement,

  mutation: comingSoonTemplate_Mutation,

  landRegistration: comingSoonTemplate,

  khatiyan: comingSoonTemplate,

  porcha: comingSoonTemplate,

  // ==========================
  // Government
  // ==========================

  application: comingSoonTemplate,

  nidForms: comingSoonTemplate,

  passport: comingSoonTemplate,

  birthCertificate: comingSoonTemplate,

  tradeLicense: comingSoonTemplate,

  // ==========================
  // Education
  // ==========================

  admissionForm: comingSoonTemplate,

  leaveApplication: comingSoonTemplate,

  recommendationLetter: comingSoonTemplate,

  transcriptRequest: comingSoonTemplate,

  certificate: comingSoonTemplate,

  // ==========================
  // Employment
  // ==========================

  cv: comingSoonTemplate,

  resume: comingSoonTemplate,

  appointmentLetter: comingSoonTemplate,

  offerLetter: comingSoonTemplate,

  experienceCertificate: comingSoonTemplate,

  resignationLetter: comingSoonTemplate,

  // ==========================
  // Banking
  // ==========================

  moneyReceipt: moneyReceiptTemplate,
} as const;

export type TemplateKey = keyof typeof TEMPLATE_REGISTRY;
