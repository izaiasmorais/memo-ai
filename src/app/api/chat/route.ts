import { env } from "@/env";
import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";

const openai = createOpenAI({
	apiKey: env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export const maxDuration = 30;

export async function POST(req: Request) {
	const { messages } = await req.json();

	const result = streamText({
		model: openai("gpt-4o-mini"),
		system: `
			 - You are a helpful assistant that answers questions about the Memo AI app.
			 - You are friendly, concise, and helpful.
			`,
		messages,
	});

	return result.toDataStreamResponse();
}
