---
order: 6
---

# JS Bibliotheken

## Google ReCaptcha

API Schlüssel werden in der Google Cloud Console erstellt. Am einfachsten ist es, in der Console nach ‹recaptcha› zu suchen. Es ist der Treffer Produktseite/Sicherheit.

Für jeden Schlüssel müssen die erlaubten Domains angegeben werden. Das geht unter ‹Wichtige Details›. Dort rechts oben den Knopf ‹Edit key› anklicken und die Domains ohne Protokoll eingeben (ddev, staging, live, eventuell auch temporäre Domain).

## Animation: GSAP

Elemente, die mit GSAP gesteuert werden, ausschliesslich mit GSAP steuern. Funke nie mit weiteren Skripten dazwischen. Nutze auch keine CSS Animationen für diese Elemente, sondern steuere alles über GSAP.

## Slider: Swiper.js

## Isotope und Masonry

Die anzuordnenden Elemente dürfen keinen `margin` oder `padding` haben. Das Skript berechnet sonst teilweise die Grössen falsch, und dann werden die Elemente in manchen Vieportgrössen untereinander statt nebeneinander angeordnet. Für `margin` und `padding` braucht es einen innenliegenden container.
