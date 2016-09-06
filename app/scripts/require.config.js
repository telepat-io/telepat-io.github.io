require.config({
  baseUrl: 'bower_components',
  paths: {
    bootstrap: 'bootstrap-sass/assets/javascripts/bootstrap.min',
    jquery: 'jquery/dist/jquery',
    stickUp: 'stickUp2/build/js/stickUp.min',
    cookie: 'js-cookie/src/js.cookie'
  },
  shim: {
    bootstrap: {
      deps: ['jquery']
    },
    stickUp: {
      deps: ['jquery']
    }
  },
  urlArgs: 'v=' + (new Date()).getTime(),
  waitSeconds: 15
});
