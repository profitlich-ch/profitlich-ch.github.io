---
order: 2
---

# Toolkit

In allen Websites vorkommende Programmteile sind in ein eigenes repository [template-toolkit](https://github.com/profitlich-ch/template-toolkit) ausgelagert. Die `package.json` steuert, welche Version genutzt wird. Folgende Funktionen bitte immer aus dem Toolkit nutzen:

## Breakpoints 

Alle Breakpoints werden in der `config.js` definiert und für SCSS und JS verwendet. Referenz für JS: `MediaQueries.getInstance()` in der `App.js`.
