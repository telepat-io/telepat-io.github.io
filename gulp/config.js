'use strict';
var path = require('path');

// Default paths
var app = 'app';
var tmp = '.tmp';
var dist = 'dist';
var bowerDir = 'dist/bower_components';

// Default paths in app folder
var data = 'data';
var fonts = 'fonts';
var images = 'images';
var scripts = 'scripts';
var styles = 'styles';
var views = 'views';
var markdown = 'markdown';
var template = 'template';
var fullpages = 'fullpages';

// Default settings
module.exports.uglifyJs = true; // to remove .min sufix edit template manually
module.exports.minifyCss = true; // to remove .min sufix edit template manually
module.exports.cacheBust = true;
module.exports.optimizeImages = true;
module.exports.lintJs = true;

module.exports.pages = [
  { name: 'intro' },
  { name: 'getting-started' },
  { name: 'data-fundamentals' },
  { name: 'roadmap' },
  { name: 'api', type: 'iframe', url: '' },
  { name: 'js-sdk', type: 'iframe', url: '' },
  { name: 'android-sdk', type: 'iframe', url: '' },
  { name: 'ios-sdk', type: 'iframe', url: '' }
];

// Browser sync task config
module.exports.browserSync = {
  server: {
    baseDir: dist
  },
  notify: false,
  debugInfo: false,
  host: '0.0.0.0'
};

// Build size task config
module.exports.buildSize = {
  srcAll: dist + '/**/*',
  cfgAll: {
    title: 'build',
    gzip: true
  },
  srcCss: path.join(dist, styles, '/**/*'),
  cfgCss: {
    title: 'CSS',
    gzip: true
  },
  srcJs: path.join(dist, scripts, '/**/*'),
  cfgJs: {
    title: 'JS',
    gzip: true
  },
  srcImages: path.join(dist, images, '/**/*'),
  cfgImages: {
    title: 'Images',
    gzip: false
  }
};

// Clean task config
// Be carefull what you cleaning!
module.exports.clean = [tmp];

// Images task config
module.exports.images = {
  src: path.join(app, images, '**/*'),
  dest: path.join(dist, images),
  cfg: {
    progressive: true,
    interlaced: true,
    svgoPlugins: [{cleanupIDs: false}]
  }
};

// Markdown task config
module.exports.pages = {
  markdownSrc: path.join(app, views, markdown, '*.md'),
  templateMarkdownDest: path.join(tmp, template, markdown),
  templateSrc: path.join(app, views, template, 'template.jade'),
  templateDest: path.join(tmp, template),
  pagesSrc: path.join(app, views, '*.jade'),
  fullpagesSrc: path.join(app, views, fullpages, '*.jade'),
  templatePageDest: path.join(tmp, template, views),
  dest: dist,
  jadeCfg: {
    pretty: true,
    compileDebug: false
  },
  markdownCfg: {}
};

// JSHint task config
module.exports.jshint = {
  src: [
    path.join(app, scripts,'**/*.js'),
    path.join('!' + app, scripts,'plugins/**/*.js') // do not lint external plugins
  ],
  reporter: require('jshint-stylish')
};

// User scripts task
module.exports.scripts = {
  src: [
    path.join(app, scripts, '*.js'),
    path.join(app, scripts, 'modules/**/*.js')
  ],
  dest: dist + '/scripts'
};

// Styles task config
module.exports.styles = {
  src: path.join(app, styles, 'main.scss'),
  dest: path.join(dist,styles),
  sassCfg: {},
  autoprefixerCfg: {browsers: ['last 2 version']}
};

// Watch task config
module.exports.watch = {
  styles: path.join(app, styles, '/**/*.scss'),
  pages: [
    path.join(app, views, '/**/*.jade'),
    path.join(app, views, markdown, '/**/*.md'),
    path.join(app, views, template, '/**/*.jade')
  ],
  scripts: path.join(app, scripts, '/**/*.js'),
  wiredep: 'bower.json'
};
