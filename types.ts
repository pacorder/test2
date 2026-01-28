
export type Language = 'es' | 'en';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

export interface ValueModel {
  title: string;
  description: string;
  points: string[];
}

export interface BenefitItem {
  title: string;
  content: string;
  icon: string;
}

export interface ComparisonRow {
  feature: string;
  traditional: string;
  leanEngineering: string;
}

export interface WhyChooseCard {
  highlight: string;
  subtitle: string;
  title: string;
  description: string;
}

export interface SiteContent {
  nav: {
    services: string;
    whyUs: string;
    calc: string;
    contact: string;
    cta: string;
  };
  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    desc: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  whyChoose: {
    title: string;
    description: string;
    features: {
      title: string;
      desc: string;
    }[];
    cta: string;
    cards: WhyChooseCard[];
  };
  valueModels: {
    title: string;
    description: string;
    items: ValueModel[];
  };
  services: {
    title: string;
    items: Service[];
  };
  whyUs: {
    title: string;
    titleAccent: string;
    items: BenefitItem[];
  };
  comparison: {
    title: string;
    desc: string;
    thPillar: string;
    thTrad: string;
    thLean: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaBtn: string;
    rows: ComparisonRow[];
  };
  calc: {
    title: string;
    desc: string;
    labelBudget: string;
    labelComplexity: string;
    complexities: string[];
    note: string;
    resultTitle: string;
    labelFee: string;
    labelRoi: string;
    btn: string;
  };
  contact: {
    title: string;
    desc: string;
    labels: {
      name: string;
      email: string;
      sector: string;
      service: string;
      brief: string;
      submit: string;
    };
    sectors: string[];
    services: string[];
    info: {
      location: string;
      email: string;
      phone: string;
    };
  };
}
