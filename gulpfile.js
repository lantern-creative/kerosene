var gulp = require('gulp');
var watch = require('gulp-watch');
var compass = require('gulp-compass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
path = require('path');



var compass = require('gulp-compass');
gulp.task('compass', ['concat:dependencies'], function() {
  gulp.src('./sass/*.scss')
    .pipe(compass({
      task: 'watch',
      config_file: './config.rb',
      css: 'public/css',
      sass: 'sass'
    }))
    .pipe(gulp.dest('app/assets/temp'));
});

gulp.task('concat:dependencies',  function() {
  return gulp.src([
"node_modules/angular/angular.min.js",
"public/libs/firebase/firebase.js",
"public/libs/angularfire/dist/angularfire.min.js",
"public/libs/Chart.js/Chart.min.js",
"public/libs/angular-chart.js/dist/angular-chart.min.js",
"public/libs/angular-route/angular-route.min.js"
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('dependencies.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/js'))
});