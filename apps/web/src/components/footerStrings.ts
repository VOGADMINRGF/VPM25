import { DEFAULT_LOCALE, type SupportedLocale } from "@/config/locales";
import {
  VOG_JOIN_PATH,
  VOG_QUESTIONS_PATH,
  VOG_ROLES_PATH,
  VOG_SUPPORT_PATH,
  VOG_TRANSPARENCY_PATH,
} from "@/config/links";

type FooterStrings = {
  brand: {
    claim: string;
    body: string;
  };
  columns: {
    main: string;
    initiatives: string;
    legal: string;
  };
  aria: {
    main: string;
    initiatives: string;
    legal: string;
  };
  links: {
    main: Array<{ href: string; label: string }>;
    initiatives: Array<{ href: string; label: string }>;
    legal: Array<{ href: string; label: string }>;
  };
  poweredBy: string;
};

const STRINGS: Record<SupportedLocale, FooterStrings> = {
  de: {
    brand: {
      claim: "Internationale Mitgliederbewegung.",
      body: "Für nachvollziehbare Erkenntnis, echte Beteiligung und gemeinsam verantwortete Entscheidungen.",
    },
    columns: {
      main: "Bewegung",
      initiatives: "Vertiefen",
      legal: "Kontakt & Rechtliches",
    },
    aria: {
      main: "Footer Navigation: Mitmachen",
      initiatives: "Footer Navigation: Initiativen",
      legal: "Footer Navigation: Kontakt und Rechtliches",
    },
    links: {
      main: [
        { href: VOG_JOIN_PATH, label: "Mitglied werden" },
        { href: VOG_QUESTIONS_PATH, label: "50 öffentliche Fragen" },
        { href: VOG_TRANSPARENCY_PATH, label: "Transparenz" },
        { href: VOG_ROLES_PATH, label: "Mitwirkungsrollen" },
        { href: VOG_SUPPORT_PATH, label: "Unterstützen" },
      ],
      initiatives: [
        { href: "/initiatives", label: "Für Initiativen" },
        { href: "/dossier", label: "Öffentliche Dossiers" },
      ],
      legal: [
        { href: "/kontakt", label: "Kontakt" },
        { href: "/impressum", label: "Impressum" },
        { href: "/datenschutz", label: "Datenschutz" },
      ],
    },
    poweredBy: "powered by Ricky G. Fleischer",
  },
  en: {
    brand: {
      claim: "International membership movement.",
      body: "For traceable insight, genuine participation and decisions carried through shared responsibility.",
    },
    columns: {
      main: "Movement",
      initiatives: "Explore",
      legal: "Contact & legal",
    },
    aria: {
      main: "Footer navigation: Join",
      initiatives: "Footer navigation: Initiatives",
      legal: "Footer navigation: Contact and legal",
    },
    links: {
      main: [
        { href: VOG_JOIN_PATH, label: "Become a member" },
        { href: VOG_QUESTIONS_PATH, label: "50 public questions" },
        { href: VOG_TRANSPARENCY_PATH, label: "Transparency" },
        { href: VOG_ROLES_PATH, label: "Ways to contribute" },
        { href: VOG_SUPPORT_PATH, label: "Support" },
      ],
      initiatives: [
        { href: "/initiatives", label: "For initiatives" },
        { href: "/dossier", label: "Public dossiers" },
      ],
      legal: [
        { href: "/kontakt", label: "Contact" },
        { href: "/impressum", label: "Legal notice" },
        { href: "/datenschutz", label: "Privacy" },
      ],
    },
    poweredBy: "powered by Ricky G. Fleischer",
  },
  fr: {
    brand: {
      claim: "Mouvement pour des décisions robustes et traçables.",
      body: "VoiceOpenGov relie personnes, initiatives et organisations qui veulent mettre en place des procédures claires et une participation transparente.",
    },
    columns: {
      main: "Participer",
      initiatives: "Pour les initiatives",
      legal: "Contact & juridique",
    },
    aria: {
      main: "Navigation pied de page : Participer",
      initiatives: "Navigation pied de page : Initiatives",
      legal: "Navigation pied de page : Contact et juridique",
    },
    links: {
      main: [
        { href: "/#mitmachen", label: "Participer" },
        { href: "/dossier", label: "Dossier" },
        { href: VOG_SUPPORT_PATH, label: "Soutenir" },
      ],
      initiatives: [{ href: "/initiatives", label: "Pour les initiatives" }],
      legal: [
        { href: "/kontakt", label: "Contact" },
        { href: "/impressum", label: "Mention légale" },
        { href: "/datenschutz", label: "Confidentialité" },
      ],
    },
    poweredBy: "propulsé par Ricky G. Fleischer",
  },
  pl: {
    brand: {
      claim: "Ruch na rzecz solidnych, możliwych do prześledzenia decyzji.",
      body: "VoiceOpenGov łączy ludzi, inicjatywy i organizacje, które chcą budować jasne procedury i przejrzystą partycypację.",
    },
    columns: {
      main: "Dołącz",
      initiatives: "Dla inicjatyw",
      legal: "Kontakt i prawo",
    },
    aria: {
      main: "Nawigacja stopki: Dołącz",
      initiatives: "Nawigacja stopki: Inicjatywy",
      legal: "Nawigacja stopki: Kontakt i prawo",
    },
    links: {
      main: [
        { href: "/#mitmachen", label: "Dołącz" },
        { href: "/dossier", label: "Dossier" },
        { href: VOG_SUPPORT_PATH, label: "Wesprzyj" },
      ],
      initiatives: [{ href: "/initiatives", label: "Dla inicjatyw" }],
      legal: [
        { href: "/kontakt", label: "Kontakt" },
        { href: "/impressum", label: "Impressum" },
        { href: "/datenschutz", label: "Prywatność" },
      ],
    },
    poweredBy: "powered by Ricky G. Fleischer",
  },
  es: {
    brand: {
      claim: "Movimiento por decisiones sólidas y verificables.",
      body: "VoiceOpenGov conecta a personas, iniciativas y organizaciones que quieren construir procesos claros y participación transparente.",
    },
    columns: {
      main: "Participar",
      initiatives: "Para iniciativas",
      legal: "Contacto y legal",
    },
    aria: {
      main: "Navegación del pie: Participar",
      initiatives: "Navegación del pie: Iniciativas",
      legal: "Navegación del pie: Contacto y legal",
    },
    links: {
      main: [
        { href: "/#mitmachen", label: "Participar" },
        { href: "/dossier", label: "Dossier" },
        { href: VOG_SUPPORT_PATH, label: "Apoyar" },
      ],
      initiatives: [{ href: "/initiatives", label: "Para iniciativas" }],
      legal: [
        { href: "/kontakt", label: "Contacto" },
        { href: "/impressum", label: "Aviso legal" },
        { href: "/datenschutz", label: "Privacidad" },
      ],
    },
    poweredBy: "impulsado por Ricky G. Fleischer",
  },
  it: {
    brand: {
      claim: "Movimento per decisioni solide e tracciabili.",
      body: "VoiceOpenGov collega persone, iniziative e organizzazioni che vogliono creare processi chiari e partecipazione trasparente.",
    },
    columns: {
      main: "Partecipa",
      initiatives: "Per iniziative",
      legal: "Contatto e legale",
    },
    aria: {
      main: "Navigazione footer: Partecipa",
      initiatives: "Navigazione footer: Iniziative",
      legal: "Navigazione footer: Contatto e legale",
    },
    links: {
      main: [
        { href: "/#mitmachen", label: "Partecipa" },
        { href: "/dossier", label: "Dossier" },
        { href: VOG_SUPPORT_PATH, label: "Sostieni" },
      ],
      initiatives: [{ href: "/initiatives", label: "Per iniziative" }],
      legal: [
        { href: "/kontakt", label: "Contatto" },
        { href: "/impressum", label: "Note legali" },
        { href: "/datenschutz", label: "Privacy" },
      ],
    },
    poweredBy: "realizzato da Ricky G. Fleischer",
  },
  tr: {
    brand: {
      claim: "Sağlam ve izlenebilir kararlar için bir hareket.",
      body: "VoiceOpenGov, net süreçler ve şeffaf katılım kurmak isteyen insanları, girişimleri ve kuruluşları bir araya getirir.",
    },
    columns: {
      main: "Katıl",
      initiatives: "Girişimler için",
      legal: "İletişim ve hukuki",
    },
    aria: {
      main: "Altbilgi gezinme: Katıl",
      initiatives: "Altbilgi gezinme: Girişimler",
      legal: "Altbilgi gezinme: İletişim ve hukuki",
    },
    links: {
      main: [
        { href: "/#mitmachen", label: "Katıl" },
        { href: "/dossier", label: "Dossier" },
        { href: VOG_SUPPORT_PATH, label: "Destekle" },
      ],
      initiatives: [{ href: "/initiatives", label: "Girişimler için" }],
      legal: [
        { href: "/kontakt", label: "İletişim" },
        { href: "/impressum", label: "Yasal bildirim" },
        { href: "/datenschutz", label: "Gizlilik" },
      ],
    },
    poweredBy: "Ricky G. Fleischer tarafından",
  },
  ar: {
    brand: {
      claim: "حركة لقرارات قوية وقابلة للتتبع.",
      body: "VoiceOpenGov يربط بين الأفراد والمبادرات والمنظمات التي تريد بناء إجراءات واضحة ومشاركة شفافة.",
    },
    columns: {
      main: "شارك",
      initiatives: "للمبادرات",
      legal: "التواصل والشؤون القانونية",
    },
    aria: {
      main: "تنقل التذييل: شارك",
      initiatives: "تنقل التذييل: المبادرات",
      legal: "تنقل التذييل: التواصل والشؤون القانونية",
    },
    links: {
      main: [
        { href: "/#mitmachen", label: "شارك" },
        { href: "/dossier", label: "ملف" },
        { href: VOG_SUPPORT_PATH, label: "ادعم" },
      ],
      initiatives: [{ href: "/initiatives", label: "للمبادرات" }],
      legal: [
        { href: "/kontakt", label: "تواصل" },
        { href: "/impressum", label: "إشعار قانوني" },
        { href: "/datenschutz", label: "الخصوصية" },
      ],
    },
    poweredBy: "بدعم من Ricky G. Fleischer",
  },
  ru: {
    brand: {
      claim: "Движение за устойчивые и проверяемые решения.",
      body: "VoiceOpenGov объединяет людей, инициативы и организации, которые хотят создавать понятные процессы и прозрачное участие.",
    },
    columns: {
      main: "Участвовать",
      initiatives: "Для инициатив",
      legal: "Контакт и право",
    },
    aria: {
      main: "Навигация подвала: Участвовать",
      initiatives: "Навигация подвала: Инициативы",
      legal: "Навигация подвала: Контакт и право",
    },
    links: {
      main: [
        { href: "/#mitmachen", label: "Участвовать" },
        { href: "/dossier", label: "Досье" },
        { href: VOG_SUPPORT_PATH, label: "Поддержать" },
      ],
      initiatives: [{ href: "/initiatives", label: "Для инициатив" }],
      legal: [
        { href: "/kontakt", label: "Контакт" },
        { href: "/impressum", label: "Правовые сведения" },
        { href: "/datenschutz", label: "Конфиденциальность" },
      ],
    },
    poweredBy: "при поддержке Ricky G. Fleischer",
  },
  zh: {
    brand: {
      claim: "推动稳健、可追溯的决策。",
      body: "VoiceOpenGov 连接希望建立清晰流程与透明参与的人、倡议与组织。",
    },
    columns: {
      main: "参与",
      initiatives: "面向倡议",
      legal: "联系与法律",
    },
    aria: {
      main: "页脚导航：参与",
      initiatives: "页脚导航：倡议",
      legal: "页脚导航：联系与法律",
    },
    links: {
      main: [
        { href: "/#mitmachen", label: "参与" },
        { href: "/dossier", label: "档案" },
        { href: VOG_SUPPORT_PATH, label: "支持" },
      ],
      initiatives: [{ href: "/initiatives", label: "面向倡议" }],
      legal: [
        { href: "/kontakt", label: "联系" },
        { href: "/impressum", label: "法律声明" },
        { href: "/datenschutz", label: "隐私" },
      ],
    },
    poweredBy: "由 Ricky G. Fleischer 提供支持",
  },
};

export function getFooterStrings(locale: SupportedLocale | string): FooterStrings {
  const normalized = (locale || DEFAULT_LOCALE) as SupportedLocale;
  return STRINGS[normalized] ?? STRINGS[DEFAULT_LOCALE];
}
