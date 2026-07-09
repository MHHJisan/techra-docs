import {
  Home,
  Scale,
  Landmark,
  Building2,
  GraduationCap,
  Briefcase,
  LucideIcon,
} from "lucide-react";

import type { TemplateKey } from "../templates/registry";

import { translations } from "../i18n/translations";

type SidebarTranslationKey = keyof typeof translations.en.sidebar;

interface SidebarChild {
  id: string;
  title: SidebarTranslationKey;
  template: TemplateKey;
}

interface SidebarCategory {
  id: string;
  title: SidebarTranslationKey;
  icon: LucideIcon;
  children: SidebarChild[];
}

export const SIDEBAR_CATEGORIES: SidebarCategory[] = [
  {
    id: "rental",
    title: "rental",
    icon: Home,

    children: [
      {
        id: "house-rental-agreement",
        title: "houseOrFlatRentalAgreement",
        template: "houseOrFlatRentalAgreement",
      },

      {
        id: "office-rental-agreement",
        title: "officeRentalAgreement",
        template: "officeRentalAgreement",
      },
      {
        id: "shop-rental-agreement",
        title: "shopRentalAgreement",
        template: "shopRentalAgreement",
      },
      {
        id: "garage-rental-agreement",
        title: "garageRentalAgreement",
        template: "garageRentalAgreement",
      },
    ],
  },

  {
    id: "legal",
    title: "legal",
    icon: Scale,

    children: [
      { id: "affidavit", title: "affidavit", template: "affidavit" },
      {
        id: "power-of-attorney",
        title: "powerOfAttorney",
        template: "powerOfAttorney",
      },
      { id: "agreement", title: "agreement", template: "agreement" },
      { id: "declaration", title: "declaration", template: "declaration" },
      { id: "legal-notice", title: "legalNotice", template: "legalNotice" },
      { id: "stamp-paper", title: "stampPaper", template: "stampPaper" },
    ],
  },

  {
    id: "land",
    title: "land",
    icon: Landmark,

    children: [
      { id: "sale-deed", title: "saleDeed", template: "saleDeed" },
      { id: "purchase-deed", title: "purchaseDeed", template: "purchaseDeed" },
      { id: "mutation", title: "mutation", template: "mutation" },
      {
        id: "land-registration",
        title: "landRegistration",
        template: "landRegistration",
      },
      { id: "khatiyan", title: "khatiyan", template: "khatiyan" },
      { id: "porcha", title: "porcha", template: "porcha" },
    ],
  },

  {
    id: "government",
    title: "government",
    icon: Building2,

    children: [
      { id: "application", title: "application", template: "application" },
      { id: "nid-forms", title: "nidForms", template: "nidForms" },
      { id: "passport", title: "passport", template: "passport" },
      {
        id: "birth-certificate",
        title: "birthCertificate",
        template: "birthCertificate",
      },
      { id: "trade-license", title: "tradeLicense", template: "tradeLicense" },
    ],
  },

  {
    id: "education",
    title: "education",
    icon: GraduationCap,

    children: [
      {
        id: "admission-form",
        title: "admissionForm",
        template: "admissionForm",
      },
      {
        id: "leave-application",
        title: "leaveApplication",
        template: "leaveApplication",
      },
      {
        id: "recommendation-letter",
        title: "recommendationLetter",
        template: "recommendationLetter",
      },
      {
        id: "transcript-request",
        title: "transcriptRequest",
        template: "transcriptRequest",
      },
      { id: "certificate", title: "certificate", template: "certificate" },
    ],
  },

  {
    id: "employment",
    title: "employment",
    icon: Briefcase,

    children: [
      { id: "cv", title: "cv", template: "cv" },
      { id: "resume", title: "resume", template: "resume" },
      {
        id: "appointment-letter",
        title: "appointmentLetter",
        template: "appointmentLetter",
      },
      { id: "offer-letter", title: "offerLetter", template: "offerLetter" },
      {
        id: "experience-certificate",
        title: "experienceCertificate",
        template: "experienceCertificate",
      },
      {
        id: "resignation-letter",
        title: "resignationLetter",
        template: "resignationLetter",
      },
    ],
  },
];
