"use strict";

var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
var browserify = require('browserify'); // Creates js modules, determines required load order and bundles js
// var watchify = require('watchify'); // Watches files for change
var reactify = require('reactify'); // Transforms React jsx to js
var connect = require('gulp-connect'); // Runs a local dev server
var open = require('gulp-open'); // Opens a URL in a web browser

var config = {
  port: 9005,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    assets: './assets//**/*',
    dist: './dist',
    mainJs: './src/index.js'
  }
}


// Start a local development server
gulp.task('connect', function() {
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  });
});

gulp.task('open', ['connect'], function() {
  gulp.src('dist/index.html')
      .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html', function() {
  gulp.src(config.paths.html)
      .pipe(gulp.dest(config.paths.dist))
      .pipe(connect.reload());
});

gulp.task('assets', function() {
  gulp.src(config.paths.assets)
      .pipe(gulp.dest(config.paths.dist + '/assets'))
      .pipe(connect.reload());
});

gulp.task('js', function() {
  browserify(config.paths.mainJs,
      { extensions: ['.jsx'] })
      .transform(reactify)
      .bundle()
      .on('error', console.error.bind(console))
      .pipe(source('main.js'))
      .pipe(gulp.dest(config.paths.dist + '/scripts'))
      .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js']);
});

gulp.task('default', ['html', 'js', 'assets', 'open', 'watch']);

// TODO: Do I need extensions to also include '.js'?
/*gulp.task('default', function () {
  var bundler = watchify(browserify({
    entries: ['./src/index.js'],
    transform: [reactify],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  function build(file) {
    if (file) gutil.log('Recompiling ' + file);
    return bundler
        .bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('main.js'))
        .pipe(gulp.dest('./dist'));
  };
  build();
  bundler.on('update', build);
});*/
