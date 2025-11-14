---
order: 1
---

# Office

## Word

### Liste mit mehreren Ebenen  

Es gibt nur einen gesunden Weg: [https://shaunakelly.com/word/numbering/numbering20072010.html?p=1768](https://shaunakelly.com/word/numbering/numbering20072010.html?p=1768)

## Powerpoint

### Tabellen

Powerpoint kennt keine nutzergenerierten Tabellenvorlagen. Will man in einer Vorlage das Aussehen einer Tabelle vorgeben, braucht es einen Eingriff in das Open Office XML (OOXML), das in der Powerpoint-Datei gespeichert ist.

Das Unternehmen Brandwares bietet Vorlagenerstellung als Service an und veröffentlicht sowohl Artikel als auch ein E-Book.

[https://www.brandwares.com/bestpractices/2015/11/xml-hacking-editing-in-os-x/](https://www.brandwares.com/bestpractices/2015/11/xml-hacking-editing-in-os-x/)

Wir haben Powerpoint-Tabellenvorlagen unter anderem für [HAE](https://profitlich.prosonata.software/projects.php?editID=81&page=1) angelegt.

#### Einführung

[https://www.brandwares.com/bestpractices/2015/02/xml-hacking-an-introduction/](https://www.brandwares.com/bestpractices/2015/02/xml-hacking-an-introduction/)

#### Was möglich ist

[https://www.brandwares.com/bestpractices/2015/08/xml-hacking-table-styles-complete/](https://www.brandwares.com/bestpractices/2015/08/xml-hacking-table-styles-complete/)  
[https://www.brandwares.com/bestpractices/2015/07/xml-hacking-custom-table-styles/](https://www.brandwares.com/bestpractices/2015/07/xml-hacking-custom-table-styles/)   
[https://www.brandwares.com/bestpractices/2015/05/xml-hacking-color-themes/](https://www.brandwares.com/bestpractices/2015/05/xml-hacking-color-themes/)   
[https://www.brandwares.com/bestpractices/2015/03/xml-hacking-default-table-text/](https://www.brandwares.com/bestpractices/2015/03/xml-hacking-default-table-text/)

#### Technik

Die Tabelleneigenschaften lassen sich mit einem Skript und mitgelieferten Beispiels-XML-Datei ändern:  
[https://github.com/nbonamy/powerpoint-custom-table-style-generator/tree/master](https://github.com/nbonamy/powerpoint-custom-table-style-generator/tree/master)

Alle weiteren Eigenschaften müssen mit einem XML Editor angepasst werden. Dafür gibt es die Erweiterung OOXML-Tools für Chrome:  
[https://chrome.google.com/webstore/detail/ooxml-tools/bjmmjfdegplhkefakjkccocjanekbapn?hl=en](https://chrome.google.com/webstore/detail/ooxml-tools/bjmmjfdegplhkefakjkccocjanekbapn?hl=en)

## Mailsignaturen

### Mac OS Mail

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

### Mac OS Outlook

- Outlook › Einstellungen › Signaturen
- Knopf ‹Signatur bearbeiten›
- Alles markieren mit Cmd + a, alles löschen
- Unten auf dieser Seite den Knopf ‹Signatur markieren› drücken. Auf keinen Fall die Signatur manuell mit der Maus kopieren, weil sonst unsichtbarer, aber wichtiger Code fehlt.
- Cmd + c drücken, um die Signatur in die Zwischenablage zu kopieren
- In Outlook einfügen und speichern