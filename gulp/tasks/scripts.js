'use strict';

var gulp = require('gulp-help')(require('gulp'));
var jshint = require('gulp-jshint');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');

var config = require('./../config.js');
var jsHintErrorReporter = require('./../utils/jsHintErrorReporter.js');
var handleError = require('./../utils/handleError.js');

// Lint .js files

gulp.task('jshint', 'Lint js files', function () {
  if (config.lintJs) {
    return gulp.src(config.jshint.src)
      .pipe(jshint())
      .pipe(jshint.reporter(config.jshint.reporter))
      .pipe(jsHintErrorReporter())
      .on('error', handleError);
  } else {
    return;
  }
});

gulp.task('scripts', false,['jshint'],function () {
  return gulp.src(config.scripts.src)
  
    .pipe(gulp.dest(config.scripts.dest));
});