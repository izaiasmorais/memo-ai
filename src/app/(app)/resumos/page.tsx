import { PageHeader } from "@/components/global/page-header";

export default function Page() {
	return (
		<div className="w-full h-screen min-h-0 p-6 flex flex-col gap-6">
			<PageHeader
				title="Resumos"
				description="Envie um arquivo de áudio e vizualize a transcrição e o resumo do conteúdo."
			/>
		</div>
	);
}
