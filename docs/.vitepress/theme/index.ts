// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import { toRefs } from "vue";

export default {
    extends: DefaultTheme,
    Layout: () => {
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