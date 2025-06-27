"use client";
import {
	AlertCircleIcon,
	FileArchiveIcon,
	FileIcon,
	FileSpreadsheetIcon,
	FileTextIcon,
	FileUpIcon,
	HeadphonesIcon,
	ImageIcon,
	VideoIcon,
	XIcon,
} from "lucide-react";
import { formatBytes, useFileUpload } from "@/hooks/use-file-upload";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const getFileIcon = (file: { file: File | { type: string; name: string } }) => {
	const fileType = file.file instanceof File ? file.file.type : file.file.type;
	const fileName = file.file instanceof File ? file.file.name : file.file.name;

	if (
		fileType.includes("pdf") ||
		fileName.endsWith(".pdf") ||
		fileType.includes("word") ||
		fileName.endsWith(".doc") ||
		fileName.endsWith(".docx")
	) {
		return <FileTextIcon className="size-4 opacity-60" />;
	} else if (
		fileType.includes("zip") ||
		fileType.includes("archive") ||
		fileName.endsWith(".zip") ||
		fileName.endsWith(".rar")
	) {
		return <FileArchiveIcon className="size-4 opacity-60" />;
	} else if (
		fileType.includes("excel") ||
		fileName.endsWith(".xls") ||
		fileName.endsWith(".xlsx")
	) {
		return <FileSpreadsheetIcon className="size-4 opacity-60" />;
	} else if (fileType.includes("video/")) {
		return <VideoIcon className="size-4 opacity-60" />;
	} else if (fileType.includes("audio/")) {
		return <HeadphonesIcon className="size-4 opacity-60" />;
	} else if (fileType.startsWith("image/")) {
		return <ImageIcon className="size-4 opacity-60" />;
	}
	return <FileIcon className="size-4 opacity-60" />;
};

interface FileUploaderProps {
	onFilesChange?: (files: any[]) => void;
}

export default function FileUploader({ onFilesChange }: FileUploaderProps) {
	const maxSize = 100 * 1024 * 1024;
	const maxFiles = 1;

	const [
		{ files, isDragging, errors },
		{
			handleDragEnter,
			handleDragLeave,
			handleDragOver,
			handleDrop,
			openFileDialog,
			removeFile,
			clearFiles,
			getInputProps,
		},
	] = useFileUpload({
		multiple: false,
		maxFiles,
		maxSize,
	});

	useEffect(() => {
		if (onFilesChange) {
			onFilesChange(files);
		}
	}, [files, onFilesChange]);

	return (
		<div className="flex flex-col gap-2 cursor-pointer">
			<div
				role="button"
				onClick={openFileDialog}
				onDragEnter={handleDragEnter}
				onDragLeave={handleDragLeave}
				onDragOver={handleDragOver}
				onDrop={handleDrop}
				data-dragging={isDragging || undefined}
				className="border-input hover:bg-accent/50 data-[dragging=true]:bg-accent/50 has-[input:focus]:border-ring has-[input:focus]:ring-ring/50 flex min-h-40 flex-col items-center justify-center rounded-xl border border-dashed p-4 transition-colors has-disabled:pointer-events-none has-disabled:opacity-50 has-[input:focus]:ring-[3px]"
			>
				<input
					{...getInputProps()}
					className="sr-only"
					aria-label="Upload files"
				/>

				<div className="flex flex-col items-center justify-center text-center">
					<div
						className="bg-background mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border"
						aria-hidden="true"
					>
						<FileUpIcon className="size-4 opacity-60" />
					</div>
					<p className="mb-1.5 text-sm font-medium">Enviar arquivo</p>
					<p className="text-muted-foreground mb-2 text-xs">
						Arraste e solte ou clique para navegar
					</p>
					<div className="text-muted-foreground/70 flex flex-wrap justify-center gap-1 text-xs">
						<span>Todos os arquivos</span>
						<span>∙</span>
						<span>No máximo {maxFiles} arquivo(s)</span>
						<span>∙</span>
						<span>Até {formatBytes(maxSize)}</span>
					</div>
				</div>
			</div>

			{errors.length > 0 && (
				<div
					className="text-destructive flex items-center gap-1 text-xs"
					role="alert"
				>
					<AlertCircleIcon className="size-3 shrink-0" />

					<span>{errors[0]}</span>
				</div>
			)}

			{files.length > 0 && (
				<div className="space-y-2">
					{files.map((file) => (
						<div
							key={file.id}
							className="bg-background flex items-center justify-between gap-2 rounded-lg border p-2 pe-3"
						>
							<div className="flex items-center gap-3 overflow-hidden">
								<div className="flex aspect-square size-10 shrink-0 items-center justify-center rounded border">
									{getFileIcon(file)}
								</div>
								<div className="flex min-w-0 flex-col gap-0.5">
									<p className="truncate text-[13px] font-medium">
										{file.file instanceof File
											? file.file.name
											: file.file.name}
									</p>
									<p className="text-muted-foreground text-xs">
										{formatBytes(
											file.file instanceof File
												? file.file.size
												: file.file.size
										)}
									</p>
								</div>
							</div>

							<Button
								size="icon"
								variant="ghost"
								className="text-muted-foreground/80 hover:text-foreground -me-2 size-8 hover:bg-transparent"
								onClick={() => removeFile(file.id)}
								aria-label="Remove file"
							>
								<XIcon className="size-4" aria-hidden="true" />
							</Button>
						</div>
					))}

					{files.length > 1 && (
						<div>
							<Button size="sm" variant="outline" onClick={clearFiles}>
								Remover todos os arquivos
							</Button>
						</div>
					)}
				</div>
			)}
		</div>
	);
}
