---
order: 1
---

# Starter Kits

## Dev

### ddev und Vite starten
Das Setup basiert auf https://ddev.com/blog/working-with-vite-in-ddev/.
```
ddev start
ddev npm run dev
```

### Gulp starten

Nur gültig für Projekte vor LEQ; seitdem hat Vite Gulp abgelöst. Öffne in Visual Code den ganzen lokalen Ordner, nicht nur Dateien. Starte Gulp, indem Du Cmd + Shift + B drückst. Du wirst gefragt, welche Umgebung genutzt werden soll: dev, staging oder production. Die letzteren beiden übertragen die Dateien per FTP auf den Server.

## Staging/Production

### Domain und Subdomain einrichten

Auf dem Server heissen die Domains und Ordner der Umgebung entsprechend

| Domain | Ordner | Zielordner Hosting
|-|-|-
| staging.domain.tld | staging.domain.tld | staging.domain.tld/web
| domain.tld | domain.tld | domain.tld/web

### PHP Version

Beim Einstellen der PHP Version kann es sein, dass das Hosting die htaccess ändert (bei Cyon). Das ergibt eine Kollision mit git. Dann muss die ergänzte Zeile in die htaccess des Projekt aufgenommen werden.

### FTP

Verwende für eine Website nicht den allgemeinen FTP Account, der Zugriff auf die Hauptebene des Hostings gibt, sondern einen dedizierten, der direkt in das Verzeichnis der Website führt. So stellst Du, dass Fehler an der Uploadkonfiguration andere Projekte auf dem Server zerstören.

Auf dem Webserver soll der Ordner einer Website die Domain als Namen tragen, also `domain.tld`.

### PHP Einstellungen

`allow_url_fopen` und `proc_*` müssen aktiviert sein.

Bei Cyon müssen proc_open, proc_close ausgewählt werden. (Erweitert->PHP-Einstellungen)

### Datenbanken einrichten

Manche Hoster geben ein Präfix vor, manche erlauben nur kurze Namen. Vom unten angegebenen Schema darf dann abgewichen werden. Ziel ist, dass erkennbar sind: staging, Domain und Toplevel-Domain und das CMS. So soll in der Hostingverwaltung erkennbar sein, wozu die Datenbank dient. Das verringert das Risiko unabsichtlicher Löschung.

| Domain | Datenbankname | Datenbak-Benutzername
|-|-|-
| staging.domain.tld | staging_domaintld_craft | staging_domaintld_craft
| domain.tld | domaintld_craft | domaintld_craft

### PHP für SSH auf dem Hosting einrichten

#### Hostpoint

https://support.hostpoint.ch/de/produkte/webhosting/haeufig-gestellte-fragen/pfade-verzeichnisse-system 
```
alias php='/usr/local/php81/bin/php' 
echo "alias php='/usr/local/php81/bin/php'" >> ~/.bash_profile

export PATH=/usr/local/php81/bin:$PATH
echo "export PATH=/usr/local/php81/bin:\$PATH" >> ~/.bash_profile 
```

#### Metanet

https://support.metanet.ch/713#10591-php
```
alias php='/opt/php80/bin/php' 
echo "alias php='/opt/php80/bin/php'" >> ~/.bash_profile

export PATH=/opt/php80/bin:$PATH
echo "export PATH=/opt/php80/bin:\$PATH" >> ~/.bash_profile 
```

#### Cyon

https://www.cyon.ch/support/a/php-standardversion-fur-die-kommandozeile-festlegen

Bei Cyon muss ausserdem der Composer installiert werden: https://www.cyon.ch/support/a/composer-installieren

### Branch in der Shell anzeigen

Um zu sehen, auf welchem branch man ist, ändern wir die bash. Im Hauptverzeichnis `nano .bashrc` ausführen. Dort folgende Zeilen anfügen:
```
# show git branch
export PS1="\u@\h \[\e[1m\]\w \[\e[0;32m\]\$(git branch 2>/dev/null | grep '^*' | colrm 1 2) \[\e[00m\]$ "
```

## Logins

Der Admin Account jeder Website hat einen Benutzernamen nach folgendem Schema:

`kkk-admin`

kk ist das dreistellige Kundenkürzel. ‹admin› ist eine feste Vorgabe.

## Abgleich der Breakpoints

Die Breakpoints sind definiert für CSS, XLS und Javascript. Sie müssen überall gleich sein. Sind sie nicht gleich, kann zum Beispiel ein Skript aufhören zu funktionieren, weil der JS Breakpoint bereits von Tablet auf Desktop umgesprungen ist, das Layout aber ist noch im Breakpoint Tablet.

## Strukturelle Planung HTML und CSS

