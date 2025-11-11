# Gestaltung und Usability


## Technische Gestaltungsqualität

### Verläufe

CS erstellt verläufe linear. Leider nimmt aber der Mensch lineare Verläufe als unstetig wahr. Gebe deshalb Verläufen Natürlichkeit durch easing.

[https://css-tricks.com/easing-linear-gradients/](https://css-tricks.com/easing-linear-gradients/)  
[https://neumorphism.io/#e0e0e0](https://neumorphism.io/#e0e0e0)

Wir nutzen dafür PostCSS Easing Gradients. Das Gulp Modul wird standardmässig geladen.

```
background: linear-gradient(to bottom, #F4F2F0, cubic-bezier(0.48, 0.3, 0.64, 1), transparent);
```

[https://github.com/larsenwork/postcss-easing-gradients](https://github.com/larsenwork/postcss-easing-gradients)   
[https://larsenwork.com/easing-gradients/](https://larsenwork.com/easing-gradients/)

### Linien

Linien, die in vw oder vh angegeben sind, werden vom Browser interpoliert. Je nach Position auf dem Bildschirm kann eine Linie mit gleicher Stärkenangabe dünner oder dicker aussehen. Bei dünnen Linien sieht man das und Elemente, die gleich aussehen sollten, sehen unterschiedlich aus.

Nutze daher für dünne Linien absolute Angaben in px.

## Typographie

### Abstände zwischen Absätzen

Zwischen Absätzen gibt es in Regelfall einen der drei folgenden Abstände

- Kein Abstand, der neue Absatz ist wie durch einen Zeilenumbruch getrennt
- Eine Leerzeile in Höhe des Zeilenabstandes (nicht in Höhe der Textgrösse)
- Eine Leerzeile in halber Höhe des Zeilenabstandes (nicht in halber Höhe der Textgrösse)

Zur technischen Umsetzung siehe ‹Abstände zwischen Elementen› in ‹HTML und CSS›.

### Silbentrennung

Erwäge automatische Silbentrennung und spreche sie mit den Gestaltern ab.

### Silbentrennung langer Titel

Lange Titel können aus dem Layout herausragen. Besteht diese Gefahr, ermögliche den Redakteuren, bedingte Trennstriche einzufügen, indem sie zwei Bindestriche eingeben (Mineralwasserflaschen--plastikdeckel). Wende auf den Titel ein Suchen &amp; Ersetzen an, das im HTML aus `--` ein `&shy;` macht. Dokumentiere diese Möglichkeit für die Redakteure.

### Darstellung von Zahlen

Sichere, dass Zahlen einzeilig bleiben. Zahlen verlieren ihre Bedeutung, wenn sie in eine neue Zeile umbrechen. Weise daher Zahlen die Eigenschaft `wrap: nowrap` zu

Nutze für untereinander stehende Zahlen nicht-proportionale Ziffern. Tabellen lassen sich deutlich besser lesen, wenn Ziffern alle die gleiche Breite besitzen und dadurch alle Stellen genau untereinander stehen.

## Effekte, Techniken, Darstellungen

### Das Hauptmenü als Overlay verhindert ein Scrollen der Seite

Öffnet man das Hauptmenü als Overlay und verdeckt (wie üblich)es den Inhalte der Seite, kann ein Benutzer dennoch die Seite scrollen. Schliesst er das Menü, findet er sich auf der Seite an einem anderen Ort wieder und findet sich daher nicht zurecht.

Leider lässt sich das Scrollen einer Seite nicht blockieren. Daher greifen wir zu einem Trick:

TODO

### Ein einzelnes Element am andere Ende anordnen

Soll in einer Reihe von Elementen ein einziges Element am anderen Ende angeordnet werden (alle oben, eines unten / alle rechts, eines links / …), geht das mit margin: auto. Es braucht keine zusätzliche Schachtelung im HTML.

## Formulare

### Absenden

Die Standardaktion eines Formulars ist das Laden einer neuen Seite. Wir senden das Formular per Ajax (Fallback bleibt die form action) und geben gezielt Rückmeldung an den Nutzer.

1. Alle Formularfelder werden gegen Eingaben gesperrt
2. Die Felder werden so umgestaltet, dass sie nur noch nach Text aussehen, nicht mehr nach Eingabefeld; der Benutzer sieht, was er abgesendet hat
3. Der Senden-Knopf verschwindet
4. Es erscheint ein Text, der das Senden bestätigt

### Labels

Formulare sind nur gut bedienbar, wenn die Label der Formularfelder immer sichtbar sind, also nicht verschwinden, wenn der Benutzer in ein Feld hineinklickt. Verschwindet das Label, kann es sein, dass sich der Benutzer nicht mehr erinnert, wofür das Feld ist.

[https://css-tricks.com/float-labels-css/](https://css-tricks.com/float-labels-css/)

[http://nativeformelements.com](http://nativeformelements.com)

[https://css-tricks.com/form-validation-ux-html-css/#positively-indicate-valid-input-values](https://css-tricks.com/form-validation-ux-html-css/#positively-indicate-valid-input-values)

## Gerätebesonderheiten

### Adresszeile in iOS

iOS zeigt beim Laden einer Seite zunächt die Adresszeile an und blendet sie beim Scrollen aus. Scrollt man wieder nach oben (und lässt los), erscheint die Zeile sofort. Dadurch werden Elemente, die mit `100vh` angegeben werden, am unteren Rand abgeschnitten.

Ein Webkit-eigener CSS-Befehl kann das verhindern:

```
height: 100vh
max-height: -webkit-fill-available;
```

CSS: [https://css-tricks.com/css-fix-for-100vh-in-mobile-webkit/](https://css-tricks.com/css-fix-for-100vh-in-mobile-webkit/)   
Javascript: [https://css-tricks.com/the-trick-to-viewport-units-on-mobile/](https://css-tricks.com/the-trick-to-viewport-units-on-mobile/)

[https://allthingssmitty.com/2020/05/11/css-fix-for-100vh-in-mobile-webkit/](https://allthingssmitty.com/2020/05/11/css-fix-for-100vh-in-mobile-webkit/)  
[https://dev.to/nirazanbasnet/dont-use-100vh-for-mobile-responsive-3o97](https://dev.to/nirazanbasnet/dont-use-100vh-for-mobile-responsive-3o97)