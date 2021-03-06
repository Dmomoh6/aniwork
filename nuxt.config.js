export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'aniwork',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/sass/app.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/jobSearch.js', '~/plugins/timeAgo.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/fontawesome',
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },
  bootstrapVue: {
    icons: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  publicRuntimeConfig: {
    rapidApi: {
      url: process.env.BASE_URL,
      host: process.env.RAPID_API_HOST,
      key: process.env.RAPID_API_KEY,
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  extend(config) {
    const svgRule = config.module.rules.find((rule) => rule.test.test('.svg'))

    svgRule.test = /\.(png|jpe?g|gif|webp)$/

    config.module.rules.push({
      test: /\.svg$/,
      oneOf: [
        {
          resourceQuery: /inline/,
          loader: 'file-loader',
          query: {
            name: 'assets/[name].[hash:8].[ext]',
          },
        },
        {
          loader: 'vue-svg-loader',
          options: {
            // Optional svgo options
            svgo: {
              plugins: [{ removeViewBox: false }],
            },
          },
        },
      ],
    })
  },
}
