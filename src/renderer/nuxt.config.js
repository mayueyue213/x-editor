/**
 * By default, Nuxt.js is configured to cover most use cases.
 * This default configuration can be overwritten in this file
 * @link {https://nuxtjs.org/guide/configuration/}
 */

module.exports = {
  mode: 'spa', // or 'universal'
  head: {
    title: 'x-editor'
  },
  loading: false,
  plugins: [

    { ssr: true, src: '@/plugins/element.js' }
  ],
  modules: [

  ]
}
