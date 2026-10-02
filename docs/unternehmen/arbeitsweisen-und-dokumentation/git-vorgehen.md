---
order: 5
---

# Git Vorgehen

Diese Seite erklärt die Grundsätze und ihr *Warum*. Die Abläufe im Detail – Befehle, Prüflisten – führt Claude Code aus; Menschen und Claude arbeiten nach denselben Regeln.

## Branch oder direkt `main`?

`main` ist der aktuelle Stand. Ein Branch ist die Einheit einer Leistung: ein abgegrenztes Aufgabenpaket, das am Ende als Ganzes in `main` kommt. Ob es einen braucht, entscheiden drei Fragen, in dieser Reihenfolge:

1. **Ist das Projekt schon live?** Vor dem ersten Go-live darf `main` Baustelle sein – es wird viel Verschiedenes gleichzeitig getan, klare Pakete gibt es noch nicht. Danach soll `main` jederzeit auslieferbar sein.
2. **Kann die Arbeit Datenbank oder CMS-Konfiguration verändern?** Dann immer ein Branch, auch wenn sie klein ist. Zu Beginn wird ein Datenbank-Snapshot angelegt; er ist der einzige Rückweg, denn ein Wechsel des Branches nimmt Datenbankänderungen nicht zurück.
3. **Ein Commit oder mehrere?** Eine kleine, abgeschlossene Änderung kommt direkt auf `main`. Mehrere Commits, die erst zusammen eine Leistung ergeben, gehören auf einen Branch.

Kleines nicht vorsorglich auf einen Branch legen: Am Ende ergibt es denselben einen Commit, nur mit mehr Aufwand. Ausnahme: **Pakete, die Claude selbständig baut, laufen immer auf einem Branch** – er ist die Stelle, an der ein Mensch prüft, bevor es in `main` kommt.

## Mergen

- **Squash ist die Vorgabe:** Die Commits eines Branches sind Etappen und kommen als ein Commit nach `main`.
- **Ausnahme `--no-ff`**, wenn jeder einzelne Commit für sich ein sinnvoller Stand wäre – dann sollen `git bisect` und `git blame` sie einzeln finden. Das wird beim Anlegen des Branches entschieden und festgehalten, nicht beim Mergen.
- **Gemergt wird lokal**, danach gepusht. Pull Requests sind bei uns ein Weg zum Merge, keine Kontrolle; sie entstehen dort, wo ein Branch nur auf GitHub liegt, etwa wenn ein Agent in der Cloud arbeitet.
- Nach dem Merge werden Branch und Snapshot sofort gelöscht, nicht später – sonst sammeln sich Sicherungen, deren Bezug niemand mehr kennt.

## Commit-Messages

- **Betreffzeile:** kurz, was geändert wurde.
- **Fliesstext:** warum – und nur, wenn er etwas trägt. Das *Was* steht im Diff, das *Warum* nirgends sonst. Ebenfalls hierher: verworfene Alternativen und was nebenbei auffiel.
- Sprache: die des Repositorys, in der Regel deutsch.

## Zeiterfassung

Wir sind transparent darin, wie Rechnungstexte entstehen. In Projekten mit Zeiterfassung gilt:

- **Ein Branch ergibt einen Zeiteintrag**; auf `main` ergibt jeder Commit einen eigenen.
- **Der Text des Eintrags kommt aus dem Commit.** Jeder Commit trägt am Ende eine Zeile `Prosonata: …`. Sie beschreibt die Leistung des ganzen Branches in der Sprache der Kundin oder des Kunden – „Filter der Projektübersicht korrigiert“, nicht „Bugfix in NavigateSpaceFilter.js“. Der zuletzt geschriebene Text gilt; er wird mit jedem Commit genauer.
- **Die Dauer kommt von der Uhr**, nie aus einer Schätzung. Gestartet wird zu Beginn des Branches; nachträglich erfundene Zeiten gibt es nicht.

## Issues

- Aufgaben, Wünsche und Einfälle werden als **Issue im Repository des Projekts** erfasst; Aufgaben ausserhalb grosser Projekte erscheinen zusätzlich im GitHub-Projekt ‹Laufendes› (siehe [Projektzyklus](../projektleitung/projektzyklus.md)).
- Der erledigende Commit nennt das Issue: `Fixes #42`. GitHub schliesst es beim Push auf `main`.
- In Projekten, in denen Claude mitarbeitet, ordnen drei Labels die Issues: **KI direkt umsetzen** (beim nächsten Paket, ohne Rückfrage), **KI Co-Konzeption** (braucht zuerst einen gemeinsamen Entscheid), **KI später umsetzen** (beschlossen, zurückgestellt).

## Aufgaben im Code

Ein `TODO` im Kommentar markiert eine Stelle, an der etwas zu tun ist. Auf einem Branch ist das als Arbeitsmarkierung frei. **Auf `main` gibt es kein `TODO` ohne Issue-Nummer:** entweder ist es erledigt, oder es verweist auf ein Issue – `// TODO(#42): Fehlermeldung übersetzen`. Ein TODO ohne Issue hat niemanden, der sich zuständig fühlt, und taucht in keiner Planung auf.

## Changelog und Versionen

- Jede nennenswerte Änderung bekommt mit ihrem Commit einen Stichpunkt im `CHANGELOG.md` unter `## [Unreleased]` – ohne Versionsnummer und Datum.
- **Eine Version** entsteht in einem eigenen Commit: `[Unreleased]` wird zur Version mit Datum, der Commit trägt nur die Nummer, dazu ein annotiertes Tag.
- **Versionsschema:** Veröffentlichte Pakete mit Programmierschnittstelle (etwa das Toolkit) nach SemVer – Major, Minor, Patch. Anwendungen, die wir selbst betreiben, nach Kalender: Jahr plus fortlaufender Buchstabe, `2026a`, `2026b`.
- Anwendungen mit Nutzerinnen und Nutzern führen zusätzlich `RELEASE-NOTES.md` in verständlicher Sprache.
- Ein Paket auf npm veröffentlicht immer ein Mensch.

## Rezepte

### Konflikt in der Craft Project Config

`dateModified` in `config/project/project.yaml` auf den neueren Wert setzen (die höhere Zahl). Bei Feldern, Einträgen und Ähnlichem absprechen, was bleibt und was gelöscht wird.

### Issue nachträglich einem Commit zuordnen

Im Issue einen Kommentar `fixed by <commit-hash>` schreiben.

### Gelöschte Branches im Editor aufräumen

```console
git fetch --prune
```

### Neu ignorierte Dateien aus Git entfernen

Wenn Dateien nachträglich in `.gitignore` aufgenommen wurden ([Quelle](https://stackoverflow.com/a/26137730)):

1. Ausstehende Commits ausführen
2. `git rm -r --cached .`
3. `git add .`
4. `git commit -m "Anpassung an neue .gitignore"`

### Zu einem alten Stand zurückkehren, der schon gepusht ist

```console
git revert --no-commit 0766c053..HEAD
git commit
```

[Quelle](https://stackoverflow.com/a/21718540)
