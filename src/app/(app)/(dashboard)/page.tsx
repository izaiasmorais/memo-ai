import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Page() {
	return (
		<div className="w-full flex-1 flex justify-center">
			<div className="max-w-[800px] flex flex-col py-6">
				<div className="flex flex-col gap-6">
					<div className="flex gap-6">
						<Avatar className="w-10 h-10">
							<AvatarFallback>IZ</AvatarFallback>
							<AvatarImage src="https://github.com/izaiasmorais.png" />
						</Avatar>

						<p className="bg-muted p-4 rounded-lg">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
							molestiae libero culpa. Ratione quis voluptatum minima in
							necessitatibus cupiditate sapiente iusto, pariatur laudantium rem,
							autem nesciunt sequi iste, itaque delectus!
						</p>
					</div>

					<div className="flex gap-6">
						<Avatar className="w-10 h-10 flex items-center justify-center bg-muted">
							<AvatarFallback>IZ</AvatarFallback>
							<AvatarImage src="/logo.png" className="w-5 h-5" />
						</Avatar>

						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
							molestiae libero culpa. Ratione quis voluptatum minima in
							necessitatibus cupiditate sapiente iusto, pariatur laudantium rem,
							autem nesciunt sequi iste, itaque delectus!
						</p>
					</div>
				</div>

				<div className="mt-auto flex gap-4 items-start">
					<Textarea className="h-[100px] max-h-[100px] rounded-xl" />
					<Button>Enviar</Button>
				</div>
			</div>
		</div>
	);
}
