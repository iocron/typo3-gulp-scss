# Typo3 Gulp SCSS Autocompiler to CSS + CSS Minifier + CSS Sourcemaps + JS Minifier

This Script creates from all Resources/Public/Scss/\*.scss Files corresponding CSS Files in Resources/Public/Css/ as minified + uncompressed versions. It also minifies the JS Files if needed. This script has to be put into your theme folder.

## Install:

1. Copy this script into your typo3 theme folder, then switch into your theme folder (console: `cd THEME_FOLDER`)
2. Initialize the project / dependencies and install gulp + dependencies with: `npm install`

*(Side Note: The One-Liner Version to Install everything is `cd <yourThemeDirectory> && curl -O https://raw.githubusercontent.com/iocron/typo3-gulp-scss/master/gulpfile.js && npm init && npm install gulp gulp-sass gulp-rename gulp-babel-minify` after that you can use one of the new console commands below)*

*(Side Note: You can use `npm update` somewhat later on if you modify / add other dependencies manually to this script)*

## Console Usage (within the theme folder):

Start all Build Tasks:
`gulp build`

Start all Watcher Tasks (Initializes also the Build task on start):
`gulp watch`

Convert Scss Files to CSS uncompressed (build once):
`gulp sass:uncompressed`

Convert Scss Files to CSS compressed (build once):
`gulp sass:compressed`

Convert Scss Files to CSS compressed + uncompressed (watcher / every time a file changes):
`gulp sass:watch`

Minify JS Files (build once):
`gulp js:compressed`

Minify JS Files (watcher / every time a file changes):
`gulp js:watch`

*(Side Note: Alternatively you can use the native SASS Method if you do not prefer gulp or if there are some complications with gulp: `sass --watch Resources/Public/Scss:Resources/Public/Css` (uncompressed only))*
