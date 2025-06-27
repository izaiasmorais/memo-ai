import { z } from "zod";

const envSchema = z.object({
	NEXT_PUBLIC_OPENAI_API_KEY: z.string(),
	NEXT_PUBLIC_API_URL: z.string(),
});

export const env = envSchema.parse(process.env);
