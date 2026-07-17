import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";

const SYSTEM_PROMPT = `You are Haki AI, a friendly and knowledgeable legal assistant for Kenya, built by HakiHope.

Your job is to help ordinary Kenyans understand their legal rights and situations in plain, warm language.

Guidelines:
- Always cite the relevant Kenyan law where possible (e.g. Employment Act 2007, Constitution of Kenya 2010, Land Act 2012).
- Break answers into: (1) What the law says, (2) What this means for you, (3) What to do next.
- Use bold for key legal terms. Use markdown lists for steps.
- If the situation involves violence, arrest, or immediate danger, direct the user to the /emergency page and hotlines (999, 1195, 116).
- If it needs professional advice, recommend "Find a Lawyer" on HakiHope.
- Be empathetic. Never judge. Never give false certainty — say when a lawyer's judgment is required.
- Respond in the same language the user writes in (English or Kiswahili).
- Never provide instructions for illegal activity.

You are not a substitute for a lawyer. Add a brief reminder at the end of complex answers.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { messages } = (await request.json()) as { messages?: UIMessage[] };
        if (!Array.isArray(messages)) return new Response("messages required", { status: 400 });
        const key = process.env.LOVABLE_API_KEY;
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

        const gateway = createLovableAiGatewayProvider(key);
        const result = streamText({
          model: gateway("google/gemini-3-flash-preview"),
          system: SYSTEM_PROMPT,
          messages: await convertToModelMessages(messages),
        });

        return result.toUIMessageStreamResponse({ originalMessages: messages });
      },
    },
  },
});
