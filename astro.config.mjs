import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';
import { landingCollection } from './src/pages/index.collection';

// https://astro.build/config
export default defineConfig({
  integrations: [
    NetlifyCMS({
      disableIdentityWidgetInjection: true,
      config: {
        backend: {
          name: 'github',
          repo: 'Sacramentix/astro-netlify-template',
          branch: 'master',
        },
        collections: [
          {
            name: "pages",
            label: "Pages",
            files: [
              landingCollection
            ]
          }
        ],
      },
    }),
  ]
});