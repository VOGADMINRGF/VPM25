import { DEFAULT_LOCALE, type SupportedLocale } from "@/config/locales";

type InitiativesStrings = {
  meta: { title: string; description: string };
  header: { label: string; title: string; body: string };
  steps: string[];
  tool: { title: string; body: string; link: string };
  cta: { title: string; body: string; primary: string; secondary: string };
};

const STRINGS: Record<SupportedLocale, InitiativesStrings> = {
  de: {
    meta: {
      title: "Für Initiativen – VoiceOpenGov",
      description: "Bringt euer Thema – wir helfen beim sauberen Prozess.",
    },
    header: {
      label: "Für Initiativen",
      title: "Bringt euer Thema – wir helfen beim sauberen Prozess",
      body:
        "Wir strukturieren Anliegen so, dass Beteiligung nachvollziehbar bleibt: klare Fragen, dokumentierte Quellen und transparente Entscheidungen.",
    },
    steps: [
      "Thema und Ziel kurz beschreiben",
      "Region, Zielgruppe und Zeitfenster nennen",
      "Bestehende Quellen oder Daten beifügen",
    ],
    tool: {
      title: "Umsetzung im Tool",
      body: "Für die praktische Umsetzung nutzen wir das Tool eDebatte.",
      link: "eDebatte (Tool)",
    },
    cta: {
      title: "Bereit für eure Initiative?",
      body:
        "Schickt uns eine kurze Beschreibung eures Anliegens. Wir melden uns mit den nächsten Schritten.",
      primary: "Kontakt aufnehmen",
      secondary: "Mitmachen",
    },
  },
  en: {
    meta: {
      title: "For initiatives – VoiceOpenGov",
      description: "Bring your topic — we help with a clean process.",
    },
    header: {
      label: "For initiatives",
      title: "Bring your topic — we help with a clean process",
      body:
        "We structure proposals so participation remains traceable: clear questions, documented sources, and transparent decisions.",
    },
    steps: [
      "Briefly describe topic and goal",
      "State region, target group, and time frame",
      "Attach existing sources or data",
    ],
    tool: {
      title: "Implementation in the tool",
      body: "For practical execution we use the eDebatte tool.",
      link: "eDebatte (tool)",
    },
    cta: {
      title: "Ready for your initiative?",
      body:
        "Send us a short description of your proposal. We will respond with the next steps.",
      primary: "Contact us",
      secondary: "Join",
    },
  },
  fr: {
    meta: {
      title: "Pour les initiatives – VoiceOpenGov",
      description: "Apportez votre sujet — nous aidons à structurer le processus.",
    },
    header: {
      label: "Pour les initiatives",
      title: "Apportez votre sujet — nous aidons à structurer le processus",
      body:
        "Nous structurons les propositions pour que la participation reste traçable : questions claires, sources documentées et décisions transparentes.",
    },
    steps: [
      "Décrire brièvement le sujet et l'objectif",
      "Indiquer la région, le public cible et la période",
      "Joindre des sources ou des données existantes",
    ],
    tool: {
      title: "Mise en œuvre dans l'outil",
      body: "Pour la mise en œuvre pratique, nous utilisons l'outil eDebatte.",
      link: "eDebatte (outil)",
    },
    cta: {
      title: "Prêt pour votre initiative ?",
      body:
        "Envoyez-nous une courte description de votre demande. Nous reviendrons avec les prochaines étapes.",
      primary: "Nous contacter",
      secondary: "Participer",
    },
  },
  pl: {
    meta: {
      title: "Dla inicjatyw – VoiceOpenGov",
      description: "Przynieście temat — pomożemy w uporządkowanym procesie.",
    },
    header: {
      label: "Dla inicjatyw",
      title: "Przynieście temat — pomożemy w uporządkowanym procesie",
      body:
        "Strukturyzujemy propozycje tak, aby udział był przejrzysty: jasne pytania, udokumentowane źródła i transparentne decyzje.",
    },
    steps: [
      "Krótko opisz temat i cel",
      "Podaj region, grupę docelową i ramy czasowe",
      "Dołącz istniejące źródła lub dane",
    ],
    tool: {
      title: "Realizacja w narzędziu",
      body: "Do praktycznej realizacji używamy narzędzia eDebatte.",
      link: "eDebatte (narzędzie)",
    },
    cta: {
      title: "Gotowi na inicjatywę?",
      body:
        "Wyślij krótkie opisanie swojej propozycji. Odezwiemy się z kolejnymi krokami.",
      primary: "Skontaktuj się",
      secondary: "Dołącz",
    },
  },
  es: {
    meta: {
      title: "Para iniciativas – VoiceOpenGov",
      description: "Traed vuestro tema — ayudamos con un proceso claro.",
    },
    header: {
      label: "Para iniciativas",
      title: "Traed vuestro tema — ayudamos con un proceso claro",
      body:
        "Estructuramos propuestas para que la participación sea trazable: preguntas claras, fuentes documentadas y decisiones transparentes.",
    },
    steps: [
      "Describir brevemente tema y objetivo",
      "Indicar región, público objetivo y ventana temporal",
      "Adjuntar fuentes o datos existentes",
    ],
    tool: {
      title: "Implementación en la herramienta",
      body: "Para la implementación práctica usamos la herramienta eDebatte.",
      link: "eDebatte (herramienta)",
    },
    cta: {
      title: "¿Listos para vuestra iniciativa?",
      body:
        "Envíanos una breve descripción de la propuesta. Te responderemos con los siguientes pasos.",
      primary: "Contactar",
      secondary: "Participar",
    },
  },
  it: {
    meta: {
      title: "Per iniziative – VoiceOpenGov",
      description: "Portate il vostro tema — aiutiamo con un processo pulito.",
    },
    header: {
      label: "Per iniziative",
      title: "Portate il vostro tema — aiutiamo con un processo pulito",
      body:
        "Strutturiamo le proposte per mantenere la partecipazione tracciabile: domande chiare, fonti documentate e decisioni trasparenti.",
    },
    steps: [
      "Descrivi brevemente tema e obiettivo",
      "Indica regione, pubblico e tempistiche",
      "Allega fonti o dati esistenti",
    ],
    tool: {
      title: "Implementazione nello strumento",
      body: "Per l'implementazione pratica usiamo lo strumento eDebatte.",
      link: "eDebatte (strumento)",
    },
    cta: {
      title: "Pronti per la vostra iniziativa?",
      body:
        "Inviateci una breve descrizione della proposta. Vi risponderemo con i prossimi passi.",
      primary: "Contattaci",
      secondary: "Partecipa",
    },
  },
  tr: {
    meta: {
      title: "Girişimler için – VoiceOpenGov",
      description: "Konunuzu getirin — süreçte yardımcı olalım.",
    },
    header: {
      label: "Girişimler için",
      title: "Konunuzu getirin — süreçte yardımcı olalım",
      body:
        "Önerileri yapılandırırız; katılım izlenebilir kalır: net sorular, belgelenmiş kaynaklar ve şeffaf kararlar.",
    },
    steps: [
      "Konuyu ve hedefi kısaca yazın",
      "Bölge, hedef kitle ve zaman aralığını belirtin",
      "Mevcut kaynakları veya verileri ekleyin",
    ],
    tool: {
      title: "Araçta uygulama",
      body: "Pratik uygulama için eDebatte aracını kullanıyoruz.",
      link: "eDebatte (araç)",
    },
    cta: {
      title: "Girişiminiz için hazır mısınız?",
      body:
        "Önerinizin kısa bir açıklamasını gönderin. Bir sonraki adımlarla dönüş yapacağız.",
      primary: "İletişime geç",
      secondary: "Katıl",
    },
  },
  ar: {
    meta: {
      title: "للمبادرات – VoiceOpenGov",
      description: "أحضِر موضوعك — نساعد في عملية واضحة.",
    },
    header: {
      label: "للمبادرات",
      title: "أحضِر موضوعك — نساعد في عملية واضحة",
      body:
        "نُهيكل المقترحات بحيث تبقى المشاركة قابلة للتتبع: أسئلة واضحة، مصادر موثقة، وقرارات شفافة.",
    },
    steps: [
      "صف الموضوع والهدف باختصار",
      "اذكر المنطقة والفئة المستهدفة والإطار الزمني",
      "أرفق مصادر أو بيانات موجودة",
    ],
    tool: {
      title: "التنفيذ في الأداة",
      body: "للتنفيذ العملي نستخدم أداة eDebatte.",
      link: "eDebatte (الأداة)",
    },
    cta: {
      title: "جاهزون لمبادرتكم؟",
      body: "أرسلوا وصفاً موجزاً للمقترح. سنعود بالخطوات التالية.",
      primary: "تواصل معنا",
      secondary: "شارك",
    },
  },
  ru: {
    meta: {
      title: "Для инициатив – VoiceOpenGov",
      description: "Принесите тему — мы поможем с чистым процессом.",
    },
    header: {
      label: "Для инициатив",
      title: "Принесите тему — мы поможем с чистым процессом",
      body:
        "Мы структурируем предложения так, чтобы участие оставалось прозрачным: четкие вопросы, документированные источники и прозрачные решения.",
    },
    steps: [
      "Кратко опишите тему и цель",
      "Укажите регион, целевую группу и сроки",
      "Приложите источники или данные",
    ],
    tool: {
      title: "Реализация в инструменте",
      body: "Для практической реализации мы используем инструмент eDebatte.",
      link: "eDebatte (инструмент)",
    },
    cta: {
      title: "Готовы к инициативе?",
      body:
        "Отправьте краткое описание вашего предложения. Мы свяжемся с дальнейшими шагами.",
      primary: "Связаться",
      secondary: "Участвовать",
    },
  },
  zh: {
    meta: {
      title: "面向倡议 – VoiceOpenGov",
      description: "带上你的议题——我们帮助建立清晰流程。",
    },
    header: {
      label: "面向倡议",
      title: "带上你的议题——我们帮助建立清晰流程",
      body:
        "我们对提案进行结构化，使参与可追溯：清晰问题、记录在案的来源与透明决策。",
    },
    steps: [
      "简要描述主题和目标",
      "说明地区、目标群体和时间范围",
      "附上已有来源或数据",
    ],
    tool: {
      title: "在工具中实施",
      body: "实际实施使用 eDebatte 工具。",
      link: "eDebatte（工具）",
    },
    cta: {
      title: "准备好发起倡议了吗？",
      body: "发送你的简要提案说明。我们会回复下一步。",
      primary: "联系我们",
      secondary: "参与",
    },
  },
};

export function getInitiativesStrings(locale: SupportedLocale | string): InitiativesStrings {
  const normalized = (locale || DEFAULT_LOCALE) as SupportedLocale;
  return STRINGS[normalized] ?? STRINGS[DEFAULT_LOCALE];
}
