'use strict';

var gulp = require('gulp-help')(require('gulp'));
var runSequence = require('run-sequence');

// Serve project with watching and livereload

gulp.task('serve', {'port': 1208 },function (cb) {
  runSequence(
    'build',
    'browser-sync',
    'watch',
    cb
  );
});
