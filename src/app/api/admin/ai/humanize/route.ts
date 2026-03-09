import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/infrastructure/auth/auth";
import OpenAI from "openai";
import {
  humanizePrompts,
  type HumanizeLanguage,
} from "@/infrastructure/data/ai/humanize-prompt";

const openai = new OpenAI();

const validLanguages: HumanizeLanguage[] = ["en", "es", "de", "fr"];

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { content, language } = body as {
    content?: string;
    language?: string;
  };

  if (
    !content ||
    !language ||
    !validLanguages.includes(language as HumanizeLanguage)
  ) {
    return NextResponse.json(
      { error: "Missing or invalid content/language" },
      { status: 400 }
    );
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      temperature: 0.7,
      messages: [
        {
          role: "system",
          content: humanizePrompts[language as HumanizeLanguage],
        },
        {
          role: "user",
          content,
        },
      ],
    });

    const humanizedContent = completion.choices[0]?.message?.content || "";

    return NextResponse.json({ humanizedContent });
  } catch {
    return NextResponse.json(
      { error: "AI service unavailable" },
      { status: 503 }
    );
  }
}
