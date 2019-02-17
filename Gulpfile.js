/*!
 * gulp
 * npm install gulp-ruby-sass gulp-autoprefixer gulp-cssnano gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
 */

// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-sass');
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    cache = require('gulp-cache'),
    gutil = require('gulp-util');


gulp.task('sass', function () {
  return gulp.src('styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('styles/'));
});



// Watch
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('styles/*.scss',gulp.series('sass'));
});
