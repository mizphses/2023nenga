// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: '2023年 寒中お見舞い',
      meta: [
        { name: 'description', content: '2023年の寒中お見舞い' },
        { name: 'og:title', content: '寒中見舞サイト | mizphses.com' },
        { name: 'og:description', content: 'mizphses.comから寒中お見舞いのご挨拶' },
        { name: 'og:site_name', content: 'mizphses.com' },
        { name: 'og:url', content: 'https://2023nenga.mizphses.com' },
        { name: 'og:image', content: 'https://2023nenga.mizphses.com/ogp.png' },
        { name: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    }
  }
})
