<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

const props = withDefaults(defineProps<{
    /** Platzhaltertext des Suchfelds */
    platzhalter?: string
}>(), {
    platzhalter: 'Suchen …',
})

const suche = ref('')
const treffer = ref<number | null>(null)
const inhalt = ref<HTMLElement | null>(null)

let zeilen: { element: HTMLTableRowElement, text: string }[] = []

onMounted(() => {
    zeilen = Array.from(inhalt.value?.querySelectorAll<HTMLTableRowElement>('tbody tr') ?? [])
        .map((element) => ({ element, text: element.textContent?.toLowerCase() ?? '' }))
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
})
</script>

<template>
    <div class="TabellenFilter">
        <div class="suche">
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
        <div ref="inhalt" class="inhalt">
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
   scrollen – dadurch füllen sie die Spalte nicht. Hier scrollt die Hülle. */
.inhalt {
    overflow-x: auto;
}

.inhalt :deep(table) {
    display: table;
    width: 100%;
    margin: 0;
}
</style>
