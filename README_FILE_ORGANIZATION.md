# Wordsmith Squad page organization

The `src/pages` directory is organized by website section. Each section has one dedicated main-page component (`*_main.tsx`) and individual `.tsx` files for each requested subpage.

- `home/Home_main.tsx`
- `about/About_main.tsx`
- `editing/Editing_main.tsx`
- `publishing/Publishing_main.tsx`
- `ghostwriting/Ghostwriting_main.tsx`
- `genre/Genre_main.tsx`
- `creative-writing/Creative_Writing_main.tsx`
- `book-cover/Book_Cover_main.tsx`
- `marketing/Marketing_main.tsx`
- `pricing-plans/Pricing_Plans_main.tsx`
- `contact/Contact_main.tsx`

All newly organized subpages are separate files in their matching section folders. They share the existing `editing/EditingSubpageLayout.tsx` visual layout, while their content data is kept in each individual page file. Edit the `data` object in a subpage to change only that page.

Main-page component contents were moved without redesigning them. `App.tsx` imports and routes were updated to point to the organized files.
