require.config({
  baseUrl: 'bower_components',
  paths: {
    bootstrap: 'bootstrap-sass/assets/javascripts/bootstrap.min',
    diffMatchPatch: 'google-diff-match-patch-js/diff_match_patch',
    handlebars: 'handlebars/handlebars.min',
    handlebarsExtended: '../scripts/handlebars_helper',
    jquery: 'jquery/dist/jquery',
    lodash: 'lodash/lodash',
    locales: '../locales/locale',
    pathToRegexp: 'pathtoregexp/pathtoregexp',
    utilsSampleRequest: '../scripts/send_sample_request',
    prettify: 'google-code-prettify/src/prettify'
  },
  shim: {
    bootstrap: {
      deps: ['jquery']
    },
    diffMatchPatch: {
      exports: 'diff_match_patch'
    },
    handlebars: {
      exports: 'Handlebars'
    },
    handlebarsExtended: {
      deps: ['jquery', 'handlebars'],
      exports: 'Handlebars'
    },
    prettify: {
      exports: 'prettyPrint'
    }
  },
  urlArgs: 'v=' + (new Date()).getTime(),
  waitSeconds: 15
});