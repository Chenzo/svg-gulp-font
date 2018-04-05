


var gulp = require('gulp'),
    sass = require('gulp-sass'),
    pump = require('pump'),
	  wait = require('gulp-wait'),
    iconfontCSS = require('gulp-iconfont-CSS'),
    iconfont = require('gulp-iconfont'),
    imagemin= require('gulp-imagemin');

var fontName = 'demo-icons';
 
gulp.task('iconfont', function() {
  gulp.src(['./images/svg/*.svg'])
    .pipe(iconfontCSS({
      fontName: fontName,
      targetPath: './../../scss/_icons.scss',
      fontPath: '/fonts/'
    }))
    .pipe(iconfont({
      fontName: fontName,
      // Remove woff2 if you get an ext error on compile
      formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'],
      normalize: true,
      fontHeight: 1001
    }))
    .pipe(gulp.dest('./www/fonts/'))
});




gulp.task('styles', function() {
  gulp.src('./scss/**/*.scss')
      .pipe(wait(500))
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('./www/css/'));        
});




//gulp.task('icons', ['iconfont', 'scss']);