const webpack = require('webpack');


module.exports = {
  build: {
    vendor: ['axios','~/plugins/libs/api.js'],
    extend(config,ctx){
      const sassResourcesLoader = {
        loader: 'sass-resources-loader',
        options: {
          resources: [
            'assets/style/theme/variables.scss',
            'assets/style/public.scss'
          ]
        }
      }
      // 遍历nuxt定义的loader配置，向里面添加新的配置。
      config.module.rules.forEach((rule) => {
        if (rule.test.toString() === '/\\.vue$/') {
          rule.options.loaders.sass.push(sassResourcesLoader)
          rule.options.loaders.scss.push(sassResourcesLoader)
        }
        if (['/\\.sass$/', '/\\.scss$/'].indexOf(rule.test.toString()) !== -1) {
          rule.use.push(sassResourcesLoader)
        }
      })

    },
  },
  loading: {
    color: 'pink'
  },
  router: {
    middleware: 'i18n'
  },
  plugins: ['~plugins/elementUi.js',
    {src:'~plugins/i18n/i18n.js',ssr: true},
    {src:'~plugins/nuxt-echarts.js', ssr:true},
    {src:'~plugins/global/global-register.js', ssr:true},
    {src:'~plugins/libs/api.js', ssr:true}
    ],
  head: {
    title: 'aviationnuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    {
      src: '~assets/style/index.scss',
      lang: 'scss'
    },
    {
      src: '~assets/style/public.scss',
      lang: 'scss'
    }
  ]
}

