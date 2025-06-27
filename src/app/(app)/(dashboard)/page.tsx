import { DashboardCards } from "@/components/dashboard/dashboard-cards";
import { PageHeader } from "@/components/global/page-header";

export default function Page() {
	return (
		<div className="w-full h-screen min-h-0 p-6 flex flex-col gap-6">
			<PageHeader
				title="Dashboard"
				description="Hub de soluções automatizadas com inteligência artificial."
			/>

			<DashboardCards />
		</div>
	);
}
