import { getRequestLocale } from "@/lib/locale";
import { getTranslatedBundle } from "@/lib/i18n/getTranslatedBundle";
import { getNotFoundStrings } from "./strings";

export default async function NotfoundPage() {
  const locale = await getRequestLocale();
  const bundle = await getTranslatedBundle({
    locale,
    original: getNotFoundStrings("de"),
    reviewedEnglish: getNotFoundStrings("en"),
  });
  const strings = bundle.value;

  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-16 text-slate-100">
      <h1 className="text-3xl font-bold headline-gradient text-center">
        {strings.title}
      </h1>
      <p className="text-slate-300 text-lg text-center">
        {strings.body}
      </p>
      <p className="text-center">
        <a className="text-sky-300 underline" href="/">
          {strings.cta}
        </a>
      </p>
    </main>
  );
}
