/**
 * gulpfile.js
 *
 * Typo3 Gulp SCSS Autocompiler + JS Minifier
 *
 * @author     Sebastian Pieczona
 * @company    ioCron
 * @copyright  2018 Sebastian Pieczona
 * @license    MIT License (see https://github.com/iocron/typo3-gulp-scss/blob/master/LICENSE)
 * @link       https://github.com/iocron/typo3-gulp-scss
 */

'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var minify = require("gulp-babel-minify");

// SCSS / SASS
gulp.task('sass:uncompressed', function () {
  return gulp.src('./Resources/Public/Scss/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./Resources/Public/Css'));
});

gulp.task('sass:compressed', function () {
  return gulp.src('./Resources/Public/Scss/**/*.scss')
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({ suffix:".min" }))
    .pipe(gulp.dest('./Resources/Public/Css'));
});

gulp.task('sass:watch', function () {
  return gulp.watch('./Resources/Public/Scss/**/*.scss', ['sass:uncompressed', 'sass:compressed']);
});

// JAVASCRIPT COMPRESSION
gulp.task('js:compressed', function(){
  return gulp.src(['./Resources/Public/JavaScript/**/*.js', '!./Resources/Public/JavaScript/**/*.min.js'])
    .pipe(minify())
    .pipe(rename({ suffix:".min" }))
    .pipe(gulp.dest('./Resources/Public/JavaScript'));
});

gulp.task('js:watch', function(){
    return gulp.watch(['./Resources/Public/JavaScript/**/*.js', '!./Resources/Public/JavaScript/**/*.min.js'], ['js:compressed']);
});

// GLOBAL WATCHER / BUILD COMMANDS
gulp.task('watch', ['sass:watch', 'js:watch']);
gulp.task('build', ['sass:uncompressed', 'sass:compressed', 'js:compressed']);
