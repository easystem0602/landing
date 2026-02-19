import { Construction } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      {/* 시스템 개선 중 오버레이 */}
      <div
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
            현재 시스템 개선 중입니다.
          </p>
        </div>
      </div>

      {/* 우주 그라데이션 배경 */}
      <div
        className="fixed inset-0 -z-10 bg-gradient-to-b from-slate-950 via-indigo-950/30 to-slate-950"
        aria-hidden
      />
      <div
        className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.25),transparent)]"
        aria-hidden
      />

      <main className="relative mx-auto max-w-4xl px-6 py-20 sm:px-12 sm:py-28">
        {/* 헤더 */}
        <header className="mb-24 flex items-center justify-between">
          <span className="text-lg font-semibold tracking-tight text-indigo-300">
            EAsystem
          </span>
          <nav className="flex gap-6 text-sm text-slate-400">
            <a href="#mission" className="hover:text-white transition-colors">
              Mission
            </a>
            <a href="#capabilities" className="hover:text-white transition-colors">
              Capabilities
            </a>
          </nav>
        </header>

        {/* 히어로 */}
        <section className="mb-32 text-center sm:text-left">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-indigo-400">
            Aerospace &amp; Aviation Systems
          </p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            비행을 넘어,
            <br />
            <span className="bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              우주까지.
            </span>
          </h1>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-slate-400 sm:mx-0">
            항공·우주 시스템의 설계, 시뮬레이션, 운영을 위한 통합 플랫폼.
            안전하고 정확한 비행을 위한 기반을 제공합니다.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-indigo-400"
            >
              시작하기
            </a>
            <a
              href="#mission"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-6 py-3 text-sm font-medium text-slate-300 transition hover:border-slate-500 hover:bg-slate-800/50"
            >
              자세히 보기
            </a>
          </div>
        </section>

        {/* Mission */}
        <section id="mission" className="mb-32">
          <h2 className="mb-8 text-2xl font-semibold text-white">
            Mission
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "항공 시스템",
                desc: "비행 제어, 항법, 안전 검증을 위한 통합 솔루션",
                icon: "✈️",
              },
              {
                title: "우주 미션",
                desc: "궤도 설계, 발사 시뮬레이션, 임무 분석",
                icon: "🛸",
              },
              {
                title: "데이터 기반",
                desc: "실시간 데이터 수집·분석으로 의사결정 지원",
                icon: "📡",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-indigo-500/50"
              >
                <span className="mb-3 block text-2xl" aria-hidden>
                  {item.icon}
                </span>
                <h3 className="mb-2 font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section id="capabilities" className="mb-24">
          <h2 className="mb-8 text-2xl font-semibold text-white">
            Capabilities
          </h2>
          <ul className="space-y-4 text-slate-400">
            {[
              "비행 시뮬레이션 및 성능 분석",
              "궤도 역학 및 임무 설계",
              "실시간 모니터링 및 제어",
              "규제·안전 표준 대응",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 border-b border-slate-800 pb-4 last:border-0 last:pb-0"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* 푸터 */}
        <footer className="border-t border-slate-800 pt-12 text-center text-sm text-slate-500">
          <p>© EAsystem. Aerospace &amp; Aviation Systems.</p>
        </footer>
      </main>
    </div>
  );
}
