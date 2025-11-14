---
order: 2
---

# Entwicklungsumgebung

## Software installieren

Installiere [Homebrew](https://brew.sh/)

Installiere Node via Homebrew `brew install node`

Installiere Python via Homebrew `brew install python`

Installiere Git via Homebrew `brew install git`

Konfiguriere Git: https://www.atlassian.com/de/git/tutorials/install-git

Installiere den Git Credentials Manager via Homebrew: https://github.com/GitCredentialManager/git-credential-manager

Installiere Gulp global: https://wpbeaches.com/installing-gulp-on-macos-big-sur-intro-guide-to-gulp/

Installiere Docker: https://ddev.readthedocs.io/en/stable/users/install/docker-installation/

Installiere ddev `brew install drud/ddev/ddev`  
https://ddev.readthedocs.io/en/stable/users/install/ddev-installation/

Installiere certutil, wie am Ender der ddev Installation beschrieben

Installiere ngrok `brew install --cask ngrok`

Registriere Dich bei [ngrok](https://ngrok.com/)

Füge einen Token für ngrok hinzu `ngrok config add-authtoken <token>`

## Github mit SSH verwenden

Wir clonen und pullen Projekte per SSH von unserer Bash aus. Eine SSH-Agent-Weiterleitung ermöglicht, auch auf der Remote-Bash (Hosting-Server) Git Befehle auszuführen. Den Key dafür stellt 1Password zur Verfügung. Folge zur Einrichtung der Anleitung von Github: https://developer.1password.com/docs/ssh/