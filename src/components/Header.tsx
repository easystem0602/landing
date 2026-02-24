"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#business", label: "사업영역" },
  { href: "#about", label: "회사소개" },
  { href: "#portfolio", label: "포트폴리오" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        {/* 로고 */}
        <a
          href="#hero"
          className="flex shrink-0 items-center gap-2 transition-opacity hover:opacity-90"
          aria-label="EAsystem 홈"
        >
          <Image
            src="/images/ea_logo.webp"
            alt="EAsystem"
            width={140}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
        </a>

        {/* 데스크톱 네비 */}
        <nav
          className="hidden gap-6 text-base text-slate-400 md:flex"
          aria-label="메인 메뉴"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* 모바일: 햄버거 버튼 + 드롭다운 */}
        <div className="relative md:hidden" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" strokeWidth={2} aria-hidden />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={2} aria-hidden />
            )}
          </button>

          {mobileOpen && (
            <div
              id="mobile-menu"
              className="absolute right-0 top-full mt-2 min-w-[180px] rounded-xl border border-slate-700 bg-slate-900/95 py-2 shadow-xl backdrop-blur-md"
              role="menu"
            >
              {NAV_LINKS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  role="menuitem"
                  onClick={closeMobile}
                  className="block px-4 py-2.5 text-base text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
