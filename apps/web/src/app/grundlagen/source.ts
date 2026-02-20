import "server-only";
import fs from "fs";
import path from "path";
import { DEFAULT_LOCALE } from "@/config/locales";
import { getGrundlagenEntry, type GrundlagenEntry, type GrundlagenSection } from "./strings";

type Frontmatter = {
  title?: string;
  subtitle?: string;
  intro?: string;
  metaTitle?: string;
  metaDescription?: string;
};

const CONTENT_ROOT = path.join(process.cwd(), "content", "grundlagen");

export function getGrundlagenSourceEntry(slug: string): GrundlagenEntry | null {
  const mdxEntry = loadMdxEntry(slug);
  if (mdxEntry) return mdxEntry;
  return getGrundlagenEntry(DEFAULT_LOCALE, slug);
}

function loadMdxEntry(slug: string): GrundlagenEntry | null {
  const filePath = path.join(CONTENT_ROOT, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, body } = parseFrontmatter(raw);
  const title = data.title?.trim() || slug;
  const subtitle = data.subtitle?.trim() || "";
  const intro = data.intro?.trim() || "";
  const sections = parseSections(body);
  return {
    slug,
    title,
    subtitle,
    intro,
    meta: {
      title: data.metaTitle?.trim() || `${title} – Grundlagen – VoiceOpenGov`,
      description: data.metaDescription?.trim() || intro || `${title} – Grundlagen`,
    },
    sections,
  };
}

function parseFrontmatter(raw: string): { data: Frontmatter; body: string } {
  const trimmed = raw.trimStart();
  if (!trimmed.startsWith("---")) {
    return { data: {}, body: raw };
  }
  const end = trimmed.indexOf("\n---", 3);
  if (end === -1) return { data: {}, body: raw };
  const header = trimmed.slice(3, end).trim();
  const body = trimmed.slice(end + 4);
  const data: Frontmatter = {};
  header.split(/\r?\n/).forEach((line) => {
    const idx = line.indexOf(":");
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    if (!key) return;
    (data as any)[key] = value;
  });
  return { data, body };
}

function parseSections(body: string): GrundlagenSection[] {
  const lines = body.split(/\r?\n/);
  const sections: GrundlagenSection[] = [];
  let currentTitle: string | null = null;
  let buffer: string[] = [];

  const pushSection = () => {
    if (!currentTitle) return;
    const paragraphs = splitParagraphs(buffer.join("\n"));
    sections.push({
      id: slugify(currentTitle),
      title: currentTitle,
      body: paragraphs,
    });
    buffer = [];
  };

  for (const line of lines) {
    const headingMatch = /^##\s+(.+)$/.exec(line.trim());
    if (headingMatch) {
      pushSection();
      currentTitle = headingMatch[1].trim();
      continue;
    }
    buffer.push(line);
  }
  pushSection();
  return sections.filter((section) => section.title.length > 0);
}

function splitParagraphs(text: string): string[] {
  return text
    .split(/\n\s*\n/g)
    .map((chunk) => chunk.replace(/\s+/g, " ").trim())
    .filter(Boolean);
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
