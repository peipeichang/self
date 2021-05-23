// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  siteUrl: 'https://github.com/peipeichang/self.git',
  
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL:  process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        contentTypes: [ `member`, 
        `center-introduction`,`chair`,`quote`,
        `chinese-quote`,`new`,`quantum-cumputing-learning`,
        `quantum-computing-program`],
      },
    },
    
  ],
  chainWebpack: config => {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
        .loader('pug-plain-loader')
     
    },

    
};
