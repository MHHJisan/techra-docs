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

interface SidebarChild {
  id: string;
  title: string;
  template: TemplateKey;
}

interface SidebarCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  children: SidebarChild[];
}

export const SIDEBAR_CATEGORIES: SidebarCategory[] = [
  {
    id: "rental",
    title: "Rental",
    icon: Home,

    children: [
      {
        id: "rental-agreement",
        title: "Rental Agreement",
        template: "rentalAgreement",
      },
      {
        id: "house-rental-agreement",
        title: "House Rental Agreement",
        template: "houseRentalAgreement",
      },
      {
        id: "flat-rental-agreement",
        title: "Flat Rental Agreement",
        template: "flatRentalAgreement",
      },
      {
        id: "office-rental-agreement",
        title: "Office Rental Agreement",
        template: "officeRentalAgreement",
      },
      {
        id: "shop-rental-agreement",
        title: "Shop Rental Agreement",
        template: "shopRentalAgreement",
      },
      {
        id: "garage-rental-agreement",
        title: "Garage Rental Agreement",
        template: "garageRentalAgreement",
      },
    ],
  },

  {
    id: "legal",
    title: "Legal",
    icon: Scale,

    children: [
      { id: "affidavit", title: "Affidavit", template: "affidavit" },
      {
        id: "power-of-attorney",
        title: "Power of Attorney",
        template: "powerOfAttorney",
      },
      { id: "agreement", title: "Agreement", template: "agreement" },
      { id: "declaration", title: "Declaration", template: "declaration" },
      { id: "legal-notice", title: "Legal Notice", template: "legalNotice" },
      { id: "stamp-paper", title: "Stamp Paper", template: "stampPaper" },
    ],
  },

  {
    id: "land",
    title: "Land",
    icon: Landmark,

    children: [
      { id: "sale-deed", title: "Sale Deed", template: "saleDeed" },
      { id: "purchase-deed", title: "Purchase Deed", template: "purchaseDeed" },
      { id: "mutation", title: "Mutation", template: "mutation" },
      {
        id: "land-registration",
        title: "Land Registration",
        template: "landRegistration",
      },
      { id: "khatiyan", title: "Khatiyan", template: "khatiyan" },
      { id: "porcha", title: "Porcha", template: "porcha" },
    ],
  },

  {
    id: "government",
    title: "Government",
    icon: Building2,

    children: [
      { id: "application", title: "Application", template: "application" },
      { id: "nid-forms", title: "NID Forms", template: "nidForms" },
      { id: "passport", title: "Passport", template: "passport" },
      {
        id: "birth-certificate",
        title: "Birth Certificate",
        template: "birthCertificate",
      },
      { id: "trade-license", title: "Trade License", template: "tradeLicense" },
    ],
  },

  {
    id: "education",
    title: "Education",
    icon: GraduationCap,

    children: [
      {
        id: "admission-form",
        title: "Admission Form",
        template: "admissionForm",
      },
      {
        id: "leave-application",
        title: "Leave Application",
        template: "leaveApplication",
      },
      {
        id: "recommendation-letter",
        title: "Recommendation Letter",
        template: "recommendationLetter",
      },
      {
        id: "transcript-request",
        title: "Transcript Request",
        template: "transcriptRequest",
      },
      { id: "certificate", title: "Certificate", template: "certificate" },
    ],
  },

  {
    id: "employment",
    title: "Employment",
    icon: Briefcase,

    children: [
      { id: "cv", title: "CV", template: "cv" },
      { id: "resume", title: "Resume", template: "resume" },
      {
        id: "appointment-letter",
        title: "Appointment Letter",
        template: "appointmentLetter",
      },
      { id: "offer-letter", title: "Offer Letter", template: "offerLetter" },
      {
        id: "experience-certificate",
        title: "Experience Certificate",
        template: "experienceCertificate",
      },
      {
        id: "resignation-letter",
        title: "Resignation Letter",
        template: "resignationLetter",
      },
    ],
  },
];
