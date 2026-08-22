import type { CollectionEntry } from 'astro:content';

export type EventEntry = CollectionEntry<'events'>;

export function eventSlug(event: EventEntry) {
	return event.id.replace(/\.(md|mdx)$/i, '');
}

export function eventHref(event: EventEntry) {
	return `/events/${eventSlug(event)}/`;
}

export function toEventCard(event: EventEntry) {
	return {
		title: event.data.title,
		excerpt: event.data.excerpt,
		featuredImage: event.data.featuredImage,
		href: eventHref(event),
		eventDate: event.data.eventDate,
	};
}

export function newestFirst(a: EventEntry, b: EventEntry) {
	return b.data.sortDate.getTime() - a.data.sortDate.getTime();
}
