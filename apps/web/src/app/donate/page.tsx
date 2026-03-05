import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { VOG_SUPPORT_PATH } from "@/config/links";

export const metadata: Metadata = {
  title: "Unterstützen – VoiceOpenGov",
  description: "Unterstütze Aufbau, Recherche, Uebersetzung und Community.",
};

export default function DonatePage() {
  redirect(VOG_SUPPORT_PATH);
}
