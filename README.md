# typo3-gulp-scss - Gulp SCSS CSS Autocompiler

This Script creates from all Resources/Public/Scss/\*.scss Files corresponding CSS Files in Resources/Public/Css/ as minified + uncompressed versions. This script has to be put into your theme folder.

## Install:

1. Copy this script (gulpfile.js) into your typo3 theme folder, then switch into your theme folder (console: `cd THEME_FOLDER`)
2. Initialize the project / dependencies and install gulp + dependencies:
  * `npm init` (skip this step, if package.json is already present)
  * `npm install`

*(Side Note: You can use `npm update` somewhat later on if you modify / add other dependencies manually to this script)*

## Console Usage (within the project folder):

Convert Scss Files to CSS uncompressed (once):
`gulp sass`

Convert Scss Files to CSS compressed (once):
`gulp sass:compressed`

Convert Scss Files to CSS compressed + uncompressed (every time a file changes):
`gulp sass:watch`

*(Side Note: Alternatively you can use the native SASS Method if you do not prefer gulp or if there are some complications with gulp: `sass --watch Resources/Public/Scss:Resources/Public/Css` (uncompressed only))*
