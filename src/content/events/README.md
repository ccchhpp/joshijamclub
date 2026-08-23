# Editing events

Each `.mdx` file in this folder is one event. The filename becomes the event's web address, so use lowercase words separated by hyphens.

## Add an event

1. Copy `EVENT_TEMPLATE.mdx.example`.
2. Rename the copy to something descriptive ending in `.mdx`, such as `summer-event.mdx`.
3. Add a folder with the same name under `public/events/` and place the event's main image there as `featured.png`, `featured.jpg`, or another supported image format.
4. Put any optional gallery images in that same folder.
5. Fill in the fields at the top of the event file.
6. Write the event details below the second `---` line.

Use `status: upcoming` while an event should appear under Upcoming Jams. Change it to `status: past` after the event.

`sortDate` must use `YYYY-MM-DD`, even when `eventDate` contains a friendly date range.

The following display fields are optional. Delete any lines you do not need:

- `venueName` can contain the venue or building name.
- `venueAddress` can contain the full street address.
- `eventDate` can contain one friendly date or a date range.
- `eventTime` can contain one time, a time range, or several session times.

These details appear together near the top of the event page. Keep `sortDate` even when you omit the displayed `eventDate`, because the site uses it to order events.

## Add a gallery

Place additional `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`, `.avif`, or `.svg` images in the event's folder under `public/events/`. The site automatically uses the file named `featured` as the main image and displays every other supported image in the gallery.

Each event folder must contain exactly one `featured` image, including its normal file extension, such as `featured.png` or `featured.webp`. Do not add two featured images with different extensions.

Gallery images are ordered by filename. Use names such as `01-arrivals.jpg`, `02-activities.jpg`, and `03-group-photo.jpg` when you want to control their order. If the folder contains only the featured image, the gallery is hidden automatically.
