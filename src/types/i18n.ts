export type Language = 'ko' | 'en' | 'ja' | 'zh' | 'es' | 'fr' | 'de';

export interface Translations {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  features: {
    title: string;
    smartAnalysis: {
      title: string;
      description: string;
    };
    automation: {
      title: string;
      description: string;
    };
    realtime: {
      title: string;
      description: string;
    };
  };
  stats: {
    activeUsers: string;
    uptime: string;
    support: string;
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
}