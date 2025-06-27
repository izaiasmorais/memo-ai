import { FileText, MessageSquare, FolderOpen } from "lucide-react";
import { DashboardCard, DashboardCardProps } from "./dashboard-card";

const sidebarItems: DashboardCardProps[] = [
	{
		icon: FileText,
		title: "Resumos",
		description:
			"Transforme áudios em resumos claros e objetivos com inteligência artificial, de maneira rápida e totalmente automatizada.",
	},
	{
		icon: MessageSquare,
		title: "Chat Bot",
		description:
			"Converse com assistente virtual inteligente para obter respostas instantâneas.",
	},
	{
		icon: FolderOpen,
		title: "Documentos",
		description:
			"Organize seus arquivos de áudio na plataforma e acesse-os facilmente a qualquer momento.",
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
				/>
			))}
		</div>
	);
}