- Gibt es Inhalte ausserhalb des Viewports (Bühnen)?
- Bekommt der body ein padding oder bekommen es die Bausteine?

Wenn wir nur Gestaltung und Struktur ändern, behalten wir die Datenbank auf dem Server Zielsystem ohne Änderung, wir überschreiben sie nicht. Redakteure können unterdessen weiterarbeiten. Wenn wir aber Inhalte ändern, sperren wir das Redaktionssystem auf dem Server Zielsystem gegen Bearbeitungen und überschreiben die Datenbank, wenn wir fertig sind.

## Abgleich Umgebungen

### Von ddev nach Github
- (Werkzeuge › Projektkonfiguration › YAML-Änderungen anwenden)
- `ddev ssh`
- mysql dump in Hauptverzeichnis: `mysqldump --add-drop-database db > dump.sql`
- `exit`
- git commit und push

### Von Github nach ddev
- Git pull
- `ddev ssh`
- Datenbank überschreiben: `mysql db < dump.sql`
- Update Craft dependencies `composer install --no-interaction`
- Projektkonfiguration aktualisieren: `php craft up`

### Von ddev nach staging/production
Die Datenbank darf nicht überschrieben werden, wenn Redakteure bereits Inhalte einpflegen. Es denn, wir machen einen Redaktionsfreeze (ankündigen bitte). Bitte vorab Hosting-spezifische Schritte [Projekt aufsetzen](https://github.com/profitlich-ch/profitlich-vorlage.ch/wiki/Projekt-aufsetzen) durchführen.

- [Per SSH verbinden](https://github.com/profitlich-ch/profitlich-vorlage.ch/wiki/SSH)
- `git clone` beim ersten Mal (mit git Adresse, nicht SSH)
– oder pull oder `git pull --force` danach
- Datenbank überschreiben
    - Metanet: `mysql -h 127.0.0.1 -u dev_profitlich_craft -p dev_profitlich_craft < dump.sql`
    - Hostpoint: `mysql -h HOSTINGBENUTZER.mysql.db.internal -u DATENBANKBENUTZER -p DATENBANK < dump.sql`
    - Cyon: `mysql datenbankname < dump.sql -u datenbankbenutzer -p`
- Update Craft dependencies `composer install --no-interaction` 
- .env anpassen 
- Projektkonfiguration aktualisieren: `php craft up`

### Von staging/production zu ddev
- Auf dem Hosting `ssh`
- Datenbank dump: `mysqldump -u BENUTZERNAME -p DATENBANKNAME > dump.sql`
- Datei herunterladen und in lokalen Projektordner legen (überschreiben)
- Auf ddev: `mysql db < dump.sql`

### Von Server A zu Server B

**A**

- Datenbank exportieren
- dotenv herunterladen
- Ordner web/assets herunterladen

**B**

- `git clone` mit Git Adresse
- Datenbank importieren
- Dotenv hochladen und anpassen
- Ordner web/assets hochladen
- Per SSH verbinden
- `composer install --no-interaction`, weil Craft eventuell die neue project.yaml nicht erkennt
- `php craft cache/flush-all`, weil Craft eventuell die neue project.yaml nicht erkennt
- `php craft up`

### Erläuterung des mysql Befehls

**mysql | -h 127.0.0.1 | -u dev_profitlich_craft | -p | dev_profitlich_craft | < | dump.sql**
Rufe mySQL auf  
Verbinde mit Host  
Benutze ein Passwort  
Datenbankname  
überschreibe von  
Datei, mit der überschrieben werden soll

## Fehlerbehebung

## Colima

Sollte Colima beim Starten eines Tasks stecken bleiben, kann das Problem durch das Löschen und erneute Starten von Colima behoben werden.

1. Colima stoppen:

```console
colima stop
```

2. Colima löschen

```console
colima delete
```

3. Colima neu starten

```console
colima start
```

### Bekannte Fehler bisher

- Steckenbleiben beim Task "user session is ready for ssh"

## Datenbank

Sollten nicht Datenbankfehler auftreten, kann die Datenbank gelöscht werden und ohne Inhalte von vorne begonnen werden. Die Struktur in Craft bleibt bestehen, dank der YAML Konfigurationsdateien.

```console
ddev delete --omit-snapshot
```

Frontend öffnen
Installieren

### Bekannte Fehler bisher

- SQLSTATE[42S22]: Column not found: 1054 Unknown column (Anlegen von CKEditor fields war nicht möglich)

## Update Node Module

Es können alle Node Module auf einmal auf die aktuellste Major Version aktualisiert werden.

https://nodejs.dev/learn/update-all-the-nodejs-dependencies-to-their-latest-version

```console
sudo npm install -g npm-check-updates
ncu -u
npm install
```
