"use client";

import { useState, useEffect, useCallback } from "react";

interface UseTextStreamingOptions {
	delay?: number;
	onComplete?: () => void;
}

export function useTextStreaming(options: UseTextStreamingOptions = {}) {
	const { delay = 30, onComplete } = options;
	const [displayedText, setDisplayedText] = useState("");
	const [targetText, setTargetText] = useState("");
	const [isStreaming, setIsStreaming] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	const startStreaming = useCallback((text: string) => {
		setTargetText(text);
		setDisplayedText("");
		setCurrentIndex(0);
		setIsStreaming(true);
	}, []);

	const stopStreaming = useCallback(() => {
		setIsStreaming(false);
		setDisplayedText(targetText);
		setCurrentIndex(targetText.length);
	}, [targetText]);

	const resetStreaming = useCallback(() => {
		setDisplayedText("");
		setTargetText("");
		setCurrentIndex(0);
		setIsStreaming(false);
	}, []);

	useEffect(() => {
		if (!isStreaming || currentIndex >= targetText.length) {
			if (isStreaming && currentIndex >= targetText.length) {
				setIsStreaming(false);
				onComplete?.();
			}
			return;
		}

		const timer = setTimeout(() => {
			setDisplayedText((prev) => prev + targetText[currentIndex]);
			setCurrentIndex((prev) => prev + 1);
		}, delay);

		return () => clearTimeout(timer);
	}, [isStreaming, currentIndex, targetText, delay, onComplete]);

	return {
		displayedText,
		isStreaming,
		startStreaming,
		stopStreaming,
		resetStreaming,
		progress:
			targetText.length > 0 ? (currentIndex / targetText.length) * 100 : 0,
	};
}
