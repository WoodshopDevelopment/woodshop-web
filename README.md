# Woodshop Site (Starter)

A minimal, privacy-forward landing site for **Woodshop Development**. Includes a palette switcher (Terracotta, Lilac, Forest), smooth in-page nav, and a clean layout.

## Structure

```
woodshop-site-starter/
├─ index.html
├─ styles.css
├─ script.js
└─ assets/
   └─ favicon.svg
```

## Local development

Open the folder in **VS Code** and use the Live Server extension, or run a simple HTTP server:

```bash
# Python 3
python -m http.server 8000
# then visit http://localhost:8000
```

Optional diagnostics (in browser console): add `?test=1` to the URL.

## GitHub setup (organization repo)

1. Create an **org repo** named `woodshop-site` (or `woodshop-web`). Make it public.
2. Push this folder's contents to the `main` branch.
3. Enable **GitHub Pages**: Settings → Pages → Build and Deployment → Source: *Deploy from a branch* → Branch: `main` / root.
4. Your site will be available at the org's Pages URL (e.g. `https://<org>.github.io/woodshop-site/`).

## Theming

Click one of the three dots (bottom-right) to switch:
- Terracotta (warm)
- Lilac (purple)
- Forest (cream/green)

To make a palette the default on first load, edit the `:root` variables at the top of `styles.css` and make them match the desired palette.

## License

MIT — see `LICENSE`.
