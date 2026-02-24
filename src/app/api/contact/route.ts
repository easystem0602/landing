import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENT_EMAILS = ["jspark@easystem.kr", "hspark@easystem.kr"];
const SUBJECT = "💌 홈페이지에서 새로운 문의가 도착했어요";
const MAX_ATTACHMENTS = 3;
const MAX_TOTAL_SIZE_BYTES = 10 * 1024 * 1024; // 10MB

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const affiliation = (formData.get("affiliation") as string | null)?.trim() || "";
    const name = (formData.get("name") as string | null)?.trim() || "";
    const email = (formData.get("email") as string | null)?.trim() || "";
    const message = (formData.get("message") as string | null)?.trim() || "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "이름, 이메일, 메시지를 모두 입력해 주세요." },
        { status: 400 }
      );
    }

    const rawFiles = formData.getAll("attachments").filter((f): f is File => f instanceof File && f.size > 0);
    if (rawFiles.length > MAX_ATTACHMENTS) {
      return NextResponse.json(
        { error: `첨부 파일은 최대 ${MAX_ATTACHMENTS}개까지 가능합니다.` },
        { status: 400 }
      );
    }
    const totalSize = rawFiles.reduce((sum, f) => sum + f.size, 0);
    if (totalSize > MAX_TOTAL_SIZE_BYTES) {
      return NextResponse.json(
        { error: "첨부 파일 총 용량은 10MB 이하여야 합니다." },
        { status: 400 }
      );
    }

    const attachments: { filename: string; content: Buffer }[] = [];
    for (const file of rawFiles) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({ filename: file.name || "attachment", content: buffer });
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT) || 587;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !user || !pass) {
      console.error("SMTP 설정이 없습니다. .env.local에 SMTP_HOST, SMTP_USER, SMTP_PASS를 설정해 주세요.");
      return NextResponse.json(
        { error: "메일 발송 설정이 되어 있지 않습니다." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const text = [
      "홈페이지에서 새로운 문의가 도착했어요.",
      "",
      ...(affiliation ? [`소속/학교 : ${affiliation}`] : []),
      `이름 : ${name}`,
      `이메일 : ${email}`,
      `메시지 : ${message}`,
      ...(attachments.length > 0 ? ["", `첨부 파일 ${attachments.length}개`] : []),
    ].join("\n");

    await transporter.sendMail({
      from: user,
      to: RECIPIENT_EMAILS,
      replyTo: email,
      subject: SUBJECT,
      text,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form send error:", err);
    return NextResponse.json(
      { error: "문의 전송에 실패했습니다. 잠시 후 다시 시도해 주세요." },
      { status: 500 }
    );
  }
}
