import {
  Home,
  Scale,
  Landmark,
  Building2,
  Briefcase,
  GraduationCap,
  CreditCard,
  FileText,
  BadgeCheck,
  Receipt,
  Star,
  Clock3,
} from "lucide-react";

export const SIDEBAR_CATEGORIES = [
  {
    id: "rental",
    title: "Rental Documents",
    icon: Home,
  },

  {
    id: "legal",
    title: "Legal Documents",
    icon: Scale,
  },

  {
    id: "land",
    title: "Land Documents",
    icon: Landmark,
  },

  {
    id: "government",
    title: "Government Forms",
    icon: Building2,
  },

  {
    id: "employment",
    title: "Employment",
    icon: Briefcase,
  },

  {
    id: "education",
    title: "Education",
    icon: GraduationCap,
  },

  {
    id: "banking",
    title: "Banking",
    icon: CreditCard,
  },

  {
    id: "affidavit",
    title: "Affidavit",
    icon: FileText,
  },

  {
    id: "nid",
    title: "NID / Passport",
    icon: BadgeCheck,
  },

  {
    id: "receipt",
    title: "Money Receipt",
    icon: Receipt,
  },

  {
    id: "favorites",
    title: "Favorites",
    icon: Star,
  },

  {
    id: "recent",
    title: "Recent",
    icon: Clock3,
  },
];
