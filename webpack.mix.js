const mix = require('laravel-mix')

mix.setPublicPath('./')

mix
  .js('resources/js/tool.js', 'dist/js')
  .sass('resources/sass/tool.scss', 'dist/css')
