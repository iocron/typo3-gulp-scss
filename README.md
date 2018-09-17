# Typo3 Gulp SCSS Autocompiler to CSS + CSS Minifier + CSS Sourcemaps + JS Minifier

This Script creates from all Resources/Public/Scss/\*.scss Files corresponding CSS Files in Resources/Public/Css/ as minified + uncompressed versions. It also minifies the JS Files if needed (into the same folder with the .min suffix). There is also a setup option to automate the build tasks with IDE Plugins for Atom/Vscode in combination with this script. This script has to be put into your typo3 theme folder (e.g. typo3conf/ext/yourTheme).

## System Requirements:

- Node 8.x or higher (check with `node --version`)
- NPM 5.6 or higher (check with `npm --version`)
- Gulp CLI (you can simply install it with: `npm install gulp-cli -g` if you have node/npm installed already)

If Node/NPM is not installed on your system then please install it: https://nodejs.org/en/download/

## Install:

1. Copy this script into your typo3 theme folder, then switch into your theme folder (`cd <myTheme>`)
2. Initialize the project / dependencies and install gulp + dependencies with: `npm install`
3. Type in `gulp` for all available commands (for more information see further below)
4. (Optional) Setup your dev environment if you have atom or vscode installed: `gulp setup`

## On Updates / Upgrades:

If you have updated to a newer Version of typo3-gulp-scss from a previous installation, then please use `npm update` to make sure to be up to date with your dependencies (or use `gulp upgrade` instead if your typo3-gulp-scss isn't versioned anyway (e.g. if you don't want to / haven't used git to clone this project))

## Console Usage (somewhere inside the theme folder):

Start all Build Tasks:

```bash
# Compiles / Builds *.scss to css files, then minifies js and css files and creates css source maps

gulp build
```

Start all Watcher Tasks:

```bash
# Initializes also the Build task on start and watches relevant
# files (.scss, .js) on change, then re-builds the corresponding files

gulp watch
```

Setup - All:

```bash
# Initializes IDE Plugins for Atom/VSCode for automatic builds. After installing it, you won't need those console build/watch
# commands anymore, because every time a relevant file is beeing saved by Atom/VSCode the code will get build automatically
# This script will also create some symlinks for easier/faster theme resources handling (see the command gulp setup:symlinks)
# This task will execute: setup:symlinks, install:onsave-atom, install:onsave-vscode
# (Please Restart your IDE after executing this)

gulp setup
```

Setup - Symlinks

```bash
# Creates symlinks for faster theme development, e.g. <theme>/Resources/Images to fileadmin/<theme>/themeResources

gulp setup:symlinks
```

Install Script for Atom:

```bash
# On-Save Plugin for automatic builds on save (Atom)
# So every time a relevant file is saved the plugin will automatically execute the build command
# You can edit the .on-save.json file for further adjustments
# (Please Restart your IDE after executing this)

gulp install:onsave-atom
```

Install Script for VSCode:

```bash
# On-Save Plugin for automatic builds on save
# (https://marketplace.visualstudio.com/items?itemName=wk-j.save-and-run)
# So every time a relevant file is saved the plugin will automatically execute the build command
# You can edit the .vscode/settings.json file for further adjustments
# (Please Restart your IDE after executing this)

gulp install:onsave-vscode

# Or if you want autostart tasks.json and/or launch.json on startup VSCode
# (https://marketplace.visualstudio.com/items?itemName=philfontaine.autolaunch)

gulp install:autolaunch

```

Install Script for VSCode + Atom (onsave-vscode + onsave-atom):

```bash
gulp install:onsave
```

Upgrade / Self-Updater - Upgrades this script through the Repository:

```bash
# Good if you don't want to / can't use git in your environment
# (the upgrade will override/update gulpfile.js, package.json, package-lock.json and will start npm update)

gulp upgrade
```

Convert Scss Files to CSS uncompressed (build once):

```bash
gulp sass:uncompressed
```

Convert Scss Files to CSS compressed (build once):

```bash
gulp sass:compressed
```

Convert Scss Files to CSS compressed + uncompressed (watcher / every time a scss file changes):

```bash
gulp sass:watch
```

Minify JS Files (build once):

```bash
gulp js:compressed
```

Minify JS Files (watcher / every time a js file changes):

```bash
gulp js:watch
```
