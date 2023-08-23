export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt.js-bootstrap-vue',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=K2D:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Audiowide&family=K2D:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
      }
    ],
  },

  /*
   ** Customize the progress-bar color
   */
   loading: { color: "#0f7d41" },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/bootstrap/style.scss",
    "~/assets/fontawesome/css/all.css",
  ],
  middleware: ["auth"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/axios",
    "~/plugins/vueAwesomeCountdown",
    "~/plugins/v-mask",
    "~/plugins/OtpInput",
    { src: "~/plugins/chart.js", mode: "client" },
    "~/plugins/vueSelect",
    "~/plugins/DateTimePicker",
    "~/plugins/VueEllipseProgress",
    "~/plugins/vue2-editor",
    '~/plugins/vue-multiselect.js',
    { src: "~/plugins/inputFormat.js", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/moment',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    'vue-sweetalert2/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {},
    postcss: null
  },

  bootstrapVue: {
    icons: true,
    bootstrapCSS: true,
    bootstrapVueCSS: true
  },
  axios: {
    baseURL: process.env.API_URL || "endpoint/",
    browserBaseURL: "",
    credentials: true,
    proxy: process.env.NODE_ENV !== "production",
    redirectError: {
      404: "/login"
    },
  },
  proxy: {
    "/api/": {
      target: "endpoint"
    }
  },
  moment: {
    defaultLocale: 'th',
    locales: ['th']
  },
  sweetalert: {
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    allowOutsideClick: false,
    confirmButtonText: "ตกลง"
  },
  i18n: {
    strategy: "prefix_except_default", // "no_prefix" || "prefix_except_default" || "prefix" || "prefix_and_default"
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en.json",
      },
      {
        code: "th",
        iso: "th-TH",
        name: "ไทย",
        file: "th.json",
      },
    ],
    defaultLocale: "th",
    vueI18n: {
      messages: {
        // eslint-disable-next-line global-require
        th: require("./assets/lang/th.json"),
        // eslint-disable-next-line global-require
        en: require("./assets/lang/en.json"),
      },
    },
    lazy: true,
    langDir: "~/assets/lang/",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "preferred_locale",
      onlyOnRoot: true, // recommended
    },
  },
}
