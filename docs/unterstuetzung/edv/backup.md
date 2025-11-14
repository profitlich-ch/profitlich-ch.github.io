---
order: 3
---

# Backup

## Installation

### Python installieren

Per Homebrew: `brew install python`

### Python dem Path hinzufügen

[https://codetinkering.com/homebrew-python-not-found/](https://codetinkering.com/homebrew-python-not-found/)  
Mit zshrc  
Danach das Terminal schliessen (erst beim erneuten Öffnen wir der Pfad gelesen)

### Backup Skript installieren

[python-github-backup](https://github.com/josegonzalez/python-github-backup)

### Token erstellen

Owner: Organisation  
[https://github.com/settings/tokens?type=beta](https://github.com/settings/tokens?type=beta)

## Backup durchführen

Den Token aus der Passwortverwaltung kopieren.

### Den ganzen Account

```console
export ACCESS_TOKEN=""
export ORGANIZATION="profitlich-ch"
github-backup $ORGANIZATION -P -f $ACCESS_TOKEN -o ~/Profitlich/BackupGithub --all -O
```

### Einzelrepository

```console
export ACCESS_TOKEN=""
export ORGANIZATION="profitlich-ch"
export REPO="reponame"
github-backup $ORGANIZATION -P -f $ACCESS_TOKEN -o ~/Profitlich/BackupGithub/$REPO --all -O -R $REPO
```
