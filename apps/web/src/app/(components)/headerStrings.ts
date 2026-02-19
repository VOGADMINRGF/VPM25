import { DEFAULT_LOCALE, type SupportedLocale } from "@/config/locales";

type HeaderStrings = {
  navItems: Array<{ href: string; label: string; description: string }>;
  navigationLabel: string;
  menuLabel: string;
  aria: {
    localeSelect: string;
    openNav: string;
    mobileNav: string;
  };
};

const STRINGS: Record<SupportedLocale, HeaderStrings> = {
  de: {
    navItems: [
      {
        href: "/#mitmachen",
        label: "Mitmachen",
        description: "In wenigen Sekunden eintragen und informiert bleiben.",
      },
      {
        href: "/unterstuetzen",
        label: "Unterstützen",
        description: "Aufbau, Recherche und Community stärken.",
      },
      {
        href: "/initiatives",
        label: "Für Initiativen",
        description: "Themen einreichen und Prozesse sauber aufsetzen.",
      },
      {
        href: "/dossier",
        label: "Dossier",
        description: "Standards, offene Fragen und Quellen.",
      },
      {
        href: "/kontakt",
        label: "Kontakt",
        description: "Direkter Draht zum VoiceOpenGov Team.",
      },
    ],
    navigationLabel: "Navigation",
    menuLabel: "Menü",
    aria: {
      localeSelect: "Sprache wählen (aktuell {label})",
      openNav: "Navigation öffnen",
      mobileNav: "Mobile Navigation",
    },
  },
  en: {
    navItems: [
      {
        href: "/#mitmachen",
        label: "Join",
        description: "Get listed in seconds and stay informed.",
      },
      {
        href: "/unterstuetzen",
        label: "Support",
        description: "Strengthen build-up, research and community.",
      },
      {
        href: "/initiatives",
        label: "For initiatives",
        description: "Submit topics and set up clean processes.",
      },
      {
        href: "/dossier",
        label: "Dossier",
        description: "Standards, open questions and sources.",
      },
      {
        href: "/kontakt",
        label: "Contact",
        description: "Direct line to the VoiceOpenGov team.",
      },
    ],
    navigationLabel: "Navigation",
    menuLabel: "Menu",
    aria: {
      localeSelect: "Choose language (current {label})",
      openNav: "Open navigation",
      mobileNav: "Mobile navigation",
    },
  },
  fr: {
    navItems: [
      {
        href: "/#mitmachen",
        label: "Participer",
        description: "Inscription rapide et infos à jour.",
      },
      {
        href: "/unterstuetzen",
        label: "Soutenir",
        description: "Soutenir le déploiement, la recherche et la communauté.",
      },
      {
        href: "/initiatives",
        label: "Pour les initiatives",
        description: "Proposer des sujets et structurer les processus.",
      },
      {
        href: "/dossier",
        label: "Dossier",
        description: "Normes, questions ouvertes et sources.",
      },
      {
        href: "/kontakt",
        label: "Contact",
        description: "Contact direct avec l'équipe VoiceOpenGov.",
      },
    ],
    navigationLabel: "Navigation",
    menuLabel: "Menu",
    aria: {
      localeSelect: "Choisir la langue (actuellement {label})",
      openNav: "Ouvrir la navigation",
      mobileNav: "Navigation mobile",
    },
  },
  pl: {
    navItems: [
      {
        href: "/#mitmachen",
        label: "Dołącz",
        description: "Zgłoszenie w kilka sekund i bieżące informacje.",
      },
      {
        href: "/unterstuetzen",
        label: "Wesprzyj",
        description: "Wesprzyj rozwój, badania i społeczność.",
      },
      {
        href: "/initiatives",
        label: "Dla inicjatyw",
        description: "Zgłaszaj tematy i porządkuj procesy.",
      },
      {
        href: "/dossier",
        label: "Dossier",
        description: "Standardy, otwarte pytania i źródła.",
      },
      {
        href: "/kontakt",
        label: "Kontakt",
        description: "Bezpośredni kontakt z zespołem VoiceOpenGov.",
      },
    ],
    navigationLabel: "Nawigacja",
    menuLabel: "Menu",
    aria: {
      localeSelect: "Wybierz język (obecnie {label})",
      openNav: "Otwórz nawigację",
      mobileNav: "Nawigacja mobilna",
    },
  },
  es: {
    navItems: [
      {
        href: "/#mitmachen",
        label: "Participar",
        description: "Registro en segundos y al día.",
      },
      {
        href: "/unterstuetzen",
        label: "Apoyar",
        description: "Apoya el despliegue, la investigación y la comunidad.",
      },
      {
        href: "/initiatives",
        label: "Para iniciativas",
        description: "Envía temas y estructura procesos.",
      },
      {
        href: "/dossier",
        label: "Dossier",
        description: "Estándares, preguntas abiertas y fuentes.",
      },
      {
        href: "/kontakt",
        label: "Contacto",
        description: "Línea directa con el equipo de VoiceOpenGov.",
      },
    ],
    navigationLabel: "Navegación",
    menuLabel: "Menú",
    aria: {
      localeSelect: "Elegir idioma (actual {label})",
      openNav: "Abrir navegación",
      mobileNav: "Navegación móvil",
    },
  },
  it: {
    navItems: [
      {
        href: "/#mitmachen",
        label: "Partecipa",
        description: "Iscrizione in pochi secondi e aggiornamenti.",
      },
      {
        href: "/unterstuetzen",
        label: "Sostieni",
        description: "Sostieni sviluppo, ricerca e community.",
      },
      {
        href: "/initiatives",
        label: "Per iniziative",
        description: "Invia temi e imposta processi chiari.",
      },
      {
        href: "/dossier",
        label: "Dossier",
        description: "Standard, questioni aperte e fonti.",
      },
      {
        href: "/kontakt",
        label: "Contatto",
        description: "Linea diretta con il team VoiceOpenGov.",
      },
    ],
    navigationLabel: "Navigazione",
    menuLabel: "Menu",
    aria: {
      localeSelect: "Scegli la lingua (attuale {label})",
      openNav: "Apri navigazione",
      mobileNav: "Navigazione mobile",
    },
  },
  tr: {
    navItems: [
      {
        href: "/#mitmachen",
        label: "Katıl",
        description: "Saniyeler içinde kayıt ve güncel kal.",
      },
      {
        href: "/unterstuetzen",
        label: "Destekle",
        description: "Kurulum, araştırma ve topluluğu güçlendir.",
      },
      {
        href: "/initiatives",
        label: "Girişimler için",
        description: "Konuları ilet ve süreçleri düzenli kur.",
      },
      {
        href: "/dossier",
        label: "Dossier",
        description: "Standartlar, açık sorular ve kaynaklar.",
      },
      {
        href: "/kontakt",
        label: "İletişim",
        description: "VoiceOpenGov ekibiyle doğrudan temas.",
      },
    ],
    navigationLabel: "Gezinme",
    menuLabel: "Menü",
    aria: {
      localeSelect: "Dil seç (şu an {label})",
      openNav: "Gezinmeyi aç",
      mobileNav: "Mobil gezinme",
    },
  },
  ar: {
    navItems: [
      {
        href: "/#mitmachen",
        label: "شارك",
        description: "تسجيل سريع والبقاء على اطلاع.",
      },
      {
        href: "/unterstuetzen",
        label: "ادعم",
        description: "ادعم البناء والبحث والمجتمع.",
      },
      {
        href: "/initiatives",
        label: "للمبادرات",
        description: "قدّم مواضيع ونظّم العمليات.",
      },
      {
        href: "/dossier",
        label: "ملف",
        description: "معايير وأسئلة مفتوحة ومصادر.",
      },
      {
        href: "/kontakt",
        label: "تواصل",
        description: "تواصل مباشر مع فريق VoiceOpenGov.",
      },
    ],
    navigationLabel: "التنقل",
    menuLabel: "القائمة",
    aria: {
      localeSelect: "اختر اللغة (الحالية {label})",
      openNav: "افتح التنقل",
      mobileNav: "التنقل على الهاتف",
    },
  },
  ru: {
    navItems: [
      {
        href: "/#mitmachen",
        label: "Участвовать",
        description: "Регистрация за секунды и новости по делу.",
      },
      {
        href: "/unterstuetzen",
        label: "Поддержать",
        description: "Поддержите развитие, исследования и сообщество.",
      },
      {
        href: "/initiatives",
        label: "Для инициатив",
        description: "Предлагайте темы и выстраивайте процессы.",
      },
      {
        href: "/dossier",
        label: "Досье",
        description: "Стандарты, открытые вопросы и источники.",
      },
      {
        href: "/kontakt",
        label: "Контакт",
        description: "Прямая связь с командой VoiceOpenGov.",
      },
    ],
    navigationLabel: "Навигация",
    menuLabel: "Меню",
    aria: {
      localeSelect: "Выбрать язык (сейчас {label})",
      openNav: "Открыть навигацию",
      mobileNav: "Мобильная навигация",
    },
  },
  zh: {
    navItems: [
      {
        href: "/#mitmachen",
        label: "参与",
        description: "几秒钟登记并获取更新。",
      },
      {
        href: "/unterstuetzen",
        label: "支持",
        description: "支持建设、研究与社群。",
      },
      {
        href: "/initiatives",
        label: "面向倡议",
        description: "提交议题并规范流程。",
      },
      {
        href: "/dossier",
        label: "档案",
        description: "标准、开放问题与来源。",
      },
      {
        href: "/kontakt",
        label: "联系",
        description: "与 VoiceOpenGov 团队直接沟通。",
      },
    ],
    navigationLabel: "导航",
    menuLabel: "菜单",
    aria: {
      localeSelect: "选择语言（当前 {label}）",
      openNav: "打开导航",
      mobileNav: "移动端导航",
    },
  },
};

export function getHeaderStrings(locale: SupportedLocale | string): HeaderStrings {
  const normalized = (locale || DEFAULT_LOCALE) as SupportedLocale;
  return STRINGS[normalized] ?? STRINGS[DEFAULT_LOCALE];
}
