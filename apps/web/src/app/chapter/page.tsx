import { redirect } from "next/navigation";

export const metadata = {
  title: "Vor Ort aktiv werden | VoiceOpenGov",
  description: "Der regionale Einstieg von VoiceOpenGov ist jetzt unter /vor-ort erreichbar.",
};

export default function ChapterPage() {
  redirect("/vor-ort");
}
