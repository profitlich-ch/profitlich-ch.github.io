import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
const vitePressOptions = {
    title: ":Profitlich Handbuch",
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

export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions));