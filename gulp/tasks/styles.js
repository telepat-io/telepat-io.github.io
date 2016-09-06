'use strict';

var gulp = require('gulp-help')(require('gulp'));

var stylus = require('gulp-stylus');

var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var plumber = require('gulp-plumber');

var autoprefixer = require('autoprefixer-core');

var config = require('./../config.js');
var reload = require('./browserSync.js').reload;
var handleError = require('./../utils/handleError.js');

// Complie scss using libsass

gulp.task('styles', 'Compile Sass to CSS', function () {
  return gulp.src(config.styles.src)
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(postcss([
      autoprefixer(config.styles.autoprefixerCfg)
    ]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.styles.dest))
    .pipe(plumber(handleError))
    .pipe(reload({stream:true}));
}); 
