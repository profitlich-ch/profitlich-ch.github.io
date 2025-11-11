# Craft CMS

## Projekt aufsetzen

1. Github repository auf Basis der Vorlage anlegen, mit Name `domain.tld`
2. Git repository in VS Code clonen
3. `colima start`
4. `ddev start`
5. `ddev npm install`
6. `ddev ssh`
7. `composer install --no-interaction`
8. 'mysql db < dump.sql`
9. `exit`
10. `ddev launch`, `/redaktion` im Browser anhängen
11. Site language üblicherweise de-CH
12. Admin login `xxx-admin` mit xxx = Kundenkürzel

## Nomenklatur

### Datenquellen

pfad-…-pfad-bereich

Der letzte Namensbestandteil nennt den Namen des Bereichs und sagt somit , welche Daten die Datenquelle enthält.

Die Bestandteile zuvor TODO

### Feldnamen

Feldnamen im CMS (zum Beispiel ‹Titel›) und deren Klasse im HTML sollen gleich heissen (`<h2 class="veranstaltung__titel">`).

Der Feldname soll nicht wiederholen, was bereits durch den Kontext erkennbar ist. Ein Beispiel: Heisst die Section ‹Abschnitte› heisst das Feld für den Abschnittstitel nur ‹Titel›, nicht etwa ‹Abschnittstitel›.

- Titel
- Untertitel
- Kurztitel
- Beschreibung
- Text
- Bild
- Spalte, Spalte x
- E-Mail
- PLZ, PLZ &amp; Ort
- Strasse &amp; Nummer
- Telefon
- Mobil

### Relationale Bezüge

Es ist naheliegend, relationale Bezüge (in Symphony CMS ‹Association›) auf den Titel eines Datensatzes zu setzen. Das hat zwei Nachteile:

- Einträge gleichen Namens werden in der URL zu titel und titel-2
- Das Dropdown/die Suche, um eine Verknäpfung herzustellen zeigt nur den Titel

In vielen Fällen ist es sinnvoll, ein zusätzliches Feld anzulegen, das automatisch einen besser lesbaren Namen erzeugt (in Symphony CMS ‹Reflection›). Beispiele:

- Im Newsletter des Theaters am Bahnhof wählt ein Redakeur Veranstaltungen aus und sieht dabei nicht nur den Titel der Veranstaltung, sondern auch den Archivstatus und ob Bühne oder Atelierkino
- Beim Theater am Banhof zeigt die URL zusätzlich zum Namen der Veranstaltung, dass es ein Special ist, so dass die Veranstaltung ohne Special und das Special nicht so aussehen: veranstaltungstitel-2 *(nicht im Projekt umgesetzt)*

## Dateinamen von redaktionellen Uploads

Ziel ist es, dass auf der Website jedes Bild und jede Datei einen Namen hat, der seinen Inhalt benennt. Bilder sollen zusätzlich ein `alt` Attribut tragen, das den Bildinhalt benennt

Dateinamen sollen daher nicht aus dem Upload des Redakteurs übernommen werden, sondern vom Redaktionssystem vergeben werden.


## Mailversand über Trigger

Ist der Trigger das Anlegen eines neuen entry, löst der Trigger zwei Mal aus. Das ist, weil Craft zuerst einen Draft/Revision anlegt und dieser ein eigenständiger entry ist. Der Trigger benötigt daher zwei Filter: `is not a draft` und `is not a revision`. Das ist [dokumentiert in einem issue](https://github.com/ryssbowh/craft-triggers/issues/3) des trigger Plugins.

Soll die Mail nur versendet werden, wenn der enry neu angelegt wird, braucht es zusätzlich den Filter `is new`. Das gilt, wenn nur das Anlegen per Frontend triggern soll, nicht aber das händische Ändern durch einen Redakteur.

## Staging/Production

### Cronjobs einrichten
Die automatische Ausführung der Craft Queue ist in der config deaktiviert. Statdessen braucht es Cronjonbs im Hosting:

### Craft Queue
Häufigkeit `*****`
```
/usr/bin/bash /home/ANMELDENAME/public_html/ORDNERNAME/cronjobs/craft-queue.sh
```

## Bei Verwendung von Blitz
Häufigkeit `*5***`
```
/usr/bin/bash /home/SERVERNAME/public_html/ORDNERNAME/cronjobs/blitz-cache-home-listing.sh
```
Häufigkeit `5****`
```
/usr/bin/bash /home/SERVERNAME/public_html/ORDNERNAME/cronjobs/blitz-cache-expired.sh
```

## Craft Updates

Updates werden nur lokal (Umgebung development) durchgeführt. Die Datei `composer.json`muss für Updates gemäss SemVer vorbereitet sein: Versionen brauchen eine Erlaubnis zum Update mit `^3.5.2` statt `3.5.2` (^ minor updates, ~ patch update).  
https://nystudio107.com/blog/updating-craft-cms-without-headaches

``` SH
ddev ssh
composer self-update
composer update
php craft up
```

## Craft Plugins
Plugins können über die Weboberfläche installiert werden, aber nur darüber deinstalliert werden, nicht gelöscht. Um ein Plugin ganz zu löschen sind folgende Schritte nötig:

1. Das Plugin aktivieren (nur aktive können deinstalliert werden)  

- über die Weboberfläche
- über SSH: `./craft plugin/enable plugin-handle`

2. Das Plugin deinstallieren  

- über die Weboberfläche
- über SSH: `./craft plugin/uninstall plugin-handle`

3. Das Plugin via SSH und Composer löschen: `composer remove namespace/package-name`  

Der package-name steht in Github und auch in der composer.json

## Craft Probleme

### CKEditor erzeugt SQLSTATE[42S22]: Column not found

Dieser Fehler ist bisher direkt nach Aufsetzen eines neuen Projekts aufgetreten, wenn ein Feld vom Typ CKEditor angelegt wird. Die Deinstallation des Plugins hilft nicht. Stattdessen muss die [Datenbank neu erzeugt](https://stackoverflow.com/questions/76266496/ddev-is-there-a-command-to-re-create-an-empty-database) werden:

``` SH
ddev delete --omit-snapshot
ddev start
ddev ssh
php craft setup
```

## CKEditor

Um Testen (`p`, `h1`, `h2`, …) eine Klasse zu geben, braucht es folgenden Code. Wichtig: Das Model darf nicht `paragraph` und und `heading1` usw. heissen, sondern muss von den Standardnamen abweichen. In der JSON Ansicht wird das als Fehler markiert («Value is not accepted. Valid values: "heading1", "heading2", …», es funktioniert aber.

`class` gibt dem Button im CKEditor eine Class, um den Button gestalten zu können. `view.classes` sind die Klassen, die dem Text zugewiesen werden (bereits im CKEditor und vor allem im Frontend).

````js
return {
  heading: {
    options: [
      {
        class: 'module-text__lead-ck',
        model: 'paragraph-leq',
        title: 'Paragraph',
        view: {
          classes: 'module-text__lead',
          name: 'p',
        },
      },
      {
        class: 'module-text__heading--2-ck',
        model: 'heading2-leq',
        title: 'Titel',
        view: {
          classes: 'module-text__heading--2',
          name: 'h2',
        },
      },
    ],
  },
  link: {
    decorators: {
      openInNewTab: {
        attributes: {
          rel: 'noopener noreferrer',
          target: '_blank',
        },
        label: 'Open in new tab?',
        mode: 'manual',
      },
    },
  },
  style: {
    definitions: [
      {
        classes: [
          'module-text__inlinelink',
        ],
        element: 'p',
        name: 'Link mit Pfeil',
      },
    ],
  },
}
````
