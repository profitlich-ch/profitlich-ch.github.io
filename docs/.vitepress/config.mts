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

        sidebar: {
            '/unternehmen/': [
                {
                    text: 'A Unternehmen',
                    items: [
                        {
                            text: 'Unternehmshandbuch',
                            items: [
                                { text: 'Unternehmensportrait', link: '/unternehmen/unternehmenshandbuch/unternehmensportrait.md' },
                                { text: 'Unternehmensleitbild', link: '/unternehmen/unternehmenshandbuch/unternehmensleitbild.md' },
                                { text: 'Unternehmensstruktur', link: '/unternehmen/unternehmenshandbuch/unternehmensstruktur.md' },
                                { text: 'Mitarbeiterhandbuch', link: '/unternehmen/unternehmenshandbuch/mitarbeiterhandbuch.md' },    
                            ]

                        },
                        {
                            text: 'Lenkung Dokumente & Daten',
                            items: [
                                { text: 'Umgang mit Daten', link: '/unternehmen/lenkung-dokumente-und-daten/umgang-mit-daten.md' },
                                { text: 'Speicherorte', link: '/unternehmen/lenkung-dokumente-und-daten/speicherorte.md' },
                                { text: 'Backup', link: '/unternehmen/lenkung-dokumente-und-daten/backup.md' },
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
                                { text: 'Arbeitsplätze', link: '/unterstuetzung/edv/arbeitsplaetze.md' },
                            ]
                        }
                    ]
                },
            ],
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/profitlich-ch' },
        ]
    }
})
