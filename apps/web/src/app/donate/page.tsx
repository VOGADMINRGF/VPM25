import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Unterstützen – VoiceOpenGov",
  description: "Unterstütze Aufbau, Recherche, Uebersetzung und Community.",
};

export default function DonatePage() {
  redirect("/unterstuetzen");
}
