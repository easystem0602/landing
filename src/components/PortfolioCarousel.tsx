"use client";

import ProtectedImage from "@/components/ProtectedImage";

const CARDS = [
  {
    id: 1,
    title: "압력용기 개발",
    intro: "고압 환경에서의 안전성과 내구성을 최우선으로 설계·검증합니다.",
    items: [
      "35Bar급 압력용기 구조 설계 및 제작성 검토",
      "하중/압력 조건 기반 안전율 검증 및 취약부 보강",
      "운용 시나리오를 고려한 인터페이스·체결부 설계",
    ],
    footer: "세부 사양 및 성능 데이터: 대외비(문의 시 제공)",
    image: "/images/ea-p1.webp",
    imageAlt: "압력용기 개발",
  },
  {
    id: 2,
    title: "자세 제어 장비 개발",
    intro: "정밀 제어를 위한 기구/구조 설계와 시스템 구성 경험을 보유합니다.",
    items: [
      "6DOF 자세 제어 장비 개발(구조/기구 설계 포함)",
      "구동부·프레임 강성 확보 및 반복 운용 안정성 검토",
      "설치/정렬(Alignment) 용이성을 고려한 모듈형 설계",
    ],
    footer: "세부 알고리즘/성능 지표: 대외비(문의 시 제공)",
    image: "/images/ea-p2.webp",
    imageAlt: "자세 제어 장비 개발",
  },
  {
    id: 3,
    title: "전자파 흡수장비 개발",
    intro: "시험 환경에서 요구되는 흡수 성능과 구조 안정성을 함께 설계합니다.",
    items: [
      "전방용 전자파 흡수장비 개발(구조 및 구성품 설계)",
      "설치 환경·진동/충격을 고려한 고정/지지 구조 최적화",
      "유지보수/교체를 고려한 모듈 단위 설계 및 조립성 개선",
    ],
    footer: "흡수 성능/평가 조건: 대외비(문의 시 제공)",
    image: "/images/ea-p3.webp",
    imageAlt: "전자파 흡수장비 개발",
  },
  {
    id: 4,
    title: "저소음·고안전성 특화 드론 추진체",
    intro: "저소음과 안전성을 동시에 만족하는 추진체 구조를 연구·개발합니다.",
    items: [
      "자체 개발 추진체 구조(림구동, 샤프트리스) 적용",
      "구조 기반 진동 저감 및 소음 개선 방향 설계",
      "안정 운용을 위한 구조/강성 설계 및 신뢰성 검토",
    ],
    footer: "상세 스펙/시험 결과: 대외비(문의 시 제공)",
    image: "/images/ea-p4.webp",
    imageAlt: "저소음·고안전성 특화 드론 추진체",
  },
  {
    id: 5,
    title: "추력시험장비",
    intro: "추력 성능을 정량화하고 개발 반복을 빠르게 만드는 시험 장비입니다.",
    items: [
      "드론 추진체 추력 시험을 위한 자체 시험장비 개발",
      "마운트 교체 방식으로 다양한 추진체/프로펠러 대응",
      "시험 반복성 확보를 위한 구조/강성 및 안정성 설계",
    ],
    footer: "계측/데이터 구성: 프로젝트 범위에 따라 커스터마이징",
    image: "/images/ea-p5.webp",
    imageAlt: "추력시험장비",
  },
];

type CardItem = (typeof CARDS)[number];

function PortfolioCard({ card, className = "" }: { card: CardItem; className?: string }) {
  return (
    <div className={`flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-lg text-slate-900 ${className}`}>
      <h3 className="mb-2 text-lg font-bold text-slate-900 sm:text-xl">{card.title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-slate-600">{card.intro}</p>
      <ul className="mb-4 list-inside list-disc space-y-1.5 text-sm text-slate-700">
        {card.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <p className="mb-4 text-sm text-slate-500">{card.footer}</p>
      <ProtectedImage src={card.image} alt={card.imageAlt} sizes="(max-width: 640px) 85vw, 420px" />
    </div>
  );
}

export default function PortfolioCarousel() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {CARDS.map((card) => (
        <PortfolioCard key={card.id} card={card} />
      ))}
    </div>
  );
}
