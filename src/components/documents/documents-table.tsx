import { Download, Play, Trash } from "lucide-react";
import {
	Table,
	TableHeader,
	TableBody,
	TableRow,
	TableHead,
	TableCell,
} from "../ui/table";
import { Button } from "../ui/button";
import { DocumentsTableFilters } from "./documents-table-filters";

const dados = [
	{
		nome: "Teste",
		tamanho: "340.03 KB",
		duracao: "0:55",
		enviadoEm: "26/06/2025 - 14:30",
	},
];

export default function DocumentsTable() {
	return (
		<div className="flex flex-col gap-6">
			<DocumentsTableFilters />

			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[300px]">Nome</TableHead>
						<TableHead>Tamanho</TableHead>
						<TableHead>Duração</TableHead>
						<TableHead>Enviado em</TableHead>
						<TableHead className="w-[200px]">Ações</TableHead>
					</TableRow>
				</TableHeader>

				<TableBody>
					{dados.map((item, idx) => (
						<TableRow key={idx}>
							<TableCell>{item.nome}</TableCell>
							<TableCell>{item.tamanho}</TableCell>
							<TableCell>{item.duracao}</TableCell>
							<TableCell>{item.enviadoEm}</TableCell>
							<TableCell>
								<div className="flex gap-2">
									<Button size="icon" variant="outline">
										<Play size={16} />
									</Button>

									<Button size="icon" variant="outline">
										<Download size={16} />
									</Button>

									<Button size="icon" variant="outline">
										<Trash className="text-red-500" size={16} />
									</Button>
								</div>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
