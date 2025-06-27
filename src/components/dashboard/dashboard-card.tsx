import { LucideIcon } from "lucide-react";
import { Button } from "../ui/button";

export interface DashboardCardProps {
	icon: LucideIcon;
	title: string;
	description: string;
}

export function DashboardCard({
	title,
	description,
	icon: Icon,
}: DashboardCardProps) {
	return (
		<div className="p-4 rounded-lg border flex flex-col gap-4">
			<div className="p-2 w-10 h-10 border rounded-md flex items-center justify-center">
				<Icon size={18} />
			</div>

			<div className="flex flex-col gap-2">
				<span className="text-lg font-semibold">{title}</span>

				<p className="text-sm text-muted-foreground">{description}</p>
			</div>

			<div className="flex w-full justify-end my-auto">
				<Button>Acessar</Button>
			</div>
		</div>
	);
}
