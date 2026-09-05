import { isSupportedLocale, type SupportedLocale } from "@/config/locales";

export type MemberFlowLocale = "de" | "en" | "fr" | "es" | "tr" | "ar";

const LAUNCH = new Set<MemberFlowLocale>(["de", "en", "fr", "es", "tr", "ar"]);

export function resolveMemberFlowLocale(value: unknown): MemberFlowLocale {
  if (typeof value === "string" && isSupportedLocale(value) && LAUNCH.has(value as MemberFlowLocale)) {
    return value as MemberFlowLocale;
  }
  return value === "de" ? "de" : "en";
}

export function memberFlowDirection(locale: MemberFlowLocale) {
  return locale === "ar" ? "rtl" : "ltr";
}

export function localizedRegionName(code: string | undefined, locale: MemberFlowLocale) {
  if (!code) return "";
  try {
    return new Intl.DisplayNames([locale], { type: "region" }).of(code.toUpperCase()) || code.toUpperCase();
  } catch {
    return code.toUpperCase();
  }
}

type Strings = {
  yes: string; no: string; member: string; organisation: string; person: string;
  profilePreview: string; locationPending: string; visibility: string; publicVisibility: string; privateVisibility: string;
  supporter: string; motivation: string; newsletterVog: string; newsletterEdeb: string; nextSteps: string;
  confirmed: string; notConfirmed: string; home: string; support: string; questions: string; login: string; setupAccess: string;
  missingTitle: string; missingMessage: string; invalidTitle: string; invalidMessage: string; expiredTitle: string; expiredMessage: string;
  successTitle: string; successMessage: string; successSteps: string[]; failureSteps: string[];
  verifySubject: string; verifyTitle: string; verifyBody: string; verifyButton: string; yourData: string; membership: string;
  name: string; birthDate: string; city: string; verifySupportBody: string; verifyJoinBody: string; ignore: string;
  setupSubject: string; setupTitle: string; setupBody: string; setupButton: string; setupExpiry: string;
};

