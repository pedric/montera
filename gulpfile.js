var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var cleanCSS = require('gulp-clean-css');

gulp.watch("src/css/*.scss", ['sass']);
gulp.watch("src/css/*/*.scss", ['sass']);
gulp.watch("src/js/*.js", ['js']);
gulp.watch("src/img/*", ['img']);

// FOUNDATION BASE CSS
// gulp.task('critical_sass', function() {
//   return gulp.src("src/css/app.scss")
//     .pipe(sass())
//     .pipe(cleanCSS())
//     .pipe(gulp.dest("assets/css"))
// });

// CRITICAL CSS
gulp.task('sass', function() {
  return gulp.src("src/css/*.scss")
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(gulp.dest("assets/css"))
});

// JS
gulp.task('js', function() {
  return gulp.src("src/js/*.js")
    .pipe(gulp.dest("assets/js"))
});

// JS.MAP
gulp.task('js-map', function() {
  return gulp.src("src/js/*.map")
    .pipe(gulp.dest("assets/js"))
});

// IMG
gulp.task('img', function() {
  gulp.src('src/img/*')
          .pipe(imagemin())
          .pipe(gulp.dest('assets/img'))
});

gulp.task('default', ['sass', 'js', 'img', 'js-map']);
