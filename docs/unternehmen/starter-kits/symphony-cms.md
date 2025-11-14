---
order: 6
---

# Symphony CMS

## Projekt aufsetzen

### .vscode für Tasks

Die Gulp tasks können in Code ausgeführt werden. Die Tasks stehen in gulpfile.js/index.html. Der Ordner .vscode enthält JSON Dateien, die Visual Code mitteilen, was der Standardtask ist.

Diese Datei kann aus einem bestehenden Projekt kopiert werden. Dafür ist es nötig, versteckte Dateien im Finder sichtbar zu machen, mit dem Tastaturkürzel Cmd+Shift+m.

### Installation

Öffne das Terminal vom lokalen Ordner aus: Rechte Maustaste auf den Ordner › Dienste › Neuer Terminal-Tab beim Ordner. Führe `npm install` aus.

# Gulp starten

### Entwicklung starten

Öffne in Visual Code den ganzen lokalen Ordner, nicht nur Dateien. Starte Gulp, indem Du Cmd + Shift + B drückst.

### Probleme

XSL Dateien auf dem Server, in denen versionierte Dateien verknüpft sind (css und js per gulp-rev) werden meist nicht überschrieben, wenn man das Projekt in Code öffnet und den Gulp Task startet. Das betrifft insbesondere die Datei master.xsl.

Es hilft nur, die XSL Datei per FTP auf dem Server zu löschen und danach den Glup-Task erneut zu starten.

Dazu gibt es in ‹A2-03 Systemverbesserung› eine Aufgabe: [https://app.asana.com/0/1200833877659650/1200833877659658/f](https://app.asana.com/0/1200833877659650/1200833877659658/f)

## Updateanleitung

Alle Projekte bis August 2022 basieren auf Python 2 und Sass 4. Beginnend mit Projekt TRA (Transterra/Maron) gilt eine neue Konfiguration. Dazu sind Änderungen nötig.

### Node aktualisieren

[https://nodejs.org/en/](https://nodejs.org/en/)

### Python updaten

Führe im Terminal ein Update von Python aus. Wenn noch nicht installiert, braucht es dafür zuvor Homebrew.

[https://docs.python-guide.org/starting/install3/osx/](https://docs.python-guide.org/starting/install3/osx/)

```
$ brew install python
```

### package.json aktualisieren

Die Datei kann aus einem bestehenden, upgedateten Projekt kopiert werden. Alternativ kann das Node Paket npm-check-updates das tun.

[https://nodejs.dev/learn/update-all-the-nodejs-dependencies-to-their-latest-version](https://nodejs.dev/learn/update-all-the-nodejs-dependencies-to-their-latest-version)

```
$ sudo npm install -g npm-check-updates
$ ncu -u
$ npm install
```

### gulpfile.js aktualisieren

Diese Datei kann aus einem anderen Projekt überschrieben werden, wegen der in der Datei angegebenen FTP-Verbindungen. Zeile 9 ist auszutauschen:

```js
ALT
const sass         = require(path.join(process.cwd(), 'node_modules/gulp-sass'));

NEU
const sass         = require(path.join(process.cwd(), 'node_modules/gulp-sass'))(require(path.join(process.cwd(), 'node_modules/sass')));
```

### SCSS Divisionen in calc Funktion setzen

Das Dividieren durch Schreiben eines `/` ist neu deprecated und erzeugt eine Warnung. Die Berechnung muss neu in `math.div` oder `calc()` gesetzt werden. Wenn immer möglich, nutze `calc()`. Nur die Datei scss/funktionen/\_strip-unit.scss benötigt zwingend `math.calc`.

#### calc()

SCSS entscheidet selbst, ob die Berechnung bei der Umwandlung zu CSS ausgeführt wird, oder ob im CSS das calc() stehenbleibt. Es bleibt nur stehen, wenn unterschiedliche Einheiten in der Rechnung stehen.

[https://sass-lang.com/documentation/values/calculations](https://sass-lang.com/documentation/values/calculations)

```css
ALT
width: 100% * 5 / 16;

NEU
width: calc(100% * 5 / 16);
```

Weil das calc() auch im CSS landen kann, setze zwischen alle Operatoren Leerzeichen (CSS akzeptiert nicht `5/16`, aber `5 / 16`).

#### math.calc

```css
ALT
@return $number / ($number * 0 + 1);

NEU
@return math.div($number, ($number * 0 + 1));
```

Dafür muss das math Modul geladen werden. Lade es global für alle SCSS Dateien in der Datei style.css, zuoberst in der ersten Zeile.

```css
@use 'sass:math';
```

Betroffen ist die Datei src/scss/funktionen/\_strip-unit.scss. Diese Dateie kannst Du aus einem bereits geupdateten Projekt kopieren und überschreiben.

### SCSS @if korrigieren

manche @if Konditionen sind fälschlicher Weise mit nur einem `=` geschrieben. Korrigiere sie zur korrekten `==` Schreibweise. Betroffen sind sicher die Datei \_einstellungen.scss.

```css
ALT
@if ($modus = 'dev') {
  
NEU
@if ($modus == 'dev') {
```

## Updates

### Fehlersuche

Ist das Backend weiss (Error 500 in der Entwicklertoolbar › Netzwerk), schalte in der `index.php` Fehlermeldungen ein. Füge zu Beginn folgenden Code ein:

```ini
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(-1);
```

### Update PHP 5.6 auf 7.4

Typischer Fehler sind Variablen ohne vorangestelltes Dollarzeichen.

`Use of undefined constant name assumed 'title' (this will throw an Error in a future version of PHP)`  
Die Variable wurde vermutlich ausserhalb der Klasse definiert. Sie muss stattdessen in der Klasse zu Beginn definiert werden:  
`const MTF_NAME = 'Field: Multilingual Tag List';`  
 In den Funktionen kann sie dann in folgender Notation abgerufen werden:  
`self::MTF_GROUP`
