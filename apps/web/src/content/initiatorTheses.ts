import type { SupportedLocale } from "@/config/locales";

export type InitiatorThesesLocale = "de" | "en" | "fr" | "es" | "tr" | "ar";

export function initiatorThesesLocale(locale: SupportedLocale): InitiatorThesesLocale {
  return ["de", "en", "fr", "es", "tr", "ar"].includes(locale)
    ? (locale as InitiatorThesesLocale)
    : "en";
}

type Thesis = {
  id: string;
  title: string;
  body: string;
};

type ThesisPageCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  separationTitle: string;
  separationBody: string;
  testLabel: string;
  questionsLabel: string;
  theses: Thesis[];
};

export const INITIATOR_THESES_COPY: Record<InitiatorThesesLocale, ThesisPageCopy> = {
  de: {
    eyebrow: "Persönliche Ausgangspunkte des Initiators",
    title: "Thesen von Ricky Gerd Fleischer zur Weiterentwicklung von Demokratie.",
    intro:
      "Diese Thesen sind persönliche Ausgangspunkte von Ricky Gerd Fleischer. Sie sind weder Beschlüsse noch verbindliche Positionen von VoiceOpenGov. Sie sollen öffentlich widersprochen, belegt, verändert oder verworfen werden können.",
    separationTitle: "Person, Bewegung und Infrastruktur bleiben getrennt.",
    separationBody:
      "VoiceOpenGov organisiert Menschen. eDebatte soll Argumente, Quellen, Gegenpositionen und Entscheidungen nachvollziehbar machen. Keine persönliche These des Initiators erhält dort Sonderrechte.",
    testLabel: "These auf eDebatte prüfen",
    questionsLabel: "Zu den 50 öffentlichen Fragen",
    theses: [
      {
        id: "rgf-thesis-democracy-update",
        title: "Demokratie ist kein fertiges Betriebssystem.",
        body: "Demokratische Grundwerte sollen nicht ersetzt werden. Aber die Verfahren, mit denen Gesellschaft Beteiligung, Repräsentation und Verantwortung organisiert, müssen sich weiterentwickeln dürfen.",
      },
      {
        id: "rgf-thesis-between-elections",
        title: "Politische Legitimation darf nicht nur im Wahlmoment sichtbar sein.",
        body: "Wahlen bleiben zentral. Gleichzeitig sollte eine moderne Demokratie zwischen Wahlen bessere, überprüfbare Rückkanäle schaffen, ohne in permanente Abstimmungslogik zu kippen.",
      },
      {
        id: "rgf-thesis-parties-are-not-democracy",
        title: "Parteien sind ein Instrument der Demokratie – nicht ihre vollständige Definition.",
        body: "Parteien erfüllen wichtige Aufgaben. Trotzdem sollte demokratische Beteiligung nicht davon abhängen, ob Menschen sich dauerhaft einer Partei oder einem politischen Gesamtpaket zuordnen wollen.",
      },
      {
        id: "rgf-thesis-digital-participation",
        title: "Eine digitale Gesellschaft braucht bessere demokratische Prozessketten.",
        body: "Technik ersetzt weder Rechtsstaat, Minderheitenschutz noch Expertise. Sie kann aber helfen, Anliegen, Zuständigkeiten, Quellen, Alternativen und Folgen dauerhaft nachvollziehbar zu verbinden.",
      },
      {
        id: "rgf-thesis-no-special-rights",
        title: "Der Initiator darf keine Sonderrechte bei Wahrheit oder Gewichtung haben.",
        body: "Eine glaubwürdige demokratische Infrastruktur muss persönliche Thesen genauso prüfbar machen wie gegnerische Positionen. Herkunft darf kein Ersatz für Evidenz sein.",
      },
    ],
  },
  en: {
    eyebrow: "Personal starting points of the initiator",
    title: "Ricky Gerd Fleischer’s theses on developing democracy further.",
    intro:
      "These theses are personal starting points of Ricky Gerd Fleischer. They are neither resolutions nor binding positions of VoiceOpenGov. They should be open to public contradiction, evidence, revision or rejection.",
    separationTitle: "Person, movement and infrastructure remain separate.",
    separationBody:
      "VoiceOpenGov organizes people. eDebatte is intended to make arguments, sources, counterpositions and decisions traceable. No personal thesis of the initiator receives special rights there.",
    testLabel: "Examine thesis on eDebatte",
    questionsLabel: "See the 50 public questions",
    theses: [
      {
        id: "rgf-thesis-democracy-update",
        title: "Democracy is not a finished operating system.",
        body: "Democratic core values should not be replaced. But the procedures by which societies organize participation, representation and responsibility must be allowed to evolve.",
      },
      {
        id: "rgf-thesis-between-elections",
        title: "Political legitimacy should not be visible only at election time.",
        body: "Elections remain central. At the same time, modern democracies should create better, traceable feedback channels between elections without turning politics into permanent voting.",
      },
      {
        id: "rgf-thesis-parties-are-not-democracy",
        title: "Political parties are an instrument of democracy, not its complete definition.",
        body: "Parties perform important functions. Democratic participation should still not depend on whether people want to commit permanently to a party or a complete political package.",
      },
      {
        id: "rgf-thesis-digital-participation",
        title: "A digital society needs better democratic process chains.",
        body: "Technology replaces neither the rule of law, minority protection nor expertise. It can, however, connect concerns, responsibilities, sources, alternatives and consequences in a traceable way.",
      },
      {
        id: "rgf-thesis-no-special-rights",
        title: "The initiator must have no special rights over truth or weighting.",
        body: "A credible democratic infrastructure must make personal theses as testable as opposing positions. Origin must never substitute for evidence.",
      },
    ],
  },
  fr: {
    eyebrow: "Points de départ personnels de l’initiateur",
    title: "Thèses de Ricky Gerd Fleischer sur l’évolution de la démocratie.",
    intro:
      "Ces thèses sont des points de départ personnels de Ricky Gerd Fleischer. Elles ne constituent ni des décisions ni des positions contraignantes de VoiceOpenGov et doivent pouvoir être contestées, étayées, modifiées ou rejetées publiquement.",
    separationTitle: "La personne, le mouvement et l’infrastructure restent séparés.",
    separationBody:
      "VoiceOpenGov organise les personnes. eDebatte doit rendre traçables arguments, sources, contre-positions et décisions. Aucune thèse personnelle de l’initiateur n’y bénéficie de droits particuliers.",
    testLabel: "Examiner la thèse sur eDebatte",
    questionsLabel: "Voir les 50 questions publiques",
    theses: [
      { id: "rgf-thesis-democracy-update", title: "La démocratie n’est pas un système d’exploitation achevé.", body: "Les valeurs démocratiques fondamentales ne doivent pas être remplacées, mais les procédures d’organisation de la participation, de la représentation et de la responsabilité doivent pouvoir évoluer." },
      { id: "rgf-thesis-between-elections", title: "La légitimité politique ne devrait pas être visible uniquement au moment des élections.", body: "Les élections restent centrales. Entre elles, une démocratie moderne devrait offrir de meilleurs canaux de retour vérifiables sans devenir une démocratie de vote permanent." },
      { id: "rgf-thesis-parties-are-not-democracy", title: "Les partis sont un instrument de la démocratie, pas sa définition complète.", body: "Les partis remplissent des fonctions importantes. La participation démocratique ne devrait toutefois pas dépendre d’une adhésion durable à un parti ou à un programme global." },
      { id: "rgf-thesis-digital-participation", title: "Une société numérique a besoin de meilleures chaînes de processus démocratiques.", body: "La technologie ne remplace ni l’État de droit, ni la protection des minorités, ni l’expertise. Elle peut cependant relier de façon traçable problèmes, compétences, sources, alternatives et conséquences." },
      { id: "rgf-thesis-no-special-rights", title: "L’initiateur ne doit disposer d’aucun privilège sur la vérité ou la pondération.", body: "Une infrastructure démocratique crédible doit rendre les thèses personnelles aussi vérifiables que les positions opposées. L’origine ne remplace pas la preuve." },
    ],
  },
  es: {
    eyebrow: "Puntos de partida personales del iniciador",
    title: "Tesis de Ricky Gerd Fleischer sobre la evolución de la democracia.",
    intro:
      "Estas tesis son puntos de partida personales de Ricky Gerd Fleischer. No son acuerdos ni posiciones vinculantes de VoiceOpenGov y deben poder ser discutidas, demostradas, modificadas o rechazadas públicamente.",
    separationTitle: "Persona, movimiento e infraestructura permanecen separados.",
    separationBody:
      "VoiceOpenGov organiza a las personas. eDebatte debe hacer trazables argumentos, fuentes, posiciones contrarias y decisiones. Ninguna tesis personal del iniciador recibe privilegios allí.",
    testLabel: "Examinar la tesis en eDebatte",
    questionsLabel: "Ver las 50 preguntas públicas",
    theses: [
      { id: "rgf-thesis-democracy-update", title: "La democracia no es un sistema operativo terminado.", body: "Los valores democráticos fundamentales no deben sustituirse, pero los procedimientos con los que una sociedad organiza participación, representación y responsabilidad deben poder evolucionar." },
      { id: "rgf-thesis-between-elections", title: "La legitimidad política no debería ser visible solo en las elecciones.", body: "Las elecciones siguen siendo centrales. Entre ellas, una democracia moderna debería crear mejores canales verificables de retroalimentación sin convertirse en una votación permanente." },
      { id: "rgf-thesis-parties-are-not-democracy", title: "Los partidos son un instrumento de la democracia, no su definición completa.", body: "Los partidos cumplen funciones importantes. Aun así, la participación democrática no debería depender de una adhesión permanente a un partido o paquete político completo." },
      { id: "rgf-thesis-digital-participation", title: "Una sociedad digital necesita mejores cadenas de procesos democráticos.", body: "La tecnología no sustituye al Estado de derecho, la protección de minorías ni la experiencia. Sí puede conectar de forma trazable problemas, competencias, fuentes, alternativas y consecuencias." },
      { id: "rgf-thesis-no-special-rights", title: "El iniciador no debe tener privilegios sobre la verdad o la ponderación.", body: "Una infraestructura democrática creíble debe hacer las tesis personales tan verificables como las posiciones opuestas. El origen no sustituye a la evidencia." },
    ],
  },
  tr: {
    eyebrow: "Girişimcinin kişisel başlangıç noktaları",
    title: "Ricky Gerd Fleischer’in demokrasinin geliştirilmesine ilişkin tezleri.",
    intro:
      "Bu tezler Ricky Gerd Fleischer’in kişisel başlangıç noktalarıdır. VoiceOpenGov’un kararı veya bağlayıcı görüşü değildir; kamusal olarak eleştirilebilmeli, kanıtlanabilmeli, değiştirilebilmeli veya reddedilebilmelidir.",
    separationTitle: "Kişi, hareket ve altyapı ayrı kalır.",
    separationBody:
      "VoiceOpenGov insanları örgütler. eDebatte argümanları, kaynakları, karşı görüşleri ve kararları izlenebilir kılmayı amaçlar. Girişimcinin hiçbir kişisel tezi orada özel haklara sahip değildir.",
    testLabel: "Tezi eDebatte’de incele",
    questionsLabel: "50 açık soruya git",
    theses: [
      { id: "rgf-thesis-democracy-update", title: "Demokrasi tamamlanmış bir işletim sistemi değildir.", body: "Demokratik temel değerler değiştirilmemelidir. Ancak katılım, temsil ve sorumluluğu düzenleyen süreçler gelişebilmelidir." },
      { id: "rgf-thesis-between-elections", title: "Siyasi meşruiyet yalnızca seçim anında görünür olmamalıdır.", body: "Seçimler merkezi önemini korur. Aynı zamanda modern demokrasi seçimler arasında daha iyi ve izlenebilir geri bildirim kanalları kurmalıdır; bu sürekli oylama anlamına gelmez." },
      { id: "rgf-thesis-parties-are-not-democracy", title: "Partiler demokrasinin bir aracıdır, tamamının tanımı değildir.", body: "Partiler önemli görevler üstlenir. Yine de demokratik katılım insanların sürekli olarak bir partiye veya tüm siyasi pakete bağlanmasına bağlı olmamalıdır." },
      { id: "rgf-thesis-digital-participation", title: "Dijital toplum daha iyi demokratik süreç zincirlerine ihtiyaç duyar.", body: "Teknoloji hukuk devletinin, azınlık korumasının veya uzmanlığın yerini tutmaz. Ancak sorunları, yetkileri, kaynakları, alternatifleri ve sonuçları izlenebilir biçimde bağlayabilir." },
      { id: "rgf-thesis-no-special-rights", title: "Girişimcinin doğruluk veya ağırlık konusunda özel hakkı olmamalıdır.", body: "Güvenilir bir demokratik altyapı kişisel tezleri de karşıt görüşler kadar sınanabilir kılmalıdır. Kaynak kişi, kanıtın yerine geçemez." },
    ],
  },
  ar: {
    eyebrow: "نقاط انطلاق شخصية للمبادر",
    title: "أطروحات Ricky Gerd Fleischer حول تطوير الديمقراطية.",
    intro:
      "هذه الأطروحات نقاط انطلاق شخصية لـ Ricky Gerd Fleischer. وهي ليست قرارات أو مواقف ملزمة لـ VoiceOpenGov، ويجب أن تكون قابلة للاعتراض والإثبات والتعديل أو الرفض علناً.",
    separationTitle: "يبقى الشخص والحركة والبنية التحتية منفصلين.",
    separationBody:
      "تنظم VoiceOpenGov الناس، بينما تهدف eDebatte إلى جعل الحجج والمصادر والآراء المقابلة والقرارات قابلة للتتبع. ولا تحصل أي أطروحة شخصية للمبادر على امتياز خاص هناك.",
    testLabel: "اختبار الأطروحة على eDebatte",
    questionsLabel: "الانتقال إلى الأسئلة العامة الخمسين",
    theses: [
      { id: "rgf-thesis-democracy-update", title: "الديمقراطية ليست نظام تشغيل مكتملًا.", body: "لا ينبغي استبدال القيم الديمقراطية الأساسية، لكن يجب أن تكون الإجراءات التي تنظم المشاركة والتمثيل والمسؤولية قابلة للتطوير." },
      { id: "rgf-thesis-between-elections", title: "لا ينبغي أن تظهر الشرعية السياسية فقط في لحظة الانتخابات.", body: "تبقى الانتخابات أساسية، لكن الديمقراطية الحديثة تحتاج أيضاً إلى قنوات رجع صدى أفضل وقابلة للتتبع بين الانتخابات من دون التحول إلى تصويت دائم." },
      { id: "rgf-thesis-parties-are-not-democracy", title: "الأحزاب أداة من أدوات الديمقراطية وليست تعريفها الكامل.", body: "تؤدي الأحزاب وظائف مهمة، لكن المشاركة الديمقراطية لا ينبغي أن تعتمد على التزام دائم بحزب أو بحزمة سياسية كاملة." },
      { id: "rgf-thesis-digital-participation", title: "المجتمع الرقمي يحتاج إلى سلاسل عمليات ديمقراطية أفضل.", body: "لا تحل التقنية محل سيادة القانون أو حماية الأقليات أو الخبرة، لكنها تستطيع ربط القضايا والاختصاصات والمصادر والبدائل والنتائج بطريقة قابلة للتتبع." },
      { id: "rgf-thesis-no-special-rights", title: "يجب ألا يملك المبادر امتيازاً خاصاً في الحقيقة أو وزن الآراء.", body: "يجب أن تجعل البنية الديمقراطية الموثوقة الأطروحات الشخصية قابلة للاختبار مثل الآراء المعارضة. لا يجوز أن يحل مصدر القول محل الدليل." },
    ],
  },
};
