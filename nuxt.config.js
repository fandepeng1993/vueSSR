module.exports = {
  build: {
    vendor: ['~/assets/style/public.scss','axios','~/plugins/libs/api.js']
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
    },
   /* {
      src: '~assets/style/theme/element-variables.scss',
      lang: 'scss'
    }*/
  ]
}

