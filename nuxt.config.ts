// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    rootTag: 'body',
    rootId: 'app',
    head: {
      title: "itCats - школа программирования онлайн.",
      // задаём глобальный description
      meta: [
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }
      ],
      link: [
        {rel: "shortcut icon", href: "/favicon.ico", type: "image/x-icon"}
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  css: ['~/assets/sass/style.sass'],
  components: [
    {
    path: '~/components',
    pathPrefix: false,
    global: true
    }
  ],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "~/assets/sass/_vars.sass" as *\n'
        }
      }
    }
  },
  routeRules: {
    "/videos": {
      redirect: "/",
    },
  }
})
