import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';
import taskLists from 'markdown-it-task-lists'

// https://vitepress.dev/reference/site-config
const vitePressOptions = {
    title: ":Profitlich Handbuch",
    titleTemplate: ':title  :Profitlich Handbuch',
    description: "Handbuch der Profitlich GmbH",
    cleanUrls: true,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'A Unternehmen', link: '/unternehmen' },
            { text: 'B Mitarbeiter', link: '/mitarbeiter' },
            { text: 'C Projekte', link: '/projekte' },
            { text: 'D Unterstützung', link: '/unterstuetzung' },
        ],
        search: {
            provider: 'local'
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/profitlich-ch' },
        ],
    }
}

const vitePressSidebarOptions = [
    {
        documentRootPath: 'docs',
        scanStartPath: 'unternehmen',
        basePath: '/unternehmen/',
        resolvePath: '/unternehmen/',
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        sortMenusByFrontmatterOrder: true,
    },
    {
        documentRootPath: 'docs',
        scanStartPath: 'mitarbeiter',
        resolvePath: '/mitarbeiter/',
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        sortMenusByFrontmatterOrder: true,
    },
    {
        documentRootPath: 'docs',
        scanStartPath: 'projekte',
        resolvePath: '/projekte/',
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        sortMenusByFrontmatterOrder: true,
    },
    {
        documentRootPath: 'docs',
        scanStartPath: 'unterstuetzung',
        resolvePath: '/unterstuetzung/',
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        sortMenusByFrontmatterOrder: true,
        collapseDepth: 2,
    },
]

/**
 * Markdown-it-Plugin: Gliederungsebenen in Tabellen. Beginnt die erste Zelle
 * einer Zeile mit `## ` bis `#### `, entfallen die Rauten und die Zeile
 * bekommt die Klasse `ebene-2` bis `ebene-4`.
 */
function tabellenEbenen(md) {
    // Überschriften sind Block-Elemente und in Tabellenzellen nicht erlaubt;
    // Markdown gibt die Rauten dort als Text aus. Vor der Inline-Phase, damit
    // sie gar nicht erst zu Text-Tokens werden.
    md.core.ruler.after('block', 'tabellen-ebenen', (state) => {
        const tokens = state.tokens

        for (let i = 0; i < tokens.length - 2; i++) {
            if (tokens[i].type !== 'tr_open' || tokens[i + 1].type !== 'td_open') continue

            const zelle = tokens[i + 2]
            const treffer = zelle.content.match(/^(#{2,4})\s+/)
            if (!treffer) continue

            zelle.content = zelle.content.slice(treffer[0].length)
            tokens[i].attrJoin('class', `ebene-${treffer[1].length}`)
        }
    })
}

export default defineConfig(
  withSidebar(
    {
      ...vitePressOptions,
      markdown: {
        config: (md) => {
          md.use(taskLists)
          md.use(tabellenEbenen)
        }
      }
    },
    vitePressSidebarOptions
  )
)