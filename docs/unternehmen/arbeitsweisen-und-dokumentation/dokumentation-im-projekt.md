---
order: 7
---

# Dokumentation im Projekt

Jede Art von Dokument hat ihren Platz im Ordner `docs/` des Projekts. Ein Projekt legt nur an, was es braucht – eine kleine Website oft gar nichts davon.

| Dokument | Ort | wofür |
| --- | --- | --- |
| ADR | `docs/adr/NNNN-titel.md` | Grundsatzentscheide mit Begründung |
| Konzept | `docs/konzepte/<thema>.md` | Entscheide der Kundin oder des Kunden |
| Glossar | `docs/domaene.md` | Fachbegriffe in Projekten mit eigener Fachdomäne |
| Runbook | `docs/<anlass>.md` | Eingriffe in Produktionsdaten oder -server |
| README | `README.md` | was das Projekt ist und wie man damit arbeitet |

## ADR – Entscheide festhalten

Ein *Architecture Decision Record* hält einen Grundsatzentscheid fest: was entschieden wurde, warum, und welche Alternativen verworfen wurden. Der Code zeigt, *was* gilt; das ADR erklärt, *warum* – auch dann noch, wenn sich niemand mehr an die Besprechung erinnert.

### Wann ein ADR?

Prüffrage: *Würde jemand in einem Jahr fragen „warum so und nicht anders?“* Ja → ADR. Nein → die Begründung im Commit genügt.

Vor dem Schreiben das stärkste Argument **gegen** die Entscheidung benennen. Ein ADR, das nur Zustimmung festhält, ist wenig wert, wenn die Gegenposition nie gehört wurde.

### Format

Dateiname `NNNN-kurz-titel.md`, vierstellig und fortlaufend nummeriert, im Ordner `docs/adr/`. Er entsteht mit dem ersten ADR.

```markdown
# NNNN — Titel

**Status:** angenommen, YYYY-MM-DD

## Kontext
Was die Entscheidung nötig macht – Lage, Kräfte, Einschränkungen.

## Entscheidung
Was gilt, in aktiver Formulierung.

## Begründung
Warum – inklusive verworfener Alternativen und warum sie verworfen wurden.

## Konsequenzen
Was daraus folgt, auch das Unbequeme.
```

### Ablösen

Ein angenommenes ADR wird **nie inhaltlich bearbeitet** – sonst stimmt die Geschichte nicht mehr. Ein neues ADR ersetzt es; beim alten ändert sich nur der Status: `**Status:** abgelöst durch NNNN`.

## Konzept – Entscheide der Kundschaft

Was die Kundin oder der Kunde entschieden hat, steht in einem Konzept-Dokument mit der Kopfzeile `Entschieden von … am …` (Name und Datum). Folgen daraus technische Grundsatzentscheide, verweist das Konzept auf die ADRs. So bleibt sichtbar, was die Kundschaft entschieden hat und was wir.

## Glossar – ein Begriff für eine Sache

In Projekten mit eigener Fachdomäne wird jeder Fachbegriff im Glossar festgelegt, **bevor** er im Code benannt wird. Code, Oberfläche und Gespräch verwenden dann genau diesen Begriff; Synonyme führen zu Missverständnissen zwischen Kundschaft und Entwicklung.

## Runbook – Eingriffe mit fester Reihenfolge

Für jeden Eingriff in Produktionsdaten oder -server, bei dem die Reihenfolge zählt – etwa eine Datenmigration oder den ersten Deploy einer Anwendung –, gibt es ein Runbook: Vorbereitung, nummerierte Schritte, Abnahme, Rückweg. Es wird **vorher gegen eine Kopie erprobt**, etwa einen Datenbank-Dump in einer Wegwerf-Datenbank.

## README – der Bestand

Die README beschreibt, was das Projekt ist und wie man damit arbeitet. Sie enthält keine Aufgaben – kein „sollte noch“, „vorgesehen“, „noch nicht bereinigt“. Aufgaben gehören in Issues (siehe [Git Vorgehen](./git-vorgehen.md#issues)).
