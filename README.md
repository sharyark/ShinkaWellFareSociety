# Shinka Welfare Society

Website for the Shinka Welfare Society, a volunteer-run charity serving village Shinka. Built with React 18, Vite, React Router and Tailwind CSS, and deployed on Vercel.

## Run locally

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run lint
```

## Where things live

| Path | What it is |
| --- | --- |
| `src/data/site.js` | **All site content**: contact details, services (English/Urdu text, stats, images), team, monthly ledger links, donation accounts |
| `src/pages/` | One component per page. `ServicePage.jsx` renders every service from the data file |
| `src/components/` | Header, footer, hero slider, shared UI |
| `src/assets/` | Photos and team portraits |
| `public/` | Favicon, `robots.txt`, `sitemap.xml` |

## Common edits

- **Add a service**: add an entry to `SERVICES` in `src/data/site.js`. The route, cards, footer link and page are generated. Add its path to `public/sitemap.xml`.
- **Add a monthly financial report**: add an entry to `LEDGERS`.
- **Show bank / JazzCash / EasyPaisa details on the Donate page**: fill in `DONATION_ACCOUNTS`.
- **Urdu text**: give a service a `ur` block and a language switch appears automatically.
