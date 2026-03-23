"use client";

import { useEffect, useRef } from "react";

/**
 * 뷰포트에 들어올 때만 무음 재생, 벗어나면 일시정지 (대역·배터리 절약).
 *
 * 레이아웃:
 * - PC: 하나의 16:9 행 안에 컨테이너 2개 → 높이 동일, 너비는 1번이 더 넓음(2:1)
 * - 모바일: 세로 스택, 각 컨테이너는 16:9
 * - 영상은 object-cover (잘림 허용)
 */
export default function DroneCompareVideos() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const root = sectionRef.current;
    const v1 = video1Ref.current;
    const v2 = video2Ref.current;
    if (!root || !v1 || !v2) return;

    const videos = [v1, v2];

    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0]?.isIntersecting ?? false;
        for (const v of videos) {
          if (isVisible) {
            void v.play().catch(() => {
              /* 자동재생 정책 등으로 실패 시 무시 */
            });
          } else {
            v.pause();
          }
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      }
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  /** 컨테이너 내부: 꽉 채우기 + 라운드·테두리 */
  const innerBox =
    "relative h-full w-full min-h-0 overflow-hidden rounded-lg border border-slate-600 bg-black";

  /** 1번: 오른쪽 기준 정렬 → 잘릴 때 왼쪽이 잘림 */
  const video1Class =
    "absolute inset-0 h-full w-full object-cover object-right";
  const video2Class =
    "absolute inset-0 h-full w-full object-cover object-center";

  return (
    <div
      ref={sectionRef}
      className="mt-8 flex flex-col gap-4 md:mt-8 md:aspect-video md:w-full md:flex-row md:gap-5"
    >
      {/* 컨테이너 1 — 너비 더 넓게 (2 : 1) */}
      <div className="aspect-video w-full min-h-0 min-w-0 md:aspect-auto md:h-full md:min-h-0 md:flex-[2]">
        <div className={innerBox}>
          <video
            ref={video1Ref}
            className={video1Class}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="공수양용 드론 관련 영상 1"
          >
            <source src="/movies/1.webm" type="video/webm" />
          </video>
        </div>
      </div>

      {/* 컨테이너 2 — 동일 높이(PC에서는 부모 16:9 행 높이에 맞춤) */}
      <div className="aspect-video w-full min-h-0 min-w-0 md:aspect-auto md:h-full md:min-h-0 md:flex-[1]">
        <div className={innerBox}>
          <video
            ref={video2Ref}
            className={video2Class}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="공수양용 드론 관련 영상 2"
          >
            <source src="/movies/2.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </div>
  );
}
