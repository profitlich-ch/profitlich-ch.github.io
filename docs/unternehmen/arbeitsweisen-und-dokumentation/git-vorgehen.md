# Git Vorgehen

## Normalfall 

- Die aktuelle Version ist der main branch
- TODO: Vorgehen mit Releases entwickeln (vor allem wenn das Projekt produktiv ist)
- branch aus issue generieren in Github
- Schliesst der branch weitere issues, diese jweiles so mit ihrer Nummer angeben: `closes #0`
- In VS Code alte branches löschen: `git fetch --prune`

## Bei Konflikten

- Konflikt: dateModified config/project/config.yaml auf das neuere Datum (höhere Zahl)
- Konflikt: fields, entries etc. absprechen, was bleibt und gelöscht wird
- Merge
- `checkout dev`, `git pull dev`
- `checkout dev-name`, `git pull origin dev` (origin dev, weil sonst dev-name gepullt wird)

## Issue durch bestehenden Commit schliessen

Um einem issue im Nachhinein zuzuordnen, welcher commit es löst und schliesst, `fixed by ###` mit der commit Nummer in einen Kommentar schreiben.

## Neu zur gitignore hinzugefügte Dateien aus git ausschliessen

https://stackoverflow.com/a/26137730

1. Ausstehende commits ausführen
2. Mit `git rm -r --cached .` alle geänderten Dateien von der staging area entfernen
3. `git add .`
4. `git commit -m "Anpassung an neue .gitignore"`
5. `git push`

## In der Github Historie zurückgehen

Um zu einem alten Stand auf Github zurückzugehen (wenn also schon gepusht wurde):

``` SH
git revert --no-commit 0766c053..HEAD
git commit
```

https://stackoverflow.com/a/21718540