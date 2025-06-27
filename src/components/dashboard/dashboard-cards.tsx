"use client";
import { FileText, MessageSquare, FolderOpen } from "lucide-react";
import { DashboardCard, DashboardCardProps } from "./dashboard-card";

const sidebarItems: DashboardCardProps[] = [
	{
		icon: FileText,
		title: "Transcrição",
		description:
			"Envie um arquivo de áudio e vizualize sua transcrição em tempo real.",
		url: "/transcricao",
	},
	{
		icon: MessageSquare,
		title: "Chat Bot",
		description:
			"Converse com assistente virtual inteligente para obter respostas instantâneas.",
		url: "/chat-bot",
	},
	{
		icon: FolderOpen,
		title: "Documentos",
		description:
			"Organize seus arquivos de áudio na plataforma e acesse-os facilmente a qualquer momento.",
		url: "/documentos",
	},
];

export function DashboardCards() {
	return (
		<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{sidebarItems.map((item, index) => (
				<DashboardCard
					key={index}
					icon={item.icon}
					title={item.title}
					description={item.description}
					url={item.url}
				/>
			))}
		</div>
	);
}
