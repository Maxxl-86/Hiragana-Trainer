
# Kana Trainer – Hiragana & Katakana (PWA)

Dieses Update ergänzt **Katakana** und ermöglicht die Auswahl:
- **Hiragana**, **Katakana** oder **Gemischt**.
- Blöcke folgen der üblichen Gojūon-Reihenfolge (Vokale, K/S/T/N/H/M/Y/R/W+N,
  Dakuten, Handakuten, kleine Kana; bei Katakana zusätzlich kleine Vokale).

## Dateien
- `index.html` – UI inkl. Schrift-Auswahl und SW-Registrierung
- `style.css` – Layout
- `app-inline.js` – Daten & Logik (Hiragana + Katakana, Block-Filter, Gemischt-Modus)
- `manifest.webmanifest` – PWA-Manifest
- `sw.js` – **Network-First** für App-Shell (v3) + Update-Hinweis
- `icon-192.png`, `icon-512.png` – PNG-Icons

## Deployment (GitHub Pages)
1. Dateien ins Repo **Root** legen (wo `index.html` liegt).
2. Settings → Pages → Deploy from a branch → Branch `main` → Folder `/`.
3. Seite öffnen: `https://<user>.github.io/Hiragana-Trainer/`.

## Nutzung
- Schrift wählen: Hiragana / Katakana / Gemischt.
- Blockbereich festlegen (z. B. 1–5).
- Modus (Kana→Romaji oder Romaji→Kana) auswählen.
- **Neu ziehen**, **Lösung umschalten**, **Reset**.

## Update-Verhalten
- Service Worker lädt App-Shell **network-first** (normales Neuladen zeigt neue Version).
- Bei SW-Aktualisierung erscheint unten ein **Update-Banner** (klick zum Reload).
