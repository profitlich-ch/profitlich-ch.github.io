# Barba

## Namespaces

Bei Mehrsprachigkeit sollte der namespace nicht über den slug gesetzt werden, weil er in jeder Sprache anders ist. Helfen kann ein Global, in dem per Matrixfeld allen Menüpunkten ein immer gleicher Name vergeben wird, der für namespace und Menü-ID verwendet wird. 

```html
<div data-barba="container" data-barba-namespace="{{ seiteNamespace }}">
```

## Menü aktualisieren

Der aktive Menüpunkt muss per Javascript gesetzt werden. Am einfachsten geht das mit dem unter ‹Namespaces› erklärten eindeutigen Namen pro Menüpunkt. 

```html
<div data-barba="container" data-navigation-id="{{ seiteNavigationId }}">
```

Der Menüpunkt wird dann per Barba Hook gesetzt.

```js
barba.hooks.enter((data) => {
    menuepunkt = document.getElementById('menue__link--' + data.current.container.getAttribute('data-navigation-id'));
    menuepunkt.classList.remove('menue__link--aktiv');

    menuepunkt = document.getElementById('menue__link--' + data.next.container.getAttribute('data-navigation-id'));
    menuepunkt.classList.add('menue__link--aktiv');
});

```

## Übertragung schlank halten

Es ist nicht nötig, per Barba die ganze Seite zu laden, es reicht, den Barba container zu laden. Dafür ist es möglich, 

```twig
{% HTTP Header lesen %}
{% set headers = craft.app.request.getHeaders() %}
{# Wenn der Aufruf von Barba kommt, alles ausser den container per if-Abfrage weglassen #}
{% if headers.has('x-barba') == false %}

{# Ende x-barba #}
{% endif %}
```