import { DEFAULT_LOCALE, type SupportedLocale } from "@/config/locales";

type SupportStrings = {
  meta: { title: string; description: string };
  header: { label: string; title: string; body: string };
  cards: Array<{ title: string; body: string }>;
  how: { title: string; body: string; ctaPrimary: string; ctaSecondary: string };
  bank: {
    title: string;
    body: string;
    logout: string;
    login: {
      invalid: string;
      unconfigured: string;
      placeholder: string;
      button: string;
      noAccess: string;
    };
    summary: string;
    labels: {
      recipient: string;
      bank: string;
      iban: string;
      bic: string;
      reference: string;
    };
    referenceHint: string;
    noDetails: string;
    afterNote: string;
  };
  hint: { label: string; body: string };
};

const STRINGS: Record<SupportedLocale, SupportStrings> = {
  de: {
    meta: {
      title: "Unterstützen – VoiceOpenGov",
      description:
        "Unterstütze die Initiative mit Beitrag, Zeit oder Know-how – transparent und ohne Stimmvorteile.",
    },
    header: {
      label: "Unterstützen",
      title: "Infrastruktur für prüfbare Entscheidungen sichern",
      body:
        "Unterstützung stärkt Aufbau, Recherche, Übersetzung und Moderation. Sie ist freiwillig, transparent dokumentiert und bringt keine Stimmvorteile.",
    },
    cards: [
      {
        title: "Finanzieller Beitrag",
        body: "Ermöglicht Hosting, Sicherheit, Recherche und transparente Dossiers.",
      },
      {
        title: "Zeit & Know-how",
        body: "Hilf bei Technik, Moderation, Community-Aufbau oder Übersetzung.",
      },
      {
        title: "Institutionelle Partnerschaft",
        body: "Unterstützung durch Organisationen für Standards und Infrastruktur.",
      },
      {
        title: "Sachleistungen",
        body: "Räume, Infrastruktur oder Services für die lokale Arbeit.",
      },
    ],
    how: {
      title: "So kannst du unterstützen",
      body:
        "Schreib uns kurz, wie du unterstützen möchtest. Wir senden dir alle Details und klären den passenden Weg für deinen Beitrag.",
      ctaPrimary: "Kontakt aufnehmen",
      ctaSecondary: "Kontaktformular",
    },
    bank: {
      title: "Bankverbindung",
      body:
        "Zugriff nur für angemeldete Unterstützer. Bitte im Verwendungszweck nur das Nötigste angeben.",
      logout: "Abmelden",
      login: {
        invalid: "Zugangscode ist nicht korrekt.",
        unconfigured: "Zugangscode ist aktuell nicht konfiguriert. Bitte admin informieren.",
        placeholder: "Zugangscode",
        button: "Freischalten",
        noAccess: "Kein Zugang? Schreib an",
      },
      summary: "Bankverbindung anzeigen",
      labels: {
        recipient: "Kontoinhaber",
        bank: "Bank",
        iban: "IBAN",
        bic: "BIC",
        reference: "Verwendungszweck",
      },
      referenceHint: "{bankRefPrefix} optionaler Hinweis (z. B. Stadt oder Projekt)",
      noDetails: "Bankdaten senden wir dir gern auf Anfrage.",
      afterNote:
        "Unterstützung ist freiwillig, nicht zweckgebunden für Stimmrechte und wird transparent dokumentiert.",
    },
    hint: {
      label: "Hinweis",
      body:
        "Unterstützung ist freiwillig und unabhängig von Mitgliedschaft. Entscheidungen bleiben nachvollziehbar, Stimmen sind gleichwertig und nie käuflich.",
    },
  },
  en: {
    meta: {
      title: "Support – VoiceOpenGov",
      description:
        "Support the initiative with contribution, time or know-how — transparent and without voting advantages.",
    },
    header: {
      label: "Support",
      title: "Secure infrastructure for verifiable decisions",
      body:
        "Support strengthens build-out, research, translation, and moderation. It is voluntary, transparently documented, and brings no voting advantages.",
    },
    cards: [
      {
        title: "Financial contribution",
        body: "Enables hosting, security, research, and transparent dossiers.",
      },
      {
        title: "Time & know-how",
        body: "Help with tech, moderation, community building, or translation.",
      },
      {
        title: "Institutional partnership",
        body: "Support by organizations for standards and infrastructure.",
      },
      {
        title: "In-kind support",
        body: "Spaces, infrastructure, or services for local work.",
      },
    ],
    how: {
      title: "How you can support",
      body:
        "Send us a short note on how you want to support. We will share details and clarify the right path for your contribution.",
      ctaPrimary: "Contact us",
      ctaSecondary: "Contact form",
    },
    bank: {
      title: "Bank details",
      body:
        "Access only for approved supporters. Please keep the payment reference to the essentials.",
      logout: "Log out",
      login: {
        invalid: "Access code is incorrect.",
        unconfigured: "Access code is not configured. Please inform an admin.",
        placeholder: "Access code",
        button: "Unlock",
        noAccess: "No access? Write to",
      },
      summary: "Show bank details",
      labels: {
        recipient: "Account holder",
        bank: "Bank",
        iban: "IBAN",
        bic: "BIC",
        reference: "Reference",
      },
      referenceHint: "{bankRefPrefix} optional note (e.g. city or project)",
      noDetails: "We are happy to share bank details on request.",
      afterNote:
        "Support is voluntary, not tied to voting rights, and documented transparently.",
    },
    hint: {
      label: "Note",
      body:
        "Support is voluntary and independent of membership. Decisions remain traceable, votes are equal and never for sale.",
    },
  },
  fr: {
    meta: {
      title: "Soutenir – VoiceOpenGov",
      description:
        "Soutenez l'initiative par une contribution, du temps ou du savoir-faire – en toute transparence et sans avantage de vote.",
    },
    header: {
      label: "Soutenir",
      title: "Assurer une infrastructure pour des décisions vérifiables",
      body:
        "Le soutien renforce la mise en place, la recherche, la traduction et la modération. Il est volontaire, documenté de façon transparente et n'apporte aucun avantage de vote.",
    },
    cards: [
      {
        title: "Contribution financière",
        body: "Permet l'hébergement, la sécurité, la recherche et des dossiers transparents.",
      },
      {
        title: "Temps & savoir-faire",
        body: "Aide à la technique, la modération, la communauté ou la traduction.",
      },
      {
        title: "Partenariat institutionnel",
        body: "Soutien d'organisations pour les standards et l'infrastructure.",
      },
      {
        title: "Apports en nature",
        body: "Espaces, infrastructure ou services pour le travail local.",
      },
    ],
    how: {
      title: "Comment soutenir",
      body:
        "Écris-nous brièvement comment tu souhaites soutenir. Nous enverrons les détails et préciserons la meilleure voie pour ta contribution.",
      ctaPrimary: "Nous contacter",
      ctaSecondary: "Formulaire de contact",
    },
    bank: {
      title: "Coordonnées bancaires",
      body:
        "Accès réservé aux soutiens approuvés. Merci de limiter le libellé au strict nécessaire.",
      logout: "Se déconnecter",
      login: {
        invalid: "Le code d'accès est incorrect.",
        unconfigured: "Le code d'accès n'est pas configuré. Merci d'informer un admin.",
        placeholder: "Code d'accès",
        button: "Déverrouiller",
        noAccess: "Pas d'accès ? Écris à",
      },
      summary: "Afficher les coordonnées",
      labels: {
        recipient: "Titulaire du compte",
        bank: "Banque",
        iban: "IBAN",
        bic: "BIC",
        reference: "Libellé",
      },
      referenceHint: "{bankRefPrefix} note optionnelle (ex. ville ou projet)",
      noDetails: "Nous pouvons envoyer les coordonnées sur demande.",
      afterNote:
        "Le soutien est volontaire, non lié au vote et documenté en transparence.",
    },
    hint: {
      label: "Note",
      body:
        "Le soutien est volontaire et indépendant de l'adhésion. Les décisions restent traçables, les voix sont égales et jamais achetées.",
    },
  },
  pl: {
    meta: {
      title: "Wsparcie – VoiceOpenGov",
      description:
        "Wesprzyj inicjatywę wkładem, czasem lub know-how – transparentnie i bez korzyści wyborczych.",
    },
    header: {
      label: "Wsparcie",
      title: "Zapewnij infrastrukturę dla weryfikowalnych decyzji",
      body:
        "Wsparcie wzmacnia budowę, badania, tłumaczenia i moderację. Jest dobrowolne, transparentnie dokumentowane i nie daje korzyści wyborczych.",
    },
    cards: [
      {
        title: "Wkład finansowy",
        body: "Umożliwia hosting, bezpieczeństwo, badania i transparentne dossier.",
      },
      {
        title: "Czas i know-how",
        body: "Pomóż w technice, moderacji, budowie społeczności lub tłumaczeniach.",
      },
      {
        title: "Partnerstwo instytucjonalne",
        body: "Wsparcie organizacji dla standardów i infrastruktury.",
      },
      {
        title: "Wsparcie rzeczowe",
        body: "Przestrzeń, infrastruktura lub usługi dla działań lokalnych.",
      },
    ],
    how: {
      title: "Jak możesz wesprzeć",
      body:
        "Napisz krótko, jak chcesz wesprzeć. Przekażemy szczegóły i ustalimy najlepszą ścieżkę.",
      ctaPrimary: "Skontaktuj się",
      ctaSecondary: "Formularz kontaktu",
    },
    bank: {
      title: "Dane bankowe",
      body:
        "Dostęp tylko dla zatwierdzonych wspierających. W tytule przelewu podaj tylko konieczne informacje.",
      logout: "Wyloguj",
      login: {
        invalid: "Kod dostępu jest nieprawidłowy.",
        unconfigured: "Kod dostępu nie jest skonfigurowany. Poinformuj admina.",
        placeholder: "Kod dostępu",
        button: "Odblokuj",
        noAccess: "Brak dostępu? Napisz do",
      },
      summary: "Pokaż dane bankowe",
      labels: {
        recipient: "Właściciel konta",
        bank: "Bank",
        iban: "IBAN",
        bic: "BIC",
        reference: "Tytuł przelewu",
      },
      referenceHint: "{bankRefPrefix} opcjonalna notatka (np. miasto lub projekt)",
      noDetails: "Dane bankowe prześlemy na prośbę.",
      afterNote:
        "Wsparcie jest dobrowolne, niezwiązane z prawami wyborczymi i dokumentowane transparentnie.",
    },
    hint: {
      label: "Uwaga",
      body:
        "Wsparcie jest dobrowolne i niezależne od członkostwa. Decyzje pozostają weryfikowalne, głosy są równe i nigdy nie są na sprzedaż.",
    },
  },
  es: {
    meta: {
      title: "Apoyar – VoiceOpenGov",
      description:
        "Apoya la iniciativa con contribución, tiempo o know-how: transparente y sin ventajas de voto.",
    },
    header: {
      label: "Apoyar",
      title: "Asegurar infraestructura para decisiones verificables",
      body:
        "El apoyo fortalece la construcción, la investigación, la traducción y la moderación. Es voluntario, se documenta de forma transparente y no ofrece ventajas de voto.",
    },
    cards: [
      {
        title: "Contribución financiera",
        body: "Permite hosting, seguridad, investigación y dossiers transparentes.",
      },
      {
        title: "Tiempo y know-how",
        body: "Ayuda en técnica, moderación, comunidad o traducción.",
      },
      {
        title: "Alianza institucional",
        body: "Apoyo de organizaciones para estándares e infraestructura.",
      },
      {
        title: "Aportes en especie",
        body: "Espacios, infraestructura o servicios para el trabajo local.",
      },
    ],
    how: {
      title: "Cómo apoyar",
      body:
        "Cuéntanos brevemente cómo quieres apoyar. Te enviaremos los detalles y definiremos la mejor vía.",
      ctaPrimary: "Contactar",
      ctaSecondary: "Formulario de contacto",
    },
    bank: {
      title: "Datos bancarios",
      body:
        "Acceso solo para apoyos aprobados. En el concepto, indica solo lo imprescindible.",
      logout: "Cerrar sesión",
      login: {
        invalid: "El código de acceso es incorrecto.",
        unconfigured: "El código de acceso no está configurado. Informa a un admin.",
        placeholder: "Código de acceso",
        button: "Desbloquear",
        noAccess: "¿Sin acceso? Escribe a",
      },
      summary: "Mostrar datos bancarios",
      labels: {
        recipient: "Titular de la cuenta",
        bank: "Banco",
        iban: "IBAN",
        bic: "BIC",
        reference: "Concepto",
      },
      referenceHint: "{bankRefPrefix} nota opcional (p. ej. ciudad o proyecto)",
      noDetails: "Enviaremos los datos bancarios a solicitud.",
      afterNote:
        "El apoyo es voluntario, no está ligado a derechos de voto y se documenta con transparencia.",
    },
    hint: {
      label: "Nota",
      body:
        "El apoyo es voluntario e independiente de la membresía. Las decisiones son trazables, los votos son iguales y nunca están en venta.",
    },
  },
  it: {
    meta: {
      title: "Sostieni – VoiceOpenGov",
      description:
        "Sostieni l'iniziativa con contributo, tempo o know-how: trasparente e senza vantaggi di voto.",
    },
    header: {
      label: "Sostieni",
      title: "Garantire infrastruttura per decisioni verificabili",
      body:
        "Il sostegno rafforza costruzione, ricerca, traduzione e moderazione. È volontario, documentato in modo trasparente e non dà vantaggi di voto.",
    },
    cards: [
      {
        title: "Contributo finanziario",
        body: "Permette hosting, sicurezza, ricerca e dossier trasparenti.",
      },
      {
        title: "Tempo e know-how",
        body: "Aiuta con tecnica, moderazione, community o traduzione.",
      },
      {
        title: "Partnership istituzionale",
        body: "Supporto di organizzazioni per standard e infrastruttura.",
      },
      {
        title: "Contributi in natura",
        body: "Spazi, infrastruttura o servizi per il lavoro locale.",
      },
    ],
    how: {
      title: "Come puoi sostenere",
      body:
        "Scrivici brevemente come vuoi sostenere. Invieremo i dettagli e definiremo la via migliore.",
      ctaPrimary: "Contattaci",
      ctaSecondary: "Modulo di contatto",
    },
    bank: {
      title: "Coordinate bancarie",
      body:
        "Accesso solo per sostenitori approvati. Nella causale indica solo l'essenziale.",
      logout: "Disconnetti",
      login: {
        invalid: "Il codice di accesso non è corretto.",
        unconfigured: "Il codice di accesso non è configurato. Avvisa un admin.",
        placeholder: "Codice di accesso",
        button: "Sblocca",
        noAccess: "Nessun accesso? Scrivi a",
      },
      summary: "Mostra coordinate bancarie",
      labels: {
        recipient: "Intestatario",
        bank: "Banca",
        iban: "IBAN",
        bic: "BIC",
        reference: "Causale",
      },
      referenceHint: "{bankRefPrefix} nota opzionale (es. città o progetto)",
      noDetails: "Invieremo le coordinate bancarie su richiesta.",
      afterNote:
        "Il sostegno è volontario, non legato ai diritti di voto e documentato in modo trasparente.",
    },
    hint: {
      label: "Nota",
      body:
        "Il sostegno è volontario e indipendente dalla membership. Le decisioni restano tracciabili, i voti sono uguali e mai in vendita.",
    },
  },
  tr: {
    meta: {
      title: "Destek – VoiceOpenGov",
      description:
        "Katkı, zaman veya know-how ile girişimi destekleyin – şeffaf ve oy avantajı olmadan.",
    },
    header: {
      label: "Destek",
      title: "Doğrulanabilir kararlar için altyapı sağlamak",
      body:
        "Destek; kurulum, araştırma, çeviri ve moderasyonu güçlendirir. Gönüllüdür, şeffaf biçimde belgelenir ve oy avantajı sağlamaz.",
    },
    cards: [
      {
        title: "Mali katkı",
        body: "Barındırma, güvenlik, araştırma ve şeffaf dossier için imkan sağlar.",
      },
      {
        title: "Zaman ve know-how",
        body: "Teknik, moderasyon, topluluk veya çeviri konularında destek ol.",
      },
      {
        title: "Kurumsal ortaklık",
        body: "Standartlar ve altyapı için kuruluş desteği.",
      },
      {
        title: "Ayni destek",
        body: "Yer, altyapı veya yerel çalışma için hizmetler.",
      },
    ],
    how: {
      title: "Nasıl destek olabilirsin",
      body:
        "Nasıl destek olmak istediğini kısaca yaz. Detayları paylaşır ve en uygun yolu belirleriz.",
      ctaPrimary: "İletişime geç",
      ctaSecondary: "İletişim formu",
    },
    bank: {
      title: "Banka bilgileri",
      body:
        "Yalnızca onaylı destekçiler için erişim. Açıklama kısmında sadece gerekli bilgileri yazın.",
      logout: "Çıkış",
      login: {
        invalid: "Erişim kodu yanlış.",
        unconfigured: "Erişim kodu yapılandırılmamış. Lütfen bir admini bilgilendirin.",
        placeholder: "Erişim kodu",
        button: "Aç",
        noAccess: "Erişim yok mu? Şuraya yaz:",
      },
      summary: "Banka bilgilerini göster",
      labels: {
        recipient: "Hesap sahibi",
        bank: "Banka",
        iban: "IBAN",
        bic: "BIC",
        reference: "Açıklama",
      },
      referenceHint: "{bankRefPrefix} isteğe bağlı not (örn. şehir veya proje)",
      noDetails: "Banka bilgilerini talep üzerine paylaşırız.",
      afterNote:
        "Destek gönüllüdür, oy haklarına bağlı değildir ve şeffaf biçimde belgelenir.",
    },
    hint: {
      label: "Not",
      body:
        "Destek gönüllüdür ve üyelikten bağımsızdır. Kararlar izlenebilir, oylar eşittir ve asla satılmaz.",
    },
  },
  ar: {
    meta: {
      title: "الدعم – VoiceOpenGov",
      description:
        "ادعم المبادرة بمساهمة أو وقت أو خبرة – بشفافية وبدون مزايا تصويت.",
    },
    header: {
      label: "الدعم",
      title: "تأمين بنية تحتية لقرارات قابلة للتحقق",
      body:
        "الدعم يعزز البناء والبحث والترجمة والإشراف. هو طوعي، موثق بشفافية، ولا يمنح مزايا تصويت.",
    },
    cards: [
      {
        title: "مساهمة مالية",
        body: "تمكّن الاستضافة والأمان والبحث والملفات الشفافة.",
      },
      {
        title: "الوقت والخبرة",
        body: "المساعدة في التقنية أو الإشراف أو المجتمع أو الترجمة.",
      },
      {
        title: "شراكة مؤسسية",
        body: "دعم من المؤسسات للمعايير والبنية التحتية.",
      },
      {
        title: "دعم عيني",
        body: "مساحات أو بنية تحتية أو خدمات للعمل المحلي.",
      },
    ],
    how: {
      title: "كيف يمكنك الدعم",
      body:
        "اكتب لنا بإيجاز كيف تريد الدعم. سنرسل التفاصيل ونحدد المسار الأنسب لمساهمتك.",
      ctaPrimary: "تواصل معنا",
      ctaSecondary: "نموذج الاتصال",
    },
    bank: {
      title: "بيانات الحساب",
      body:
        "الوصول للمساندين المعتمدين فقط. يُرجى كتابة الحد الأدنى في خانة المرجع.",
      logout: "تسجيل الخروج",
      login: {
        invalid: "رمز الوصول غير صحيح.",
        unconfigured: "رمز الوصول غير مُهيأ. يرجى إبلاغ المسؤول.",
        placeholder: "رمز الوصول",
        button: "فتح",
        noAccess: "لا يوجد وصول؟ اكتب إلى",
      },
      summary: "عرض بيانات الحساب",
      labels: {
        recipient: "صاحب الحساب",
        bank: "البنك",
        iban: "IBAN",
        bic: "BIC",
        reference: "المرجع",
      },
      referenceHint: "{bankRefPrefix} ملاحظة اختيارية (مثل مدينة أو مشروع)",
      noDetails: "نرسل بيانات الحساب عند الطلب.",
      afterNote:
        "الدعم طوعي وغير مرتبط بحقوق التصويت ويتم توثيقه بشفافية.",
    },
    hint: {
      label: "ملاحظة",
      body:
        "الدعم طوعي ومستقل عن العضوية. القرارات قابلة للتتبع، والأصوات متساوية ولا تُباع أبداً.",
    },
  },
  ru: {
    meta: {
      title: "Поддержать – VoiceOpenGov",
      description:
        "Поддержите инициативу вкладом, временем или знаниями — прозрачно и без преимуществ в голосовании.",
    },
    header: {
      label: "Поддержка",
      title: "Обеспечить инфраструктуру для проверяемых решений",
      body:
        "Поддержка усиливает создание, исследования, переводы и модерацию. Она добровольна, прозрачно документируется и не дает преимуществ в голосовании.",
    },
    cards: [
      {
        title: "Финансовый вклад",
        body: "Обеспечивает хостинг, безопасность, исследования и прозрачные досье.",
      },
      {
        title: "Время и know-how",
        body: "Помогайте с техникой, модерацией, сообществом или переводами.",
      },
      {
        title: "Институциональное партнерство",
        body: "Поддержка организаций для стандартов и инфраструктуры.",
      },
      {
        title: "Натуральная поддержка",
        body: "Помещения, инфраструктура или услуги для местной работы.",
      },
    ],
    how: {
      title: "Как поддержать",
      body:
        "Кратко напишите, как хотите поддержать. Мы пришлем детали и уточним лучший путь.",
      ctaPrimary: "Связаться",
      ctaSecondary: "Форма контакта",
    },
    bank: {
      title: "Банковские реквизиты",
      body:
        "Доступ только для одобренных поддерживающих. В назначении платежа указывайте только необходимое.",
      logout: "Выйти",
      login: {
        invalid: "Код доступа неверный.",
        unconfigured: "Код доступа не настроен. Сообщите администратору.",
        placeholder: "Код доступа",
        button: "Открыть",
        noAccess: "Нет доступа? Напишите",
      },
      summary: "Показать реквизиты",
      labels: {
        recipient: "Получатель",
        bank: "Банк",
        iban: "IBAN",
        bic: "BIC",
        reference: "Назначение",
      },
      referenceHint: "{bankRefPrefix} дополнительная пометка (например, город или проект)",
      noDetails: "Мы отправим реквизиты по запросу.",
      afterNote:
        "Поддержка добровольна, не связана с правами голоса и документируется прозрачно.",
    },
    hint: {
      label: "Примечание",
      body:
        "Поддержка добровольна и не зависит от членства. Решения остаются проверяемыми, голоса равны и никогда не продаются.",
    },
  },
  zh: {
    meta: {
      title: "支持 – VoiceOpenGov",
      description: "通过资金、时间或知识支持该倡议——透明且无投票优势。",
    },
    header: {
      label: "支持",
      title: "保障可核查决策的基础设施",
      body:
        "支持有助于建设、研究、翻译与审核。完全自愿、透明记录，不带来投票优势。",
    },
    cards: [
      {
        title: "资金支持",
        body: "用于托管、安全、研究与透明档案。",
      },
      {
        title: "时间与技能",
        body: "在技术、审核、社区或翻译方面提供帮助。",
      },
      {
        title: "机构合作",
        body: "机构对标准与基础设施的支持。",
      },
      {
        title: "实物支持",
        body: "提供场地、基础设施或本地服务。",
      },
    ],
    how: {
      title: "如何支持",
      body:
        "简要说明你想如何支持。我们会发送细节并确认最佳方式。",
      ctaPrimary: "联系我们",
      ctaSecondary: "联系表单",
    },
    bank: {
      title: "银行信息",
      body: "仅对已确认的支持者开放。附言请尽量简短。",
      logout: "退出",
      login: {
        invalid: "访问码不正确。",
        unconfigured: "访问码未配置，请联系管理员。",
        placeholder: "访问码",
        button: "解锁",
        noAccess: "没有访问权限？请写信给",
      },
      summary: "显示银行信息",
      labels: {
        recipient: "账户持有人",
        bank: "银行",
        iban: "IBAN",
        bic: "BIC",
        reference: "附言",
      },
      referenceHint: "{bankRefPrefix} 可选备注（如城市或项目）",
      noDetails: "可根据需求提供银行信息。",
      afterNote: "支持是自愿的，不与投票权绑定，并透明记录。",
    },
    hint: {
      label: "提示",
      body: "支持是自愿且与成员身份无关。决策可追溯、投票平等，绝不买卖。",
    },
  },
};

export function getSupportStrings(locale: SupportedLocale | string): SupportStrings {
  const normalized = (locale || DEFAULT_LOCALE) as SupportedLocale;
  return STRINGS[normalized] ?? STRINGS[DEFAULT_LOCALE];
}
