var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// Nodemon
gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({
    script: './src/app',
    ext: '.js .ejs',
    ignore: [
      'public/**/*.js',
      'node_modules/**/*.js'
    ],
    env: {
      'NODE_ENV': 'development',
      'PORT': 8000
    },
  }).on('start', function () {
    if (!called) {
      called = true;
      cb();
    }
  }).on('restart', function () {
    console.log('Nodemon restarted!');
  });
});

// BrowserSync
gulp.task('browser-sync', ['nodemon'], function() {
  browserSync.init({
    port: 9000,
    proxy: "localhost:8000",
    // open: true,
    browser: "Safar",
    // notify: true
    // notify: {
    //     styles: {
    //         top: 'auto',
    //         bottom: '0'
    //     }
    // }
  });
});

// Build
// gulp.task('build', ['js', 'sass']);

// Default
gulp.task('default', ['browser-sync'], function () {
  gulp.watch('./src/**/*.js', reload);
});