import Image from "next/image";
import { Box, Building2, Construction, FlaskConical, MapPin, Phone, Wrench } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import CopyAddressButton from "@/components/CopyAddressButton";
import CeoSection from "@/components/CeoSection";
import DroneCompareAccordion from "@/components/DroneCompareAccordion";
import Header from "@/components/Header";
import PortfolioCarousel from "@/components/PortfolioCarousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      {/* 시스템 개선 중 오버레이 */}
      {/* <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm"
        aria-live="polite"
        role="status"
      >
        <div className="flex flex-col items-center gap-4 text-center">
          <Construction
            className="h-14 w-14 text-indigo-400"
            strokeWidth={1.5}
            aria-hidden
          />
          <p className="text-lg font-medium text-slate-200">
            현재 시스템 개선 중입니다...
          </p>
        </div>
      </div> */}

      {/* 배경 */}
      <div
        className="fixed inset-0 -z-10 bg-gradient-to-b from-slate-950 via-indigo-950/30 to-slate-950"
        aria-hidden
      />
      <div
        className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.25),transparent)]"
        aria-hidden
      />

      <Header />

      <main>
        {/* ========== Hero (전체 화면 배경 이미지 + 텍스트 오버레이) ========== */}
        <section id="hero" className="relative min-h-screen flex items-center">
          {/* 배경 이미지: 화면 꽉 채움 (scale로 가장자리 흰 테두리 잘라냄) */}
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/ea1.webp"
              alt=""
              fill
              className="object-cover object-center scale-105"
              priority
              sizes="100vw"
            />
            {/* 어두운 오버레이로 글자 가독성 확보 */}
            <div className="absolute inset-0 bg-slate-950/40" aria-hidden />
          </div>

          {/* 텍스트 오버레이 (항공우주 메인, EA 설명) */}
          <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 sm:px-8">
            <div className="max-w-2xl">
              <p className="text-lg font-medium tracking-wide text-white/90">
                EAsystem — Engineering for Aerospace
              </p>
              <h1 className="mt-3 text-4xl font-bold leading-snug tracking-tight text-white sm:text-5xl leading-tight sm:leading-normal lg:text-6xl">
                가볍게, 더 강하게 —<br/>
                <span className="whitespace-nowrap bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                  요구조건을 만족시키는 <br className="sm:hidden" />최적 설계
                </span>
              </h1>
              <p className="mt-4 text-xl text-white/90 sm:text-2xl">
                항공우주 시스템 설계·시뮬레이션부터<br className="sm:hidden" />공중·수중 통합 드론까지.
              </p>
            </div>
          </div>
        </section>

        {/* ========== 사업영역 ========== */}
        <section id="business" className="border-t border-slate-800/50 px-6 py-24 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-6 text-center text-3xl font-semibold text-white sm:text-4xl">사업 영역</h2>
            <p className="mb-14 text-center text-lg text-slate-400">
              (주)이에이시스템은 발사체 및 항공우주 분야<br className="sm:hidden" />정부 연구과제의 다양한 엔지니어링 기술 개발 경험을 보유하고 있습니다.
            </p>
            <p className="mb-12 text-center text-lg font-medium text-indigo-300/90">
              항공우주분야 엔지니어링 서비스 — <br className="sm:hidden" />설계 및 해석 · 시험 지원 및 시험장비 개발
            </p>

            {/* 2x2 그리드 카드 (가운데 십자 연결선) */}
            <div className="relative">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-4 rounded-xl border border-slate-700 bg-slate-800/60 p-6 text-white sm:flex-row sm:items-center">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <Wrench className="h-8 w-8 shrink-0 text-indigo-400" strokeWidth={1.5} aria-hidden />
                      <p className="text-lg font-medium leading-snug">항공/우주 발사체 설계 경험</p>
                    </div>
                    <p className="mt-2 text-base leading-relaxed text-slate-400">
                      요구조건 정리·설계 방향 제안, 개념설계부터 3D 모델링/도면까지 일관된 산출물 제공.
                    </p>
                  </div>
                  <div className="relative h-20 w-full shrink-0 overflow-hidden rounded-lg bg-slate-700 sm:h-24 sm:w-[40%]">
                    <Image src="/images/ea-f1.webp" alt="" fill className="object-cover" sizes="(max-width: 640px) 100vw, 40vw" />
                  </div>
                </div>
                <div className="flex flex-col gap-4 rounded-xl border border-slate-700 bg-slate-800/60 p-6 text-white sm:flex-row sm:items-center">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <Box className="h-8 w-8 shrink-0 text-indigo-400" strokeWidth={1.5} aria-hidden />
                      <p className="text-lg font-medium leading-snug">전문적인 구조설계 서비스 제공</p>
                    </div>
                    <p className="mt-2 text-base leading-relaxed text-slate-400">
                      FEA 기반 강도·진동·열 검증.
                      <br />
                      안전율·제작성 고려 최적 설계.
                    </p>
                  </div>
                  <div className="relative h-20 w-full shrink-0 overflow-hidden rounded-lg bg-slate-700 sm:h-24 sm:w-[40%]">
                    <Image src="/images/ea-f2.webp" alt="" fill className="object-cover" sizes="(max-width: 640px) 100vw, 40vw" />
                  </div>
                </div>
                <div className="flex flex-col gap-4 rounded-xl border border-slate-700 bg-slate-800/60 p-6 text-white sm:flex-row sm:items-center">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <FlaskConical className="h-8 w-8 shrink-0 text-indigo-400" strokeWidth={1.5} aria-hidden />
                      <p className="text-lg font-medium leading-snug">시험 지원 및 시험장비 개발</p>
                    </div>
                    <p className="mt-2 text-base leading-relaxed text-slate-400">
                      시험 계획 수립~치구/지그 설계·제작 지원.
                      <br />
                      계측·데이터 구축으로 설계 검증 연결.
                    </p>
                  </div>
                  <div className="relative h-20 w-full shrink-0 overflow-hidden rounded-lg bg-slate-700 sm:h-24 sm:w-[40%]">
                    <Image src="/images/ea-f3.webp" alt="" fill className="object-cover" sizes="(max-width: 640px) 100vw, 40vw" />
                  </div>
                </div>
                <div className="flex flex-col gap-4 rounded-xl border border-slate-700 bg-slate-800/60 p-6 text-white sm:flex-row sm:items-center">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-8 w-8 shrink-0 text-indigo-400" strokeWidth={1.5} aria-hidden />
                      <p className="text-lg font-medium leading-snug">전문인력 및 제조 인프라 보유</p>
                    </div>
                    <p className="mt-2 text-base leading-relaxed text-slate-400">
                      설계–제작–검증 유기 수행.
                      <br />
                      일정·품질 동시 만족 협업 체계.
                    </p>
                  </div>
                  <div className="relative h-20 w-full shrink-0 overflow-hidden rounded-lg bg-slate-700 sm:h-24 sm:w-[40%]">
                    <Image src="/images/ea-f4.webp" alt="" fill className="object-cover" sizes="(max-width: 640px) 100vw, 40vw" />
                  </div>
                </div>
              </div>
              {/* 가운데 십자선 (그리드 위 오버레이) */}
              <div className="pointer-events-none absolute inset-0 hidden sm:block" aria-hidden>
                <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-slate-600/60" />
                <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-slate-600/60" />
              </div>
            </div>
          </div>
        </section>

        {/* ========== 회사 소개 ========== */}
        <section id="about" className="border-t border-slate-800/50 px-6 py-24 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-6 text-center text-3xl font-semibold text-white sm:text-4xl">회사 소개</h2>
            <div className="mb-16 space-y-4 text-center text-lg text-slate-400">
              <p>
                EAsystem은 항공우주 구조 설계 전문 조직으로, 구조/열 해석과 3D 전산 설계, 시험 평가 지원을 통합적으로 수행합니다.
              </p>
              <p>
                요구조건–해석–설계–검증–도면 산출까지의 흐름을 표준화하여 일정과 품질을 동시에 관리하며, 개발 단계별 필요한 산출물을 명확하게 제공합니다.
              </p>
              <p>
                신뢰할 수 있는 수치와 근거 기반의 설계로 고객의 의사결정을 빠르게 돕고, 개발 완성도를 높입니다.
              </p>
            </div>

            {/* 연혁 */}
            <div className="mb-16">
              <h3 className="mb-8 text-xl font-semibold text-white sm:text-2xl">연혁</h3>
              <div className="flex flex-col gap-8">
                <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 sm:p-8">
                  <p className="mb-4 text-lg font-semibold text-indigo-300">2023년</p>
                  <ul className="space-y-3 text-lg text-slate-400">
                    <li className="flex gap-2"><span className="w-11 shrink-0 text-white">06월</span><span>회사 설립</span></li>
                    <li className="flex gap-2"><span className="w-11 shrink-0 text-white">09월</span><span><span className="font-bold text-white">[한국항공우주연구원]</span> 주착륙장치 3D전산 설계 및 도면 제작</span></li>
                    <li className="flex gap-2">
                      <span className="w-11 shrink-0 text-white">10월</span>
                      <span className="min-w-0">
                        <span className="font-bold text-white">[한국전자파연구소]</span> XXX사업 제품 3종 열해석
                        <br />
                        <span className="font-bold text-white">[한국항공우주연구원]</span> 착륙장치 시험용 가스스프링 개발
                      </span>
                    </li>
                    <li className="flex gap-2"><span className="w-11 shrink-0 text-white">11월</span><span><span className="font-bold text-white">[한국전자파연구소]</span> Horizontal Near-Field Chamber 개발</span></li>
                    <li className="flex gap-2"><span className="w-11 shrink-0 text-white">12월</span><span><span className="font-bold text-white">[충남대학교]</span> 회전계구조 시험리그 및 구성품 개발</span></li>
                  </ul>
                </div>
                <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 sm:p-8">
                  <p className="mb-4 text-lg font-semibold text-indigo-300">2024년</p>
                  <ul className="space-y-3 text-lg text-slate-400">
                    <li className="flex gap-2"><span className="w-11 shrink-0 text-white">05월</span><span><span className="font-bold text-white">[한국교통대학교]</span> 항공 모빌리티 기체 구조좌굴 해석 기술 개발</span></li>
                    <li className="flex gap-2"><span className="w-11 shrink-0 text-white">07월</span><span><span className="font-bold text-white">[충남대학교]</span> 민/군 우주항공 모빌리티용 첨단 경량 구조 개발</span></li>
                    <li className="flex gap-2"><span className="w-11 shrink-0 text-white">08월</span><span><span className="font-bold text-white">[에레모스]</span> 701-13단 모션 사업 수주</span></li>
                    <li className="flex gap-2"><span className="w-11 shrink-0 text-white">09월</span><span><span className="font-bold text-white">[에레모스]</span> 자월도 6G PAV 착륙장치 조립·현장 설치 운용사업 수주</span></li>
                    <li className="flex gap-2">
                      <span className="w-11 shrink-0 text-white">10월</span>
                      <span className="min-w-0">
                        <span className="font-bold text-white">[한국타이어]</span> SNOW 타이어 시험장비 개발 수주
                        <br />
                        <span className="font-bold text-white">[국방과학연구소]</span> 풍동시험장치 개발 수주
                      </span>
                    </li>
                    <li className="flex gap-2"><span className="w-11 shrink-0 text-white">11월</span><span><span className="font-bold text-white">[충남대학교]</span> 수소모빌리티용 첨단 구조 설계·해석 연구</span></li>
                    <li className="flex gap-2">
                      <span className="w-11 shrink-0 text-white">12월</span>
                      <span className="min-w-0">
                        <span className="font-bold text-white">[충남대학교]</span> 우주항공모빌리티용 첨단 경량 구조 기술이전 협약
                        <br />
                        <span className="font-bold text-white">[한국교통대학교]</span> 특허 출원 «좌굴 경계 조건 설계 기준 예측 시스템»
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 sm:p-8">
                  <p className="mb-4 text-lg font-semibold text-indigo-300">2025년</p>
                  <ul className="space-y-3 text-lg text-slate-400">
                    <li className="flex gap-2"><span className="w-11 shrink-0 text-white">02월</span><span><span className="font-bold text-white">[한국전자파연구소]</span> 전방용 램펜슬 개발</span></li>
                    <li className="flex gap-2"><span className="w-11 shrink-0 text-white">06월</span><span><span className="font-bold text-white">[헬리코리아]</span> 헬기 엔진 시험 리그 개발</span></li>
                    <li className="flex gap-2"><span className="w-11 shrink-0 text-white">12월</span><span><span className="font-bold text-white">[충남대학교]</span> 림 구동형모터용 블레이드 로터 구조 진동 특성 연구</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <CeoSection />

            {/* 자체 드론 및 핵심 부품 기술 (배경 이미지 + 검은색 오버레이, 좌우 풀너비) */}
            <div className="relative left-1/2 mb-16 w-screen -translate-x-1/2 overflow-hidden py-16">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/images/ea-d.webp"
                  alt=""
                  fill
                  className="object-cover object-center scale-105"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/70" aria-hidden />
              </div>
              <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
                <h3 className="mb-2 text-xl font-semibold text-white sm:text-2xl">자체 드론 및 핵심 부품 기술 (시제품 개발 중)</h3>
                <p className="mb-8 text-base text-slate-300 sm:text-lg">복합 환경에서도 실질적인 임무 수행이 가능한 드론 개발</p>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {/* 카드 1: Solution 01 — 공수양용 드론 구조 개발 */}
                  <div className="flex flex-col overflow-hidden rounded-xl border border-slate-600/80 bg-slate-800/90 shadow-xl">
                    <div className="relative flex min-h-[240px] flex-col justify-start pb-5 pt-5 sm:min-h-[280px]">
                      <div className="absolute inset-0">
                        <Image src="/images/ea-d1.webp" alt="" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 33vw" />
                        <div className="absolute inset-0 bg-slate-900/70" aria-hidden />
                      </div>
                      <div className="relative z-10 px-5">
                        <span className="mb-2 inline-flex w-fit rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">Solution 01.</span>
                        <p className="text-lg font-bold leading-snug text-white sm:text-xl">공수양용 드론 구조 개발</p>
                      </div>
                    </div>
                    <div className="border-t border-slate-600/80 bg-slate-800/95 p-5">
                      <ul className="space-y-2 text-base text-slate-300">
                        <li className="flex gap-2"><span className="text-slate-500">·</span> 주요 구성품(동체, 추진체 등)의 소재는 PC, ABS와 같은 고강도 플라스틱 소재를 적용</li>
                        <li className="flex gap-2"><span className="text-slate-500">·</span> 경량화 및 수중 환경에서의 부식 위험을 최소화</li>
                        <li className="flex gap-2"><span className="text-slate-500">·</span> 형상 자유도를 확보</li>
                      </ul>
                    </div>
                  </div>
                  {/* 카드 2: Solution 02 — 공중↔수중 전환 제어 시스템 및 회로 개발 */}
                  <div className="flex flex-col overflow-hidden rounded-xl border border-slate-600/80 bg-slate-800/90 shadow-xl">
                    <div className="relative flex min-h-[240px] flex-col justify-start pb-5 pt-5 sm:min-h-[280px]">
                      <div className="absolute inset-0">
                        <Image src="/images/ea-d2.webp" alt="" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 33vw" />
                        <div className="absolute inset-0 bg-slate-900/70" aria-hidden />
                      </div>
                      <div className="relative z-10 px-5">
                        <span className="mb-2 inline-flex w-fit rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">Solution 02.</span>
                        <p className="text-lg font-bold leading-snug text-white sm:text-xl">공중 ↔ 수중 전환 제어 시스템 및 회로 개발</p>
                      </div>
                    </div>
                    <div className="border-t border-slate-600/80 bg-slate-800/95 p-5">
                      <ul className="space-y-2 text-base text-slate-300">
                        <li className="flex gap-2"><span className="text-slate-500">·</span> 변화되는 환경에 따라 안정적으로 제어가 가능하도록 환경 전환 제어 시스템 개발</li>
                        <li className="flex gap-2"><span className="text-slate-500">·</span> 공중비행과 수중탐사를 구분하여 각 환경에 적합한 제어 로직을 적용하고, 추진시스템의 틸팅 동작과 연동되는 전환 제어 알고리즘 구성</li>
                      </ul>
                    </div>
                  </div>
                  {/* 카드 3: Solution 03 — 운용 S/W 개발 */}
                  <div className="flex flex-col overflow-hidden rounded-xl border border-slate-600/80 bg-slate-800/90 shadow-xl md:col-span-2 lg:col-span-1">
                    <div className="relative flex min-h-[240px] flex-col justify-start pb-5 pt-5 sm:min-h-[280px]">
                      <div className="absolute inset-0">
                        <Image src="/images/ea-d3.webp" alt="" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 33vw" />
                        <div className="absolute inset-0 bg-slate-900/70" aria-hidden />
                      </div>
                      <div className="relative z-10 px-5">
                        <span className="mb-2 inline-flex w-fit rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">Solution 03.</span>
                        <p className="text-lg font-bold leading-snug text-white sm:text-xl">운용 S/W 개발</p>
                      </div>
                    </div>
                    <div className="border-t border-slate-600/80 bg-slate-800/95 p-5">
                      <ul className="space-y-2 text-base text-slate-300">
                        <li className="flex gap-2"><span className="text-slate-500">·</span> 운용 환경에 따라 상태를 정확하게 인지할 수 있는 상태인지 및 센서시스템을 적용하고, 센서 정보를 계측할 수 있는 소프트웨어 개발</li>
                        <li className="flex gap-2"><span className="text-slate-500">·</span> 임무 환경 전환 시에도 자세, 방향, 속도 등의 상태 정보를 연속적으로 확보하여 안정적인 제어와 임무 수행 가능</li>
                      </ul>
                    </div>
                  </div>
                </div>
              <div className="mt-6 rounded-xl border border-slate-700 bg-slate-800/50 p-6">
                <p className="mb-4 text-base font-semibold text-indigo-300">공수양용 드론 vs 기존 드론</p>
                {/* 모바일: 아코디언 (기본 2개, 더보기로 전체) */}
                <DroneCompareAccordion />
                {/* 데스크톱: 기존 표 */}
                <div className="hidden md:block">
                  <table className="w-full border-collapse text-lg text-slate-400">
                    <thead>
                      <tr className="border-b border-slate-600">
                        <th className="py-2 pr-4 text-left font-medium text-slate-300">구분</th>
                        <th className="py-2 px-4 text-left font-medium text-indigo-300">공수양용 드론</th>
                        <th className="py-2 px-4 text-left font-medium text-slate-300">공중 드론</th>
                        <th className="py-2 px-4 text-left font-medium text-slate-300">수중 드론</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-400">
                      <tr className="border-b border-slate-700"><td className="py-2 pr-4 text-slate-500">임무환경</td><td className="py-2 px-4">공중·수중 복합</td><td className="py-2 px-4">공중</td><td className="py-2 px-4">수중</td></tr>
                      <tr className="border-b border-slate-700"><td className="py-2 pr-4 text-slate-500">운용 해발고도·수심(m)</td><td className="py-2 px-4">-30 ~ 5,000</td><td className="py-2 px-4">0 ~ 5,000</td><td className="py-2 px-4">-100 ~ 0</td></tr>
                      <tr className="border-b border-slate-700"><td className="py-2 pr-4 text-slate-500">통신</td><td className="py-2 px-4">무선</td><td className="py-2 px-4">무선</td><td className="py-2 px-4">유선</td></tr>
                      <tr className="border-b border-slate-700"><td className="py-2 pr-4 text-slate-500">활용 분야</td><td className="py-2 px-4">항공촬영, 수중탐사, 정찰, 구조 등</td><td className="py-2 px-4">항공촬영, 정찰, 조사</td><td className="py-2 px-4">수중탐사, 구조</td></tr>
                      <tr><td className="py-2 pr-4 text-slate-500">IP 등급</td><td className="py-2 px-4">IP68</td><td className="py-2 px-4">IP45</td><td className="py-2 px-4">IP68</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              </div>
            </div>

            {/* 산·학 기술 협력 */}
            <div>
              <h3 className="mb-8 text-xl font-semibold text-white sm:text-2xl">산·학 기술 협력</h3>
              <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 sm:p-8">
                <p className="text-lg text-slate-400">
                  <span className="font-bold text-white">충남대학교, 한국교통대학교 등 대학 및 연구기관과 기술이전·공동연구</span>를 통한 협력을 진행하고 있습니다.<br/>우주항공모빌리티용 첨단 경량 구조 기술이전 협약(충남대), 좌굴 경계 조건 설계 기준 예측 시스템 특허 출원(한국교통대) 등 산·학 연계 R&D를 수행합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== 포트폴리오 ========== */}
        <section id="portfolio" className="border-t border-slate-800/50 px-6 py-24 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-semibold text-white sm:text-4xl">포트폴리오</h2>
            <p className="mb-14 text-center text-lg text-slate-400">연구·개발 수행 경험을 바탕으로 설계–제작–시험까지 연결되는 포트폴리오입니다.</p>

            <PortfolioCarousel />

            {/* 이미지 블러 사유 및 무단 복제 경고 */}
            <div className="mt-16 flex flex-col items-center justify-center text-center">
              <p className="mb-3 text-base font-medium text-slate-300 sm:text-lg">
                본 포트폴리오 이미지 중 일부는 <span className="text-white">보안사항(대외비·기밀)</span>으로 인해 의도적으로 블러 처리되었습니다.
              </p>
              <p className="text-sm text-slate-400 sm:text-base">
                위 이미지를 무단으로 복제·저장·배포할 경우 저작권법 및 관련 법령에 따라 <span className="font-semibold text-amber-400/90">법적 책임</span>을 질 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* ========== 지도 및 사업문의 ========== */}
        <section id="contact" className="border-t border-slate-800/50 px-6 py-24 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-4 text-center text-3xl font-semibold text-white sm:text-4xl">Contact Us</h2>
            <p className="mb-16 text-center text-lg text-slate-400">
            구조설계·해석, 시험지원, 공동개발 등<br className="sm:hidden" />협업이 필요하신가요?
              <br />
              문의 내용을 남겨주시면 담당 엔지니어가 검토 후<br className="sm:hidden" />안내드리겠습니다.
            </p>

            {/* 회사정보 + 문의폼 그리드 (양쪽 높이 동일) — 먼저 표시 */}
            <div className="mb-16 grid gap-12 lg:grid-cols-2 lg:items-stretch">
              {/* 왼쪽: 회사 간략 정보 */}
              <div className="flex h-full min-h-0 flex-col items-center justify-center gap-8 rounded-2xl border border-slate-700 bg-slate-800/50 p-6 text-center">
                <div>
                  <p className="text-4xl font-bold text-white sm:text-5xl">(주)이에이시스템</p>
                  <p className="mt-1 text-lg text-slate-400">(Engineering for Aerospace system)</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 shrink-0 text-indigo-400" aria-hidden />
                    <p className="text-lg font-medium text-white">찾아오시는 곳</p>
                  </div>
                  <p className="text-lg text-slate-400">
                    세종특별자치시 집현중앙7로 6,<br className="sm:hidden" />지식산업센터 A동 608호
                  </p>
                  <CopyAddressButton />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 shrink-0 text-indigo-400" aria-hidden />
                    <p className="text-lg font-medium text-white">전화 문의</p>
                  </div>
                  <p className="text-lg text-slate-400">044-903-0687</p>
                  <p className="text-lg text-slate-400">평일 08:30 – 18:00</p>
                  <a
                    href="tel:+82-44-903-0687"
                    className="mt-2 inline-flex md:hidden rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-base font-medium text-white transition hover:border-slate-500 hover:bg-slate-600"
                  >
                    전화하기
                  </a>
                </div>
              </div>

              {/* 오른쪽: 문의 폼 */}
              <ContactForm />
            </div>

            {/* 지도: API 키 있으면 Maps Embed API place 모드(주소 검색 + 줌 설정), 없으면 등록한 공유 링크 embed */}
            <div className="relative w-full overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/50">
              <div
                className="absolute left-1/2 top-6 z-10 -translate-x-1/2 rounded-lg border border-slate-600 bg-white px-4 py-2 shadow-lg"
                aria-hidden
              >
                <span className="text-base font-semibold text-slate-800">(주)이에이시스템</span>
              </div>
              <iframe
                title="오시는 길 지도 - (주)이에이시스템"
                src={
                  process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY
                    ? `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY}&q=${encodeURIComponent("(주)이에이시스템 세종특별자치시 집현중앙7로 6 지식산업센터 A동 608호")}&zoom=10`
                    : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3207.3012648629815!2d127.32988830000001!3d36.4985892!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35653500536e3d7d%3A0xf3ad130d276d089c!2zKOyjvCnsnbTsl5DsnbTsi5zsiqTthZw!5e0!3m2!1sko!2skr!4v1771944502057!5m2!1sko!2skr"
                }
                className="aspect-[21/9] min-h-[280px] w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* ========== 푸터 ========== */}
        <footer className="border-t border-slate-800 px-6 py-6 sm:px-8">
          <div className="mx-auto max-w-6xl space-y-2">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-lg text-slate-400">
              <span><span className="text-slate-500">회사명</span> (주)이에이시스템</span>
              <span><span className="text-slate-500">대표자</span> 박 진 호</span>
              <span><span className="text-slate-500">사업자번호</span> 350-88-02880</span>
              <span><span className="text-slate-500">업태</span> 전문, 과학 기술 서비스업</span>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-lg text-slate-400">
              <span><span className="text-slate-500">전화</span> 044-903-0687</span>
              <span><span className="text-slate-500">팩스</span> 044-902-6070</span>
              <span><span className="text-slate-500">이메일</span> <a href="mailto:jhpark@easystem.kr" className="hover:text-white transition-colors">jhpark@easystem.kr</a></span>
            </div>
            <p className="text-center text-lg text-slate-400">
              <span className="text-slate-500">주소</span> 세종특별자치시 집현중앙7로 6, <br className="sm:hidden" />지식산업센터 A동 608호
            </p>
            <p className="text-center text-lg text-slate-500 pt-2 border-t border-slate-800/80">
              © (주)이에이시스템. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
