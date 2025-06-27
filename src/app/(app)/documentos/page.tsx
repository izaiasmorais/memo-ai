import DocumentsTable from "@/components/documents/documents-table";
import { PageHeader } from "@/components/global/page-header";
import { Button } from "@/components/ui/button";
import { FileUp } from "lucide-react";

export default function Page() {
	return (
		<div className="w-full h-screen min-h-0 p-6 flex flex-col gap-6">
			<div className="w-full flex items-center justify-between">
				<PageHeader
					title="Documentos"
					description="Vizualize todos os seus documentos enviados aqui."
				/>

				<Button className="dark:bg-rose-500 dark:text-white">
					<FileUp />
					Enviar Documento
				</Button>
			</div>

			<DocumentsTable />
		</div>
	);
}
