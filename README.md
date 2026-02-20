# OpenTEAM Website

Open Technology Ecosystem for Agricultural Management — static site.

## Structure

```
index.html                          ← Main page (hero, our work, collabathons, events, join)
projects.html                       ← OpenTEAM + Metagov project rails
canonical-source-texts.html         ← Inspirations library (book/paper rails by theme)
videos.html                         ← In-Depths video archive
calendar.html                       ← Shared events calendar (month view)
licenses.html                       ← Licensing guidance
script.js                           ← Shared JS: nav drawer, rail scrolling, calendar loader
styles.css                          ← Shared stylesheet
assets/                             ← Images and logos
data/events.json                    ← Shared calendar event feed (edit to add events)
```

## GitHub Pages

This site is ready for GitHub Pages hosting with no build step required.

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Set source to **main branch / root**
4. Your site will be live at `https://<org>.github.io/<repo>/`

The `.nojekyll` file tells GitHub Pages to skip Jekyll processing.

## Editing content

- **Events**: edit `data/events.json` — follow the existing schema (id, title, start, end, url, source, tags)
- **Projects**: edit the `OPENTEAM_PROJECTS` array in `projects.html`
- **Metagov projects**: edit `METAGOV_PROJECTS` in `projects.html`
- **Inspirations / Books**: edit the `THEMES` object in `canonical-source-texts.html`
- **Navigation**: the drawer nav is consistent across all pages

## External dependencies

- Google Fonts (Oswald, Crimson Pro, Poppins) — loaded from CDN
- Google Favicon API — used for tool/platform logos in the TCP rail
- Metagov.org images — fetched at runtime in projects.html (CORS permitting)

All other code and assets are local.

---

Built for OpenTEAM — fiscally sponsored project of Raft Foundation Inc, a 501(c)(3).
