import {
  rentalAgreementTemplate,
  affidavitTemplate,
  moneyReceiptTemplate,
  powerOfAttorneyTemplate,
  comingSoonTemplate,
} from ".";

export const TEMPLATE_REGISTRY = {
  // ==========================
  // Rental
  // ==========================

  rentalAgreement: rentalAgreementTemplate,

  houseRentalAgreement: rentalAgreementTemplate,

  flatRentalAgreement: comingSoonTemplate,

  officeRentalAgreement: rentalAgreementTemplate,

  shopRentalAgreement: comingSoonTemplate,

  garageRentalAgreement: comingSoonTemplate,

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

  saleDeed: comingSoonTemplate,

  purchaseDeed: comingSoonTemplate,

  mutation: comingSoonTemplate,

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
