# Changelog – Matrix Regen iPhone PWA

Versionierung: **Major.Minor**. Neue App-Versionen mit kurzer Aenderungsuebersicht; Dokumentationsaenderungen allein erhoehen die App-Version nicht.

## v1.7 – 26.10.2026 (produktiv)\n- Woerter/Nachrichten erscheinen aus den laufenden Zeichen, bleiben sichtbar und loesen sich wieder auf.\n- Darstellung: ausgefuellt, Umriss, Geisterschrift; Dauer, Uebergang und Pause anpassbar.\n- URL-Parameter `msg`/`text` und Freigabe-Link mit gespeicherten Anzeigeoptionen.\n- Ohne Nachricht bleibt v1.6-Regen erhalten.\n- Offline-Cache und sichtbare Version aktualisiert.\n\n## v1.6 – 25.10.2026 (produktiv)
- Update-Fehler behoben: Navigationen online zuerst aus dem Netzwerk, offline aus dem aktuellen App-Cache.
- Neue Offline-Dateien ohne veralteten HTTP-Cache laden.
- Service-Worker-Update explizit pruefen und bei Controller-Wechsel einmal neu laden.
- Gespeicherte Einstellungen und v1.4-Standarddarstellung erhalten.

## v1.5 – 25.10.2026 (produktiv)
- Mobilfreundlicher Einstellungsdialog neben Pause und Hilfe mit vier Live-Reglern.
- Regendichte, Zeichengroesse, Fallgeschwindigkeit und Leerraum/Nachleuchten einstellbar.
- v1.4-Darstellung als Standard; Reset auf Standardwerte.
- Lokale Speicherung mit Validierung und Ausweichverhalten bei gesperrtem Speicher.
- App-Titel, Status und Service-Worker-Cache konsistent auf v1.5.
- Sichtbarkeit der Bedienleiste beim Tippen korrigiert; Zeichenvorrat fuer lange Schweife vervollstaendigt.

## v1.4 – 25.10.2026 (produktiv)
- Schwarze, regelmaessig wandernde Wellenbalken entfernt.
- Zeichen kleiner, Streams laenger, Nachleuchten ausgepraegter.
- Insgesamt hoehere visuelle Dichte; Geschwindigkeit aus v1.3 beibehalten.
- Offline-Cache und Versionsanzeige auf v1.4 angepasst.

## v1.3 – 25.10.2026
- ASCII-Zeichen wechseln deutlich haeufiger.
- Fallgeschwindigkeit etwas reduziert.
- Regenstreifen verlaengert, Darstellung dichter.

## v1.2 – 25.10.2026
- Japanische Glyphen durch ASCII-Zeichen ersetzt.
- Offline-Cache aktualisiert.

## v1.1 – 25.10.2026
- Erste GitHub-Pages-Version als iPhone-PWA.
- Canvas-Regen, Pausenfunktion, Hilfe, Home-Bildschirm-Installation und Offline-Unterstuetzung.

## Separater Windows-Zweig
- Windows-11-Matrix-BAT/PowerShell: **v2.1**, produktiver Stand 24.10.2026.
- Die Windows- und iPhone-Versionslinien werden getrennt gefuehrt.
