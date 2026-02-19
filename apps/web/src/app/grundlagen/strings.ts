import { DEFAULT_LOCALE, type SupportedLocale } from "@/config/locales";

export type GrundlagenSection = {
  id: string;
  title: string;
  body: string[];
};

export type GrundlagenEntry = {
  slug: string;
  title: string;
  subtitle: string;
  intro: string;
  meta: { title: string; description: string };
  sections: GrundlagenSection[];
};

type GrundlagenStrings = {
  label: string;
  tocLabel: string;
  supportNote: string;
  ctas: { join: string; support: string };
  entries: GrundlagenEntry[];
};

const STRINGS: Record<SupportedLocale, GrundlagenStrings> = {
  de: {
    label: "Grundlagen",
    tocLabel: "Inhaltsübersicht",
    supportNote:
      "Alle Texte sind kostenfrei. Wenn es hilft, freuen wir uns über Unterstützung/Spenden – wir bauen unabhängig ohne Investor.",
    ctas: {
      join: "Jetzt mitwirken",
      support: "Initiative unterstützen",
    },
    entries: [
      {
        slug: "weissbuch",
        title: "Weißbuch",
        subtitle: "Analyse des Problemraums",
        intro:
          "Das Weißbuch bündelt den Problemraum moderner Beteiligung und beschreibt, warum nachvollziehbare Prozesse heute fehlen.",
        meta: {
          title: "Weißbuch – Grundlagen – VoiceOpenGov",
          description: "Analyse struktureller Herausforderungen moderner Beteiligung.",
        },
        sections: [
          {
            id: "problem",
            title: "Problemraum",
            body: [
              "Strukturelle Überlastung und Informationsfragmentierung erschweren Beteiligung.",
              "Fehlende Status-Transparenz macht Entscheidungen schwer nachvollziehbar.",
            ],
          },
          {
            id: "goal",
            title: "Zielsetzung",
            body: [
              "Das Weißbuch formuliert Anforderungen an prüfbare Prozesse und offene Dokumentation.",
            ],
          },
        ],
      },
      {
        slug: "legitimation-2-0",
        title: "Legitimation 2.0",
        subtitle: "Governance-Modell für nachvollziehbare Entscheidungen",
        intro:
          "Legitimation 2.0 beschreibt, wie Verantwortlichkeiten, Rollen und Entscheidungsdimensionen sichtbar werden.",
        meta: {
          title: "Legitimation 2.0 – Grundlagen – VoiceOpenGov",
          description: "Governance-Modell für prüfbare und nachvollziehbare Entscheidungen.",
        },
        sections: [
          {
            id: "governance",
            title: "Governance-Modell",
            body: [
              "Legitimation 2.0 definiert Rollen, Verantwortlichkeiten und Entscheidungsdimensionen.",
            ],
          },
          {
            id: "verifiability",
            title: "Prüfbarkeit",
            body: [
              "Begründungen, Status und Zuständigkeiten bleiben nachvollziehbar und zuordenbar.",
            ],
          },
        ],
      },
      {
        slug: "repro",
        title: "RePro",
        subtitle: "Methode und Operationalisierung",
        intro:
          "RePro übersetzt das Modell in einen klaren Prozess, der in VoiceOpenGov umgesetzt wird.",
        meta: {
          title: "RePro – Grundlagen – VoiceOpenGov",
          description: "Methodische Operationalisierung von Check, Dossier, Beteiligung und Status.",
        },
        sections: [
          {
            id: "method",
            title: "Methode",
            body: [
              "Operationalisiert Check → Dossier → Beteiligung → Status als formale Entscheidungslogik.",
            ],
          },
          {
            id: "application",
            title: "Anwendung",
            body: [
              "Macht Ergebnisse vergleichbar und Fortschritt sichtbar – vom Beschluss bis zur Umsetzung.",
            ],
          },
        ],
      },
    ],
  },
  en: {
    label: "Foundations",
    tocLabel: "Table of contents",
    supportNote:
      "All texts are free to read. If it helps, we appreciate support/donations — we build independently, without investors.",
    ctas: {
      join: "Participate now",
      support: "Support the initiative",
    },
    entries: [
      {
        slug: "weissbuch",
        title: "Weißbuch",
        subtitle: "Analysis of the problem space",
        intro:
          "The Weißbuch consolidates the problem space of modern participation and why traceable processes are missing today.",
        meta: {
          title: "Weißbuch – Foundations – VoiceOpenGov",
          description: "Analysis of structural challenges in modern participation.",
        },
        sections: [
          {
            id: "problem",
            title: "Problem space",
            body: [
              "Institutional overload and fragmented information make participation hard to trace.",
              "Missing status transparency makes decisions difficult to evaluate.",
            ],
          },
          {
            id: "goal",
            title: "Objective",
            body: [
              "The Weißbuch defines requirements for verifiable processes and open documentation.",
            ],
          },
        ],
      },
      {
        slug: "legitimation-2-0",
        title: "Legitimation 2.0",
        subtitle: "Governance model for traceable decisions",
        intro:
          "Legitimation 2.0 explains how responsibilities, roles and decision dimensions become explicit.",
        meta: {
          title: "Legitimation 2.0 – Foundations – VoiceOpenGov",
          description: "Governance model for verifiable and traceable decisions.",
        },
        sections: [
          {
            id: "governance",
            title: "Governance model",
            body: [
              "Legitimation 2.0 defines roles, responsibilities and decision dimensions.",
            ],
          },
          {
            id: "verifiability",
            title: "Verifiability",
            body: [
              "Reasoning, status and responsibility remain traceable and assignable.",
            ],
          },
        ],
      },
      {
        slug: "repro",
        title: "RePro",
        subtitle: "Method and operationalization",
        intro:
          "RePro translates the model into a clear process that is implemented in VoiceOpenGov.",
        meta: {
          title: "RePro – Foundations – VoiceOpenGov",
          description: "Methodical operationalization of Check, Dossier, Participation and Status.",
        },
        sections: [
          {
            id: "method",
            title: "Method",
            body: [
              "Operationalizes Check → Dossier → Participation → Status as a formal decision logic.",
            ],
          },
          {
            id: "application",
            title: "Application",
            body: [
              "Makes outcomes comparable and progress visible — from decision to implementation.",
            ],
          },
        ],
      },
    ],
  },
  fr: {
    label: "Fondations",
    tocLabel: "Sommaire",
    supportNote:
      "Tous les textes sont en accès libre. Si cela aide, nous apprécions les soutiens/dons — nous construisons de manière indépendante, sans investisseurs.",
    ctas: {
      join: "Participer maintenant",
      support: "Soutenir l'initiative",
    },
    entries: [
      {
        slug: "weissbuch",
        title: "Weißbuch",
        subtitle: "Analyse du problème",
        intro:
          "Le Weißbuch rassemble l'espace problème de la participation moderne et explique pourquoi les processus traçables manquent aujourd'hui.",
        meta: {
          title: "Weißbuch – Fondations – VoiceOpenGov",
          description: "Analyse des défis structurels de la participation moderne.",
        },
        sections: [
          {
            id: "problem",
            title: "Problématique",
            body: [
              "La surcharge institutionnelle et la fragmentation de l'information compliquent la participation.",
              "L'absence de transparence de statut rend les décisions difficiles à évaluer.",
            ],
          },
          {
            id: "goal",
            title: "Objectif",
            body: [
              "Le Weißbuch définit les exigences de processus vérifiables et de documentation ouverte.",
            ],
          },
        ],
      },
      {
        slug: "legitimation-2-0",
        title: "Legitimation 2.0",
        subtitle: "Modèle de gouvernance pour des décisions traçables",
        intro:
          "Legitimation 2.0 explique comment responsabilités, rôles et dimensions de décision deviennent explicites.",
        meta: {
          title: "Legitimation 2.0 – Fondations – VoiceOpenGov",
          description: "Modèle de gouvernance pour des décisions vérifiables et traçables.",
        },
        sections: [
          {
            id: "governance",
            title: "Modèle de gouvernance",
            body: [
              "Legitimation 2.0 définit les rôles, responsabilités et dimensions de décision.",
            ],
          },
          {
            id: "verifiability",
            title: "Vérifiabilité",
            body: [
              "Les raisons, le statut et la responsabilité restent traçables et attribuables.",
            ],
          },
        ],
      },
      {
        slug: "repro",
        title: "RePro",
        subtitle: "Méthode et opérationnalisation",
        intro:
          "RePro traduit le modèle en un processus clair mis en œuvre dans VoiceOpenGov.",
        meta: {
          title: "RePro – Fondations – VoiceOpenGov",
          description: "Opérationnalisation méthodique de Check, Dossier, Participation et Statut.",
        },
        sections: [
          {
            id: "method",
            title: "Méthode",
            body: [
              "Opérationnalise Check → Dossier → Participation → Statut comme logique de décision formalisée.",
            ],
          },
          {
            id: "application",
            title: "Application",
            body: [
              "Rend les résultats comparables et la progression visible — de la décision à la mise en œuvre.",
            ],
          },
        ],
      },
    ],
  },
  pl: {
    label: "Podstawy",
    tocLabel: "Spis treści",
    supportNote:
      "Wszystkie teksty są bezpłatne. Jeśli to pomaga, będziemy wdzięczni za wsparcie/darowizny — działamy niezależnie, bez inwestorów.",
    ctas: {
      join: "Dołącz teraz",
      support: "Wesprzyj inicjatywę",
    },
    entries: [
      {
        slug: "weissbuch",
        title: "Weißbuch",
        subtitle: "Analiza problemu",
        intro:
          "Weißbuch porządkuje problematykę nowoczesnego uczestnictwa i wyjaśnia, dlaczego brakuje dziś weryfikowalnych procesów.",
        meta: {
          title: "Weißbuch – Podstawy – VoiceOpenGov",
          description: "Analiza strukturalnych wyzwań nowoczesnego uczestnictwa.",
        },
        sections: [
          {
            id: "problem",
            title: "Problem",
            body: [
              "Przeciążenie instytucji i fragmentacja informacji utrudniają udział.",
              "Brak przejrzystości statusu utrudnia ocenę decyzji.",
            ],
          },
          {
            id: "goal",
            title: "Cel",
            body: [
              "Weißbuch określa wymagania dla weryfikowalnych procesów i otwartej dokumentacji.",
            ],
          },
        ],
      },
      {
        slug: "legitimation-2-0",
        title: "Legitimation 2.0",
        subtitle: "Model zarządzania dla przejrzystych decyzji",
        intro:
          "Legitimation 2.0 pokazuje, jak role, odpowiedzialności i wymiary decyzji stają się widoczne.",
        meta: {
          title: "Legitimation 2.0 – Podstawy – VoiceOpenGov",
          description: "Model zarządzania dla weryfikowalnych i przejrzystych decyzji.",
        },
        sections: [
          {
            id: "governance",
            title: "Model zarządzania",
            body: [
              "Legitimation 2.0 definiuje role, odpowiedzialności i wymiary decyzji.",
            ],
          },
          {
            id: "verifiability",
            title: "Weryfikowalność",
            body: [
              "Uzasadnienia, status i odpowiedzialność pozostają przejrzyste i możliwe do przypisania.",
            ],
          },
        ],
      },
      {
        slug: "repro",
        title: "RePro",
        subtitle: "Metoda i operacjonalizacja",
        intro:
          "RePro przekłada model na klarowny proces wdrażany w VoiceOpenGov.",
        meta: {
          title: "RePro – Podstawy – VoiceOpenGov",
          description: "Metodyczna operacjonalizacja Check, Dossier, Udziału i Statusu.",
        },
        sections: [
          {
            id: "method",
            title: "Metoda",
            body: [
              "Operacjonalizuje Check → Dossier → Udział → Status jako formalną logikę decyzji.",
            ],
          },
          {
            id: "application",
            title: "Zastosowanie",
            body: [
              "Ułatwia porównywanie wyników i pokazuje postęp — od decyzji do wdrożenia.",
            ],
          },
        ],
      },
    ],
  },
  es: {
    label: "Fundamentos",
    tocLabel: "Índice",
    supportNote:
      "Todos los textos son gratuitos. Si ayuda, agradecemos el apoyo/donaciones — trabajamos de forma independiente, sin inversores.",
    ctas: {
      join: "Participa ahora",
      support: "Apoyar la iniciativa",
    },
    entries: [
      {
        slug: "weissbuch",
        title: "Weißbuch",
        subtitle: "Análisis del problema",
        intro:
          "El Weißbuch reúne el espacio del problema de la participación moderna y explica por qué faltan procesos verificables.",
        meta: {
          title: "Weißbuch – Fundamentos – VoiceOpenGov",
          description: "Análisis de los desafíos estructurales de la participación moderna.",
        },
        sections: [
          {
            id: "problem",
            title: "Problema",
            body: [
              "La sobrecarga institucional y la fragmentación de la información dificultan la participación.",
              "La falta de transparencia de estado complica evaluar decisiones.",
            ],
          },
          {
            id: "goal",
            title: "Objetivo",
            body: [
              "El Weißbuch define requisitos para procesos verificables y documentación abierta.",
            ],
          },
        ],
      },
      {
        slug: "legitimation-2-0",
        title: "Legitimation 2.0",
        subtitle: "Modelo de gobernanza para decisiones trazables",
        intro:
          "Legitimation 2.0 explica cómo se hacen explícitos los roles, responsabilidades y dimensiones de decisión.",
        meta: {
          title: "Legitimation 2.0 – Fundamentos – VoiceOpenGov",
          description: "Modelo de gobernanza para decisiones verificables y trazables.",
        },
        sections: [
          {
            id: "governance",
            title: "Modelo de gobernanza",
            body: [
              "Legitimation 2.0 define roles, responsabilidades y dimensiones de decisión.",
            ],
          },
          {
            id: "verifiability",
            title: "Verificabilidad",
            body: [
              "Las razones, el estado y la responsabilidad siguen siendo trazables y asignables.",
            ],
          },
        ],
      },
      {
        slug: "repro",
        title: "RePro",
        subtitle: "Método y operacionalización",
        intro:
          "RePro traduce el modelo en un proceso claro implementado en VoiceOpenGov.",
        meta: {
          title: "RePro – Fundamentos – VoiceOpenGov",
          description: "Operacionalización metódica de Check, Dossier, Participación y Estado.",
        },
        sections: [
          {
            id: "method",
            title: "Método",
            body: [
              "Operacionaliza Check → Dossier → Participación → Estado como lógica de decisión formalizada.",
            ],
          },
          {
            id: "application",
            title: "Aplicación",
            body: [
              "Hace comparables los resultados y visible el progreso — de la decisión a la implementación.",
            ],
          },
        ],
      },
    ],
  },
  it: {
    label: "Fondamenti",
    tocLabel: "Indice",
    supportNote:
      "Tutti i testi sono gratuiti. Se è utile, apprezziamo supporto/donazioni — lavoriamo in modo indipendente, senza investitori.",
    ctas: {
      join: "Partecipa ora",
      support: "Sostieni l'iniziativa",
    },
    entries: [
      {
        slug: "weissbuch",
        title: "Weißbuch",
        subtitle: "Analisi del problema",
        intro:
          "Il Weißbuch riunisce lo spazio del problema della partecipazione moderna e spiega perché mancano processi tracciabili.",
        meta: {
          title: "Weißbuch – Fondamenti – VoiceOpenGov",
          description: "Analisi delle sfide strutturali della partecipazione moderna.",
        },
        sections: [
          {
            id: "problem",
            title: "Problema",
            body: [
              "Il sovraccarico istituzionale e la frammentazione delle informazioni rendono difficile la partecipazione.",
              "La mancanza di trasparenza sullo stato rende difficile valutare le decisioni.",
            ],
          },
          {
            id: "goal",
            title: "Obiettivo",
            body: [
              "Il Weißbuch definisce requisiti per processi verificabili e documentazione aperta.",
            ],
          },
        ],
      },
      {
        slug: "legitimation-2-0",
        title: "Legitimation 2.0",
        subtitle: "Modello di governance per decisioni tracciabili",
        intro:
          "Legitimation 2.0 spiega come ruoli, responsabilità e dimensioni decisionali diventano esplicite.",
        meta: {
          title: "Legitimation 2.0 – Fondamenti – VoiceOpenGov",
          description: "Modello di governance per decisioni verificabili e tracciabili.",
        },
        sections: [
          {
            id: "governance",
            title: "Modello di governance",
            body: [
              "Legitimation 2.0 definisce ruoli, responsabilità e dimensioni decisionali.",
            ],
          },
          {
            id: "verifiability",
            title: "Verificabilità",
            body: [
              "Le motivazioni, lo stato e la responsabilità restano tracciabili e attribuibili.",
            ],
          },
        ],
      },
      {
        slug: "repro",
        title: "RePro",
        subtitle: "Metodo e operazionalizzazione",
        intro:
          "RePro traduce il modello in un processo chiaro implementato in VoiceOpenGov.",
        meta: {
          title: "RePro – Fondamenti – VoiceOpenGov",
          description: "Operazionalizzazione metodica di Check, Dossier, Partecipazione e Stato.",
        },
        sections: [
          {
            id: "method",
            title: "Metodo",
            body: [
              "Operazionalizza Check → Dossier → Partecipazione → Stato come logica decisionale formalizzata.",
            ],
          },
          {
            id: "application",
            title: "Applicazione",
            body: [
              "Rende comparabili i risultati e visibile il progresso — dalla decisione all'attuazione.",
            ],
          },
        ],
      },
    ],
  },
  tr: {
    label: "Temeller",
    tocLabel: "İçindekiler",
    supportNote:
      "Tüm metinler ücretsizdir. Faydalıysa destek/bağış memnuniyetle — bağımsız çalışıyoruz, yatırımcı yok.",
    ctas: {
      join: "Hemen katıl",
      support: "Girişimi destekle",
    },
    entries: [
      {
        slug: "weissbuch",
        title: "Weißbuch",
        subtitle: "Problem alanının analizi",
        intro:
          "Weißbuch, modern katılımın problem alanını toplar ve izlenebilir süreçlerin neden eksik olduğunu açıklar.",
        meta: {
          title: "Weißbuch – Temeller – VoiceOpenGov",
          description: "Modern katılımın yapısal zorluklarının analizi.",
        },
        sections: [
          {
            id: "problem",
            title: "Problem",
            body: [
              "Kurumsal aşırı yük ve bilgi parçalanması katılımı zorlaştırır.",
              "Statü şeffaflığının eksikliği kararların değerlendirilmesini güçleştirir.",
            ],
          },
          {
            id: "goal",
            title: "Hedef",
            body: [
              "Weißbuch, doğrulanabilir süreçler ve açık dokümantasyon için gereksinimleri tanımlar.",
            ],
          },
        ],
      },
      {
        slug: "legitimation-2-0",
        title: "Legitimation 2.0",
        subtitle: "İzlenebilir kararlar için yönetişim modeli",
        intro:
          "Legitimation 2.0, rollerin, sorumlulukların ve karar boyutlarının nasıl görünür olduğunu açıklar.",
        meta: {
          title: "Legitimation 2.0 – Temeller – VoiceOpenGov",
          description: "Doğrulanabilir ve izlenebilir kararlar için yönetişim modeli.",
        },
        sections: [
          {
            id: "governance",
            title: "Yönetişim modeli",
            body: [
              "Legitimation 2.0 rollerin, sorumlulukların ve karar boyutlarının tanımını yapar.",
            ],
          },
          {
            id: "verifiability",
            title: "Doğrulanabilirlik",
            body: [
              "Gerekçeler, statü ve sorumluluk izlenebilir ve atanabilir kalır.",
            ],
          },
        ],
      },
      {
        slug: "repro",
        title: "RePro",
        subtitle: "Yöntem ve operasyonelleştirme",
        intro:
          "RePro modeli, VoiceOpenGov içinde uygulanan net bir sürece dönüştürür.",
        meta: {
          title: "RePro – Temeller – VoiceOpenGov",
          description: "Check, Dossier, Katılım ve Statü için yöntemsel operasyonelleştirme.",
        },
        sections: [
          {
            id: "method",
            title: "Yöntem",
            body: [
              "Check → Dossier → Katılım → Statü sürecini biçimsel bir karar mantığı olarak işletir.",
            ],
          },
          {
            id: "application",
            title: "Uygulama",
            body: [
              "Sonuçları karşılaştırılabilir kılar ve ilerlemeyi görünür hale getirir.",
            ],
          },
        ],
      },
    ],
  },
  ar: {
    label: "الأسس",
    tocLabel: "المحتويات",
    supportNote:
      "جميع النصوص مجانية للقراءة. إذا كان ذلك مفيدًا فنحن نقدر الدعم/التبرعات — نعمل باستقلالية دون مستثمرين.",
    ctas: {
      join: "شارك الآن",
      support: "ادعم المبادرة",
    },
    entries: [
      {
        slug: "weissbuch",
        title: "Weißbuch",
        subtitle: "تحليل مساحة المشكلة",
        intro:
          "يجمع Weißbuch مساحة المشكلة للمشاركة الحديثة ويوضح لماذا تفتقر اليوم إلى عمليات قابلة للتتبع.",
        meta: {
          title: "Weißbuch – الأسس – VoiceOpenGov",
          description: "تحليل التحديات البنيوية للمشاركة الحديثة.",
        },
        sections: [
          {
            id: "problem",
            title: "المشكلة",
            body: [
              "ضغط المؤسسات وتجزؤ المعلومات يصعّبان المشاركة.",
              "غياب شفافية الحالة يجعل تقييم القرارات أصعب.",
            ],
          },
          {
            id: "goal",
            title: "الهدف",
            body: [
              "يحدد Weißbuch متطلبات العمليات القابلة للتحقق والتوثيق المفتوح.",
            ],
          },
        ],
      },
      {
        slug: "legitimation-2-0",
        title: "Legitimation 2.0",
        subtitle: "نموذج حوكمة لقرارات قابلة للتتبع",
        intro:
          "يوضح Legitimation 2.0 كيف تصبح الأدوار والمسؤوليات وأبعاد القرار واضحة.",
        meta: {
          title: "Legitimation 2.0 – الأسس – VoiceOpenGov",
          description: "نموذج حوكمة لقرارات قابلة للتحقق وقابلة للتتبع.",
        },
        sections: [
          {
            id: "governance",
            title: "نموذج الحوكمة",
            body: [
              "يعرّف Legitimation 2.0 الأدوار والمسؤوليات وأبعاد القرار.",
            ],
          },
          {
            id: "verifiability",
            title: "قابلية التحقق",
            body: [
              "تبقى الأسباب والحالة والمسؤولية قابلة للتتبع وقابلة للإسناد.",
            ],
          },
        ],
      },
      {
        slug: "repro",
        title: "RePro",
        subtitle: "المنهج والتشغيل",
        intro:
          "يحوّل RePro النموذج إلى عملية واضحة تُطبَّق داخل VoiceOpenGov.",
        meta: {
          title: "RePro – الأسس – VoiceOpenGov",
          description: "تشغيل منهجي لـ Check و Dossier والمشاركة والحالة.",
        },
        sections: [
          {
            id: "method",
            title: "المنهج",
            body: [
              "يشغّل Check → Dossier → مشاركة → حالة كمنطق قرار مُقنن.",
            ],
          },
          {
            id: "application",
            title: "التطبيق",
            body: [
              "يجعل النتائج قابلة للمقارنة ويُظهر التقدم من القرار إلى التنفيذ.",
            ],
          },
        ],
      },
    ],
  },
  ru: {
    label: "Основы",
    tocLabel: "Содержание",
    supportNote:
      "Все тексты бесплатны. Если это полезно, будем рады поддержке/пожертвованиям — мы работаем независимо, без инвесторов.",
    ctas: {
      join: "Участвовать сейчас",
      support: "Поддержать инициативу",
    },
    entries: [
      {
        slug: "weissbuch",
        title: "Weißbuch",
        subtitle: "Анализ проблемного поля",
        intro:
          "Weißbuch собирает проблемное поле современной вовлеченности и объясняет, почему сегодня не хватает прослеживаемых процессов.",
        meta: {
          title: "Weißbuch – Основы – VoiceOpenGov",
          description: "Анализ структурных вызовов современной вовлеченности.",
        },
        sections: [
          {
            id: "problem",
            title: "Проблема",
            body: [
              "Институциональная перегрузка и фрагментация информации затрудняют участие.",
              "Отсутствие прозрачности статуса осложняет оценку решений.",
            ],
          },
          {
            id: "goal",
            title: "Цель",
            body: [
              "Weißbuch определяет требования к проверяемым процессам и открытой документации.",
            ],
          },
        ],
      },
      {
        slug: "legitimation-2-0",
        title: "Legitimation 2.0",
        subtitle: "Модель управления для прослеживаемых решений",
        intro:
          "Legitimation 2.0 объясняет, как роли, ответственности и измерения решений становятся явными.",
        meta: {
          title: "Legitimation 2.0 – Основы – VoiceOpenGov",
          description: "Модель управления для проверяемых и прослеживаемых решений.",
        },
        sections: [
          {
            id: "governance",
            title: "Модель управления",
            body: [
              "Legitimation 2.0 определяет роли, ответственности и измерения решений.",
            ],
          },
          {
            id: "verifiability",
            title: "Проверяемость",
            body: [
              "Обоснования, статус и ответственность остаются прослеживаемыми и назначаемыми.",
            ],
          },
        ],
      },
      {
        slug: "repro",
        title: "RePro",
        subtitle: "Метод и операционализация",
        intro:
          "RePro переводит модель в понятный процесс, реализованный в VoiceOpenGov.",
        meta: {
          title: "RePro – Основы – VoiceOpenGov",
          description: "Методическая операционализация Check, Dossier, Участия и Статуса.",
        },
        sections: [
          {
            id: "method",
            title: "Метод",
            body: [
              "Операционализирует Check → Dossier → Участие → Статус как формальную логику решений.",
            ],
          },
          {
            id: "application",
            title: "Применение",
            body: [
              "Делает результаты сопоставимыми и показывает прогресс от решения до реализации.",
            ],
          },
        ],
      },
    ],
  },
  zh: {
    label: "基础",
    tocLabel: "目录",
    supportNote:
      "所有文本均可免费阅读。如果有帮助，感谢支持/捐助——我们独立运作，没有投资方。",
    ctas: {
      join: "立即参与",
      support: "支持该倡议",
    },
    entries: [
      {
        slug: "weissbuch",
        title: "Weißbuch",
        subtitle: "问题空间分析",
        intro:
          "Weißbuch 汇总现代参与的问题空间，并解释为何当下缺少可追溯流程。",
        meta: {
          title: "Weißbuch – 基础 – VoiceOpenGov",
          description: "分析现代参与的结构性挑战。",
        },
        sections: [
          {
            id: "problem",
            title: "问题",
            body: [
              "制度负荷与信息碎片化使参与变得困难。",
              "缺少状态透明度让决策难以评估。",
            ],
          },
          {
            id: "goal",
            title: "目标",
            body: [
              "Weißbuch 定义可核查流程与开放记录的要求。",
            ],
          },
        ],
      },
      {
        slug: "legitimation-2-0",
        title: "Legitimation 2.0",
        subtitle: "可追溯决策的治理模型",
        intro:
          "Legitimation 2.0 说明角色、责任与决策维度如何被明确呈现。",
        meta: {
          title: "Legitimation 2.0 – 基础 – VoiceOpenGov",
          description: "用于可核查与可追溯决策的治理模型。",
        },
        sections: [
          {
            id: "governance",
            title: "治理模型",
            body: [
              "Legitimation 2.0 定义角色、责任与决策维度。",
            ],
          },
          {
            id: "verifiability",
            title: "可核查性",
            body: [
              "理由、状态与责任保持可追溯、可归属。",
            ],
          },
        ],
      },
      {
        slug: "repro",
        title: "RePro",
        subtitle: "方法与操作化",
        intro:
          "RePro 将模型转化为在 VoiceOpenGov 中实施的清晰流程。",
        meta: {
          title: "RePro – 基础 – VoiceOpenGov",
          description: "对 Check、Dossier、参与与状态的方法化操作。",
        },
        sections: [
          {
            id: "method",
            title: "方法",
            body: [
              "将 Check → Dossier → 参与 → 状态操作化为正式的决策逻辑。",
            ],
          },
          {
            id: "application",
            title: "应用",
            body: [
              "使结果可比较并展示从决策到落实的进展。",
            ],
          },
        ],
      },
    ],
  },
};

export function getGrundlagenStrings(locale: SupportedLocale | string): GrundlagenStrings {
  const normalized = (locale || DEFAULT_LOCALE) as SupportedLocale;
  return STRINGS[normalized] ?? STRINGS[DEFAULT_LOCALE];
}

export function getGrundlagenEntry(locale: SupportedLocale | string, slug: string) {
  const strings = getGrundlagenStrings(locale);
  const entry = strings.entries.find((item) => item.slug === slug);
  if (entry) return entry;
  const fallback = STRINGS[DEFAULT_LOCALE].entries.find((item) => item.slug === slug);
  return fallback ?? null;
}
