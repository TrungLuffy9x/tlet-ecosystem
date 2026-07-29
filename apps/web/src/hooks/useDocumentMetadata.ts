import { useEffect } from "react";

interface MetaOptions {
	title: string;
	description: string;
}

export function useDocumentMetadata({ title, description }: MetaOptions) {
	useEffect(() => {
		// Update Document Title
		document.title = title;

		// Helper to set or update meta tag content
		const updateMeta = (selector: string, content: string) => {
			let element = document.querySelector(selector);
			if (element) {
				element.setAttribute("content", content);
			}
		};

		updateMeta('meta[name="description"]', description);
		updateMeta('meta[property="og:title"]', title);
		updateMeta('meta[property="og:description"]', description);
		updateMeta('meta[name="twitter:title"]', title);
		updateMeta('meta[name="twitter:description"]', description);
	}, [title, description]);
}
