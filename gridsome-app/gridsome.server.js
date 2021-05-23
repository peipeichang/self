// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')
const nodeExternals = require('webpack-node-externals')
module.exports = function (api) {

  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          allowlist: [/^vuetify/]
        })
      ])
    }
  })



  api.loadSource(async actions => {
    const { data } = await axios.get(process.env.GRIDSOME_API_URL/+"news")

    const collection = actions.addCollection({
      typeName: 'News',
      path: '/News/:id'
    })

    for (const news of data) {
      collection.addNode({
        id: news.id,
        
        discribe: news.discribe,
        title: news.title,
        date: news.date,
        photo: news.photo.url,
        profile: news.profile,
        category: news.news_classes[0],
        
        newsClasses: news.news_classes[0].category,
        
        path: '/News/' + news.id,
        
      })
    }
  })
}
