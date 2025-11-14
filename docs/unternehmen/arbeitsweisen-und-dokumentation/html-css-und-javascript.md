# HTML, CSS, Javascript

## HTML/CSS/JS-Logik

### Der body erhält ein data-layout Attribut und css Klasse per JS

Das `data-layout="layoutname"` Attribute zeigt an, welcher Breakpoint aktiv ist. Es spiegelt die Mediaqueries im CSS wider.

Ebenso die Klasse `body--layoutname`.

### Der body erhält Klassen, die Zustände mitteilen

\[\] Es bräuchte einen Namensstandard für die Zustände.

- Menü aktiv/inaktiv
- Menü bewegt/still
- Name der Seite

### Per JS vergebene Klassen prefixen mit js-

Dynamisch gesetzte Klassen sollen von den übrigen unterscheidbar sein. Daher erhalten diese das Prefix `js-`.

[https://css-tricks.com/stop-using-css-selectors-non-css/](https://css-tricks.com/stop-using-css-selectors-non-css/)  
  
[https://justmarkup.com/notes/2017-07-05-my-approach-on-using-id-class-and-data-attributes-in-html-css-and-javascript/](https://justmarkup.com/notes/2017-07-05-my-approach-on-using-id-class-and-data-attributes-in-html-css-and-javascript/)

## HTML und CSS

### Klassen und IDs folgen dem BEM Standard

### Alle Gestaltung erfolgt über Klassen, nicht über IDs

Indem alle Gestaltung ausschliesslich über Klassen erfolgt, gibt es kein Durcheinander.

#### SCSS

- Setze zwischen Selektor und `{` ein Leerzeichen
- Lasse eine Leerzeile vor und nach den Deklarationen
- SCSS @include kommt vor den übrigen Eigenschaften
- Ordne alle Deklarationen nach Alphabet

#### HTML

1. Tag Name `<a>`
2. Klasse `<a class="">`
3. ID `<a class="" id="">`
4. href `<a class="" id="" href="">`
5. alles Weitere (gern hier noch definieren)
6. data-xxx `<a class="" id="" href="" … data-xxx="">`

### Verwende HTML sparsam

Versuche, mit möglichst wenigen HTML Elementen zu arbeiten. Schachtele wenig. Vermeide Redundanzen.

Dabei helfen

- CSS nth-child, first-child, last-child (Elemente nach Position ansprechen)
- Umpositionierung mit flexbox und order (Andere Anordnung je nach Breakpoint ohne Redundant)
- margin: auto für eine gegenüberliegende Anordnung eines Elements

### Verwende IDs nur für Javascript

Für Javascript ist es effizienter und zielgerichteter, Elemente eindeutig per ID anzusprechen.

### Verwende den BEM Standard

### Von Redakteuren bearbeitbarer formatierbarer Text funktioniert ohne BEM

Kann ein Redakteur Text formatieren und Absätze anlegen, fehlen diesen Inhalten Klassen. Absätze sind ein &lt;p&gt;, Listen &lt;ul&gt; oder &lt;li&gt;.

Hier braucht es eine Ausnahme in der BEM Benennung. Ein Beispiel:

```html
<div class="hierdrin-ist-redaktioneller-text">
   <h2>Überschrift vom Redakteur</h2>
   <p>Text vom Redakteur</p>
</div>

.hierdrin-ist-redaktioneller-text {
   h2 { }
   p { }
}
```

### Für die Media Query gilt das DRY Prinzip

DRY wird üblicherweise auf die Art genutzt, dass ein Element mehrere Klassen bekommt, deren Eigenschaften es erbt. Ich (Moritz) empfinde das als unübersichtlich: Zum Debuggen muss man mehrere Klassen kontrollieren. Hat jedes Element aber eine eindeutige Klasse (Element) und maximal noch Modifikatoren (Modifier), dann ist das Debuggen in der Toolbar schneller getan.

Noch nicht umgesetzt, aber eine mögliche Weiterentwicklung unserer Arbeitsweisen wäre, im SCSS das Prinzip des Atomic Design anzuwenden.

Wiederhole Deklarationen nicht in den einzelnen Media Queries. Schreibe die für alle Grössen gültigen Deklarationen an den Anfang und setze innerhalb der Media Queries nur die Befehle, die es speziell für diese Media Query benötigt.

Beim Anlegen erfordert das Konzentration. Einmal angelegt hilft es aber, Änderungen sehr gezielt zu machen. Im Browser siehst Du, woher die Deklarationen kommen (Media Query oder allgemein), und so wirst Du eine Änderung nicht versehentlich nur für eine Media Query machen, wenn sie eigentlich für alle Grössen gemacht werden müsste.

### Der body hat ein Pseudoelement für die Hintergrundfarbe

CSS mix-blend-mode ignoriert die body Hintergrundfarbe. Es braucht daher ein zusätzliches Element, das die Hintergrundfarbe hat. Gelöst ist das mit einem body::after.

### Füge Icons als Sprites ein (Zukunft)

### Schreibe Berechnungen aus

Für bessere Nachvollziehbarkeit schreibe den ganzen Rechenweg nicht nur das Ergebnis. Dokumentiere durch einen Kommentar, wie die Berechnung entstanhdne ist.

besser: 100px - 20px  
nicht: 80px

### Der Inhalt bestimmt die Grösse des äusseren Elements

Nutze feste Grössenangaben nur, um Raum zu definieren, in dem sich Elemente anordnen. Erzwinge aber nicht die Grösse von Elementen. Die Gefahr ist sonst, dass Elemente abgeschnitten werden oder ineinander laufen.

Beispiel:  
Eine Menüleiste enthält Links die per display: flex nebeneinander angezeigt werden. Jeder Link hat ein padding. Die Grösse der Menüleiste ergibt sich allein aus der Zeilenhöhe (nicht Schriftgrösse) und dem padding.

Soll die Menüleiste also eine bestimmte Höhe haben, ist das padding Zielhöhe minus Zeilenhöhe geteilt durch 2, wobei eventuell zwischen oben und unten auszugleichen ist.

### Das äussere Element bestimmt das innere

Die wenigsten Elemente benötigen eine Grössenangabe in px oder vw. Meist ist eine Angabe relativ zur Grösse des Elternelements besser, in %, denn so reicht es für eine Grössenänderung das Elternelement zu ändern und alle Kindelemente passen sich an.

Vermeide also, Elementen eine Grösse in px oder vw zuzuweisen.

Nur das äussere Element erhält eine Grössenangabe in px oder vw.  
Die inneren Elemente erhalten eine % Angabe.

### Elemente in ganzer Viewportbreite in 100% angeben

Ein Element mit 100vw Breite ragt in die vertikale Scrollbar hinein, wenn vorhanden, und verbreitert damit die Seite – eine horizontale Scrollbar entsteht.

Es gibt keine gesicherte Möglichkeit, die Breite als calc(100vw - scrollbar) anzugeben.

### Nur Ausnahmen in Zuständen definieren

CSS Deklarationen für Zustände wie .aktiv, :hover, :focus sollen nur die Veränderung beinhalten, nicht die Grundeigenschaften. Ein Beispiel:

Bei Hover soll ein Pfeil hinter einem Text erscheinen. Definiere den Pfeil mit allen Eigenschaften im CSS, als würde er immer angezeigt werden, und setze die opacity auf 0. Der Hover-Zustand erhält nur die Veränderung der opacity auf 1.

Beachte auch die Hinweise zu effizienten Animationen.

### Programmiere Animationen effizient ohne Neurendering

[https://web.dev/animations-guide/](https://web.dev/animations-guide/)

[https://developers.google.com/web/fundamentals/performance/rendering](https://developers.google.com/web/fundamentals/performance/rendering)

### Rastergrafiken als &lt;picture&gt; einsetzen mit srcset und jpg und webp

### Verwende für Spalten die SCSS Funktion ‹breite›

Dadurch ist es möglich, per Einstellung in die Entwicklungsumgebung zwischen px und vw Angaben umzuschalten (festes/mitwachsendes Layout).

### Die Reihenfolge im SCSS entspricht der im HTML

### iOS Notch von Hintergrund bedecken

Die Notch erzeugt im landscape mode links und rechts einen Raum, der nicht mit Inhalt gefüllt wird, damit der Inhalt nicht mit der Notch kollidiert.

Die Lösung ist hier beschrieben: [https://stephenradford.me/removing-the-white-bars-in-safari-on-iphone-x/](https://stephenradford.me/removing-the-white-bars-in-safari-on-iphone-x/)

### Vermeide doppelte Inhalte, ordne wo möglich mit flexbox order

Wenn es doch einmal sein muss, weil die HTML Verschachtelung ein Umsortieren nicht erlaubt, nutze die Namen der Breakpoints als BEM Modifier:

`class="details details-—smartphone-bis"`  
`class="details details-—tablet-ab"`

### Abstände zwischen Elementen

Zu definieren: margin oder padding, nach oben oder unten

### Verwende Variablen im SCSS statt Dich zu wiederholen

Änderungen sind so leichter, weil sie nur an einer Stelle gemacht werden brauchen. Darüber hinaus helfen Variablen durch ihre sprechenden Namen, eine Berechnung zu verstehen.


## Javascript

### Throttle/Debounce: Event auf Browsergrösse, Cursorposition, Scrollposition bremsen

Event handler auf scroll, resize und Cursorposition lösen sehr viele Events aus, mehr, als es üblicherweise braucht, und so viele, dass die ausgelöste Aktion den Computer verlangsamen könnte.

Für effizientes Evethandling braucht ein Throttling oder Debouncing.

[https://css-tricks.com/debouncing-throttling-explained-examples/](https://css-tricks.com/debouncing-throttling-explained-examples/)

[https://davidwalsh.name/javascript-debounce-function](https://davidwalsh.name/javascript-debounce-function)

### Nutze Event Delegation, wenn es um mehr als ein Element geht

Szenario: Auf einer Seite sollen auf all Elemente einer Liste ein Klick Event Handler gesetzt werden.

```html
<div class="liste" id="liste">
   <div class="liste__element"></div>
   <div class="liste__element"></div>
   <div class="liste__element"></div>
</div>
```

Setze einen einzigen Eventhandler auf das übergeordnete Element (deligiere also die Aufgabe an `.liste`). Setze nicht mit einer Schleife auf jedes Element einen Eventhandler.

```js
$('#liste).on('click', '.liste__element', function() {
	console.log('.liste__element clicked');
 });
```

Event Delegation ist effizienter für den Browser. Und es funktioniert auch noch, wenn in dem beobachteten Element (an das delegiert wurde) per Skript Elemente hinzugefügt werden.

### Eigene Skripte

### Spamschutz für E-Mailadressen

### Externe Skripte

### Animation: GSAP

### Slider: Swiper.js

### Lazyloading: Lazysizes

Was below the fold liegt, sollte erst geladen werden, wenn es nahe an sichtbaren Bereich gescrollt wird.

- Bilder
- auch aufwändige Skripte (z. B. Karten)
- SVG

Für SVG und Skripte braucht es die lazysizes unveil Funktion (in domscript.js)
