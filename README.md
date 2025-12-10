
# Hiragana Trainer – PWA Starter (GitHub Pages)

Dieses Paket ist eine vollständige, lauffähige Grundversion deiner PWA.

## Enthaltene Dateien
- `index.html` – Seite, Install-UI und SW-Registrierung
- `style.css` – Grundstyling
- `app-inline.js` – einfache Lernlogik (Platzhalter-Daten, ersetze mit deiner vollständigen Liste)
- `manifest.webmanifest` – PWA-Manifest (Scope/Start-URL für GitHub Pages)
- `sw.js` – Service Worker mit Cache-First und Offline-Fallback
- `icon-192.png`, `icon-512.png` – echte PNG-Icons

## Deployment (GitHub Pages)
1. Alle Dateien ins Repo `Hiragana-Trainer` ins **Root** legen (wo `index.html` liegt).
2. Settings → Pages → Source: Deploy from a branch → Branch `main` → Folder `/` (root).
3. Warten bis der Build durch ist, dann Seite öffnen:
   `https://<user>.github.io/Hiragana-Trainer/`

## Nach dem Öffnen in Chrome
- 30 Sekunden auf der Seite bleiben und einen Klick machen (kleine Engagement-Heuristik).
- Installieren über das **Icon** in der Adressleiste oder Menü (⋮) → **App installieren**.
- DevTools → Application:
  - **Manifest** zeigt 192×192 und 512×512 Icons.
  - **Service Workers** → Status **Activated**.

## Hinweise
- Wenn dein Repo anders heißt, **Passe `start_url`/`scope`** im Manifest und den SW-Registrierungs-Scope in `index.html`.
- Android: ausreichend Speicher und Play-Konto angemeldet, sonst erstellt Chrome nur einen Shortcut.
- Für SPA-Routing kannst du später einen 404-Fallback ergänzen.
