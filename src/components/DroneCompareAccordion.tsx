"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type CompareRow = {
  name: string;
  value: ReactNode;
  highlight: boolean;
};

type CompareItem = {
  label: string;
  rows: CompareRow[];
};

const ITEMS: CompareItem[] = [
  {
    label: "임무환경전환",
    rows: [
      { name: "공수양용 드론", value: "공중 ↔ 수중 전환", highlight: true },
      { name: "공중 드론", value: "전환불가능 (공중운용 고정)", highlight: false },
      { name: "수중 드론", value: "전환불가능 (수중운용 한정)", highlight: false },
    ],
  },
  {
    label: "소음 특성",
    rows: [
      { name: "공수양용 드론", value: "낮음", highlight: true },
      { name: "공중 드론", value: "높음", highlight: false },
      { name: "수중 드론", value: "높음", highlight: false },
    ],
  },
  {
    label: "방수·방진",
    rows: [
      { name: "공수양용 드론", value: "완전 방수 구조", highlight: true },
      { name: "공중 드론", value: "생활 방수", highlight: false },
      { name: "수중 드론", value: "완전 방수 구조", highlight: false },
    ],
  },
  {
    label: "활용분야",
    rows: [
      {
        name: "공수양용 드론",
        value: (
          <>
            항공 촬영, 수중 탐사
            <br />
            지상 및 수중 구조물 점검
          </>
        ),
        highlight: true,
      },
      { name: "공중 드론", value: "항공 촬영, 정찰", highlight: false },
      { name: "수중 드론", value: "수중 탐사", highlight: false },
    ],
  },
];

const INITIAL_COUNT = 2;

function Card({ label, rows }: CompareItem) {
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
        <Card key={item.label} {...item} />
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
