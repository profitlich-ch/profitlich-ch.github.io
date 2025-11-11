# Vorlagenerstellung

## Word

### Liste mit mehreren Ebenen  

Es gibt nur einen gesunden Weg: [https://shaunakelly.com/word/numbering/numbering20072010.html?p=1768](https://shaunakelly.com/word/numbering/numbering20072010.html?p=1768)

## Planköpfe

Planköpfe sind im Büro und auf der Baustelle ein Werkzeug: welchen Plan halte ich in der Hand, ist es die richtige Version, woraus beziehen sich Höhenangaben. Jeder Benutzer erwartet standardisierte Angaben. Während Mitarbeiter des eigenen Architekturbüros den Büroplankopf durch die Gewohnheit des Benutzens kennen, sehen Fachplaner und ausführende Unternehmen von Projekt zu Projekte immer neue Planköpfe. Wir meinen, dass gut strukturierte, schnell lesbare Planköpfe ein achtungsvollen Umgang mit Planer zeigen und – noch wichtiger – Fehler vermeiden.

### Generelles

Pläne werden zwischen Planern verschickt und dafür in den meisten Fällen exportiert. Planköpfe sollten aber mit absoluter Sicherheit bei jeder Dateiweitergabe integer bleiben, daher gilt es, sich auf Techniken zu beschränken, die beim Export und beim Weitergeben nicht verloren gehen. Das schränkt die Schriftwahl auf die üblichen Systemschriften ein: Arial und Times New Roman; die einzige Entscheidung ist also serifenlos oder mit Serifen. Bilder werden beim Export als separate Einzeldateien gespeichert, die verloren gehen können. Möglich sind daher nur flächige Grafiken, die in Pfade umgewandelt werden müssen.

Im Sinne einer Informationshierarchie gibt es zwei Schriftgrössen und eine Gruppierung von Angaben in Blöcken. Die grossen Texte reichen, um den Plan zu verstehen.

### Block Architekturbüro

Das Logo in Pfaden und die Adresse des Büros. Technisch möglich wäre, die sich nicht ändernde Adresse in Unternehmensschrift zu setzen und zu Pfaden unzuwandeln, aber sie würde dann abweichen von allem anderen Text.

### Block Projekt

Die Kernangaben zum Projekt: Projektname, Adresse, Auftraggeber und Bauleitung. Alle Adressen auf einen Blick.

### Block Plan

Der Planname und alle langfristigen Angaben zum Plan: Phase, Plangrösse, Ersteller und Erstelldatum, Bearbeiter und ein Situationsplan.

### Block Kernangaben

Die Angaben, die es im Büro und auf der Baustelle braucht, um den Plan nutzen zu können: Plannummer, OK Fertigboden über Meeresspiegel, Massstab, Nordpfeil, Planstand und Index.

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