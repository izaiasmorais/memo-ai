"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useChat } from "@ai-sdk/react";
import { ScrollArea } from "../ui/scroll-area";

export function AiChat() {
	const { messages, input, handleInputChange, handleSubmit } = useChat({});

	const formatContent = (content: string) => {
		return content
			.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // **texto** -> <strong>
			.replace(/\*(.*?)\*/g, "<em>$1</em>") // *texto* -> <em>
			.replace(/\n\n/g, "<br><br>") // \n\n -> <br><br>
			.replace(/\n/g, "<br>"); // \n -> <br>
	};

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
									src="/logo.png"
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
									className="py-2 leading-tighter w-full
								overflow-x-auto prose prose-sm max-w-none"
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
				className="h-[100px] flex gap-4 items-start mt-4"
			>
				<Textarea
					className="h-full max-h-[100px] rounded-xl"
					placeholder="Digite sua mensagem"
					value={input}
					onChange={handleInputChange}
				/>

				<Button type="submit">Enviar</Button>
			</form>
		</div>
	);
}
