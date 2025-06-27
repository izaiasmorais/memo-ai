interface PageHeaderProps {
	title: string;
	description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
	return (
		<header>
			<div className="flex flex-col gap-1">
				<h1 className="text-2xl leading-8 font-semibold">{title}</h1>

				<p className="text-muted-foreground">
					{description}
				</p>
			</div>
		</header>
	);
}
