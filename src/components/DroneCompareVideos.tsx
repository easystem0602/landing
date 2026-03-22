"use client";

import { useEffect, useRef } from "react";

/**
 * 뷰포트에 들어올 때만 무음 재생, 벗어나면 일시정지 (대역·배터리 절약).
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

  const frame =
    "overflow-hidden rounded-lg border border-slate-600 bg-black";
  const videoInner = "h-full w-full object-cover";

  return (
    <div
      ref={sectionRef}
      className="mt-8 grid grid-cols-1 gap-4 md:mt-8 md:grid-cols-5 md:items-stretch md:gap-5"
    >
      <div className="min-w-0 md:col-span-3">
        <div className={`aspect-video w-full ${frame}`}>
          <video
            ref={video1Ref}
            className={videoInner}
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
      <div className="flex min-h-0 min-w-0 md:col-span-2 md:h-full">
        {/* 모바일: 16:9 / PC: 왼쪽 열과 동일 행 높이로 맞춤 */}
        <div
          className={`aspect-video w-full ${frame} md:aspect-auto md:h-full md:min-h-0 md:w-full`}
        >
          <video
            ref={video2Ref}
            className={videoInner}
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
