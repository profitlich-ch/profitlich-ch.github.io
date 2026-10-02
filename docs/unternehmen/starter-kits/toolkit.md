---
order: 2
---

# Toolkit

Jede Website entsteht aus drei Ebenen. Wer weiss, auf welche Ebene etwas gehört, findet es wieder und ändert es an der richtigen Stelle.

| Ebene | Repository | Was liegt dort | Wie es ins Projekt kommt |
| --- | --- | --- | --- |
| Toolkit | [template-toolkit](https://github.com/profitlich-ch/template-toolkit) | SCSS-Layoutsystem, JS-Utilities, Komponenten, Build- und Deploy-Skripte, Arbeitsregeln | als npm-Paket, mit Versionsnummer |
| Vorlage | [template-craftcms](https://github.com/profitlich-ch/template-craftcms), [template-kirbycms](https://github.com/profitlich-ch/template-kirbycms) | Konfiguration, Plugins, Layout, Grundgerüst | einmal kopiert beim Projektstart |
| Projekt | z.B. `lequipe-visuelle.ch` | alles, was nur diese Website betrifft | – |

## Was gehört wohin?

- **Ins Toolkit**, wenn es in mehr als einem Projekt gebraucht wird oder werden könnte und keine projektspezifischen Pfade, Klassen oder Inhalte enthält.
- **In die Vorlage**, wenn jedes neue Projekt damit starten soll, es aber pro Projekt angepasst wird: Plugins, Konfigurationsdateien, `.htaccess`, das Layout.
- **Ins Projekt** alles andere.

Der wichtigste Unterschied zwischen Toolkit und Vorlage: **Ein Projekt ist eine Kopie der Vorlage, kein Abonnement.** Eine Verbesserung an der Vorlage erreicht nur künftige Projekte. Eine Verbesserung im Toolkit erreicht jedes Projekt, sobald es die neue Version installiert. Was auch bestehende Projekte erreichen soll, gehört deshalb ins Toolkit.

Entsteht in einem Projekt etwas Allgemeines, wandert es später zurück: ins Toolkit oder in die Vorlage. So sind die Capsize-Schriftpositionierung, die Prüfung der Breakpoint-Blöcke und die PageSpeed-Messung aus lequipe-visuelle.ch ins Toolkit gekommen.

## Arbeitsregeln für Claude

Claude Code liest in jedem Projekt die Datei `CLAUDE.md`. Die Regeln, die für alle Projekte gelten, stehen nicht in jedem Projekt von Hand, sondern im Toolkit. Bei jedem Build schreibt das Toolkit sie in die `CLAUDE.md` des Projekts, zwischen die Marken `<!-- toolkit:start -->` und `<!-- toolkit:end -->`.

- Was **zwischen** den Marken steht, kommt aus dem Toolkit und wird bei jedem Build überschrieben. Dort nie von Hand ändern.
- Was **darunter** steht, gehört dem Projekt und geht im Konfliktfall vor.
- Eine neue Regel für alle Projekte gehört ins Toolkit, nicht in eine einzelne `CLAUDE.md`.
- In den Vorlagen bleiben die Marken leer. Ein neues Projekt füllt sie beim ersten Build.

Die Regeln hängen an der installierten Toolkit-Version. Ein Projekt bekommt neue Regeln also zusammen mit dem Code, für den sie geschrieben sind.

## Ein Projekt auf eine neue Toolkit-Version heben

1. Im [Changelog](https://github.com/profitlich-ch/template-toolkit/blob/master/CHANGELOG.md) von der bisherigen Version aufwärts lesen. Bei grösseren Sprüngen steht dort, was im Projekt anzupassen ist.
2. Version installieren und bauen. Die Befehle stehen in der [README des Toolkits](https://github.com/profitlich-ch/template-toolkit#readme).
3. Den Diff der `CLAUDE.md` durchsehen: Er zeigt, welche Regeln neu sind.

Was das Toolkit im Einzelnen enthält und wie es technisch funktioniert, steht in seiner [README](https://github.com/profitlich-ch/template-toolkit#readme). Dort wird es mit jeder Version nachgeführt.

## Breakpoints

Alle Breakpoints werden in der `src/config.json` definiert und für SCSS und JS verwendet. Referenz für JS: `MediaQueries.getInstance()` in der `App.js`.
