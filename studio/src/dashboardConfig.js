export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ffcda44790ebf0dcd3b2a9d',
                  title: 'Sanity Studio',
                  name: 'gat-studio',
                  apiId: '01f634c0-9715-43cc-a09b-dd9342017286'
                },
                {
                  buildHookId: '5ffcda458a4ab601569aef29',
                  title: 'Blog Website',
                  name: 'gat-web',
                  apiId: '0fcb493c-88e5-40a7-bd3b-a8bfb02fe42d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/prokopious/gat',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://gat-web.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
