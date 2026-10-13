<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = withDefaults(defineProps<{
    /** Platzhaltertext des Suchfelds */
    platzhalter?: string
}>(), {
    platzhalter: 'Suchen …',
})

const suche = ref('')
const treffer = ref<number | null>(null)
const leiste = ref<HTMLElement | null>(null)
const inhalt = ref<HTMLElement | null>(null)
const scrollt = ref(false)
const leistenhoehe = ref(0)

let zeilen: { element: HTMLTableRowElement, text: string }[] = []
let gliederung: { element: HTMLTableRowElement, ebene: number, oben: number, versatz: number }[] = []
let beobachter: ResizeObserver | undefined
let bild = 0

/**
 * Stapelt die Gliederungszeilen: Jede haftet unter den ihr übergeordneten,
 * also um deren Höhe versetzt.
 */
function ebenenStapeln() {
    const huelle = inhalt.value
    if (!huelle) return

    scrollt.value = huelle.scrollWidth > huelle.clientWidth
    leistenhoehe.value = leiste.value?.offsetHeight ?? 0

    // Gemessen statt in CSS festgelegt: Lange Titel umbrechen, und
    // ausgefilterte Zeilen zählen mit Höhe 0.
    const hoehen: number[] = []
    for (const zeile of gliederung) {
        zeile.oben = zeile.element.offsetTop
        zeile.versatz = hoehen.slice(0, zeile.ebene).reduce((summe, hoehe) => summe + hoehe, 0)
        hoehen.length = zeile.ebene
        hoehen[zeile.ebene] = zeile.element.offsetHeight
    }

    for (const { element, versatz } of gliederung) {
        element.style.setProperty('--versatz', `${versatz}px`)
    }

    haftendeBestimmen()
}

/**
 * Lässt je Ebene nur die Zeile haften, in deren Abschnitt gerade gescrollt
 * wird. Hafteten alle, läge jede frühere weiter unter der aktuellen und
 * schaute hervor, sobald sie höher ist als diese.
 */
function haftendeBestimmen() {
    const tabelle = inhalt.value?.querySelector('table')
    if (!tabelle || !leiste.value) return

    const tabelleOben = tabelle.getBoundingClientRect().top
    const kante = leiste.value.getBoundingClientRect().bottom
    const haftend: HTMLTableRowElement[] = []

    const kommend = new Set<HTMLTableRowElement>()

    for (const { element, ebene, oben, versatz } of gliederung) {
        if (element.hidden) continue
        if (tabelleOben + oben > kante + versatz) {
            kommend.add(element)
            continue
        }
        haftend.length = ebene
        haftend[ebene] = element
    }

    for (const { element } of gliederung) {
        element.classList.toggle('haftet', haftend.includes(element))
        element.classList.toggle('kommt', kommend.has(element))
    }
}

function beimScrollen() {
    cancelAnimationFrame(bild)
    bild = requestAnimationFrame(haftendeBestimmen)
}

onMounted(() => {
    zeilen = Array.from(inhalt.value?.querySelectorAll<HTMLTableRowElement>('tbody tr') ?? [])
        .map((element) => ({ element, text: element.textContent?.toLowerCase() ?? '' }))

    gliederung = zeilen
        .map(({ element }) => ({
            element,
            ebene: Number(element.className.match(/\bebene-(\d)\b/)?.[1] ?? 0),
            oben: 0,
            versatz: 0,
        }))
        .filter(({ ebene }) => ebene)

    if (inhalt.value) {
        beobachter = new ResizeObserver(ebenenStapeln)
        beobachter.observe(inhalt.value)
    }
    window.addEventListener('scroll', beimScrollen, { passive: true })
})

onBeforeUnmount(() => {
    beobachter?.disconnect()
    window.removeEventListener('scroll', beimScrollen)
    cancelAnimationFrame(bild)
})

watch(suche, (wert) => {
    // Mehrere Wörter schränken ein: Eine Zeile bleibt nur, wenn sie alle enthält.
    const begriffe = wert.toLowerCase().split(/\s+/).filter(Boolean)
    let sichtbar = 0

    for (const { element, text } of zeilen) {
        const passt = begriffe.every((begriff) => text.includes(begriff))
        element.hidden = !passt
        if (passt) sichtbar++
    }

    treffer.value = begriffe.length ? sichtbar : null
    ebenenStapeln()
})
</script>

<template>
    <div class="TabellenFilter" :style="{ '--leistenhoehe': `${leistenhoehe}px` }">
        <div ref="leiste" class="suche">
            <input
                v-model="suche"
                type="search"
                :placeholder="props.platzhalter"
                :aria-label="props.platzhalter"
            >
            <span v-if="treffer !== null" class="treffer" aria-live="polite">
                {{ treffer === 0 ? 'Keine Treffer' : `${treffer} Zeilen` }}
            </span>
        </div>
        <div ref="inhalt" class="inhalt" :class="{ scrollt }">
            <slot />
        </div>
    </div>
</template>

<style scoped>
.suche {
    position: sticky;
    top: var(--vp-nav-height);
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 0;
    background: var(--vp-c-bg);
}

input {
    flex: 1;
    min-width: 0;
    padding: 8px 12px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    background: var(--vp-c-bg-soft);
    font-size: 16px;
}

input:focus {
    border-color: var(--vp-c-brand-1);
    outline: none;
}

.treffer {
    color: var(--vp-c-text-2);
    font-size: 14px;
    white-space: nowrap;
}

/* Das Standardtheme setzt Tabellen auf display: block, damit sie seitlich
   scrollen – dadurch füllen sie die Spalte nicht. Hier scrollt die Hülle,
   aber nur, wenn die Tabelle nicht hineinpasst: Ein Scroll-Container hebt
   position: sticky seiner Zeilen gegenüber der Seite auf. */
.inhalt.scrollt {
    overflow-x: auto;
}

.inhalt :deep(table) {
    display: table;
    width: 100%;
    margin: 0;
}

/* An den Zellen, nicht an der Zeile: sticky auf <tr> ist nicht überall
   umgesetzt. */
.inhalt:not(.scrollt) :deep(tr[class*='ebene-'] td) {
    background: var(--vp-c-bg);
}

/* Positioniert, damit eine nachrückende Zeile über die haftende gleitet
   statt darunter. Durchgelaufene bleiben unpositioniert und damit darunter. */
.inhalt:not(.scrollt) :deep(tr.kommt td) {
    position: relative;
}

/* Bei border-collapse gehören die Rahmen der Tabelle und wandern nicht mit
   der haftenden Zelle: Der Schatten ersetzt die Linie, und 1px Überlappung
   schliesst den Spalt, den der fehlende obere Rahmen offen liesse. */
.inhalt:not(.scrollt) :deep(tr.haftet td) {
    position: sticky;
    top: calc(var(--vp-nav-height) + var(--leistenhoehe) + var(--versatz, 0px) - 1px);
    box-shadow: 0 1px 0 var(--vp-c-divider);
}
</style>
