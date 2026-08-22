# Joshi Jam website

## Add or edit an event

Events are set in [`src/content/events`](src/content/events).

Steps:

1. Copy `src/content/events/EVENT_TEMPLATE.mdx.example` and rename the copy with an `.mdx` ending.
2. Fill in the event information at the top of the new file.
3. Put the event image at `public/events/your-event-name/banner.png`.
4. Write the event details below the second `---` line.

The filename controls the page address. For example, `summer-event.mdx` creates `/events/summer-event/`.

To move an event from Upcoming Jams to Past Jams, change:

```yaml
status: upcoming
```

to:

```yaml
status: past
```

## Preview changes locally

Install the project once:

```bash
npm install
```

Start the local site:

```bash
npm start
```

Then open the address shown in the terminal.

## Check the production build

```bash
npm run build
```

## Link redirects

Short links and redirects are listed in `astro.config.mjs` under `redirects`.