const S: Record<MemberFlowLocale, Strings> = {
  de: {
    yes:"Ja", no:"Nein", member:"Mitglied", organisation:"Organisation", person:"Person", profilePreview:"Profil-Vorschau", locationPending:"Ort folgt", visibility:"Sichtbarkeit", publicVisibility:"Öffentlich (nur Orts-Summen)", privateVisibility:"Privat", supporter:"Unterstützer-Banner", motivation:"Motivation", newsletterVog:"Newsletter VoiceOpenGov", newsletterEdeb:"Updates eDebatte", nextSteps:"Nächste Schritte", confirmed:"Bestätigt", notConfirmed:"Nicht bestätigt", home:"Zur Startseite", support:"Initiative unterstützen", questions:"Fragen?", login:"Zum Login", setupAccess:"Zugang einrichten",
    missingTitle:"Link unvollständig", missingMessage:"Der Bestätigungslink ist unvollständig. Bitte nutze den Link aus deiner E-Mail.", invalidTitle:"Bestätigungslink ungültig", invalidMessage:"Der Link ist ungültig oder wurde bereits verwendet. Falls nötig, starte den Beitritt bitte erneut.", expiredTitle:"Bestätigungslink abgelaufen", expiredMessage:"Der Link ist abgelaufen. Bitte starte den Beitritt erneut, damit wir dir einen neuen Link senden.", successTitle:"E-Mail bestätigt", successMessage:"Danke! Deine Mitgliedschaft ist jetzt aktiv. Dein Mitgliedszugang ist damit freigeschaltet.",
    successSteps:["Wenn du beim Beitritt ein Passwort vergeben hast, kannst du dich jetzt direkt anmelden.","Schon früher Mitglied geworden? Über „Zugang einrichten“ kannst du dir per E-Mail ein Passwort setzen.","Chat & Zusammenarbeit werden als nächster Bereich an dein Mitgliedskonto angebunden."], failureSteps:["Bitte prüfe den Bestätigungslink oder starte den Beitritt bei Bedarf erneut.","Wenn deine Mitgliedschaft bereits bestätigt ist, kannst du deinen Zugang separat einrichten."],
    verifySubject:"Bitte E-Mail bestätigen – VoiceOpenGov", verifyTitle:"Bitte E-Mail bestätigen", verifyBody:"Danke für deine Eintragung bei VoiceOpenGov. Bitte bestätige deine E-Mail-Adresse, damit wir deine Mitgliedschaft aktivieren können.", verifyButton:"E-Mail bestätigen", yourData:"Deine Angaben", membership:"Mitgliedschaft", name:"Name", birthDate:"Geburtsdatum", city:"Ort", verifySupportBody:"Wenn du die Initiative unterstützen möchtest, findest du alle Wege auf unserer Unterstützungsseite.", verifyJoinBody:"Wenn du dich in Marketing, Programmierung oder gesellschaftlich einbringen willst, freuen wir uns über eine Nachricht an members@voiceopengov.org.", ignore:"Wenn du dich nicht eingetragen hast, kannst du diese E-Mail ignorieren.",
    setupSubject:"VoiceOpenGov – Mitgliedszugang", setupTitle:"Dein VoiceOpenGov-Mitgliedszugang", setupBody:"Über diesen Link kannst du deinen bestehenden Mitgliedszugang erstmals einrichten oder dein Passwort neu setzen.", setupButton:"Zugang einrichten", setupExpiry:"Der Link ist zwei Stunden gültig. Wenn du diese Aktion nicht ausgelöst hast, kannst du diese E-Mail ignorieren."
  },
  en: {
    yes:"Yes", no:"No", member:"Member", organisation:"Organisation", person:"Person", profilePreview:"Profile preview", locationPending:"Location pending", visibility:"Visibility", publicVisibility:"Public (local totals only)", privateVisibility:"Private", supporter:"Supporter banner", motivation:"Motivation", newsletterVog:"VoiceOpenGov newsletter", newsletterEdeb:"eDebatte updates", nextSteps:"Next steps", confirmed:"Confirmed", notConfirmed:"Not confirmed", home:"Back to home", support:"Support the initiative", questions:"Questions?", login:"Sign in", setupAccess:"Set up access",
    missingTitle:"Incomplete link", missingMessage:"The confirmation link is incomplete. Please use the link from your email.", invalidTitle:"Invalid confirmation link", invalidMessage:"The link is invalid or has already been used. If necessary, start the membership process again.", expiredTitle:"Confirmation link expired", expiredMessage:"The link has expired. Please start the membership process again so we can send a new link.", successTitle:"Email confirmed", successMessage:"Thank you! Your membership is now active and your member access has been released.",
    successSteps:["If you chose a password when joining, you can sign in now.","Already joined earlier? Use “Set up access” to create a password by email.","Chat and collaboration will be connected to your member account as the next area."], failureSteps:["Please check the confirmation link or restart the membership process if necessary.","If your membership is already confirmed, you can set up access separately."],
    verifySubject:"Confirm your email – VoiceOpenGov", verifyTitle:"Confirm your email", verifyBody:"Thank you for joining VoiceOpenGov. Please confirm your email address so we can activate your membership.", verifyButton:"Confirm email", yourData:"Your details", membership:"Membership", name:"Name", birthDate:"Date of birth", city:"Location", verifySupportBody:"If you would like to support the initiative, you can find all options on our support page.", verifyJoinBody:"If you would like to contribute in marketing, programming or civic work, email us at members@voiceopengov.org.", ignore:"If you did not sign up, you can ignore this email.",
    setupSubject:"VoiceOpenGov – member access", setupTitle:"Your VoiceOpenGov member access", setupBody:"Use this link to set up your existing member access for the first time or reset your password.", setupButton:"Set up access", setupExpiry:"The link is valid for two hours. If you did not request this action, you can ignore this email."
  },
  fr: {
    yes:"Oui", no:"Non", member:"Membre", organisation:"Organisation", person:"Personne", profilePreview:"Aperçu du profil", locationPending:"Lieu à préciser", visibility:"Visibilité", publicVisibility:"Public (totaux locaux uniquement)", privateVisibility:"Privé", supporter:"Bannière de soutien", motivation:"Motivation", newsletterVog:"Newsletter VoiceOpenGov", newsletterEdeb:"Actualités eDebatte", nextSteps:"Étapes suivantes", confirmed:"Confirmé", notConfirmed:"Non confirmé", home:"Retour à l’accueil", support:"Soutenir l’initiative", questions:"Des questions ?", login:"Se connecter", setupAccess:"Configurer l’accès",
    missingTitle:"Lien incomplet", missingMessage:"Le lien de confirmation est incomplet. Veuillez utiliser le lien reçu par e-mail.", invalidTitle:"Lien de confirmation invalide", invalidMessage:"Le lien est invalide ou a déjà été utilisé. Si nécessaire, recommencez l’adhésion.", expiredTitle:"Lien de confirmation expiré", expiredMessage:"Le lien a expiré. Veuillez recommencer l’adhésion afin que nous puissions envoyer un nouveau lien.", successTitle:"E-mail confirmé", successMessage:"Merci ! Votre adhésion est maintenant active et votre accès membre est disponible.",
    successSteps:["Si vous avez choisi un mot de passe lors de l’adhésion, vous pouvez maintenant vous connecter.","Déjà membre auparavant ? Utilisez « Configurer l’accès » pour définir un mot de passe par e-mail.","Le chat et la collaboration seront ensuite reliés à votre compte membre."], failureSteps:["Vérifiez le lien de confirmation ou recommencez l’adhésion si nécessaire.","Si votre adhésion est déjà confirmée, vous pouvez configurer votre accès séparément."],
    verifySubject:"Confirmez votre e-mail – VoiceOpenGov", verifyTitle:"Confirmez votre e-mail", verifyBody:"Merci de rejoindre VoiceOpenGov. Confirmez votre adresse e-mail afin que nous puissions activer votre adhésion.", verifyButton:"Confirmer l’e-mail", yourData:"Vos informations", membership:"Adhésion", name:"Nom", birthDate:"Date de naissance", city:"Lieu", verifySupportBody:"Si vous souhaitez soutenir l’initiative, toutes les possibilités sont présentées sur notre page de soutien.", verifyJoinBody:"Pour contribuer au marketing, à la programmation ou à l’action citoyenne, écrivez à members@voiceopengov.org.", ignore:"Si vous ne vous êtes pas inscrit, vous pouvez ignorer cet e-mail.",
    setupSubject:"VoiceOpenGov – accès membre", setupTitle:"Votre accès membre VoiceOpenGov", setupBody:"Utilisez ce lien pour configurer votre accès membre pour la première fois ou réinitialiser votre mot de passe.", setupButton:"Configurer l’accès", setupExpiry:"Le lien est valable deux heures. Si vous n’avez pas demandé cette action, vous pouvez ignorer cet e-mail."
  },
  es: {
    yes:"Sí", no:"No", member:"Miembro", organisation:"Organización", person:"Persona", profilePreview:"Vista previa del perfil", locationPending:"Ubicación pendiente", visibility:"Visibilidad", publicVisibility:"Público (solo totales locales)", privateVisibility:"Privado", supporter:"Banner de apoyo", motivation:"Motivación", newsletterVog:"Boletín de VoiceOpenGov", newsletterEdeb:"Novedades de eDebatte", nextSteps:"Siguientes pasos", confirmed:"Confirmado", notConfirmed:"No confirmado", home:"Volver al inicio", support:"Apoyar la iniciativa", questions:"¿Preguntas?", login:"Iniciar sesión", setupAccess:"Configurar acceso",
    missingTitle:"Enlace incompleto", missingMessage:"El enlace de confirmación está incompleto. Usa el enlace de tu correo electrónico.", invalidTitle:"Enlace de confirmación no válido", invalidMessage:"El enlace no es válido o ya se ha utilizado. Si es necesario, inicia de nuevo la adhesión.", expiredTitle:"Enlace de confirmación caducado", expiredMessage:"El enlace ha caducado. Inicia de nuevo la adhesión para que podamos enviarte otro enlace.", successTitle:"Correo confirmado", successMessage:"¡Gracias! Tu membresía ya está activa y tu acceso de miembro está habilitado.",
    successSteps:["Si elegiste una contraseña al registrarte, ya puedes iniciar sesión.","¿Ya eras miembro? Usa «Configurar acceso» para crear una contraseña por correo electrónico.","El chat y la colaboración se conectarán después a tu cuenta de miembro."], failureSteps:["Comprueba el enlace de confirmación o vuelve a iniciar la adhesión si es necesario.","Si tu membresía ya está confirmada, puedes configurar el acceso por separado."],
    verifySubject:"Confirma tu correo – VoiceOpenGov", verifyTitle:"Confirma tu correo electrónico", verifyBody:"Gracias por unirte a VoiceOpenGov. Confirma tu correo para que podamos activar tu membresía.", verifyButton:"Confirmar correo", yourData:"Tus datos", membership:"Membresía", name:"Nombre", birthDate:"Fecha de nacimiento", city:"Ubicación", verifySupportBody:"Si quieres apoyar la iniciativa, encontrarás todas las opciones en nuestra página de apoyo.", verifyJoinBody:"Si quieres colaborar en marketing, programación o trabajo ciudadano, escribe a members@voiceopengov.org.", ignore:"Si no te registraste, puedes ignorar este correo.",
    setupSubject:"VoiceOpenGov – acceso de miembro", setupTitle:"Tu acceso de miembro de VoiceOpenGov", setupBody:"Usa este enlace para configurar por primera vez tu acceso de miembro o restablecer tu contraseña.", setupButton:"Configurar acceso", setupExpiry:"El enlace es válido durante dos horas. Si no solicitaste esta acción, puedes ignorar este correo."
  },
  tr: {
    yes:"Evet", no:"Hayır", member:"Üye", organisation:"Kuruluş", person:"Kişi", profilePreview:"Profil önizlemesi", locationPending:"Konum bekleniyor", visibility:"Görünürlük", publicVisibility:"Herkese açık (yalnızca yerel toplamlar)", privateVisibility:"Özel", supporter:"Destekçi bandı", motivation:"Motivasyon", newsletterVog:"VoiceOpenGov bülteni", newsletterEdeb:"eDebatte güncellemeleri", nextSteps:"Sonraki adımlar", confirmed:"Onaylandı", notConfirmed:"Onaylanmadı", home:"Ana sayfaya dön", support:"Girişimi destekle", questions:"Sorularınız mı var?", login:"Giriş yap", setupAccess:"Erişimi ayarla",
    missingTitle:"Eksik bağlantı", missingMessage:"Onay bağlantısı eksik. Lütfen e-postanızdaki bağlantıyı kullanın.", invalidTitle:"Geçersiz onay bağlantısı", invalidMessage:"Bağlantı geçersiz veya daha önce kullanılmış. Gerekirse üyelik sürecini yeniden başlatın.", expiredTitle:"Onay bağlantısının süresi doldu", expiredMessage:"Bağlantının süresi doldu. Yeni bir bağlantı gönderebilmemiz için üyelik sürecini yeniden başlatın.", successTitle:"E-posta onaylandı", successMessage:"Teşekkürler! Üyeliğiniz artık aktif ve üye erişiminiz açıldı.",
    successSteps:["Katılırken bir şifre seçtiyseniz şimdi giriş yapabilirsiniz.","Daha önce üye oldunuz mu? E-posta ile şifre belirlemek için “Erişimi ayarla” seçeneğini kullanın.","Sohbet ve iş birliği sonraki adımda üye hesabınıza bağlanacaktır."], failureSteps:["Onay bağlantısını kontrol edin veya gerekirse üyelik sürecini yeniden başlatın.","Üyeliğiniz zaten onaylandıysa erişiminizi ayrıca ayarlayabilirsiniz."],
    verifySubject:"E-postanızı onaylayın – VoiceOpenGov", verifyTitle:"E-postanızı onaylayın", verifyBody:"VoiceOpenGov’a katıldığınız için teşekkürler. Üyeliğinizi etkinleştirebilmemiz için e-posta adresinizi onaylayın.", verifyButton:"E-postayı onayla", yourData:"Bilgileriniz", membership:"Üyelik", name:"Ad", birthDate:"Doğum tarihi", city:"Konum", verifySupportBody:"Girişimi desteklemek isterseniz tüm seçenekleri destek sayfamızda bulabilirsiniz.", verifyJoinBody:"Pazarlama, programlama veya toplumsal çalışmalara katkı sunmak için members@voiceopengov.org adresine yazabilirsiniz.", ignore:"Kayıt olmadıysanız bu e-postayı yok sayabilirsiniz.",
    setupSubject:"VoiceOpenGov – üye erişimi", setupTitle:"VoiceOpenGov üye erişiminiz", setupBody:"Mevcut üye erişiminizi ilk kez ayarlamak veya şifrenizi sıfırlamak için bu bağlantıyı kullanın.", setupButton:"Erişimi ayarla", setupExpiry:"Bağlantı iki saat geçerlidir. Bu işlemi siz başlatmadıysanız e-postayı yok sayabilirsiniz."
  },
  ar: {
    yes:"نعم", no:"لا", member:"عضو", organisation:"منظمة", person:"فرد", profilePreview:"معاينة الملف", locationPending:"الموقع غير محدد بعد", visibility:"الظهور", publicVisibility:"عام (الإجماليات المحلية فقط)", privateVisibility:"خاص", supporter:"شارة الداعم", motivation:"الدافع", newsletterVog:"نشرة VoiceOpenGov", newsletterEdeb:"تحديثات eDebatte", nextSteps:"الخطوات التالية", confirmed:"تم التأكيد", notConfirmed:"غير مؤكد", home:"العودة إلى الرئيسية", support:"دعم المبادرة", questions:"أسئلة؟", login:"تسجيل الدخول", setupAccess:"إعداد الوصول",
    missingTitle:"الرابط غير مكتمل", missingMessage:"رابط التأكيد غير مكتمل. يرجى استخدام الرابط الوارد في بريدك الإلكتروني.", invalidTitle:"رابط التأكيد غير صالح", invalidMessage:"الرابط غير صالح أو تم استخدامه بالفعل. ابدأ عملية العضوية من جديد إذا لزم الأمر.", expiredTitle:"انتهت صلاحية رابط التأكيد", expiredMessage:"انتهت صلاحية الرابط. ابدأ عملية العضوية من جديد لنرسل لك رابطًا جديدًا.", successTitle:"تم تأكيد البريد الإلكتروني", successMessage:"شكرًا لك! أصبحت عضويتك نشطة وتم فتح وصول العضو الخاص بك.",
    successSteps:["إذا اخترت كلمة مرور عند الانضمام، يمكنك تسجيل الدخول الآن.","هل انضممت سابقًا؟ استخدم «إعداد الوصول» لتعيين كلمة مرور عبر البريد الإلكتروني.","سيتم ربط الدردشة والتعاون بحساب العضو في المرحلة التالية."], failureSteps:["تحقق من رابط التأكيد أو أعد بدء عملية العضوية عند الحاجة.","إذا كانت عضويتك مؤكدة بالفعل، يمكنك إعداد الوصول بشكل منفصل."],
    verifySubject:"تأكيد بريدك الإلكتروني – VoiceOpenGov", verifyTitle:"أكد بريدك الإلكتروني", verifyBody:"شكرًا لانضمامك إلى VoiceOpenGov. يرجى تأكيد بريدك الإلكتروني حتى نتمكن من تفعيل عضويتك.", verifyButton:"تأكيد البريد", yourData:"بياناتك", membership:"العضوية", name:"الاسم", birthDate:"تاريخ الميلاد", city:"الموقع", verifySupportBody:"إذا رغبت في دعم المبادرة، ستجد جميع الخيارات في صفحة الدعم.", verifyJoinBody:"للمساهمة في التسويق أو البرمجة أو العمل المجتمعي، راسلنا على members@voiceopengov.org.", ignore:"إذا لم تسجل، يمكنك تجاهل هذه الرسالة.",
    setupSubject:"VoiceOpenGov – وصول العضو", setupTitle:"وصولك كعضو في VoiceOpenGov", setupBody:"استخدم هذا الرابط لإعداد وصول العضو لأول مرة أو لإعادة تعيين كلمة المرور.", setupButton:"إعداد الوصول", setupExpiry:"الرابط صالح لمدة ساعتين. إذا لم تطلب هذا الإجراء، يمكنك تجاهل هذه الرسالة."
  }
};

export function getMemberFlowStrings(locale: MemberFlowLocale) {
  return S[locale];
}

export function resolveMemberFlowLocaleFromSupported(locale: SupportedLocale): MemberFlowLocale {
  return LAUNCH.has(locale as MemberFlowLocale) ? (locale as MemberFlowLocale) : "en";
}
