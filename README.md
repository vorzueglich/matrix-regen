# Matrix Regen – iPhone PWA

**Produktiver Stand:** v1.5 (25.10.2026)  
**Live:** https://vorzueglich.github.io/matrix-regen/

## Funktionen
- Bildschirmfuellender gruener ASCII-Matrix-Regen mit hellen Koepfen und Nachleuchten
- Einstellungsmenue mit Reglern fuer Dichte, Zeichengroesse, Fallgeschwindigkeit und Leerraum
- Sofortige Vorschau, lokale Speicherung und Zuruecksetzen auf die v1.4-Standardwerte
- Pause / Weiter, Einstellungen, Hilfe, Bedienleiste durch Tippen ein-/ausblenden
- iPhone Home-Bildschirm (Standalone-PWA), Hoch- und Querformat
- Offline-Cache nach erstmaligem Laden

## Installation auf dem iPhone
In Safari die [Website](https://vorzueglich.github.io/matrix-regen/) oeffnen → Teilen → Zum Home-Bildschirm → Hinzufuegen.

## Projektdateien
- `index.html`: HTML, CSS und JavaScript fuer die Canvas-Animation
- `manifest.webmanifest`: PWA-Metadaten
- `sw.js`: Offline-Cache (aktuell `matrix-regen-v1.5`)
- `icon.svg`: App-Symbol
- `CHANGELOG.md`: Aenderungshistorie

Keine externen Bibliotheken. Hosting: GitHub Pages, Branch `main`, Ordner `/ (root)`.

## Versionierungsvorgabe
**Major.Minor**, z. B. v1.4 → v1.5 → v2.0. Bei jeder Weiterentwicklung eine lauffaehige Version und eine kurze Aenderungsuebersicht. Bestehende Funktionen und die visuelle Wirkung erhalten, sofern nicht ausdruecklich anders gewuenscht. Versionsnummer konsistent in HTML-Titel, Statusanzeige, Service-Worker-Cache, README und Changelog pflegen. Dokumentationsaenderungen allein erhoehen die App-Version nicht.

## Versionen
| Version | Stand | Aenderung |
| --- | --- | --- |
| **v1.5** | 25.10.2026, produktiv | Einstellungsmenue mit vier Reglern, lokalen Einstellungen und Reset; v1.4-Optik als Standard |
| **v1.4** | 25.10.2026 | Schwarze Wellenbalken entfernt, kleinere Zeichen, laengere Streams, laengeres Nachleuchten, hoehere Dichte |
| **v1.3** | 25.10.2026 | Schnellere Zeichenwechsel, etwas langsamere Bewegung, dichter |
| **v1.2** | 25.10.2026 | Japanische Zeichen durch ASCII ersetzt |
| **v1.1** | 25.10.2026 | Erste iPhone-PWA auf GitHub Pages mit Offline-Modus |

**Separater Entwicklungszweig:** Windows-11-BAT/PowerShell Matrix-Regen **v2.1**, produktiv 24.10.2026. Windows- und iPhone-Versionsnummern sind getrennt.

## Betrieb und Updates
Nach einem Commit auf `main` veroeffentlicht GitHub Pages die Website. Bei App-Aenderungen den Cache-Namen in `sw.js` erhoehen. Safari/iOS kann alte Inhalte aus dem Offline-Cache anzeigen; Website in Safari neu laden, gegebenenfalls mit `?v=1.5`. Die Offline-Funktion setzt voraus, dass die Ressourcen zuvor erfolgreich geladen wurden.

## Offline-Quellcode
Alle vier App-Dateien gemeinsam in einem Ordner sichern. `index.html` kann fuer eine reine Animation lokal geoeffnet werden; Service Worker und PWA-Installation erfordern eine sichere HTTP(S)-Umgebung oder localhost.

## Einstellungen (v1.5)
Die Schaltflaeche **Einstellungen** neben Pause und ? oeffnet einen mobil bedienbaren Dialog. Mit Fertig oder Escape schliessen. Die Animation laeuft weiter; Pause bleibt unabhaengig nutzbar.

| Regler | Bereich | Standard |
| --- | --- | --- |
| Regendichte | 25–150 % | 100 % |
| Zeichengroesse | 70–200 % | 100 % (11 px unter 500 px Bildschirmbreite, sonst 13 px) |
| Fallgeschwindigkeit | 25–200 % | 100 % (55–185 px/s je Stream) |
| Leerraum | 0–100 % | 50 % (v1.4-Schweife und Nachleuchten) |

Mehr Leerraum verkuerzt die Schweife und beschleunigt das Verblassen. Dichte und Groesse bauen das Zeichengitter neu auf; die Pause bleibt dabei erhalten. **Standardwerte** setzt alle vier Regler zurueck. Die Werte werden unter `matrix-regen-settings` in localStorage gespeichert und beim naechsten Start geladen. Ungueltige Werte werden ignoriert bzw. begrenzt. Falls der Browser Speicherung verhindert, funktionieren die Regler fuer die laufende Sitzung. Safari und die installierte PWA koennen getrennte Speicher verwenden.
