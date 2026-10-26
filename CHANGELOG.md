# Changelog – Matrix Regen iPhone PWA

Versionierung: **Major.Minor**. Neue App-Versionen mit kurzer Aenderungsuebersicht; Dokumentationsaenderungen allein erhoehen die App-Version nicht.

## Korrektur v1.7-r6 – 26.10.2026
- Separate Schriftausgabe vollstaendig entfernt.
- Wortkontur ist Teil derselben Zeichenschleife und derselben Fallspalten wie der Regen.
- Regen-Zeichengroesse skaliert mit Wortlaenge, damit das Wort in den Bildschirm passt.
- Offline-Cache aktualisiert.

## Korrektur v1.7-r5 – 26.10.2026
- Gravur-/Relief-Effekt: Wortzeichen werden in den laufenden Regen-Spalten mit den Streams synchron gerendert.
- Leuchten wird beim Vorbeifliessen von Regenkopf und -schweif intensiviert; Grundhelligkeit fuer Lesbarkeit.
- Keine schwarze Flaeche, Wortweise-Anzeige, adaptive Wortbreite und Teilen unveraendert.

## Korrektur v1.7-r4 – 26.10.2026
- Schlanke Bitmap-Zeichen statt breiter Font-Maske, mit zwei Rasterspalten Zeichenabstand.
- Neue Einstellung maximale Wortbreite (50–100 %, Standard 95 %), automatische Skalierung auch langer Woerter.
- Umlaute mit separaten Punkten und unveraenderter Matrix-Regen im Hintergrund.
- Offline-Cache aktualisiert, Hauptversion bleibt v1.7.

## Korrektur v1.7-r3 – 26.10.2026
- Vollflaechige schwarze Abdunkelung entfernt; Matrix-Regen bleibt hinter der Schrift sichtbar.
- Grosse dicke Buchstaben werden aus stabilen ASCII-Zeichen aufgebaut, mit sanftem gruenem Leuchten.
- Maskengitter an Wortlaenge und Bildschirmabmessungen angepasst; weiterhin v1.7.

## v1.7 – 26.10.2026 (produktiv, korrigierte Fassung)
- Wortanimation neu gebaut: grosse Zeichenraster statt kleinteiliger Regen-Maske; stabile Glyphen und abgedunkelter Wortbereich.
- Sätze werden automatisch in einzelne Woerter zerlegt; jeweils ein Wort sichtbar.
- Neue Standardzeiten 2.5 s Anzeige, 0.8 s Ein-/Ausblenden, 0.3 s Pause.
- Cache-Kennung v1.7-r2 gegen veraltete PWA-Version.

- Woerter/Nachrichten erscheinen aus den laufenden Zeichen, bleiben sichtbar und loesen sich wieder auf.
- Darstellung: ausgefuellt, Umriss, Geisterschrift; Dauer, Uebergang und Pause anpassbar.
- URL-Parameter `msg`/`text` und Freigabe-Link mit gespeicherten Anzeigeoptionen.
- Ohne Nachricht bleibt v1.6-Regen erhalten.
- Offline-Cache und sichtbare Version aktualisiert.

## v1.6 – 25.10.2026 (produktiv)
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
