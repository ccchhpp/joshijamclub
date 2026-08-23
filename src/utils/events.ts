import { readdir } from 'node:fs/promises';
import { join } from 'node:path';
import type { CollectionEntry } from 'astro:content';

export type EventEntry = CollectionEntry<'events'>;

const galleryImageExtensions = new Set(['.avif', '.gif', '.jpeg', '.jpg', '.png', '.svg', '.webp']);

export function eventSlug(event: EventEntry) {
	return event.id.replace(/\.(md|mdx)$/i, '');
}

export function eventHref(event: EventEntry) {
	return `/events/${eventSlug(event)}/`;
}

export async function eventImages(event: EventEntry) {
	const slug = eventSlug(event);
	const eventImageDirectory = join(process.cwd(), 'public', 'events', slug);

	try {
		const files = await readdir(eventImageDirectory, { withFileTypes: true });
		const imageFiles = files
			.filter((file) => {
				const extension = file.name.slice(file.name.lastIndexOf('.')).toLowerCase();
				return file.isFile() && galleryImageExtensions.has(extension);
			})
			.map((file) => file.name);
		const featuredImages = imageFiles.filter((fileName) => {
			const extensionIndex = fileName.lastIndexOf('.');
			return fileName.slice(0, extensionIndex).toLowerCase() === 'featured';
		});

		if (featuredImages.length !== 1) {
			throw new Error(
				`Event "${slug}" must contain exactly one image named featured with a supported extension. Found ${featuredImages.length}.`
			);
		}

		const featuredImageName = featuredImages[0];
		const imageUrl = (fileName: string) => `/events/${slug}/${encodeURIComponent(fileName)}`;
		const gallery = imageFiles
			.filter((fileName) => fileName !== featuredImageName)
			.sort((a, b) => a.localeCompare(b, 'en', { numeric: true, sensitivity: 'base' }))
			.map(imageUrl);

		return {
			featuredImage: imageUrl(featuredImageName),
			gallery,
		};
	} catch (error) {
		if ((error as { code?: string }).code === 'ENOENT') {
			throw new Error(`Missing image folder for event "${slug}" at public/events/${slug}.`);
		}

		throw error;
	}
}

export async function toEventCard(event: EventEntry) {
	const { featuredImage } = await eventImages(event);

	return {
		title: event.data.title,
		excerpt: event.data.excerpt,
		featuredImage,
		href: eventHref(event),
		eventDate: event.data.eventDate,
	};
}

export function newestFirst(a: EventEntry, b: EventEntry) {
	return b.data.sortDate.getTime() - a.data.sortDate.getTime();
}
