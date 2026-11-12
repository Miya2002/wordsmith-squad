# Wordsmith Squad — organized sections

Every navigation category has its own folder under `src/pages/`. Every submenu item has its own individually editable `.tsx` file.

Examples:
- `src/pages/about/About.tsx` — original About page
- `src/pages/about/OurStory.tsx` — About > Our Story
- `src/pages/ghostwriting/MedicalGhostwriters.tsx` — Ghostwriting > Medical Ghostwriters
- `src/pages/ghostwriting/Overview.tsx` — Ghostwriting category landing page
- `src/components/ServiceDetailLayout.tsx` — reusable responsive design used by each subpage
- `src/components/SectionOverview.tsx` — reusable category landing design
- `src/components/Navbar.tsx` — desktop mega menu and mobile accordions; menu labels and URLs
- `src/App.tsx` — explicitly registered routes

To edit a subpage, edit that subpage's own `page` object. To customize every subpage's layout, edit `ServiceDetailLayout.tsx`. To change dropdown links, edit `MEGA_NAV` in `Navbar.tsx` and its page route in `App.tsx`.

The newly created subpages have starter copy, not finished service-specific marketing content. Existing main pages have been preserved. Old `/explore/...` links automatically redirect.

Run: `npm install` and `npm run dev`.
