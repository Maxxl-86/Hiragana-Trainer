
# Hiragana Trainer – PWA (Komplettpaket)

Dieses Paket enthält die vollständige, lauffähige PWA inkl. aller Blöcke (1–13).

## Dateien
- `index.html`, `style.css`, `app-inline.js`
- `manifest.webmanifest`, `sw.js`
- `icon-192.png`, `icon-512.png`

## GitHub Pages
1) Dateien ins Repo `Hiragana-Trainer` im **Root**.
2) Settings → Pages → Deploy from a branch → Branch `main` → Folder `/`.
3) Seite öffnen: `https://<user>.github.io/Hiragana-Trainer/`.

## Installation testen
- ~30 s auf der Seite bleiben + einmal klicken.
- Adressleisten-Icon oder Menü (⋮) → App installieren.
- DevTools → Application: Manifest (Icons sichtbar) & Service Worker (Activated).

## Hinweis
- Falls dein Repo anders heißt oder `docs/` nutzt, passe `start_url`/`scope` im Manifest sowie den SW-Registrierungs-Scope in `index.html` an.
