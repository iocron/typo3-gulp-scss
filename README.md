# Typo3 Gulp SCSS Autocompiler to CSS + CSS Minifier + CSS Sourcemaps + JS Minifier

This Script creates from all Resources/Public/Scss/\*.scss Files corresponding CSS Files in Resources/Public/Css/ as minified + uncompressed versions. It also minifies the JS Files if needed (into the same folder with the .min suffix). There is also a setup option to automate the build tasks with IDE Plugins for Atom/Vscode in combination with this script. This script has to be put into your typo3 theme folder (e.g. typo3conf/ext/<yourTheme>).

## System Requirements:

- Node 8.x or higher (check with `node --version`)
- NPM 5.6 or higher (check with `npm --version`)

If Node/NPM is not installed on your system then please install it: https://nodejs.org/en/download/

## Install:

1. Copy this script into your typo3 theme folder, then switch into your theme folder (console: `cd THEME_FOLDER`)
2. Initialize the project / dependencies and install gulp + dependencies with: `npm install`

## On Updates:

If you have updated to a newer Version of typo3-gulp-scss from a previous installation, then please use `npm update` to make sure to be up to date with your dependencies (or use `gulp selfupdate` if your typo3-gulp-scss isn't versioned anyway (e.g. if you don't want to / haven't used git to clone this project))

## Console Usage (somewhere inside the theme folder):

Start all Build Tasks:

```console
gulp build
```

Start all Watcher Tasks (Initializes also the Build task on start):

```console
gulp watch
```

Setup Script - Initializes IDE Plugins for Atom/VSCode for automatic builds & More:

```console
gulp setup
```
*(Please Restart your IDE after this)*

Setup Script for Atom - On-Save Plugin for automatic builds on save:

```console
gulp install:atom-onsave
```
*(Please Restart your IDE after this)*

Setup Script for VSCode - On-Save Plugin for automatic builds on save:

```console
gulp install:vscode-onsave
```
*(Please Restart your IDE after this)*

Symlinks Setup

*(Creates symlinks for faster theme development, e.g. <theme>/Resources/Images to fileadmin/<theme>/themeResources)*

```console
gulp symlinks
```

Self-Updater - Updates this script through the Repository (e.g. if you don't/can't use git on your environment):

```console
gulp selfupdate
```
*(the selfupdate will override/update gulpfile.js, package.json, package-lock.json and will start npm update)*

Convert Scss Files to CSS uncompressed (build once):

```console
gulp sass:uncompressed
```

Convert Scss Files to CSS compressed (build once):

```console
gulp sass:compressed
```

Convert Scss Files to CSS compressed + uncompressed (watcher / every time a scss file changes):

```console
gulp sass:watch
```

Minify JS Files (build once):

```console
gulp js:compressed
```

Minify JS Files (watcher / every time a js file changes):

```console
gulp js:watch
```
