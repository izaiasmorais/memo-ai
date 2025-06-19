import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
	title: "Memory Mind",
	description: "Crie agentes realmente inteligentes",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR" suppressHydrationWarning>
			<head>
				<link rel="icon" href="/logo.png" sizes="any" />
			</head>

			<body className={`${GeistSans.className} antialiased`}>{children}</body>
		</html>
	);
}
