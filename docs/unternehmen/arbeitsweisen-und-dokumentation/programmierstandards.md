---
order: 4
---

# Programmierstandards

Ziel ist es, jede Programmierarbeit, die sich von Projekt zu Projekt wiederholt, einem Standard folgen zu lassen. Gibt es Branchenstandards, übernehmen wir diese, ansonsten schaffen wir selber welche.

## Nutze Bibliotheken

Viele Aufgaben wurden schon von Anderen gelöst. Prüfe zuerst, ob es eine Bibliothek für die jeweilige Aufgabe gibt. Die Bibliothek soll

- lebendig sein und weiterhin gepflegt werden (prüfe, von wann das letzte commit war und wie gut issues gelöst werden)
- ausreichend flexibel sein (prüfe, ob Deine Anforderungen als Konfigurationsoptionen verfügbar sind)

Beispiele aus unserer Praxis: [SwiperJS](https://swiperjs.com/), [Google Maps JS API loader](https://github.com/googlemaps/js-api-loader), [Debounce](https://github.com/sindresorhus/debounce), [JS Cookie](https://github.com/js-cookie/js-cookie)

## Code dokumentieren

Nimm Dir die Zeit, Deinen Code schon beim ersten Schreiben zu kommentieren. Denke an Dein zukünftiges Ich, das den Code wieder verstehen will, und an Andere, die den Code noch gar nicht kennen.

## Externen Code referenzieren

Nutzt Du externen Code, gebe die Quelle mit einem Kommentar. Das gilt auch für kleine CSS Tricks oder JS Code. Wenn Du Hilfe benötigt hast, das Problem zu lösen, ist die Wahrscheinlichkeit gross, dass Du selbst oder jemand anderes die Quelle nachschlagen will, um die Funktionsweise zu verstehen.

Setze den Link möglichst präzise, etwa zu einem Beitrag auf Stackoverflow innerhalb einer Seite, nicht nur auf die Seite selbst.

## Lösungen zukunftsgerichtet abstrahieren

Zum Beispiel sind Bilder nicht einzeln eingebunden, sondern über ein Utility.

## Aufgaben im Quelltext kennzeichnen

Aufgaben im Quelltext im Kommentar mit `TODO` beginnen. Mit installierter ‹Better Comments› Erweiterung werden solche Kommentare schwarz hinterlegt. Es gibt noch weitere [Schlüsselwörter](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments).

## Nutze die Browserkonsole für Meldungen

Nutze log, info, error, warn etc.:  
[https://firefox-source-docs.mozilla.org/devtools-user/web\_console/console\_messages/index.html](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html)