export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '615fa023bf603d3ede8aea4c',
                  title: 'Sanity Studio',
                  name: 'test-studio-vx221gy6',
                  apiId: '6f70d81b-63a7-4d9a-9b50-1e7ea4e84f14'
                },
                {
                  buildHookId: '615fa02378ba5f4384918c61',
                  title: 'Blog Website',
                  name: 'test-web-y5bvzwdd',
                  apiId: 'c5391f0e-9642-4d04-83dd-5eff569d74d7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chrisdrake29/test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://test-web-y5bvzwdd.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
