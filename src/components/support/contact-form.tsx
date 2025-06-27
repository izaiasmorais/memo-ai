"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export default function ContactForm() {
	return (
		<div className="w-full flex">
			<form className="flex flex-col gap-6 w-full">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="space-y-2">
						<Label htmlFor="name" className="font-medium">
							Nome
						</Label>
						<Input id="name" type="text" placeholder="Seu nome" />
					</div>

					<div className="space-y-2">
						<Label htmlFor="email" className="font-medium">
							E-mail
						</Label>
						<Input id="email" type="email" placeholder="seu@email.com" />
					</div>
				</div>

				<div className="space-y-2">
					<Label htmlFor="subject" className="font-medium">
						Assunto
					</Label>
					<Input id="subject" type="text" placeholder="Sobre o que é?" />
				</div>

				<div className="space-y-2">
					<Label htmlFor="message" className="font-medium">
						Mensagem
					</Label>

					<Textarea
						id="message"
						placeholder="Sua mensagem..."
						rows={10}
						// className="resize-none"
					/>
				</div>

				<div className="self-end">
					<Button type="button">
						<Send className="w-4 h-4 mr-2" />
						Enviar Mensagem
					</Button>
				</div>
			</form>
		</div>
	);
}
