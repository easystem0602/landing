"use client";

import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { X } from "lucide-react";

const MAX_ATTACHMENTS = 3;
const MAX_TOTAL_SIZE_MB = 10;
const MAX_TOTAL_SIZE_BYTES = MAX_TOTAL_SIZE_MB * 1024 * 1024;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function addFiles(newFiles: FileList | null) {
    if (!newFiles?.length) return;
    const list = Array.from(newFiles);
    setAttachedFiles((prev) => {
      const merged = [...prev];
      for (const f of list) {
        if (merged.length >= MAX_ATTACHMENTS) break;
        const newTotal = merged.reduce((s, x) => s + x.size, 0) + f.size;
        if (newTotal <= MAX_TOTAL_SIZE_BYTES) merged.push(f);
      }
      return merged;
    });
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function removeFile(index: number) {
    setAttachedFiles((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const affiliation = (form.querySelector<HTMLInputElement>("[name=affiliation]")?.value ?? "").trim();
    const name = (form.querySelector<HTMLInputElement>("[name=name]")?.value ?? "").trim();
    const email = (form.querySelector<HTMLInputElement>("[name=email]")?.value ?? "").trim();
    const message = (form.querySelector<HTMLTextAreaElement>("[name=message]")?.value ?? "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      setErrorMessage("이름, 이메일, 메시지를 모두 입력해 주세요.");
      return;
    }

    const formData = new FormData();
    formData.set("affiliation", affiliation);
    formData.set("name", name);
    formData.set("email", email);
    formData.set("message", message);
    attachedFiles.forEach((f) => formData.append("attachments", f));

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "전송에 실패했습니다.");
        return;
      }
      setStatus("success");
      form.reset();
      setAttachedFiles([]);
      toast.success("문의 접수가 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.");
    } catch {
      setStatus("error");
      setErrorMessage("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
      <div>
        <label htmlFor="contact-affiliation" className="mb-1 block text-base font-medium text-white">
          소속/학교
        </label>
        <input
          id="contact-affiliation"
          name="affiliation"
          type="text"
          disabled={status === "loading"}
          className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 disabled:opacity-60"
          placeholder="소속 또는 학교를 입력하세요"
        />
      </div>
      <div>
        <label htmlFor="contact-name" className="mb-1 block text-base font-medium text-white">
          이름(Name) <span className="text-red-400">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          disabled={status === "loading"}
          className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 disabled:opacity-60"
          placeholder="이름을 입력하세요"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-1 block text-base font-medium text-white">
          이메일(Email) <span className="text-red-400">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          disabled={status === "loading"}
          className="w-full rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 disabled:opacity-60"
          placeholder="example@email.com"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1 block text-base font-medium text-white">
          메세지(Message) <span className="text-red-400">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          disabled={status === "loading"}
          className="w-full resize-y rounded-lg border border-slate-600 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 disabled:opacity-60"
          placeholder="문의 내용을 입력하세요"
        />
      </div>

      {status === "error" && errorMessage && (
        <p className="rounded-lg bg-red-500/20 px-4 py-3 text-base text-red-300">
          {errorMessage}
        </p>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif,.webp,.xls,.xlsx"
            disabled={status === "loading"}
            className="hidden"
            onChange={(e) => addFiles(e.target.files)}
          />
          <button
            type="button"
            disabled={status === "loading" || attachedFiles.length >= MAX_ATTACHMENTS}
            onClick={() => fileInputRef.current?.click()}
            className="rounded-lg border border-slate-600 bg-slate-700 px-4 py-3 text-base font-medium text-white transition hover:border-slate-500 hover:bg-slate-600 disabled:opacity-60 disabled:hover:bg-slate-700"
          >
            파일 선택
          </button>
          {attachedFiles.length === 0 && (
            <span className="text-base text-slate-500">최대 {MAX_ATTACHMENTS}개, {MAX_TOTAL_SIZE_MB}MB 이하</span>
          )}
          {attachedFiles.length > 0 && (
            <span className="flex flex-wrap items-center gap-1.5">
              {attachedFiles.map((file, i) => (
                <span
                  key={`${file.name}-${i}`}
                  className="inline-flex items-center gap-1 rounded-md bg-slate-700 px-2.5 py-1.5 text-base text-slate-200"
                >
                  <span className="max-w-[120px] truncate sm:max-w-[200px]" title={file.name}>
                    {file.name}
                  </span>
                  <button
                    type="button"
                    disabled={status === "loading"}
                    onClick={() => removeFile(i)}
                    className="rounded p-0.5 text-slate-400 hover:bg-slate-600 hover:text-white disabled:opacity-60"
                    aria-label={`${file.name} 제거`}
                  >
                    <X className="h-4 w-4" strokeWidth={2} aria-hidden />
                  </button>
                </span>
              ))}
            </span>
          )}
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-lg border border-slate-600 bg-slate-700 px-6 py-3 text-base font-medium text-white transition hover:border-slate-500 hover:bg-slate-600 disabled:opacity-60 disabled:hover:bg-slate-700"
        >
          {status === "loading" ? "전송 중..." : "제출"}
        </button>
      </div>
    </form>
  );
}
