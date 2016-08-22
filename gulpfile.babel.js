'use strict';

import gulp from 'gulp' // Base gulp package
import babelify from 'babelify' // Used to convert ES6 & JSX to ES5
import browserify from 'browserify' // Providers "require" support, CommonJS
import notify from 'gulp-notify' // Provides notification to both the console and Growel
import rename from 'gulp-rename' // Rename sources
import sourcemaps from 'gulp-sourcemaps' // Provide external sourcemap files
import livereload from 'gulp-livereload' // Livereload support for the browser
import gutil from 'gulp-util' // Provides gulp utilities, including logging and beep
import chalk from 'chalk' // Allows for coloring for logging
import source from 'vinyl-source-stream' // Vinyl stream support
import buffer from 'vinyl-buffer' // Vinyl stream support
import watchify from 'watchify' // Watchify for source changes
import merge from 'utils-merge' // Object merge tool
import duration from 'gulp-duration' // Time aspects of your gulp process

const config = {
  src: './src/app.js',
  watch: './src/**/*',
  outputDir: './dist/',
  outputFile: 'FormBuilder.js'
}

// Gulp task for build
gulp.task('default', () => {
  livereload.listen() // Start livereload server
  const args = merge(watchify.args, { debug: true }) // Merge in default watchify args with browserify arguments

  var bundler = browserify(config.src, args) // Browserify
    .plugin(watchify, {ignoreWatch: ['**/node_modules/**', '**/bower_components/**']}) // Watchify to watch source file changes
    .transform(babelify, {presets: ['es2015', 'react']}) // Babel tranforms

  bundle(bundler) // Run the bundle the first time (required for Watchify to kick in)

  bundler.on('update', () => {
    bundle(bundler) // Re-run bundle on source updates
  })
})

// Completes the final file outputs
function bundle(bundler) {
  var bundleTimer = duration('Javascript bundle time')

  bundler
    .bundle()
    .on('error', mapError) // Map error reporting
    .pipe(source('app.js')) // Set source name
    .pipe(buffer()) // Convert to gulp pipeline
    .pipe(rename(config.outputFile)) // Rename the output file
    .pipe(sourcemaps.init({ loadMaps: true })) // Extract the inline sourcemaps
    .pipe(sourcemaps.write('./')) // Set folder for sourcemaps to output to
    .pipe(gulp.dest(config.outputDir)) // Set the output folder
    .pipe(notify({ message: 'Generated file: <%= file.relative %>' })) // Output the file being created
    .pipe(bundleTimer) // Output time timing of the file creation
    .pipe(livereload()) // Reload the view in the browser
}

// Error reporting function
function mapError(err) {
  if (err.fileName) {
    // Regular error
    gutil.log(`
      ${chalk.red(err.name)}: ${chalk.yellow(err.fileName.replace(`${__dirname}/src/`, ''))}: Line ${chalk.magenta(err.lineNumber)}
      & Column ${chalk.magenta(err.columnNumber || err.column)}: ${chalk.blue(err.description)}
    `);
  } else {
    // Browserify error..
    gutil.log(`${chalk.red(err.name)}: ${chalk.yellow(err.message)}`);
  }
}
