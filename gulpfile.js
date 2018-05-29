/**
 * gulpfile.js
 *
 * Typo3 Gulp SCSS Autocompiler
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

gulp.task('sass', function () {
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
  gulp.watch('./Resources/Public/Scss/**/*.scss', ['sass', 'sass:compressed']);
});
