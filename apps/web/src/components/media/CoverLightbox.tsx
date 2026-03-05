"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Side = "front" | "back";

export default function CoverLightbox({
  frontSrc,
  backSrc,
  title,
  thumbClassName = "",
  imageAlt,
  priority,
}: {
  frontSrc: string;
  backSrc?: string | null;
  title: string;
  imageAlt?: string;
  thumbClassName?: string;
  priority?: boolean;
}) {
  const hasBack = Boolean(backSrc);
  const [open, setOpen] = useState(false);
  const [side, setSide] = useState<Side>("front");
  const [zoom, setZoom] = useState(1);

  const activeSrc = useMemo(
    () => (side === "back" && backSrc ? backSrc : frontSrc),
    [side, backSrc, frontSrc],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const zoomIn = () => setZoom((value) => Math.min(2.5, Math.round((value + 0.25) * 100) / 100));
  const zoomOut = () => setZoom((value) => Math.max(1, Math.round((value - 0.25) * 100) / 100));
  const resetZoom = () => setZoom(1);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setSide("front");
          setZoom(1);
          setOpen(true);
        }}
        className={`group relative w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/40 text-left ${thumbClassName}`}
        aria-label={`Cover öffnen: ${title}`}
      >
        <div className="relative">
          <Image
            src={frontSrc}
            alt={imageAlt ?? `${title} Cover`}
            width={1200}
            height={1680}
            className="h-auto w-full"
            priority={priority}
          />
          {hasBack ? (
            <div className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-[11px] font-semibold text-slate-200">
              Front / Back
            </div>
          ) : null}
          <div className="pointer-events-none absolute bottom-3 left-3 rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-[11px] font-semibold text-slate-200">
            Klick zum Vergrößern
          </div>
        </div>
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setOpen(false);
          }}
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/90 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 bg-slate-950/70 p-4">
              <div className="min-w-[220px]">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Cover</p>
                <p className="text-sm font-semibold text-slate-100">{title}</p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {hasBack ? (
                  <div className="inline-flex rounded-full border border-slate-700 bg-slate-950/60 p-1 text-xs font-semibold text-slate-300">
                    <button
                      type="button"
                      onClick={() => {
                        setSide("front");
                        resetZoom();
                      }}
                      className={`rounded-full px-3 py-1 ${
                        side === "front" ? "bg-sky-600 text-white" : "hover:bg-slate-900"
                      }`}
                    >
                      Front
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSide("back");
                        resetZoom();
                      }}
                      className={`rounded-full px-3 py-1 ${
                        side === "back" ? "bg-sky-600 text-white" : "hover:bg-slate-900"
                      }`}
                    >
                      Back
                    </button>
                  </div>
                ) : null}

                <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-xs font-semibold text-slate-300">
                  <button type="button" onClick={zoomOut} className="hover:text-white" aria-label="Zoom out">
                    −
                  </button>
                  <button type="button" onClick={resetZoom} className="hover:text-white" aria-label="Zoom reset">
                    {Math.round(zoom * 100)}%
                  </button>
                  <button type="button" onClick={zoomIn} className="hover:text-white" aria-label="Zoom in">
                    +
                  </button>
                </div>

                <button type="button" onClick={() => setOpen(false)} className="btn btn-ghost">
                  Schließen
                </button>
              </div>
            </div>

            <div className="max-h-[80vh] overflow-auto p-4">
              <div
                className="mx-auto w-full"
                style={{
                  transform: `scale(${zoom})`,
                  transformOrigin: "center top",
                }}
              >
                <Image
                  src={activeSrc}
                  alt={imageAlt ?? `${title} Cover`}
                  width={1200}
                  height={1680}
                  className="h-auto w-full rounded-2xl border border-slate-800"
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
