"use client";
import {
	MessageSquare,
	FileText,
	FolderOpen,
	Mic,
	Grid3X3,
	HelpCircle,
	LayoutDashboard,
} from "lucide-react";
import { NavbarItem } from "./navbar-item";

const navigationItems = [
	{
		href: "/",
		icon: LayoutDashboard,
		label: "Dashboard",
	},
	{
		href: "/conversation",
		icon: MessageSquare,
		label: "Conversa",
	},
	{
		href: "/summarise",
		icon: FileText,
		label: "Resumir",
	},
	{
		href: "/documents",
		icon: FolderOpen,
		label: "Documentos",
	},
	{
		href: "/podcast",
		icon: Mic,
		label: "Podcast",
	},
	{
		href: "/other-tools",
		icon: Grid3X3,
		label: "Outras ferramentas",
	},
	{
		href: "/help-support",
		icon: HelpCircle,
		label: "Ajuda e Suporte",
	},
];

export function Navbar() {
	return (
		<nav className="flex flex-col gap-1">
			{navigationItems.map((item) => (
				<NavbarItem
					key={item.href}
					href={item.href}
					icon={item.icon}
					label={item.label}
				/>
			))}
		</nav>
	);
}
