# Programmierstandards

Ziel ist es, jede Programmierarbeit, die sich von Projekt zu Projekt wiederholt, einem Standard folgen zu lassen. Gibt es Branchenstandards, übernehmen wir diese, ansonsten schaffen wir selber welche.

## Code dokumentieren

## Externen Code referenzieren

Nutzt Du externen Code, gebe die Quelle mit einem Kommentar. Das gilt auch für kleine CSS Tricks oder JS Code. Wenn Du Hilfe benötigt hast, das Problem zu lösen, ist die Wahrscheinlichkeit gross, dass Du selbst oder jemand anderes die Quelle nachschlagen will, um die Funktionsweise zu verstehen.

Setze den Link möglichst präzise, etwa in Stackoverflow auf den Beitrag innerhalb einer Seite, nicht nur auf die Seite selbst.

## Lösungen zukunftsgerichtet abstrahieren

Zum Beispiel sind Bilder nicht einzeln eingebunden, sondern über ein Utility.

## Aufgaben im Quelltext kennzeichnen

Aufgaben im Quelltext im Kommentar mit TODO beginnen. Mit installierter ‹Better Comments› Erweiterung werden solche Kommentare schwarz hinterlegt.

Es gibt noch weitere Schlüsselwörter (siehe Erweiterung).

## Nutze die Browserkonsole für Meldungen

Nutze log, info, error, warn etc.:  
[https://firefox-source-docs.mozilla.org/devtools-user/web\_console/console\_messages/index.html](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html)