# Arbeitsplätze

## Mac OS

Auf allen Geräten ist File Vault aktiviert.

### Druckgrösse der Vorschau

Die Vorschau verkleinert Dokumente beim Drucken automatisch auf 95%, um sicher alle Inhalte in den druckbaren Bereich einzupassen. Wir als Liebhaber von Gestaltung wollen, dass wir Drucke so gross sehen, wie der Ersteller es sich gedacht hat. Für Pläne mit Massstab ist es sogar noch wichtiger.

Ändere per Terminal die Standardgrösse auf 100%:

```console
defaults write com.apple.Preview PVImagePrintingScaleMode 0
```

### Dock entfernen

Das Dock ist entweder immer sichtbar oder erscheint, wenn der Mauszeiger an den unteren Bildschirmrand stösst. Wen das Dock stört, kann es ganz entfernen (Verzögerung auf 9999 Sekunden). Stattdessen lassen sich Programm per Spotlight öffnen (Cmd + Leertaste), zwischen Programmen schaltet Cmd + Tab um.

```console
defaults write com.apple.dock autohide-delay -float 9999; killall Dock
```

Der Standard lässt sich wiederhestellen mit

```console
defaults delete com.apple.dock autohide-delay
```

### Screenshots ohne Schatten

Fensterscreenshots mit `Cmd + Shift + 4` haben standardmässig einen Schatten. So lässt er sich deaktivieren:

```console
defaults write com.apple.screencapture disable-shadow -bool true
killall SystemUIServer
```

## Visual Studio Code

### Erweiterungen

- German Language Pack
- Better Comments  
Diese Erweiterung markiert Stichworte in Kommentaren, zum Beispiel `TODO`
- BEM Helper
- Beautify css/sass/scss/less
- Auto Rename Tag
- Better Comments
- Auto Complete Tag
- Auto Close Tag
- SCSS BEM Support
- Beautify css/sass/scss/less
- Hide Node Modules
- Todo Tree
- SCSS Everywhere

### Einstellungen

- Editor: Word Wrap: `on`  
Wird eine Zeile zu lang, wird sie umgebrochen, damit kein horizontaler Scrollbalken erscheint
- Editor: Detect Indentation: `off`  
Detect Indentation ausschalten, damit Dateien alle gleich mit vier Leerzeichen als Tab behandelt werden
- Editor: Word Separators  
Unterstrich zu einem erkannten Worttrenner machen, damit beim Springen mit Option+links/rechts der Cursor beim Unterstrich stehenbleibt
- Editor: Linked Editing: `on `  
Aktivieren, dass ein der Editor Tag bei Änderung auch das Pendant ändert, zum Beispiel &lt;p&gt; und &lt;/p&gt;
- Editor › Find: Auto Find In Selection: `on`  
Aktivieren, dass wenn mehrere Zeilen markiert sind und man Suchen/Ersetzen öffnet, nur in den markierten Zeilen gesucht wird. Das erleichtert das gezielte Suchen/Ersetzen und verhindert, dass man ungewollt zu viel sucht/ersetzt.

## Markdown Quicklook

Markdown-Dateien (.md) erscheinen im Mac OS Quicklook (Leertaste) als Nur-Text. Mit dem Programm QLMarkdown zeigt Quicklook Markdown Dateien formatiert.

[https://github.com/sbarex/QLMarkdown](https://github.com/sbarex/QLMarkdown)

## Cyberduck

Cyberduck legt Bookmarks als Dateien ab. Um auf allen Computern die gleichen Bookmarks verwenden zu können, konfigurieren wir Cyberduck so, dass es die Bookmarks vom Unternehmenslaufwerk liest und dorthin schreibt.

Quelle: https://stewartadam.io/blog/2014/05/05/sharing-your-cyberduck-bookmarks-between-computers-coud-sync-dropbox-google-drive-or

Finder › Gehe zu ›

```console
~/Library/Group Containers/G69SCX94XU.duck/Library/Application Support/duck
```

Ordner `Bookmarks` löschen

Rechts Maustaste auf den Ordner `duck` › Dienste › Neues Terminal-Tab beim Ordner. Dort den folgenden Befehl eingeben, wobei `\[macUsername\]` gegen den Mac Benutzernamen (Ordnername in Library) und `\[googleUsername\]` gegen den Google Benutzernamen (gleich Mailadresse) auszutauschen ist.

```console
ln -s ~/[macUsername]/Library/CloudStorage/GoogleDrive-[googleUsername]@profitlich.ch/Geteilte\ Ablagen/Profitlich/D\ Unterstützung/D3 Infrastruktur/03\ EDV/Software/Cyberduck/Bookmarks
```

So entsteht ein symbolischer Link, der auf den Ordner im Google Drive veweist. Jeder Bookmark erscheint auf jedem Computer bei jedem Mitarbeiter.

Der Ordnername lässt sich auch aus dem Finder kopieren. Dafür im Google Drive Unternehmenslaufwerk navigieren zu `Geteilte Ablagen/Profitlich/D Unterstützung/D3 Infrastruktur/03 EDV/Software/Cyberduck/Bookmarks`. Taste `option` gedrückt halten › Rechte Maustaste › "Bookmarks " als Pfadname kopieren.
