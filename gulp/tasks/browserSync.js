'use strict';

var gulp = require('gulp-help')(require('gulp'));
var browserSync = require('browser-sync');

var config = require('./../config.js');

// Serve project with livereload

gulp.task('browser-sync', false, function() {
  browserSync(config.browserSync);
});

module.exports.reload = browserSync.reload;
