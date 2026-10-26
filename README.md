# Matrix Regen – iPhone PWA

**Produktiver Stand:** v1.7 (26.10.2026)  
**Live:** https://vorzueglich.github.io/matrix-regen/

## Funktionen
- Grosse, stabile ASCII-Zeichen bilden ein Wort nach dem anderen; Hintergrund-Regen laeuft weiter. Umrisse/Geisterschrift sowie Ein-/Ausblenden, Haltezeit und Pausen konfigurierbar
- Nachrichten-Link ueber URL-Parameter `msg`, `style`, `hold`, `fade`, `gap`; mehrere Nachrichten durch Pipe (`|`) getrennt
- Leeres Nachrichtenfeld: unveraenderter Regen; Einstellungen bleiben lokal gespeichert
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
- `sw.js`: Offline-Cache (aktuell `matrix-regen-v1.7-r6`)
- `icon.svg`: App-Symbol
- `CHANGELOG.md`: Aenderungshistorie

Keine externen Bibliotheken. Hosting: GitHub Pages, Branch `main`, Ordner `/ (root)`.

## Versionierungsvorgabe
**Major.Minor**, z. B. v1.4 → v1.5 → v2.0. Bei jeder Weiterentwicklung eine lauffaehige Version und eine kurze Aenderungsuebersicht. Bestehende Funktionen und die visuelle Wirkung erhalten, sofern nicht ausdruecklich anders gewuenscht. Versionsnummer konsistent in HTML-Titel, Statusanzeige, Service-Worker-Cache, README und Changelog pflegen. Dokumentationsaenderungen allein erhoehen die App-Version nicht.

## Versionen
| Version | Stand | Aenderung |
| --- | --- | --- |
| **v1.7** | 26.10.2026, produktiv | Ueberarbeitete Wort-fuer-Wort-ASCII-Grossschrift, Animationszeiten, Teilen per Link; leer = normaler Regen |
| **v1.6** | 25.10.2026, produktiv | Online immer aktuelle Seite, Offline-Fallback, automatisches Neuladen bei Worker-Update |
| **v1.5** | 25.10.2026 | Einstellungsmenue mit vier Reglern, lokalen Einstellungen und Reset; v1.4-Optik als Standard |
| **v1.4** | 25.10.2026 | Schwarze Wellenbalken entfernt, kleinere Zeichen, laengere Streams, laengeres Nachleuchten, hoehere Dichte |
| **v1.3** | 25.10.2026 | Schnellere Zeichenwechsel, etwas langsamere Bewegung, dichter |
| **v1.2** | 25.10.2026 | Japanische Zeichen durch ASCII ersetzt |
| **v1.1** | 25.10.2026 | Erste iPhone-PWA auf GitHub Pages mit Offline-Modus |

**Separater Entwicklungszweig:** Windows-11-BAT/PowerShell Matrix-Regen **v2.1**, produktiv 24.10.2026. Windows- und iPhone-Versionsnummern sind getrennt.

## Betrieb und Updates
Nach einem Commit auf `main` veroeffentlicht GitHub Pages die Website. Bei App-Aenderungen den Cache-Namen in `sw.js` erhoehen. Safari/iOS kann alte Inhalte aus dem Offline-Cache anzeigen; Website in Safari neu laden, gegebenenfalls mit `?v=1.7`. Die Offline-Funktion setzt voraus, dass die Ressourcen zuvor erfolgreich geladen wurden.

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

### Update-Korrektur v1.6
Navigationen laden online zuerst vom Netzwerk ohne HTTP-Cache und verwenden offline die zuletzt gespeicherte Seite. Der neue Service Worker befuellt seinen Cache ohne alte HTTP-Cache-Inhalte. Bei einem Worker-Wechsel laedt eine bereits kontrollierte App einmal automatisch neu. Alte v1.4-Installationen gegebenenfalls zweimal neu laden: einmal fuer das Worker-Update, danach fuer die neue Seite. Gespeicherte Einstellungen bleiben erhalten.

## Nachrichten in v1.7
In **Einstellungen** Nachrichten zeilenweise erfassen. Worte werden automatisch getrennt und nacheinander angezeigt. Haltezeit standardmaessig 2.5 s, Ein- und Ausblenden je 0.8 s, Pause 0.3 s. Anzeige gefuellt, Umriss oder Geisterschrift. **Nachrichten-Link kopieren** erstellt einen teilbaren Link; Empfaenger erhalten die konfigurierte Animation ohne Anmeldung. Beispiel: `https://vorzueglich.github.io/matrix-regen/?msg=Krise-N%20H%C3%B6ck%20am%20Mittwoch`. Inhalte stehen lesbar in der URL (keine vertraulichen Nachrichten). URL-Parameter ueberschreiben beim Oeffnen die lokal gespeicherte Nachricht, nicht aber die allgemeinen Regeneinstellungen.

### Korrektur v1.7-r3 (26.10.2026)
Kein schwarzes Textrechteck mehr: grosse, vollstaendig aus stabilen, gruen leuchtenden ASCII-Zeichen gebildete Buchstaben bei durchgehend sichtbarem Regen. Schrift wird an Bildschirmbreite und Wortlaenge angepasst. Versionsnummer bleibt v1.7.

### Korrektur v1.7-r4 (26.10.2026)
Zeichenraster mit schlanken 5x7-Buchstaben und mindestens zwei leeren Rasterspalten zwischen Buchstaben, Umlaut-Punkten als separate Glyphen; automatische Breitenanpassung an das Fenster. Einstellung 'Maximale Wortbreite' (50–100 %, Standard 95 %) ist speicherbar und wird als URL-Parameter `width` geteilt. Keine schwarze Hintergrundflaeche.

### Korrektur v1.7-r5 (26.10.2026)
Relief-Integration: Wortzeichen sind festen Regen-Spalten zugeordnet. Die laufenden Regenkoepfe und -schweife steuern lokal deren Leuchtintensitaet und Glow. Kein schwarzer Hintergrund, keine separate Text-Overlay-Schleife; lesbare Grundhelligkeit bleibt erhalten.

### Korrektur v1.7-r6
Das Wort wird ausschliesslich von Zeichen der laufenden Regenspalten gebildet. Keine separate Wortzeichen-Ebene; Regenraster skaliert automatisch mit der Laenge des laengsten Wortes. In der Wort-Maske erscheinen die vorhandenen Fallzeichen heller.
