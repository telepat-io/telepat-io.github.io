'use strict';

var gulp = require('gulp-help')(require('gulp'));
var markdown = require('gulp-markdown');

var plumber  = require('gulp-plumber');
var tap = require('gulp-tap');
var path = require('path');
var inject = require('gulp-inject');
var jade = require('gulp-jade');
var rename = require('gulp-rename');

var config = require('./../config.js');
var handleError = require('./../utils/handleError.js');

// Compile md to html

gulp.task('pages', 'Compile pages',['template', 'pages-with-markdown', 'fullpages-from-jade'], function() {
  return gulp.src(path.join(config.pages.templatePageDest, '*.html'))
    .pipe(plumber(handleError))
    .pipe(tap(function(file, t) {
      return gulp.src(path.join(config.pages.templateDest, 'template.html'))
        .pipe(plumber(handleError))
        .pipe(inject(gulp.src([file.path]), {
          starttag: '<!-- inject:content -->',
          transform: function (filePath, file) {
            return file.contents.toString('utf8')
          }
        }))
        .pipe(inject(gulp.src([file.path]), {
          starttag: '<!-- inject:scripts -->',
          transform: function (filePath, file) {
            return '<script src="scripts/' + path.basename(file.path, '.html') + '.js"></script>'
          }
        }))
        .pipe(rename(path.basename(file.path)))
        .pipe(gulp.dest(config.pages.dest));
    }))
});

gulp.task('template', 'Compile Jade layout',[], function() {
  return gulp.src(config.pages.templateSrc)
    .pipe(plumber(handleError))
    .pipe(jade(config.pages.jadeCfg))
    .pipe(gulp.dest(config.pages.templateDest));
});

gulp.task('pages-from-jade', 'Compile Jade page templates',[], function() {
  return gulp.src(config.pages.pagesSrc)
    .pipe(plumber(handleError))
    .pipe(jade(config.pages.jadeCfg))
    .pipe(gulp.dest(config.pages.templatePageDest));
});

gulp.task('fullpages-from-jade', 'Compile Jade page templates',[], function() {
  return gulp.src(config.pages.fullpagesSrc)
    .pipe(plumber(handleError))
    .pipe(jade(config.pages.jadeCfg))
    .pipe(gulp.dest(config.pages.dest));
});

gulp.task('content-from-markdown', 'Compile pages',[], function() {
  return gulp.src(config.pages.markdownSrc)
    .pipe(plumber(handleError))
    .pipe(markdown(config.pages.markdownCfg))
    .pipe(gulp.dest(config.pages.templateMarkdownDest));
});

gulp.task('pages-with-markdown', 'Compile pages',['content-from-markdown', 'pages-from-jade'], function() {
  return gulp.src(path.join(config.pages.templatePageDest, '*.html'))
    .pipe(plumber(handleError))
    .pipe(tap(function(file, t) {
      return gulp.src(file.path)
        .pipe(plumber(handleError))
        .pipe(inject(gulp.src([path.join(config.pages.templateMarkdownDest, path.basename(file.path))]), {
          starttag: '<!-- inject:content:md -->',
          transform: function (filePath, file) {
            return file.contents.toString('utf8')
          }
        }))
        .pipe(gulp.dest(config.pages.templatePageDest));
    }))
});
