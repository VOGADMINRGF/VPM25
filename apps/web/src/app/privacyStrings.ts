// E200: Zentrale Texte für VoiceOpenGov-Cookie-/Datenschutzbanner.
import { DEFAULT_LOCALE, type SupportedLocale } from "@/config/locales";

export type PrivacyStrings = {
  banner: {
    title: string;
    lead: string;
    essentialTitle: string;
    essentialBody: string;
    analyticsTitle: string;
    analyticsBody: string;
    buttons: {
      acceptAll: string;
      onlyEssential: string;
      settings: string;
    };
    links: {
      privacy: string;
      imprint: string;
    };
  };
  dialog: {
    title: string;
    intro: string;
  };
};

const STRINGS: Record<SupportedLocale, PrivacyStrings> = {
  de: {
    banner: {
      title: "Cookies & Datenschutz bei VoiceOpenGov",
      lead: "Wir nutzen nur, was wir wirklich brauchen: essenzielle Cookies für Betrieb und Sicherheit, optional anonyme Statistiken – keine Werbe-Tracker.",
      essentialTitle: "Essentielle Funktionen",
      essentialBody:
        "Diese Cookies und lokalen Speicher-Einträge sind nötig, damit VoiceOpenGov technisch funktioniert – zum Beispiel für Sicherheit, Spracheinstellungen, Login-Sitzungen und deinen Consent-Status. Ohne sie können wir die Plattform nicht zuverlässig bereitstellen.",
      analyticsTitle: "Optionale Statistiken",
      analyticsBody:
        "Wir möchten verstehen, wie das VoiceOpenGov-System genutzt wird – datensparsam und ohne Werbenetzwerke. Wenn du zustimmst, helfen uns anonyme Nutzungsstatistiken dabei, Inhalte und Abläufe zu verbessern. Du kannst diese Option jederzeit wieder deaktivieren.",
      buttons: {
        acceptAll: "Alle erlauben",
        onlyEssential: "Nur notwendige verwenden",
        settings: "Einstellungen anpassen",
      },
      links: {
        privacy: "Datenschutzerklärung",
        imprint: "Impressum",
      },
    },
    dialog: {
      title: "Datenschutz-Einstellungen für VoiceOpenGov",
      intro:
        "Hier kannst du festlegen, welche Arten von Cookies und lokalen Speicher-Einträgen wir setzen dürfen. Du kannst deine Entscheidung jederzeit ändern. Wir setzen keine Werbe-Tracker ein und verkaufen keine Nutzerdaten.",
    },
  },
  en: {
    banner: {
      title: "Cookies & privacy at VoiceOpenGov",
      lead: "We only use what we really need: essential cookies for operation and security, optional anonymous statistics — no ad trackers.",
      essentialTitle: "Essential functions",
      essentialBody:
        "These cookies and local storage entries are necessary for VoiceOpenGov to work technically — for example security, language settings, login sessions and your consent status. Without them we can't reliably provide the platform.",
      analyticsTitle: "Optional analytics",
      analyticsBody:
        "We want to understand how the VoiceOpenGov system is used — privacy-friendly and without ad networks. If you agree, anonymous usage stats help us improve content and flows. You can disable this option at any time.",
      buttons: {
        acceptAll: "Allow all",
        onlyEssential: "Use only necessary",
        settings: "Adjust settings",
      },
      links: {
        privacy: "Privacy policy",
        imprint: "Legal notice",
      },
    },
    dialog: {
      title: "Privacy settings for VoiceOpenGov",
      intro:
        "Here you can decide which types of cookies and local storage entries we may set. You can change your decision at any time. We don't use ad trackers and we don't sell user data.",
    },
  },
  fr: {
    banner: {
      title: "Cookies & confidentialité chez VoiceOpenGov",
      lead: "Nous n’utilisons que le nécessaire : cookies essentiels pour le fonctionnement et la sécurité, statistiques anonymes en option – aucun traqueur publicitaire.",
      essentialTitle: "Fonctions essentielles",
      essentialBody:
        "Ces cookies et éléments de stockage local sont nécessaires au bon fonctionnement de VoiceOpenGov – par ex. sécurité, réglages de langue, sessions de connexion et statut de consentement. Sans eux, la plateforme ne peut pas être fournie de manière fiable.",
      analyticsTitle: "Statistiques optionnelles",
      analyticsBody:
        "Nous voulons comprendre l’usage du système VoiceOpenGov – de façon sobre et sans réseaux publicitaires. Si vous acceptez, des statistiques anonymes nous aident à améliorer contenus et parcours. Vous pouvez désactiver cette option à tout moment.",
      buttons: {
        acceptAll: "Tout accepter",
        onlyEssential: "Utiliser uniquement le nécessaire",
        settings: "Adapter les réglages",
      },
      links: {
        privacy: "Politique de confidentialité",
        imprint: "Mention légale",
      },
    },
    dialog: {
      title: "Paramètres de confidentialité pour VoiceOpenGov",
      intro:
        "Ici, vous pouvez définir quels types de cookies et de stockage local nous pouvons utiliser. Vous pouvez modifier votre choix à tout moment. Nous n’utilisons pas de traqueurs publicitaires et ne vendons pas les données.",
    },
  },
  pl: {
    banner: {
      title: "Cookies i prywatność w VoiceOpenGov",
      lead: "Używamy tylko tego, co konieczne: niezbędne cookies do działania i bezpieczeństwa, opcjonalne anonimowe statystyki – bez trackerów reklamowych.",
      essentialTitle: "Funkcje niezbędne",
      essentialBody:
        "Te cookies i wpisy w pamięci lokalnej są konieczne, by VoiceOpenGov działał poprawnie – np. bezpieczeństwo, ustawienia języka, sesje logowania i status zgody. Bez nich nie możemy zapewnić działania.",
      analyticsTitle: "Statystyki opcjonalne",
      analyticsBody:
        "Chcemy rozumieć, jak używany jest system VoiceOpenGov – oszczędnie i bez sieci reklamowych. Jeśli wyrazisz zgodę, anonimowe statystyki pomogą nam ulepszać treści i procesy. Możesz to w każdej chwili wyłączyć.",
      buttons: {
        acceptAll: "Zezwól na wszystko",
        onlyEssential: "Tylko niezbędne",
        settings: "Dostosuj ustawienia",
      },
      links: {
        privacy: "Polityka prywatności",
        imprint: "Impressum",
      },
    },
    dialog: {
      title: "Ustawienia prywatności VoiceOpenGov",
      intro:
        "Tutaj możesz zdecydować, jakie rodzaje cookies i pamięci lokalnej możemy stosować. Możesz zmienić decyzję w każdej chwili. Nie używamy trackerów reklamowych i nie sprzedajemy danych.",
    },
  },
  es: {
    banner: {
      title: "Cookies y privacidad en VoiceOpenGov",
      lead: "Usamos solo lo necesario: cookies esenciales para funcionamiento y seguridad, estadísticas anónimas opcionales, sin rastreadores publicitarios.",
      essentialTitle: "Funciones esenciales",
      essentialBody:
        "Estas cookies y elementos de almacenamiento local son necesarios para que VoiceOpenGov funcione técnicamente—por ejemplo seguridad, ajustes de idioma, sesiones de inicio de sesión y tu estado de consentimiento. Sin ellos no podemos ofrecer la plataforma de forma fiable.",
      analyticsTitle: "Estadísticas opcionales",
      analyticsBody:
        "Queremos entender cómo se usa VoiceOpenGov—de forma respetuosa y sin redes publicitarias. Si aceptas, las estadísticas anónimas nos ayudan a mejorar contenidos y flujos. Puedes desactivar esta opción en cualquier momento.",
      buttons: {
        acceptAll: "Aceptar todo",
        onlyEssential: "Usar solo lo necesario",
        settings: "Ajustar configuración",
      },
      links: {
        privacy: "Política de privacidad",
        imprint: "Aviso legal",
      },
    },
    dialog: {
      title: "Configuración de privacidad de VoiceOpenGov",
      intro:
        "Aquí puedes decidir qué tipos de cookies y almacenamiento local podemos usar. Puedes cambiar tu decisión en cualquier momento. No usamos rastreadores publicitarios ni vendemos datos.",
    },
  },
  it: {
    banner: {
      title: "Cookie e privacy su VoiceOpenGov",
      lead: "Usiamo solo ciò che serve: cookie essenziali per funzionamento e sicurezza, statistiche anonime opzionali—nessun tracker pubblicitario.",
      essentialTitle: "Funzioni essenziali",
      essentialBody:
        "Questi cookie e voci di archiviazione locale sono necessari affinché VoiceOpenGov funzioni—ad esempio sicurezza, impostazioni lingua, sessioni di accesso e stato del consenso. Senza di essi la piattaforma non può essere fornita in modo affidabile.",
      analyticsTitle: "Statistiche opzionali",
      analyticsBody:
        "Vogliamo capire come viene usato il sistema VoiceOpenGov—in modo rispettoso e senza reti pubblicitarie. Se acconsenti, le statistiche anonime ci aiutano a migliorare contenuti e flussi. Puoi disattivare questa opzione in qualsiasi momento.",
      buttons: {
        acceptAll: "Accetta tutto",
        onlyEssential: "Solo necessari",
        settings: "Modifica impostazioni",
      },
      links: {
        privacy: "Informativa privacy",
        imprint: "Note legali",
      },
    },
    dialog: {
      title: "Impostazioni privacy per VoiceOpenGov",
      intro:
        "Qui puoi decidere quali tipi di cookie e archiviazione locale possiamo impostare. Puoi cambiare la tua scelta in qualsiasi momento. Non usiamo tracker pubblicitari e non vendiamo dati.",
    },
  },
  tr: {
    banner: {
      title: "VoiceOpenGov'da çerezler ve gizlilik",
      lead: "Sadece gerekli olanı kullanırız: çalışma ve güvenlik için zorunlu çerezler, isteğe bağlı anonim istatistikler—reklam takipçisi yok.",
      essentialTitle: "Gerekli işlevler",
      essentialBody:
        "Bu çerezler ve yerel depolama kayıtları VoiceOpenGov'un teknik olarak çalışması için gereklidir—ör. güvenlik, dil ayarları, giriş oturumları ve onay durumu. Bunlar olmadan platformu güvenilir şekilde sunamayız.",
      analyticsTitle: "İsteğe bağlı istatistikler",
      analyticsBody:
        "VoiceOpenGov sisteminin nasıl kullanıldığını anlamak istiyoruz—veri minimizasyonu ile ve reklam ağları olmadan. Onay verirsen, anonim kullanım istatistikleri içerikleri ve akışları iyileştirmemize yardımcı olur. Bu seçeneği istediğin zaman kapatabilirsin.",
      buttons: {
        acceptAll: "Tümüne izin ver",
        onlyEssential: "Sadece gerekli",
        settings: "Ayarları düzenle",
      },
      links: {
        privacy: "Gizlilik bildirimi",
        imprint: "Yasal bildirim",
      },
    },
    dialog: {
      title: "VoiceOpenGov gizlilik ayarları",
      intro:
        "Burada hangi tür çerezleri ve yerel depolama kayıtlarını kullanabileceğimizi belirleyebilirsin. Kararını istediğin zaman değiştirebilirsin. Reklam takipçisi kullanmıyoruz ve verileri satmıyoruz.",
    },
  },
  ar: {
    banner: {
      title: "الكوكيز والخصوصية في VoiceOpenGov",
      lead: "نستخدم فقط ما نحتاجه فعلاً: كوكيز أساسية للتشغيل والأمان، وإحصاءات مجهولة اختيارية — دون أدوات تتبع إعلانية.",
      essentialTitle: "الوظائف الأساسية",
      essentialBody:
        "هذه الكوكيز وبيانات التخزين المحلي ضرورية لعمل VoiceOpenGov تقنياً — مثل الأمان وإعدادات اللغة وجلسات الدخول وحالة الموافقة. بدونها لا يمكن تقديم المنصة بشكل موثوق.",
      analyticsTitle: "إحصاءات اختيارية",
      analyticsBody:
        "نريد فهم كيفية استخدام نظام VoiceOpenGov — بقدر كافٍ من الخصوصية وبدون شبكات إعلانية. إذا وافقت، تساعدنا الإحصاءات المجهولة على تحسين المحتوى والتجربة. يمكنك تعطيل هذا الخيار في أي وقت.",
      buttons: {
        acceptAll: "السماح للكل",
        onlyEssential: "الضروري فقط",
        settings: "تعديل الإعدادات",
      },
      links: {
        privacy: "سياسة الخصوصية",
        imprint: "إشعار قانوني",
      },
    },
    dialog: {
      title: "إعدادات الخصوصية لـ VoiceOpenGov",
      intro:
        "يمكنك هنا تحديد أنواع الكوكيز وبيانات التخزين المحلي التي نسمح بها. يمكنك تغيير قرارك في أي وقت. لا نستخدم أدوات تتبع إعلانية ولا نبيع البيانات.",
    },
  },
  ru: {
    banner: {
      title: "Cookies и приватность в VoiceOpenGov",
      lead: "Мы используем только необходимое: обязательные cookies для работы и безопасности, опциональные анонимные статистики — без рекламных трекеров.",
      essentialTitle: "Необходимые функции",
      essentialBody:
        "Эти cookies и записи локального хранилища нужны, чтобы VoiceOpenGov работал технически — например безопасность, языковые настройки, сессии входа и статус согласия. Без них мы не можем надежно предоставлять платформу.",
      analyticsTitle: "Необязательная статистика",
      analyticsBody:
        "Мы хотим понимать, как используется система VoiceOpenGov — бережно к данным и без рекламных сетей. Если вы согласны, анонимная статистика помогает улучшать контент и процессы. Вы можете отключить эту опцию в любой момент.",
      buttons: {
        acceptAll: "Разрешить все",
        onlyEssential: "Только необходимое",
        settings: "Настроить",
      },
      links: {
        privacy: "Политика конфиденциальности",
        imprint: "Правовые сведения",
      },
    },
    dialog: {
      title: "Настройки приватности VoiceOpenGov",
      intro:
        "Здесь вы можете выбрать, какие типы cookies и локального хранилища мы можем использовать. Вы можете изменить решение в любое время. Мы не используем рекламные трекеры и не продаем данные.",
    },
  },
  zh: {
    banner: {
      title: "VoiceOpenGov 的 Cookie 与隐私",
      lead: "我们只使用必要内容：用于运行与安全的必要 Cookie，可选的匿名统计——不使用广告追踪器。",
      essentialTitle: "必要功能",
      essentialBody:
        "这些 Cookie 和本地存储条目是 VoiceOpenGov 正常运行所必需的，例如安全、语言设置、登录会话以及同意状态。没有它们我们无法可靠提供平台。",
      analyticsTitle: "可选统计",
      analyticsBody:
        "我们希望了解 VoiceOpenGov 的使用情况——尽量少数据且不使用广告网络。若你同意，匿名统计有助于改进内容和流程。你可以随时关闭该选项。",
      buttons: {
        acceptAll: "全部允许",
        onlyEssential: "仅使用必要",
        settings: "调整设置",
      },
      links: {
        privacy: "隐私政策",
        imprint: "法律声明",
      },
    },
    dialog: {
      title: "VoiceOpenGov 隐私设置",
      intro:
        "在这里你可以决定我们可设置哪些类型的 Cookie 与本地存储。你可以随时更改决定。我们不使用广告追踪器，也不出售数据。",
    },
  },
};

export function getPrivacyStrings(locale: SupportedLocale | string) {
  const normalized = (locale || DEFAULT_LOCALE) as SupportedLocale;
  return STRINGS[normalized] ?? STRINGS[DEFAULT_LOCALE];
}
