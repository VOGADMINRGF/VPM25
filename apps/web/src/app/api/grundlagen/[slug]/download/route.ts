import { NextResponse } from "next/server";
import { getGrundlagenSourceEntry } from "@/app/grundlagen/source";
import { getLatestRelease } from "@/app/grundlagen/versioning";

function toMarkdown(
  entry: ReturnType<typeof getGrundlagenSourceEntry>,
  release: ReturnType<typeof getLatestRelease>,
) {
  if (!entry) return "";
  const parts: string[] = [];
  parts.push(`# ${entry.title}`);
  if (entry.subtitle) parts.push(`_${entry.subtitle}_`);
  if (release) {
    parts.push(`\n> Version ${release.version} · ${release.status} · Stand ${release.date}\n`);
  }
  if (entry.intro) parts.push(`\n${entry.intro}\n`);
  entry.sections.forEach((section) => {
    parts.push(`\n## ${section.title}\n`);
    section.body.forEach((paragraph) => {
      parts.push(`${paragraph}\n`);
    });
  });
  return parts.join("\n").trim() + "\n";
}

function toText(
  entry: ReturnType<typeof getGrundlagenSourceEntry>,
  release: ReturnType<typeof getLatestRelease>,
) {
  if (!entry) return "";
  const lines: string[] = [];
  lines.push(entry.title);
  lines.push("=".repeat(Math.min(64, entry.title.length)));
  if (entry.subtitle) lines.push(entry.subtitle);
  if (release) {
    lines.push(`Version: ${release.version}`);
    lines.push(`Status: ${release.status}`);
    lines.push(`Stand: ${release.date}`);
  }
  if (entry.intro) lines.push(`\n${entry.intro}\n`);
  entry.sections.forEach((section) => {
    lines.push(`\n${section.title}`);
    lines.push("-".repeat(Math.min(64, section.title.length)));
    section.body.forEach((paragraph) => {
      lines.push(paragraph);
    });
  });
  return lines.join("\n").trim() + "\n";
}

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const url = new URL(request.url);
  const format = (url.searchParams.get("format") || "md").toLowerCase();
  if (format !== "md" && format !== "txt") {
    return NextResponse.json({ ok: false, error: "invalid_format" }, { status: 400 });
  }

  const entry = getGrundlagenSourceEntry(params.slug);
  if (!entry) {
    return NextResponse.json({ ok: false, error: "not_found" }, { status: 404 });
  }

  const release = getLatestRelease(entry.slug);
  const versionLabel = release?.version ? `v${release.version}` : "v0";
  const filename = `voiceopengov-${entry.slug}-${versionLabel}.${format}`;

  const content = format === "txt" ? toText(entry, release) : toMarkdown(entry, release);
  const headers = {
    "Content-Type":
      format === "txt" ? "text/plain; charset=utf-8" : "text/markdown; charset=utf-8",
    "Content-Disposition": `attachment; filename="${filename}"`,
    "Cache-Control": "public, max-age=3600",
  };

  return new Response(content, { headers });
}
