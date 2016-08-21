const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const gulp = require('gulp');
const notify = require('gulp-notify');
const react = require('gulp-react');
const watch = require('gulp-watch');

gulp.task('default', [], () => {
  return watch(['**/*.jsx', '*.jsx'], { ignoreInitial: false })
    .pipe(react())
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'))
    pipe(notify('Rebuilt'));
})
