"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const ITEMS = [
  {
    label: "임무환경",
    rows: [
      { name: "공수양용 드론", value: "공중·수중 복합", highlight: true },
      { name: "공중 드론", value: "공중", highlight: false },
      { name: "수중 드론", value: "수중", highlight: false },
    ],
  },
  {
    label: "운용 해발고도·수심(m)",
    rows: [
      { name: "공수양용 드론", value: "-30 ~ 5,000", highlight: true },
      { name: "공중 드론", value: "0 ~ 5,000", highlight: false },
      { name: "수중 드론", value: "-100 ~ 0", highlight: false },
    ],
  },
  {
    label: "통신",
    rows: [
      { name: "공수양용 드론", value: "무선", highlight: true },
      { name: "공중 드론", value: "무선", highlight: false },
      { name: "수중 드론", value: "유선", highlight: false },
    ],
  },
  {
    label: "활용 분야",
    rows: [
      { name: "공수양용 드론", value: "항공촬영, 수중탐사, 정찰, 구조 등", highlight: true },
      { name: "공중 드론", value: "항공촬영, 정찰, 조사", highlight: false },
      { name: "수중 드론", value: "수중탐사, 구조", highlight: false },
    ],
  },
  {
    label: "IP 등급",
    rows: [
      { name: "공수양용 드론", value: "IP68", highlight: true },
      { name: "공중 드론", value: "IP45", highlight: false },
      { name: "수중 드론", value: "IP68", highlight: false },
    ],
  },
];

const INITIAL_COUNT = 2;

function Card({ label, rows }: { label: string; rows: { name: string; value: string; highlight: boolean }[] }) {
  return (
    <div className="rounded-lg border border-slate-600/80 bg-slate-800/80 p-4">
      <p className="mb-2 text-sm font-medium text-slate-400">{label}</p>
      <ul className="space-y-1.5 text-base text-slate-300">
        {rows.map((r) => (
          <li key={r.name}>
            <span className={r.highlight ? "font-bold text-white" : "text-slate-400"}>{r.name}</span>{" "}
            <span className={r.highlight ? "font-bold text-white" : undefined}>{r.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function DroneCompareAccordion() {
  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? ITEMS : ITEMS.slice(0, INITIAL_COUNT);

  return (
    <div className="space-y-3 md:hidden">
      {visibleItems.map((item) => (
        <Card key={item.label} label={item.label} rows={item.rows} />
      ))}
      <div className="flex justify-center pt-2">
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-700 px-4 py-2.5 text-base font-medium text-white transition hover:border-slate-500 hover:bg-slate-600"
        >
          {expanded ? (
            <>
              접기
              <ChevronUp className="h-5 w-5" strokeWidth={2} aria-hidden />
            </>
          ) : (
            <>
              비교 더보기
              <ChevronDown className="h-5 w-5" strokeWidth={2} aria-hidden />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
