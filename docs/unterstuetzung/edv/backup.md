# Backup

## Installation

#### Python installieren

Per Homebrew: `brew install python`

#### Python dem Path hinzufügen

[https://codetinkering.com/homebrew-python-not-found/](https://codetinkering.com/homebrew-python-not-found/)  
Mit zshrc  
Danach das Terminal schliessen (erst beim erneuten öffnen wir der Pfad gelesen)

#### Backup Skript installieren

Es braucht den Fork von froggleston, der die Nutzung von Fine Graded Tokens ermöglicht.  
`pip install <a href="https://unternehmenshandbuch.profitlich.ch/git+https:/github.com/froggleston/python-github-backup.git#egg=github-backup">git+https://github.com/froggleston/python-github-backup.git#egg=github-backup</a>`

#### Token erstellen

Owner: Organisation  
[https://github.com/settings/tokens?type=beta](https://github.com/settings/tokens?type=beta)

## Backup durchführen

Den Token aus der Passwortverwaltung kopieren.

### Den ganzen Account

```
export ACCESS_TOKEN=""
export ORGANIZATION="profitlich-ch"
github-backup $ORGANIZATION -P -f $ACCESS_TOKEN -o ~/Profitlich/BackupGithub --all -O
```

### Einzelrepository

```SHELL
export ACCESS_TOKEN=""
export ORGANIZATION="profitlich-ch"
export REPO="reponame"
github-backup $ORGANIZATION -P -f $ACCESS_TOKEN -o ~/Profitlich/BackupGithub/$REPO --all -O -R $REPO
```