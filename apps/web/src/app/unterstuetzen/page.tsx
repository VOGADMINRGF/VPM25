import { redirect } from "next/navigation";
import { VOG_SUPPORT_PATH } from "@/config/links";

export default function SupportPage() {
  redirect(VOG_SUPPORT_PATH);
}
