type Mode = "reuse" | "separate";

export type SupporterSectionStrings = {
  title: string;
  description: string;
  reuse: string;
  separate: string;
};

export function SupporterSection({
  enabled,
  mode,
  onEnabledChange,
  onModeChange,
  strings,
}: {
  enabled: boolean;
  mode: Mode;
  onEnabledChange: (v: boolean) => void;
  onModeChange: (mode: Mode) => void;
  strings: SupporterSectionStrings;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
      <label className="flex items-start gap-3">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4"
          checked={enabled}
          onChange={(e) => onEnabledChange(e.target.checked)}
        />
        <div>
          <div className="text-sm font-semibold text-slate-100">{strings.title}</div>
          <div className="text-sm text-slate-400">{strings.description}</div>
        </div>
      </label>

      {enabled ? (
        <div className="mt-4 space-y-3">
          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={() => {
                onModeChange("reuse");
              }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                mode === "reuse"
                  ? "bg-sky-600 text-white"
                  : "bg-slate-900 text-slate-200 border border-slate-700 hover:bg-slate-800"
              }`}
            >
              {strings.reuse}
            </button>
            <button
              type="button"
              onClick={() => {
                onModeChange("separate");
              }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                mode === "separate"
                  ? "bg-sky-600 text-white"
                  : "bg-slate-900 text-slate-200 border border-slate-700 hover:bg-slate-800"
              }`}
            >
              {strings.separate}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
