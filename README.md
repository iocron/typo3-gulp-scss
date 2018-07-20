# Typo3 Gulp SCSS Autocompiler to CSS + CSS Minifier + CSS Sourcemaps + JS Minifier

This Script creates from all Resources/Public/Scss/\*.scss Files corresponding CSS Files in Resources/Public/Css/ as minified + uncompressed versions. It also minifies the JS Files if needed. This script has to be put into your theme folder.

## Install:

1. Copy this script into your typo3 theme folder, then switch into your theme folder (console: `cd THEME_FOLDER`)
2. Initialize the project / dependencies and install gulp + dependencies with: `npm install`

## On Updates:
1. If you have updated to a newer Version of typo3-gulp-scss from a previous installation, then please use `npm update` to make sure to be up to date with your dependencies

## Console Usage (within the theme folder):

Start all Build Tasks:
`gulp build`

Start all Watcher Tasks (Initializes also the Build task on start):
`gulp watch`

Setup Script - Initializes IDE Plugins for Atom/VSCode for automatic builds & More:
`gulp setups` (Please Restart your IDE after it)

Setup Script for Atom - On-Save Plugin for automatic builds on save:
`gulp install:atom-onsave` (Please Restart your IDE after it)

Setup Script for VSCode - On-Save Plugin for automatic builds on save:
`gulp install:vscode-onsave` (Please Restart your IDE after it)

Self-Updater - Updates this script through the Repository (e.g. if you don't/can't use git on your environment):
`gulp selfupdate`

Convert Scss Files to CSS uncompressed (build once):
`gulp sass:uncompressed`

Convert Scss Files to CSS compressed (build once):
`gulp sass:compressed`

Convert Scss Files to CSS compressed + uncompressed (watcher / every time a scss file changes):
`gulp sass:watch`

Minify JS Files (build once):
`gulp js:compressed`

Minify JS Files (watcher / every time a js file changes):
`gulp js:watch`

*(Side Note: Alternatively you can use the native SASS Method if you do not prefer gulp or if there are some complications with gulp: `sass --watch Resources/Public/Scss:Resources/Public/Css` (uncompressed only))*
