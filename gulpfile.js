/**
 * gulpfile.js
 *
 * Typo3 Gulp SCSS Autocompiler to CSS + CSS Minifier + CSS Sourcemaps + JS Minifier
 *
 * @author     Sebastian Pieczona
 * @company    ioCron
 * @copyright  2018 Sebastian Pieczona
 * @license    MIT License (see https://github.com/iocron/typo3-gulp-scss/blob/master/LICENSE)
 * @link       https://github.com/iocron/typo3-gulp-scss
 */

'use strict';

// NPM PACKAGES
let gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require("gulp-rename"),
    minify = require("gulp-babel-minify"),
    sourcemaps = require('gulp-sourcemaps');

// GENERIC VARIABLES
const   exec = require('child_process').exec,
        themePath = './Resources/Public/',
        scssPath = themePath + 'Scss',
        jsPath = themePath + 'JavaScript',
        cssPath = themePath + 'Css';

// DEFAULT HELPER TASK
gulp.task('default', function(cb){
    exec('gulp --tasks-simple', function (err, stdout, stderr) {
        console.log("All gulp parameters:");
        console.log("(Usage Example: gulp build)");
        console.log("-------------------");
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
    cb();
});

// SCSS / SASS COMPILER & MINIFIER
gulp.task('sass:uncompressed', function(done){
    gulp.src(scssPath + '/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(cssPath));
    done();
});

gulp.task('sass:compressed', function(done){
    gulp.src(scssPath + '/**/*.scss')
        .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({ suffix:".min" }))
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(cssPath));
    done();
});

gulp.task('sass:watch', function(done){
    let watcher = gulp.watch(scssPath + '/**/*.scss');
    watcher.on('change', gulp.series('sass:uncompressed', 'sass:compressed'));
});

// JAVASCRIPT COMPRESSION
gulp.task('js:compressed', function(done){
    gulp.src([jsPath + '/**/*.js', '!'+ jsPath +'/**/*.min.js'])
        .pipe(minify())
        .pipe(rename({ suffix:".min" }))
        .pipe(gulp.dest(jsPath));
    done();
});

gulp.task('js:watch', function(done){
    let watcher = gulp.watch([jsPath + '/**/*.js', '!'+ jsPath +'/**/*.min.js']);
    watcher.on('change', gulp.series('js:compressed'));
});

// GLOBAL WATCHER / BUILD COMMANDS
gulp.task('build', gulp.parallel('sass:uncompressed', 'sass:compressed', 'js:compressed'));
gulp.task('watch', gulp.parallel('build', 'sass:watch', 'js:watch'));
