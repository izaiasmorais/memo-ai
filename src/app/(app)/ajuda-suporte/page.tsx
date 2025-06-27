import { PageHeader } from "@/components/global/page-header";
import ContactForm from "@/components/support/contact-form";

export default function Page() {
	return (
		<div className="w-full h-screen min-h-0 p-6 flex flex-col gap-6">
			<PageHeader
				title="Ajuda e Suporte"
				description="Fale com a gente para tirar suas dúvidas ou relatar problemas."
			/>

			<ContactForm />
		</div>
	);
}
