const en = {
  navbar: {
    title: "Techra Docs",
    search: "Search templates...",
    role: "Software Engineer",
  },

  toolbar: {
    home: "Home",
    templates: "Templates",
    favorites: "Favorites",
    documents: "My Documents",
    settings: "Settings",
  },

  sidebar: {
    templates: "Templates",
    elements: "Elements",
    pages: "Pages",
    layers: "Layers",
    uploads: "Uploads",
  },

  properties: {
    title: "Properties",
    position: "Position",
    size: "Size",
    typography: "Typography",
    fill: "Fill",
    border: "Border",
    shadow: "Shadow",
    opacity: "Opacity",
  },

  canvas: {
    page: "Page",
    addPage: "Add Page",
    zoom: "Zoom",
  },

  documents: {
    new: "New Document",
    save: "Save",
    saveAs: "Save As",
    print: "Print",
    exportPdf: "Export PDF",
    exportDocx: "Export DOCX",
  },

  templates: {
    rentalAgreement: "Rental Agreement",
    moneyReceipt: "Money Receipt",
    stampPaper: "Stamp Paper Draft",
    affidavit: "Affidavit",
    powerOfAttorney: "Power of Attorney",
    landDocument: "Land Document",
    jobApplication: "Job Application",
    legalNotice: "Legal Notice",
    agreement: "Agreement",
    nidPassport: "NID / Passport Form",
  },
};

const bn: typeof en = {
  navbar: {
    title: "টেকরা ডকস",
    search: "টেমপ্লেট খুঁজুন...",
    role: "সফটওয়্যার ইঞ্জিনিয়ার",
  },

  toolbar: {
    home: "হোম",
    templates: "টেমপ্লেট",
    favorites: "প্রিয়",
    documents: "আমার ডকুমেন্ট",
    settings: "সেটিংস",
  },

  sidebar: {
    templates: "টেমপ্লেট",
    elements: "এলিমেন্ট",
    pages: "পৃষ্ঠা",
    layers: "লেয়ার",
    uploads: "আপলোড",
  },

  properties: {
    title: "বৈশিষ্ট্য",
    position: "অবস্থান",
    size: "আকার",
    typography: "ফন্ট",
    fill: "রঙ",
    border: "বর্ডার",
    shadow: "ছায়া",
    opacity: "স্বচ্ছতা",
  },

  canvas: {
    page: "পৃষ্ঠা",
    addPage: "পৃষ্ঠা যোগ করুন",
    zoom: "জুম",
  },

  documents: {
    new: "নতুন ডকুমেন্ট",
    save: "সংরক্ষণ করুন",
    saveAs: "নতুন নামে সংরক্ষণ করুন",
    print: "প্রিন্ট",
    exportPdf: "PDF হিসেবে ডাউনলোড",
    exportDocx: "DOCX হিসেবে ডাউনলোড",
  },

  templates: {
    rentalAgreement: "ভাড়া চুক্তিপত্র",
    moneyReceipt: "টাকা গ্রহণের রসিদ",
    stampPaper: "স্ট্যাম্প পেপার খসড়া",
    affidavit: "এফিডেভিট",
    powerOfAttorney: "আমমোক্তারনামা",
    landDocument: "ভূমি সংক্রান্ত দলিল",
    jobApplication: "চাকরির আবেদন",
    legalNotice: "আইনি নোটিশ",
    agreement: "চুক্তিপত্র",
    nidPassport: "এনআইডি / পাসপোর্ট ফর্ম",
  },
};

export const translations = {
  en,
  bn,
};

export type Language = keyof typeof translations;
export type Translation = typeof en;
