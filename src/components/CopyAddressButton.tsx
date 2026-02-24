"use client";

import toast from "react-hot-toast";

const ADDRESS = "세종특별자치시 집현중앙7로 6, 지식산업센터 A동 608호";

export default function CopyAddressButton() {
  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(ADDRESS);
      toast.success("주소가 복사되었습니다.");
    } catch {
      toast.error("복사에 실패했습니다.");
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="mt-2 rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-base font-medium text-white transition hover:border-slate-500 hover:bg-slate-600"
    >
      복사하기
    </button>
  );
}
