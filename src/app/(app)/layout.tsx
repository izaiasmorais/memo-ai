import { Sidebar } from "@/components/sidebar/sidebar";

export default function AppLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="w-full grid grid-cols-[272px_1fr] h-screen">
			<Sidebar />

			<main className="w-full h-full flex flex-col p-4">{children}</main>
		</div>
	);
}
