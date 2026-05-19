---
order: 3
---

# Entwicklungsumgebung

## Software installieren

Installiere [Homebrew](https://brew.sh/)

Installiere Node via Homebrew `brew install node`

Installiere Python via Homebrew `brew install python`

Installiere Git via Homebrew `brew install git`

[Konfiguriere Git](https://www.atlassian.com/de/git/tutorials/install-git)

Installiere den [Git Credentials Manager](https://github.com/GitCredentialManager/git-credential-manager) via Homebrew

[Installiere Gulp global](https://wpbeaches.com/installing-gulp-on-macos-big-sur-intro-guide-to-gulp/)

[Installiere Docker](https://ddev.readthedocs.io/en/stable/users/install/docker-installation/)

Installiere ddev `brew install drud/ddev/ddev` ([ddev-Installationsanleitung](https://ddev.readthedocs.io/en/stable/users/install/ddev-installation/))

Installiere certutil, wie am Ender der ddev Installation beschrieben

Installiere ngrok `brew install --cask ngrok`

Registriere Dich bei [ngrok](https://ngrok.com/)

Füge einen Token für ngrok hinzu `ngrok config add-authtoken <token>`

### Claude Konfiguration

In `~/.claude/settings.json` werden globale Permissions für gängige read-only Bash-Befehle hinterlegt, damit Claude Code diese ohne Rückfrage ausführen darf. Datei mit folgendem Inhalt anlegen:

```json
{
  "permissions": {
    "allow": [
      "Bash(ls:*)",
      "Bash(ll:*)",
      "Bash(la:*)",
      "Bash(pwd)",
      "Bash(cat:*)",
      "Bash(head:*)",
      "Bash(tail:*)",
      "Bash(less:*)",
      "Bash(more:*)",
      "Bash(grep:*)",
      "Bash(rg:*)",
      "Bash(find:*)",
      "Bash(fd:*)",
      "Bash(tree:*)",
      "Bash(file:*)",
      "Bash(stat:*)",
      "Bash(wc:*)",
      "Bash(du:*)",
      "Bash(df:*)",
      "Bash(which:*)",
      "Bash(whereis:*)",
      "Bash(type:*)",
      "Bash(realpath:*)",
      "Bash(readlink:*)",
      "Bash(awk:*)",
      "Bash(sed:-n*)",
      "Bash(cut:*)",
      "Bash(sort:*)",
      "Bash(uniq:*)",
      "Bash(diff:*)",
      "Bash(cmp:*)",
      "Bash(md5:*)",
      "Bash(shasum:*)",
      "Bash(xxd:*)",
      "Bash(od:*)",
      "Bash(env)",
      "Bash(date)",
      "Bash(uname:*)",
      "Bash(hostname)",
      "Bash(whoami)",
      "Bash(echo:*)",
      "Bash(printf:*)",
      "Bash(git status:*)",
      "Bash(git log:*)",
      "Bash(git diff:*)",
      "Bash(git show:*)",
      "Bash(git branch:*)",
      "Bash(git remote:*)",
      "Bash(git config --get:*)",
      "Bash(git ls-files:*)",
      "Bash(git rev-parse:*)",
      "Bash(git blame:*)"
    ],
    "additionalDirectories": [
      "~/Profitlich/F Lokal"
    ]
  }
}
```

`additionalDirectories` gibt Claude Code Lese- und Schreibzugriff auf den gesamten Projekt-Ordner `~/Profitlich/F Lokal`, sodass auch projektübergreifend gearbeitet werden kann.

## Github mit SSH verwenden

Wir clonen und pullen Projekte per SSH von unserer Bash aus. Eine SSH-Agent-Weiterleitung ermöglicht, auch auf der Remote-Bash (Hosting-Server) Git Befehle auszuführen. Den Key dafür stellt 1Password zur Verfügung. Folge zur Einrichtung der [Anleitung von 1Password](https://developer.1password.com/docs/ssh/)
