import { DatePicker } from "../ui/date-picker";
import { SearchInput } from "../ui/search-input";

export function DocumentsTableFilters() {
	return (
		<div className="w-full pb-6 border-b flex gap-4">
			<SearchInput placeholder="Pesquisar documento..." />
			<DatePicker placeholder="Filtrar por data de envio" />
		</div>
	);
}
