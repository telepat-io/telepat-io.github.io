'use strict';

var gulp = require('gulp-help')(require('gulp'));
var runSequence = require('run-sequence');

// Serve project with watching and livereload

gulp.task('serve', 'Serve project with livereload and file watching',function (cb) {
  runSequence(
    'build',
    'browser-sync',
    'watch',
    cb
  );
});
