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
		href: "/conversas",
		icon: MessageSquare,
		label: "Conversas",
	},
	{
		href: "/resumos",
		icon: FileText,
		label: "Resumos",
	},
	{
		href: "/documentos",
		icon: FolderOpen,
		label: "Documentos",
	},
	{
		href: "/podcasts",
		icon: Mic,
		label: "Podcasts",
	},
	{
		href: "/outras-ferramentas",
		icon: Grid3X3,
		label: "Outras ferramentas",
	},
	{
		href: "/ajuda-suporte",
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
