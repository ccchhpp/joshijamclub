# Editing events

Each `.mdx` file in this folder is one event. The filename becomes the event's web address, so use lowercase words separated by hyphens.

## Add an event

1. Copy `EVENT_TEMPLATE.mdx.example`.
2. Rename the copy to something descriptive ending in `.mdx`, such as `summer-cupsleeve.mdx`.
3. Add a folder with the same name under `public/events/` and place the event image there as `banner.png`.
4. Fill in the fields at the top of the event file.
5. Write the event details below the second `---` line.

Use `status: upcoming` while an event should appear under Upcoming Jams. Change it to `status: past` after the event.

`sortDate` must use `YYYY-MM-DD`, even when `eventDate` contains a friendly date range.

The following display fields are optional. Delete any lines you do not need:

- `venueName` can contain the venue or building name.
- `venueAddress` can contain the full street address.
- `eventDate` can contain one friendly date or a date range.
- `eventTime` can contain one time, a time range, or several session times.

These details appear together near the top of the event page. Keep `sortDate` even when you omit the displayed `eventDate`, because the site uses it to order events.
