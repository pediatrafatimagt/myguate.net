module.exports = {
  plugins: [
    require('autoprefixer'),

    require('@fullhuman/postcss-purgecss')({
      content: [
        './_site/**/*.html',
        './_site/**/*.js'
      ],
      safelist: {
        standard: [
          'active',
          'open'
        ],
        deep: [/^js-/]
      }
    }),

    require('postcss-discard-duplicates'),

    require('cssnano')({
      preset: 'default'
    })
  ]
}
