import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import Providers from "./providers";

import "./globals.css";

export const metadata: Metadata = {
	title: "MemoryMind",
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
				<link rel="icon" href="/memory-mind-logo.svg" sizes="any" />
			</head>

			<body className={`${GeistSans.className} antialiased`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
