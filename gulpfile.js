const gulp = require('gulp')
const pcss = require('gulp-postcss')
const maps = require('gulp-sourcemaps')
const rename = require('gulp-rename')

const styles = _ => (
  gulp
    .src('./src/global.pcss')
    .pipe(maps.init())
    .pipe(pcss())
    .pipe(rename('bundle.css'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('./public/css'))
)

// uncomment if you want to watch for changes
// gulp.watch('./src/**/*.pcss', styles)
  
gulp.task('css', styles)
gulp.task('default', styles)
