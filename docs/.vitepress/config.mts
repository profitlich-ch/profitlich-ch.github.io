import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
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

        sidebar: {
            '/unternehmen/': [
                {
                    text: 'A Unternehmen',
                    items: [
                        {
                            text: 'Das Unternehmen',
                            items: [
                                { text: 'Unternehmensportrait', link: '/unternehmen/handbuch/unternehmensportrait' },
                                { text: 'Unternehmensleitbild', link: '/unternehmen/handbuch/unternehmensleitbild' },
                                { text: 'Unternehmensstruktur', link: '/unternehmen/handbuch/unternehmensstruktur' },
                            ]

                        },
                        {
                            text: 'Umgang mit Dokumenten & Daten',
                            items: [
                                { text: 'Speicherorte', link: '/unternehmen/umgang-mit-dokumenten-und-daten/speicherorte' },
                                { text: 'Dateien', link: '/unternehmen/umgang-mit-dokumenten-und-daten/dateien' },
                                { text: 'passwoerter', link: '/unternehmen/umgang-mit-dokumenten-und-daten/passwoerter' },
                            ]
                        },
                        {
                            text: 'Arbeitsweisen & Dokumentation',
                            items: [
                                { text: 'Programmierstandards', link: '/unternehmen/arbeitsweisen-und-dokumentation/programmierstandards' },
                                { text: 'Websitestandards', link: '/unternehmen/arbeitsweisen-und-dokumentation/websitestandards' },
                                { text: 'Gestaltung & Usability', link: '/unternehmen/arbeitsweisen-und-dokumentation/gestaltung-und-usability' },
                                { text: 'HTML, CSS & Javascript', link: '/unternehmen/arbeitsweisen-und-dokumentation/html-css-und-javascript' },
                                { text: 'Git Vorgehen', link: '/unternehmen/arbeitsweisen-und-dokumentation/git-vorgehen' },
                                { text: 'Briefings', link: '/unternehmen/arbeitsweisen-und-dokumentation/briefings' },
                                { text: 'Vorlagenerstellung', link: '/unternehmen/arbeitsweisen-und-dokumentation/vorlagenerstellung' },
                                { text: 'Barba', link: '/unternehmen/arbeitsweisen-und-dokumentation/barba' },
                            ]
                        },
                        {
                            text: 'Starter Kits',
                            items: [
                                { text: 'Allgemein', link: '/unternehmen/starter-kits/allgemein' },
                                { text: 'Entwicklungsumgebung', link: '/unternehmen/starter-kits/entwicklungsumgebung' },
                                { text: 'Craft CMS', link: '/unternehmen/starter-kits/craft-cms' },
                                { text: 'Kirby CMS', link: '/unternehmen/starter-kits/kirby-cms' },
                                { text: 'Symphony CMS', link: '/unternehmen/starter-kits/symphony-cms' },
                            ]
                        },
                        {
                            text: 'Projektleitung',
                            items: [
                                { text: 'Projektzyklus', link: '/unternehmen/projektleitung/projektzyklus' },
                            ]
                        },
                    ]
                },
            ],
            '/mitarbeiter/': [
                {
                    text: 'B Mitarbeiter',
                    items: [
                        {
                            text: 'Allgemein',
                            items: [
                                { text: 'Mitarbeiterhandbuch', link: '/mitarbeiter/allgemein/mitarbeiterhandbuch' },
                            ]
                        }
                    ]
                },
            ],
            '/unterstuetzung/': [
                {
                    text: 'D Unterstützung',
                    items: [
                        {
                            text: 'EDV',
                            items: [
                                { text: 'Arbeitsplätze', link: '/unterstuetzung/edv/arbeitsplaetze' },
                                { text: 'Hardware', link: '/unterstuetzung/edv/hardware' },
                                { text: 'Backup', link: '/unterstuetzung/edv/backup' },
                            ]
                        },
                        {
                            text: 'Akquise & Marketing',
                            items: [
                                { text: 'Marketingkonzept', link: '/unterstuetzung/akquise-und-marketing/marketingkonzept' },
                            ]
                        },
                        {
                            text: 'Bibliothek',
                            items: [
                                {
                                    text: 'Javascript',
                                    collapsed: true,
                                    items: [
                                        { text: 'Messen von Elementen', link: '/unterstuetzung/bibliothek/javascript/messen-von-elementen' },
                                    ]
                                },
                                {
                                    text: 'Vorlagenerstellung',
                                    collapsed: true,
                                    items: [
                                        { text: 'Office', link: '/unterstuetzung/bibliothek/vorlagenerstellung/office' },
                                        { text: 'Planköpfe', link: '/unterstuetzung/bibliothek/vorlagenerstellung/plankoepfe' },
                                        { text: 'Signaturen', link: '/unterstuetzung/bibliothek/vorlagenerstellung/signaturen' },
                                    ]
                                },
                            ]
                        },
                    ]
                },
            ],
        },
    }
})
