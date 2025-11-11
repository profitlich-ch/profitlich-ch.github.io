# Starter Kits

## FTP

Verwende für eine Website nicht den allgemeinen FTP Account, der Zugriff auf die Hauptebene des Hostings gibt, sondern einen dedizierten, der direkt in das Verzeichnis der Website führt. So stellst Du, dass Fehler an der Uploadkonfiguration andere Projekte auf dem Server zerstören.

Auf dem Webserver soll der Ordner einer Website die Domain als Namen tragen, also `domain.tld`.

## Logins

Der Admin Account jeder Website hat einen Benutzernamen nach folgendem Schema:

`kkk-admin`

kk ist das dreistellige Kundenkürzel. ‹admin› ist eine feste Vorgabe.


## Abgleich der Breakpoints

Die Breakpoints sind definiert für CSS, XLS und Javascript. Sie müssen überall gleich sein. Sind sie nicht gleich, kann zum Beispiel ein Skript aufhören zu funktionieren, weil der JS Breakpoint bereits von Tablet auf Desktop umgesprungen ist, das Layout aber ist noch im Breakpoint Tablet.

## Strukturelle Planung HTML und CSS

- Gibt es Inhalte ausserhalb des Viewports (Bühnen)?
- Bekommt der body ein padding oder bekommen es die Bausteine?
