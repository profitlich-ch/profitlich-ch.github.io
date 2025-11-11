// https://vitepress.dev/guide/custom-theme
import { h, nextTick, watchEffect, watch } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { createMermaidRenderer } from "vitepress-mermaid-renderer";

import { useData, useRoute } from 'vitepress';
import { toRefs } from "vue";

export default {
    extends: DefaultTheme,
    Layout: () => {
        const { isDark } = useData();

        const initMermaid = () => {
            const mermaidRenderer = createMermaidRenderer({
                theme: isDark.value ? "dark" : "forest",
            });
        };

        // initial mermaid setup
        nextTick(() => initMermaid());

        // on theme change, re-render mermaid charts
        watch(
            () => isDark.value,
            () => {
                initMermaid();
            },
        );

        return h(DefaultTheme.Layout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
        })
    },
    // enhanceApp({ app, router, siteData }) {
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
    },
    setup() {
        const { frontmatter } = toRefs(useData());
        const route = useRoute();

        giscusTalk({
            repo: 'profitlich-ch/profitlich-ch.github.io',
            repoId: 'R_kgDOP2rVgQ',
            category: 'Handbuchkommentare',
            categoryId: 'DIC_kwDOP2rVgc4Cxq74',
            mapping: 'pathname',
            inputPosition: 'top',
            lang: 'de',
            theme: 'preferred_color_scheme',
            loading: 'lazy',
        }, {
            frontmatter,
            route
        }, true);
    },
} satisfies Theme