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

## Logins

Der Admin Account jeder Website hat einen Benutzernamen nach folgendem Schema:

`kkk-admin`

kk ist das dreistellige Kundenkürzel. ‹admin› ist eine feste Vorgabe.

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
