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
    sourcemaps = require('gulp-sourcemaps'),
    commandExists = require('command-exists');

// GENERIC VARIABLES
const   exec = require('child_process').exec,
        themePath = './Resources/Public/',
        scssPath = themePath + 'Scss',
        jsPath = themePath + 'JavaScript',
        cssPath = themePath + 'Css';

// DEFAULT HELPER TASK
gulp.task('default', function(cb){
    exec('gulp --tasks-simple', function (err, stdout, stderr) {
        console.log("\nAll gulp parameters:\n(Usage Example: \"gulp build\")\n-------------------");
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

// Installer / Setup - IDE Plugins
gulp.task('install:atom-onsave', function(done){
  commandExists('apm').then(function(command){
    exec('apm install on-save --compatible', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        console.log("Please restart your IDE so the Plugin can be correctly initialized.");
        done(err);
    });
  }).catch(function(){
    console.log("The Command \"apm\" (from Atom) was not found or is not accessible on your System.\nSkipped Implementation of the Auto-Save Functionality..");
  });
});

gulp.task('install:vscode-onsave', function(done){
  commandExists('code').then(function(command){
    exec('code --install-extension wk-j.save-and-run', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        console.log("Please restart your IDE so the Plugin can be correctly initialized.");
        done(err);
    });
  }).catch(function(){
    console.log("The Command \"code\" (from Visual Studio Code) was not found or is not accessible on your System (please read the docs if you want to use it in your vscode environment: https://code.visualstudio.com/docs/editor/command-line).\nSkipped Implementation of the Auto-Save Functionality..");
  });
});

// Installer / Setup - FULL SETUP
gulp.task('setup', gulp.parallel('install:atom-onsave', 'install:vscode-onsave'));

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
