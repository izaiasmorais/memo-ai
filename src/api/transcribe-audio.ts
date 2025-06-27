import { api } from "@/lib/axios";
import axios, { AxiosResponse } from "axios";

interface TranscribeAudioOptions {
	webhookUrl?: string;
	useVad?: boolean;
	vadThreshold?: number;
	chunkThresholdSilence?: number;
	initialWorkers?: number;
	batchSize?: number;
	circuitBreakerThreshold?: number;
	adaptiveWorkers?: boolean;
}

interface AudioSegment {
	primary_language: string;
	segment_type: string;
	is_audio: boolean;
	extraction_method: string;
	has_vad_processing: boolean;
	transcription_confidence: number;
	segment_index: number;
	language_detected: string;
	was_retried: boolean;
	circuit_breaker_blocked: boolean;
	document_id: string;
	natural_text: string;
	mime_type: string;
	created_at: string;
	processing_strategy: string;
}

interface ProcessingConfig {
	vad_threshold: number;
	chunk_threshold_silence: number;
	initial_workers: number;
	batch_size: number;
	adaptive_workers: boolean;
	circuit_breaker_threshold: number;
}

interface PerformanceMetrics {
	successful_requests: number;
	failed_requests: number;
	circuit_breaker_blocks: number;
	overall_success_rate: number;
	quality_score: string;
}

interface Metadata {
	document_id: string;
	webhook_configured: boolean;
	file_name: string;
	mime_type: string;
	file_size: number;
	total_segments: number;
	non_garbage_segments: number;
	processing_config: ProcessingConfig;
	performance_metrics: PerformanceMetrics;
}

interface Statistics {
	total_words: number;
	total_segments: number;
	non_garbage_segments: number;
	processing_time: number;
	words_per_second: number;
	segments_per_second: number;
}

interface TranscribeAudioResponse {
	success: boolean;
	full_text: string;
	segments: AudioSegment[];
	metadata: Metadata;
	statistics: Statistics;
	timestamp: string;
	warnings: string | null;
}

export const transcribeAudio = async (
	audioFile: File,
	options: TranscribeAudioOptions = {}
): Promise<TranscribeAudioResponse> => {
	const {
		webhookUrl,
		useVad = true,
		vadThreshold = 0.5,
		chunkThresholdSilence = 3.0,
		initialWorkers = 30,
		batchSize = 60,
		circuitBreakerThreshold = 3,
		adaptiveWorkers = true,
	} = options;

	const formData = new FormData();
	formData.append("file", audioFile);

	const params = new URLSearchParams();
	if (webhookUrl) params.append("webhook_url", webhookUrl);
	params.append("use_vad", useVad.toString());
	params.append("vad_threshold", vadThreshold.toString());
	params.append("chunk_threshold_silence", chunkThresholdSilence.toString());
	params.append("initial_workers", initialWorkers.toString());
	params.append("batch_size", batchSize.toString());
	params.append(
		"circuit_breaker_threshold",
		circuitBreakerThreshold.toString()
	);
	params.append("adaptive_workers", adaptiveWorkers.toString());

	try {
		const response: AxiosResponse<TranscribeAudioResponse> = await api.post(
			`/api/v1/transcribe-audio?${params.toString()}`,
			formData,
			{
				headers: {
					"Content-Type": "multipart/form-data",
				},
				timeout: 300000,
			}
		);

		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			throw new Error(
				`Transcription failed: ${
					error.response?.data?.message || error.message
				}`
			);
		}
		throw error;
	}
};
