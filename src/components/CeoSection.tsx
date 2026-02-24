"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function CeoSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mb-16">
      <h3 className="mb-8 text-xl font-semibold text-white sm:text-2xl">대표자 소개</h3>
      <div className="flex flex-col gap-8 rounded-xl border border-slate-700 bg-slate-800/50 p-6 sm:p-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start">
          <div className="mx-auto w-40 shrink-0 md:mx-0 md:w-56">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg bg-slate-700">
              <Image
                src="/images/ea2.webp"
                alt="대표이사 박진호"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 160px, 224px"
              />
            </div>
          </div>
          <div className="min-w-0 flex-1 space-y-6">
          <div>
            <p className="text-2xl font-bold text-white">대표이사 박진호</p>
            <p className="mt-2 text-lg text-slate-400">
              다목적 헬기 훈련 시뮬레이터 개발 · 한국형 기동헬기 MFCS 개발 · 한국형 기동헬기 훈련 시뮬레이터 개발 · 공격형 헬기 구조개조 및 시험 평가 · 고등훈련기 구성품 국산화 개발 · 차세대 전투기 구성품 개발
            </p>
          </div>
          <div>
            <p className="mb-2 inline-block rounded-full bg-slate-700 px-3 py-1 text-base font-medium text-indigo-300">주요 이력</p>
            <ul className="space-y-1.5 text-lg text-slate-400">
              <li>2023.06 ~ 현재 (주)이에이시스템, 대표이사</li>
              <li>2022.10 ~ 2023.06 (주)한국전자파연구소, 선임 연구원</li>
              <li>2019.12 ~ 2022.05 이노스페이스 추진기관팀 책임 연구원, 설계팀 팀장</li>
              <li>2017.08 ~ 2020.09 한국항공대학교대학원 항공우주·기계공학과 박사 수료</li>
              <li>2014.05 ~ 2018.11 아이원스 주식회사 국방그룹, 과장</li>
              <li>2012.03 ~ 2014.02 한국항공대학교대학원 항공우주·기계공학과 공학석사</li>
              <li>2008.11 ~ 2010.01 (주)한화 아산사업장 개발팀, 사원</li>
              <li>2005.09 ~ 2006.10 (주)도담시스템스 개발팀, 사원</li>
            </ul>
          </div>

          {expanded && (
            <>
              <div>
                <p className="mb-2 inline-block rounded-full bg-slate-700 px-3 py-1 text-base font-medium text-indigo-300">특허</p>
                <ul className="space-y-1 text-lg text-slate-400">
                  <li>POWER TRANSMISSION SHAFT / 특허(미국) 15536649(2015), 155536652(2015) 2건</li>
                  <li>동력전달축 / 특허(국내) 102014193167(2014), 1020140193163(2014), 1020170060326(2017)</li>
                </ul>
              </div>
              <div>
                <p className="mb-2 inline-block rounded-full bg-slate-700 px-3 py-1 text-base font-medium text-indigo-300">주요 실적</p>
                <ul className="grid gap-2 text-lg text-slate-400 sm:grid-cols-2">
                  <li>· 산화제 탱크, 발사체 주요 구조물 개발 / 이노스페이스 2019~2021</li>
                  <li>· 소형위성발사체 상단 엔진용 하이브리드 로켓추진기관 개발 / 중소기업기술정보진흥원 2019~2021</li>
                  <li>· 헬기용 7연장 2.75 로켓발사대 조립체 개발 / 국방기술진흥연구소 2016~2017</li>
                  <li>· 차세대 전투기 구성품 개발 / 한국항공우주산업 2016~2018</li>
                  <li>· 고등훈련기 구성품 국산화 개발 / 국방기술품질원 2014~2018</li>
                  <li>· 달착륙선 알루미늄 허니콤 충격흡수 장치 연구 / 항공우주연구원 2012~2014</li>
                  <li>· 공격형 헬기 성능 개량 / UG넥스원 2010~2011</li>
                  <li>· 한국형 기동헬기 훈련장비 개발 / 한국항공우주산업 2010~2011</li>
                  <li>· 한국형 기동헬기 MFCS 개발 / 한국항공우주산업 2008~2010</li>
                  <li>· 다목적 헬기 훈련장비 개발 / 자체 개발 2005~2006</li>
                </ul>
              </div>
              <div>
                <p className="mb-2 inline-block rounded-full bg-slate-700 px-3 py-1 text-base font-medium text-indigo-300">주요 논문</p>
                <ul className="space-y-1 text-lg text-slate-400">
                  <li>· 항공기용 동력전달축의 진동시험 및 유한요소 해석 / 한국항공우주학회, 2018</li>
                  <li>· 동력 전달축의 안정성 평가를 위한 모드 해석 및 공진 속도 시험 / 항공우주시스템공학회, 2020</li>
                  <li>· 림 구동형모터용 블레이드의 로터 구조 진동특성에 관한 연구 / 한국유체기계학회, 2025</li>
                  <li>· 이외 7건 논문 발표</li>
                </ul>
              </div>
            </>
          )}
          </div>
        </div>
        <div className="flex justify-center pt-2">
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-700 px-4 py-2.5 text-lg font-medium text-white transition hover:border-slate-500 hover:bg-slate-600"
          >
            {expanded ? (
              <>
                접기 <ChevronUp className="h-5 w-5" strokeWidth={2} aria-hidden />
              </>
            ) : (
              <>
                더보기 <ChevronDown className="h-5 w-5" strokeWidth={2} aria-hidden />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
