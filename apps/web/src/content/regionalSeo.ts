import type { SupportedLocale } from "@/config/locales";

export type RegionalSeoLocale = "de" | "en" | "fr" | "es" | "tr" | "ar";

export function regionalSeoLocale(locale: SupportedLocale): RegionalSeoLocale {
  return ["de", "en", "fr", "es", "tr", "ar"].includes(locale)
    ? (locale as RegionalSeoLocale)
    : "en";
}

type RegionalCopy = {
  hub: {
    eyebrow: string;
    title: string;
    intro: string;
    principle: string;
    germanyTitle: string;
    germanyText: string;
    berlinTitle: string;
    berlinText: string;
    action: string;
  };
  germany: {
    eyebrow: string;
    title: string;
    intro: string;
    whyTitle: string;
    whyText: string;
    modelTitle: string;
    modelText: string;
    guardrailTitle: string;
    guardrailText: string;
    berlinAction: string;
    regionalAction: string;
  };
  berlin: {
    eyebrow: string;
    title: string;
    intro: string;
    localTitle: string;
    localText: string;
    processTitle: string;
    processText: string;
    honestyTitle: string;
    honestyText: string;
    action: string;
  };
};

export const REGIONAL_SEO_COPY: Record<RegionalSeoLocale, RegionalCopy> = {
  de: {
    hub: {
      eyebrow: "VoiceOpenGov vor Ort",
      title: "Demokratie beginnt nicht irgendwo. Sie beginnt dort, wo Menschen leben.",
      intro:
        "VoiceOpenGov baut regionale Einstiege auf, damit aus einer Frage, Erfahrung oder Idee ein nachvollziehbarer Weg zu anderen Menschen, Quellen, Zuständigkeiten und – wenn sinnvoll – zu eDebatte entstehen kann.",
      principle:
        "Regionale Seiten behaupten keine Gruppen, Mehrheiten oder Veranstaltungen, die es nicht nachweislich gibt. Sie schaffen einen auffindbaren Einstieg und machen transparent, was bereits existiert und was erst aufgebaut wird.",
      germanyTitle: "Deutschland",
      germanyText:
        "Bund, Länder und Kommunen teilen Verantwortung. Der Deutschland-Hub ordnet Beteiligung deshalb nach Ebene statt alles in einen einzigen politischen Raum zu pressen.",
      berlinTitle: "Berlin",
      berlinText:
        "Erster regionaler Einstieg: lokale Fragen sichtbar machen, Zuständigkeiten unterscheiden und Menschen ohne Parteibindung zusammenbringen.",
      action: "Regional aktiv werden",
    },
    germany: {
      eyebrow: "Deutschland · Regionaler Hub",
      title: "VoiceOpenGov in Deutschland: Beteiligung zwischen Kommune, Land und Bund nachvollziehbar machen.",
      intro:
        "Deutschland ist föderal organisiert. Viele politische Fragen lassen sich deshalb nur sinnvoll bearbeiten, wenn sichtbar bleibt, welche Ebene tatsächlich entscheiden kann und wo Verantwortung geteilt wird.",
      whyTitle: "Warum ein eigener Deutschland-Hub?",
      whyText:
        "Eine lokale Erfahrung kann kommunal lösbar sein, landesrechtliche Ursachen haben oder vom Bund abhängen. Der regionale Aufbau soll diese Wege verständlich machen, ohne Zuständigkeit vorzutäuschen.",
      modelTitle: "Von der Region zur gemeinsamen Prüfung",
      modelText:
        "VoiceOpenGov verbindet Menschen und regionale Anliegen. eDebatte bleibt die getrennte Infrastruktur für Quellen, Gegenpositionen, Dossiers und nachvollziehbare Entscheidungen.",
      guardrailTitle: "Keine künstliche Repräsentativität",
      guardrailText:
        "Ein regionaler Einstieg ist keine Behauptung, für Berlin, Brandenburg oder Deutschland zu sprechen. Repräsentativität muss belegt werden – sie entsteht nicht durch eine Webseite.",
      berlinAction: "Berlin öffnen",
      regionalAction: "In meiner Region aktiv werden",
    },
    berlin: {
      eyebrow: "Deutschland · Berlin",
      title: "VoiceOpenGov Berlin: vom lokalen Problem zur prüfbaren demokratischen Frage.",
      intro:
        "Berlin verbindet Bezirk, Land und Bundespolitik auf engem Raum. Genau deshalb eignet sich die Stadt als erster regionaler Lernraum: Was ist lokal lösbar, was braucht das Land und was gehört auf Bundesebene?",
      localTitle: "Nicht nur melden – gemeinsam durchdenken",
      localText:
        "Petition, Bürgerbüro, Einwohneranfrage und Demonstration bleiben wichtige Wege. VoiceOpenGov ergänzt den Raum davor und dazwischen: Problem verstehen, Alternativen sammeln, Folgen prüfen und Zuständigkeit klären.",
      processTitle: "Ein nachvollziehbarer Weg",
      processText:
        "Regionale Vernetzung findet bei VoiceOpenGov statt. Sachliche Prüfung, Quellen und Gegenpositionen sollen über eDebatte dokumentiert werden, damit Bewegung und Infrastruktur institutionell getrennt bleiben.",
      honestyTitle: "Aufbauzustand sichtbar lassen",
      honestyText:
        "Diese Seite behauptet keine bestehende Berliner Gruppe, Veranstaltung oder Mitgliederzahl. Sie ist der öffentliche Einstieg für Menschen, die regional informiert bleiben oder den ersten Kontakt anstoßen möchten.",
      action: "In Berlin aktiv werden",
    },
  },
  en: {
    hub: {
      eyebrow: "VoiceOpenGov locally",
      title: "Democracy does not begin somewhere else. It begins where people live.",
      intro:
        "VoiceOpenGov is building regional entry points so a question, experience or idea can move into a traceable path toward people, sources, responsible institutions and, where useful, eDebatte.",
      principle:
        "Regional pages do not invent groups, majorities or events. They provide a discoverable entry point and distinguish clearly between what exists and what is still being built.",
      germanyTitle: "Germany",
      germanyText:
        "Federal, state and local levels share responsibility. The Germany hub therefore organizes participation by level instead of collapsing everything into one political space.",
      berlinTitle: "Berlin",
      berlinText:
        "First regional entry point: make local questions visible, distinguish responsibilities and connect people without requiring party affiliation.",
      action: "Get active locally",
    },
    germany: {
      eyebrow: "Germany · Regional hub",
      title: "VoiceOpenGov in Germany: make participation across local, state and federal levels traceable.",
      intro:
        "Germany is a federal system. Many public questions can only be handled responsibly when it remains clear which level can decide and where responsibility is shared.",
      whyTitle: "Why a Germany hub?",
      whyText:
        "A local experience may have a municipal solution, a state-law cause or depend on federal policy. The regional structure should make these paths understandable without pretending authority.",
      modelTitle: "From a region to shared examination",
      modelText:
        "VoiceOpenGov connects people and regional concerns. eDebatte remains the separate infrastructure for sources, counterpositions, dossiers and traceable decisions.",
      guardrailTitle: "No artificial representativeness",
      guardrailText:
        "A regional entry point does not mean speaking for Berlin, Brandenburg or Germany. Representativeness must be evidenced; it is not created by a webpage.",
      berlinAction: "Open Berlin",
      regionalAction: "Get active in my region",
    },
    berlin: {
      eyebrow: "Germany · Berlin",
      title: "VoiceOpenGov Berlin: from a local problem to a testable democratic question.",
      intro:
        "Berlin combines district, state and federal politics in one city. That makes it a useful first regional learning space: what can be solved locally, what needs the state and what belongs at federal level?",
      localTitle: "Not only report it – think it through together",
      localText:
        "Petitions, public offices, resident inquiries and demonstrations remain important. VoiceOpenGov adds the space before and between them: understand the problem, collect alternatives, examine consequences and clarify responsibility.",
      processTitle: "A traceable path",
      processText:
        "Regional connection belongs to VoiceOpenGov. Evidence, sources and counterpositions should be documented through eDebatte so movement and infrastructure remain institutionally separate.",
      honestyTitle: "Keep the build state visible",
      honestyText:
        "This page does not claim an existing Berlin group, event or membership count. It is a public entry point for people who want regional updates or want to initiate first contact.",
      action: "Get active in Berlin",
    },
  },
  fr: {
    hub: {
      eyebrow: "VoiceOpenGov localement",
      title: "La démocratie commence là où les gens vivent.",
      intro:
        "VoiceOpenGov construit des points d’entrée régionaux afin qu’une question, une expérience ou une idée puisse suivre un chemin vérifiable vers d’autres personnes, des sources, les autorités compétentes et, si utile, eDebatte.",
      principle:
        "Les pages régionales n’inventent ni groupes, ni majorités, ni événements. Elles rendent l’accès trouvable et distinguent clairement ce qui existe de ce qui est encore en construction.",
      germanyTitle: "Allemagne",
      germanyText:
        "Le niveau fédéral, les Länder et les communes partagent les responsabilités. Le hub allemand organise donc la participation selon le niveau concerné.",
      berlinTitle: "Berlin",
      berlinText:
        "Premier point d’entrée régional : rendre les questions locales visibles, distinguer les compétences et relier les personnes sans exiger d’appartenance partisane.",
      action: "Agir dans ma région",
    },
    germany: {
      eyebrow: "Allemagne · Hub régional",
      title: "VoiceOpenGov en Allemagne : rendre la participation entre commune, Land et Fédération vérifiable.",
      intro:
        "L’Allemagne est fédérale. De nombreuses questions ne peuvent être traitées correctement que si l’on voit clairement quel niveau peut décider et où la responsabilité est partagée.",
      whyTitle: "Pourquoi un hub allemand ?",
      whyText:
        "Une expérience locale peut relever de la commune, du droit d’un Land ou de la politique fédérale. La structure régionale doit rendre ces chemins compréhensibles sans prétendre détenir une compétence.",
      modelTitle: "De la région à l’examen commun",
      modelText:
        "VoiceOpenGov relie les personnes et les préoccupations régionales. eDebatte reste l’infrastructure séparée pour les sources, contre-positions, dossiers et décisions vérifiables.",
      guardrailTitle: "Pas de représentativité artificielle",
      guardrailText:
        "Un point d’entrée régional ne signifie pas parler au nom de Berlin, du Brandebourg ou de l’Allemagne. La représentativité doit être démontrée.",
      berlinAction: "Ouvrir Berlin",
      regionalAction: "Agir dans ma région",
    },
    berlin: {
      eyebrow: "Allemagne · Berlin",
      title: "VoiceOpenGov Berlin : d’un problème local à une question démocratique vérifiable.",
      intro:
        "Berlin réunit politique d’arrondissement, du Land et fédérale dans une même ville. C’est un bon premier espace d’apprentissage régional pour distinguer les niveaux de décision.",
      localTitle: "Ne pas seulement signaler – réfléchir ensemble",
      localText:
        "Pétitions, services publics, questions citoyennes et manifestations restent importants. VoiceOpenGov ajoute l’espace pour comprendre le problème, comparer les alternatives et clarifier les responsabilités.",
      processTitle: "Un chemin vérifiable",
      processText:
        "La mise en réseau régionale relève de VoiceOpenGov. Les sources, preuves et contre-positions doivent être documentées via eDebatte afin de préserver la séparation institutionnelle.",
      honestyTitle: "Rendre visible l’état de construction",
      honestyText:
        "Cette page ne prétend pas qu’un groupe berlinois, un événement ou un nombre de membres existe déjà. Elle constitue un point d’entrée public.",
      action: "Agir à Berlin",
    },
  },
  es: {
    hub: {
      eyebrow: "VoiceOpenGov en tu región",
      title: "La democracia empieza donde vive la gente.",
      intro:
        "VoiceOpenGov crea puntos de entrada regionales para que una pregunta, experiencia o idea pueda seguir un camino verificable hacia personas, fuentes, instituciones responsables y, cuando sea útil, eDebatte.",
      principle:
        "Las páginas regionales no inventan grupos, mayorías ni eventos. Hacen visible el punto de entrada y separan claramente lo que ya existe de lo que aún se está construyendo.",
      germanyTitle: "Alemania",
      germanyText:
        "El nivel federal, los estados y los municipios comparten responsabilidades. Por eso el hub alemán organiza la participación según el nivel competente.",
      berlinTitle: "Berlín",
      berlinText:
        "Primer punto de entrada regional: hacer visibles las preguntas locales, distinguir competencias y conectar personas sin exigir afiliación partidista.",
      action: "Participar en mi región",
    },
    germany: {
      eyebrow: "Alemania · Hub regional",
      title: "VoiceOpenGov en Alemania: hacer trazable la participación entre municipio, estado y federación.",
      intro:
        "Alemania es un sistema federal. Muchas cuestiones solo pueden tratarse con responsabilidad si queda claro qué nivel puede decidir y dónde se comparte la responsabilidad.",
      whyTitle: "¿Por qué un hub de Alemania?",
      whyText:
        "Una experiencia local puede tener solución municipal, depender de una ley estatal o de una política federal. La estructura regional debe hacer comprensible ese recorrido sin fingir competencias.",
      modelTitle: "De la región al examen común",
      modelText:
        "VoiceOpenGov conecta personas y asuntos regionales. eDebatte sigue siendo la infraestructura separada para fuentes, posiciones contrarias, expedientes y decisiones trazables.",
      guardrailTitle: "Sin representatividad artificial",
      guardrailText:
        "Un punto de entrada regional no significa hablar en nombre de Berlín, Brandeburgo o Alemania. La representatividad debe demostrarse.",
      berlinAction: "Abrir Berlín",
      regionalAction: "Participar en mi región",
    },
    berlin: {
      eyebrow: "Alemania · Berlín",
      title: "VoiceOpenGov Berlín: de un problema local a una pregunta democrática verificable.",
      intro:
        "Berlín reúne política distrital, estatal y federal en una sola ciudad. Por eso es un buen primer espacio regional para aprender qué puede resolverse localmente y qué corresponde a otros niveles.",
      localTitle: "No solo denunciar: pensar juntos",
      localText:
        "Peticiones, oficinas públicas, consultas ciudadanas y manifestaciones siguen siendo importantes. VoiceOpenGov añade el espacio para entender el problema, comparar alternativas y aclarar responsabilidades.",
      processTitle: "Un camino trazable",
      processText:
        "La conexión regional pertenece a VoiceOpenGov. Las fuentes, evidencias y posiciones contrarias deben documentarse mediante eDebatte para mantener separadas la organización y la infraestructura.",
      honestyTitle: "Mostrar el estado real de construcción",
      honestyText:
        "Esta página no afirma que ya exista un grupo de Berlín, un evento o una cifra de miembros. Es un punto de entrada público.",
      action: "Participar en Berlín",
    },
  },
  tr: {
    hub: {
      eyebrow: "VoiceOpenGov yerelde",
      title: "Demokrasi insanların yaşadığı yerde başlar.",
      intro:
        "VoiceOpenGov, bir soru, deneyim veya fikrin insanlara, kaynaklara, sorumlu kurumlara ve gerektiğinde eDebatte’ye izlenebilir bir yoldan ulaşabilmesi için bölgesel giriş noktaları kurar.",
      principle:
        "Bölgesel sayfalar var olmayan grup, çoğunluk veya etkinlikler iddia etmez. Var olan ile henüz kurulmakta olanı açıkça ayırır.",
      germanyTitle: "Almanya",
      germanyText:
        "Federal, eyalet ve belediye düzeyleri sorumluluğu paylaşır. Almanya merkezi bu nedenle katılımı yetki düzeyine göre düzenler.",
      berlinTitle: "Berlin",
      berlinText:
        "İlk bölgesel giriş: yerel soruları görünür kılmak, yetkileri ayırmak ve parti üyeliği gerektirmeden insanları bağlamak.",
      action: "Bölgemde katıl",
    },
    germany: {
      eyebrow: "Almanya · Bölgesel merkez",
      title: "Almanya’da VoiceOpenGov: belediye, eyalet ve federal düzeyler arasındaki katılımı izlenebilir kılmak.",
      intro:
        "Almanya federal bir sistemdir. Birçok kamusal mesele ancak hangi düzeyin karar verebildiği ve sorumluluğun nerede paylaşıldığı açık olduğunda sağlıklı biçimde ele alınabilir.",
      whyTitle: "Neden Almanya merkezi?",
      whyText:
        "Yerel bir deneyimin belediye çözümü, eyalet hukuku nedeni veya federal politika bağlantısı olabilir. Bölgesel yapı bu yolları yetki iddiasında bulunmadan anlaşılır kılmalıdır.",
      modelTitle: "Bölgeden ortak incelemeye",
      modelText:
        "VoiceOpenGov insanları ve bölgesel konuları bir araya getirir. eDebatte kaynaklar, karşı görüşler, dosyalar ve izlenebilir kararlar için ayrı altyapı olarak kalır.",
      guardrailTitle: "Yapay temsiliyet yok",
      guardrailText:
        "Bölgesel bir giriş noktası Berlin, Brandenburg veya Almanya adına konuşmak anlamına gelmez. Temsiliyet kanıtlanmalıdır.",
      berlinAction: "Berlin’i aç",
      regionalAction: "Bölgemde katıl",
    },
    berlin: {
      eyebrow: "Almanya · Berlin",
      title: "VoiceOpenGov Berlin: yerel bir sorundan sınanabilir demokratik bir soruya.",
      intro:
        "Berlin ilçe, eyalet ve federal siyaseti tek şehirde buluşturur. Bu nedenle hangi konunun yerel, eyalet veya federal düzeyde çözülebileceğini öğrenmek için iyi bir ilk bölgesel alandır.",
      localTitle: "Sadece bildirmek değil – birlikte düşünmek",
      localText:
        "Dilekçeler, kamu kurumları, yurttaş soruları ve gösteriler önemini korur. VoiceOpenGov bunların öncesine ve arasına sorunu anlama, alternatifleri karşılaştırma ve sorumluluğu netleştirme alanı ekler.",
      processTitle: "İzlenebilir bir yol",
      processText:
        "Bölgesel bağlantı VoiceOpenGov’a aittir. Kaynaklar, kanıtlar ve karşı görüşler eDebatte üzerinden belgelenmelidir; böylece hareket ile altyapı ayrı kalır.",
      honestyTitle: "Kurulum durumunu görünür tutmak",
      honestyText:
        "Bu sayfa mevcut bir Berlin grubu, etkinliği veya üye sayısı olduğunu iddia etmez. Bölgesel olarak bilgi almak veya ilk teması başlatmak isteyenler için kamusal bir giriş noktasıdır.",
      action: "Berlin’de katıl",
    },
  },
  ar: {
    hub: {
      eyebrow: "VoiceOpenGov محلياً",
      title: "الديمقراطية تبدأ حيث يعيش الناس.",
      intro:
        "تبني VoiceOpenGov نقاط دخول إقليمية كي تنتقل الفكرة أو التجربة أو السؤال عبر مسار قابل للتتبع نحو الناس والمصادر والجهات المسؤولة، وعند الحاجة إلى eDebatte.",
      principle:
        "لا تدّعي الصفحات الإقليمية وجود مجموعات أو أغلبيات أو فعاليات غير مثبتة. بل تميّز بوضوح بين ما هو موجود وما يزال قيد البناء.",
      germanyTitle: "ألمانيا",
      germanyText:
        "تتقاسم المستويات الاتحادية والولايات والبلديات المسؤولية. لذلك ينظم مركز ألمانيا المشاركة بحسب مستوى الاختصاص.",
      berlinTitle: "برلين",
      berlinText:
        "أول نقطة دخول إقليمية: إظهار الأسئلة المحلية، وتوضيح الاختصاصات، وربط الناس من دون اشتراط الانتماء الحزبي.",
      action: "المشاركة في منطقتي",
    },
    germany: {
      eyebrow: "ألمانيا · مركز إقليمي",
      title: "VoiceOpenGov في ألمانيا: جعل المشاركة بين البلدية والولاية والمستوى الاتحادي قابلة للتتبع.",
      intro:
        "ألمانيا دولة اتحادية. ولا يمكن معالجة كثير من القضايا العامة بمسؤولية إلا إذا كان واضحاً أي مستوى يستطيع اتخاذ القرار وأين تتقاسم الجهات المسؤولية.",
      whyTitle: "لماذا مركز خاص بألمانيا؟",
      whyText:
        "قد تكون للتجربة المحلية معالجة بلدية أو سبب في قانون الولاية أو ارتباط بسياسة اتحادية. ينبغي للبنية الإقليمية أن توضح هذه المسارات من دون ادعاء سلطة ليست لها.",
      modelTitle: "من المنطقة إلى الفحص المشترك",
      modelText:
        "تربط VoiceOpenGov الناس والقضايا الإقليمية. وتبقى eDebatte بنية منفصلة للمصادر والآراء المقابلة والملفات والقرارات القابلة للتتبع.",
      guardrailTitle: "لا تمثيل مصطنع",
      guardrailText:
        "وجود نقطة دخول إقليمية لا يعني التحدث باسم برلين أو براندنبورغ أو ألمانيا. التمثيل يحتاج إلى دليل.",
      berlinAction: "فتح برلين",
      regionalAction: "المشاركة في منطقتي",
    },
    berlin: {
      eyebrow: "ألمانيا · برلين",
      title: "VoiceOpenGov برلين: من مشكلة محلية إلى سؤال ديمقراطي قابل للاختبار.",
      intro:
        "تجمع برلين سياسة الأحياء والولاية والسياسة الاتحادية في مدينة واحدة، ولذلك تصلح كمساحة تعلم إقليمية أولى لتمييز مستويات القرار.",
      localTitle: "ليس الإبلاغ فقط – بل التفكير معاً",
      localText:
        "تظل العرائض والمكاتب العامة واستفسارات السكان والمظاهرات وسائل مهمة. وتضيف VoiceOpenGov مساحة لفهم المشكلة ومقارنة البدائل وتوضيح المسؤوليات.",
      processTitle: "مسار قابل للتتبع",
      processText:
        "الربط الإقليمي من مهام VoiceOpenGov. أما المصادر والأدلة والآراء المقابلة فينبغي توثيقها عبر eDebatte للحفاظ على الفصل المؤسسي.",
      honestyTitle: "إظهار حالة البناء كما هي",
      honestyText:
        "لا تدّعي هذه الصفحة وجود مجموعة في برلين أو فعالية أو عدد أعضاء قائم بالفعل. إنها نقطة دخول عامة لمن يريد المتابعة أو بدء أول تواصل.",
      action: "المشاركة في برلين",
    },
  },
};
