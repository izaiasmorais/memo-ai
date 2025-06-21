"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useChat } from "@ai-sdk/react";
import { ArrowUp } from "lucide-react";
import { type KeyboardEvent, useEffect } from "react";
import { ScrollArea } from "../ui/scroll-area";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-json";

export function AiChat() {
	const { messages, input, handleInputChange, handleSubmit } = useChat({});

	const formatContent = (content: string) => {
		content = content.replace(/```(\w+)?\n([\s\S]*?)```/g, (_, lang, code) => {
			const language = lang || "javascript";

			const highlightedCode = Prism.highlight(
				code.trim(),
				Prism.languages[language] || Prism.languages.javascript,
				language
			);
			return `<pre class="language-${language}"><code class="language-${language}">${highlightedCode}</code></pre>`;
		});

		content = content.replace(
			/`([^`]+)`/g,
			'<code class="inline-code">$1</code>'
		);

		return content
			.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
			.replace(/\*(.*?)\*/g, "<em>$1</em>")
			.replace(/\n\n/g, "<br><br>")
			.replace(/\n/g, "<br>");
	};

	useEffect(() => {
		Prism.highlightAll();
	}, [messages]);

	return (
		<div className="w-full max-w-[800px] flex flex-col h-full min-h-0 py-6">
			<ScrollArea className="flex-1 min-h-0 flex flex-col pr-4">
				{messages.map((message) => (
					<div key={message.id} className="flex gap-6 w-full mb-6">
						{message.role === "user" && (
							<Avatar className="w-10 h-10">
								<AvatarFallback>IZ</AvatarFallback>
								<AvatarImage
									src="https://github.com/izaiasmorais.png"
									alt="Avatar do Usuário"
								/>
							</Avatar>
						)}

						{message.role !== "user" && (
							<Avatar className="w-10 h-10 flex items-center justify-center bg-muted">
								<AvatarFallback>MM</AvatarFallback>

								<AvatarImage
									src="/brain.svg"
									alt="Logo do Memory Mind"
									className="w-5 h-5"
								/>
							</Avatar>
						)}

						<div className="flex-1 min-w-0">
							{message.role === "user" ? (
								<p className="bg-muted px-4 py-2 rounded-lg max-w-max w-full break-words whitespace-pre-wrap overflow-x-auto">
									{message.content}
								</p>
							) : (
								<div
									className="py-2 leading-tighter w-full overflow-x-auto prose prose-sm
									max-w-none"
									dangerouslySetInnerHTML={{
										__html: formatContent(message.content),
									}}
								/>
							)}
						</div>
					</div>
				))}
			</ScrollArea>

			<form
				onSubmit={handleSubmit}
				className="relative flex items-center w-full"
			>
				<Textarea
					className="min-h-12 w-full rounded-xl bg-muted/80 resize-none py-3 pr-16 text-sm h-[100px]"
					placeholder="Como posso ajudar?"
					value={input}
					onChange={handleInputChange}
					onKeyDown={(event: KeyboardEvent<HTMLTextAreaElement>) => {
						if (event.key === "Enter" && !event.shiftKey) {
							event.preventDefault();
							handleSubmit(
								event as unknown as React.FormEvent<HTMLFormElement>
							);
						}
					}}
				/>

				<Button
					type="submit"
					size="icon"
					className="absolute bottom-4 right-4"
					disabled={!input}
				>
					<ArrowUp className="h-4 w-4" />
				</Button>
			</form>
		</div>
	);
}
