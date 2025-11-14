---
order: 3
---

# Mailsignaturen

## Mac OS Mail

- In Apple Mail in den Einstellungen eine neue Signatur anlegen, falls es noch keine gibt, und dem Mailkonto als Standardsignatur zuweisen
- Apple Mail schliessen
- Die Alt-Taste gedrückt halten. Im Finder Menü ‹Gehe zu› › Library, dort Mail › V10 (oder andere Zahl) › MailData › Signatures
- Wenn es mehrere Signaturen gibt: In der Datei `AllSignatures.plist` nachschlagen, welche Signatur die für das Büro ist. Nach dem im Mailprogramm eingegebenen Sinaturnamen schauen und die Nummer nach `SignatureUniqueId` merken.
- Die Datei mit `\[SignatureUniqueId\].mailsignature` mit dem Programm TextEdit öffnen: rechte Maustaste › Öffnen mit › Andere, Ordner Programme ansteuern und TextEdit anklicken
- Den HTML Code kopieren und den ganzen Block in TextEdit nach der Zeile ‹Mime-Version› ersetzen, also ab und mit `&lt;body&gt;`
- Speichern
- Im Finder die Dateiinfo öffnen (rechte Maustaste › Informationen oder Cmd + i oder Ablage › Informationen)  
    ‹Geschützt› auswählen (sonst wird Apple Mail die Datei überschreiben)
- Apple Mail wieder öffnen. Fertig.

## Mac OS Outlook

- Outlook › Einstellungen › Signaturen
- Knopf ‹Signatur bearbeiten›
- Alles markieren mit Cmd + a, alles löschen
- Unten auf dieser Seite den Knopf ‹Signatur markieren› drücken. Auf keinen Fall die Signatur manuell mit der Maus kopieren, weil sonst unsichtbarer, aber wichtiger Code fehlt.
- Cmd + c drücken, um die Signatur in die Zwischenablage zu kopieren
- In Outlook einfügen und speichern
