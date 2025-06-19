import Image from "next/image";
import { Navbar } from "./navbar";

export function Sidebar() {
	return (
		<aside className="h-full bg-sidebar flex flex-col gap-6 p-4">
			<div className="flex items-center gap-2">
				<Image src={"/logo.png"} alt="Logo MemoryMind" width={24} height={24} />

				<span>MemoryMind</span>
			</div>

			<Navbar />
		</aside>
	);
}
