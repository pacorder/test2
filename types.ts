
export type Language = 'es' | 'en';

export interface PMPrinciple {
  id: string;
  title: string;
  desc: string;
  icon: string;
}

export interface PMDomain {
  id: string;
  title: string;
  desc: string;
  topics: string[];
  icon: string;
}

export interface Question {
  id: string;
  category: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface SiteContent {
  nav: {
    principles: string;
    domains: string;
    processes: string;
    exam: string;
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
  principles: {
    title: string;
    items: PMPrinciple[];
  };
  domains: {
    title: string;
    desc: string;
    items: PMDomain[];
  };
  processes: {
    title: string;
    desc: string;
    areas: {
      name: string;
      count: number;
      desc: string;
    }[];
  };
  business: {
    title: string;
    aiTitle: string;
    aiDesc: string;
    sustainTitle: string;
    sustainDesc: string;
  };
  exam: {
    title: string;
    desc: string;
    categories: string[];
    startBtn: string;
    nextBtn: string;
    finishBtn: string;
    scoreTitle: string;
  };
  // Fix for: Error in file components/SavingsCalculator.tsx on line 6: Property 'calc' does not exist on type 'SiteContent'.
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
  // Fix for: Error in file components/Comparison.tsx on line 6: Property 'comparison' does not exist on type 'SiteContent'.
  comparison: {
    title: string;
    desc: string;
    thPillar: string;
    thTrad: string;
    thLean: string;
    rows: {
      feature: string;
      traditional: string;
      leanEngineering: string;
    }[];
    ctaTitle: string;
    ctaDesc: string;
    ctaBtn: string;
  };
  // Fix for: Error in file components/WhyChooseUs.tsx on line 6: Property 'whyChoose' does not exist on type 'SiteContent'.
  whyChoose: {
    title: string;
    description: string;
    features: {
      title: string;
      desc: string;
    }[];
    cta: string;
    cards: {
      highlight: string;
      subtitle: string;
      title: string;
      description: string;
    }[];
  };
}
