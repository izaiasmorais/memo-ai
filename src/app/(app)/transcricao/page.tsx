import { PageHeader } from "@/components/global/page-header";
import { AudioTranscriber } from "@/components/summaries/audio-transcriber";

export default function Page() {
	return (
		<div className="w-full h-screen min-h-0 p-6 flex flex-col gap-6">
			<PageHeader
				title="Transcrição"
				description="Envie um arquivo de áudio e vizualize sua transcrição em tempo real."
			/>

			<AudioTranscriber />
		</div>
	);
}
