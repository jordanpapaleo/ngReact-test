import babel from 'gulp-babel'
import eslint from 'gulp-eslint'
import gulp from 'gulp'
import notify from 'gulp-notify'
import react from 'gulp-react'
import watch from 'gulp-watch'
import babelify from 'babelify';
import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';

// gulp.task('')

gulp.task('watch', [], () => {
  return watch(['app/**/*.jsx', 'app/*.jsx', 'app/**/*.js', 'app/*.js'], { ignoreInitial: false })
    .pipe(react())
    .pipe(babel())
    .pipe(gulp.dest('dist'))
    .pipe(notify('Rebuilt'));
})

gulp.task('default', ['bundle'])


gulp.task('bundle', function () {
    var bundler = browserify('src/app.js');
    bundler.transform(babelify);

    bundler.bundle()
        .on('error', function (err) { console.error(err); })
        .pipe(source('app.js'))
        .pipe(buffer())
        // .pipe(uglify()) // Use any gulp plugins you want now
        .pipe(gulp.dest('dist'));
});
