"use client";
import { transcribeAudio } from "@/api/transcribe-audio";
import React, { useState } from "react";
import FileUploader from "./file-uploader";
import { Button } from "../ui/button";
import { useTextStreaming } from "@/hooks/use-text-streaming";

export function AudioTranscriber() {
	const { displayedText, startStreaming } = useTextStreaming({
		delay: 5,
		onComplete: () => console.log("Streaming completo!"),
	});

	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [transcribedText, setTranscribedText] = useState<string>("");
	const [error, setError] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleFileFromUploader = (files: any[]) => {
		if (files.length > 0) {
			const file = files[0].file instanceof File ? files[0].file : null;
			if (file && file.type.startsWith("audio/")) {
				setSelectedFile((prevFile) => {
					if (
						!prevFile ||
						file.name !== prevFile.name ||
						file.size !== prevFile.size
					) {
						setTranscribedText("");
					}
					return file;
				});
				setError("");
			} else {
				setError("Por favor, selecione apenas arquivos de áudio");
				setSelectedFile(null);
			}
		} else {
			setSelectedFile(null);
		}
	};

	const handleTranscribe = async () => {
		if (!selectedFile) {
			setError("Por favor, selecione um arquivo de áudio");
			return;
		}

		setIsLoading(true);
		setError("");

		try {
			const response = await transcribeAudio(selectedFile);

			setTranscribedText(response.full_text);
			startStreaming(response.full_text);
		} catch (err) {
			setError(
				err instanceof Error ? err.message : "Erro ao transcrever áudio"
			);
		} finally {
			setIsLoading(false);

			console.log(transcribedText);
		}
	};

	return (
		<div className="flex flex-col gap-6">
			<div className="flex flex-col gap-6 justify-start">
				<FileUploader onFilesChange={handleFileFromUploader} />

				<Button
					className="max-w-max "
					onClick={handleTranscribe}
					disabled={!selectedFile || isLoading}
				>
					{isLoading ? "Transcrevendo..." : "Transcrever"}
				</Button>
			</div>

			{error && (
				<div
					className="error-message"
					style={{ color: "red", marginTop: "10px" }}
				>
					{error}
				</div>
			)}

			<div className="flex flex-col gap-4">
				<span className="font-medium">Transcrição:</span>

				<div className="bg-sidebar p-4 rounded-lg">
					{displayedText}

					{!displayedText && (
						<div className="w-full py-6 justify-center text-sm text-muted-foreground text-center">
							Nenhuma transcrição a exibir.
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
