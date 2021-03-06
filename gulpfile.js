//Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

//Lint Task
gulp.task('lint', function(){
  return gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

//Compile Our sass
gulp.task('sass',function(){
  return gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
});

//Watch Files for Changes
gulp.task('watch', function(){
  gulp.watch('js/*.js', ['lint','scripts']);
  gulp.watch('scss/*.scss',['sass']);
});

//Default task
gulp.task('default',['lint','sass','scripts','watch']);
