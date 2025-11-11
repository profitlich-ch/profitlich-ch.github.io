# Craft CMS


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
