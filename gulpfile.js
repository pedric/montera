var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');

gulp.watch("src/scss/*.scss", ['sass']);
gulp.watch("src/scss/*/*.scss", ['sass']);
gulp.watch("src/js/*.js", ['js']);
gulp.watch("src/img/*", ['img']);

// CSS
gulp.task('sass', function() {
  return gulp.src("src/scss/main.scss")
    .pipe(sass())
    .pipe(gulp.dest("css"))
});

// JS
gulp.task('js', function() {
  return gulp.src("src/js/*.js")
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest("js"))
});

// IMG
gulp.task('img', function() {
  gulp.src('src/img/*')
          .pipe(imagemin())
          .pipe(gulp.dest('images'))
});

gulp.task('default', ['sass', 'js', 'img']);
