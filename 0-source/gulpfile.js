var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var jsconcat = require('gulp-concat');
var jsuglify = require('gulp-uglify');
var htmlmin = require('gulp-html-minifier');
var svgmin = require('gulp-svgmin');
var cssmin = require('gulp-cssnano');
var cssbeautify = require('gulp-cssbeautify')
var rename = require("gulp-rename");
var gutil = require('gulp-util');

gulp.task('default', ['buildhtml', 'buildcss', 'buildjs', 'moveimgs', 'minifysvgs', 'serve', 'buildfonts']);

gulp.task('buildhtml', function buildHTML() {
     return gulp.src('src/html/index.jade')
          .pipe(pug())
          .pipe(pug().on('error', gutil.log))
          .pipe(htmlmin({collapseWhitespace: true}))
          .pipe(gulp.dest('public'))
});

gulp.task('buildcss', function () {
     return gulp.src('src/stylesheets/app.sass')
          .pipe(sass().on('error', sass.logError))
          .pipe(cssmin())
          .pipe(cssbeautify())
          .pipe(gulp.dest('public/stylesheets/'))
          .pipe(browserSync.stream());
});

gulp.task('buildjs', function() {
     return gulp.src('src/javascript/*.js')
          .pipe(jsconcat('app.js'))
          .pipe(jsuglify())
          .pipe(rename({suffix: ".min" }))
          .pipe(gulp.dest('public/javascript'));
});

gulp.task('moveimgs', function() {
     return gulp.src('src/images/*')
          .pipe(gulp.dest('public/images'))
});

gulp.task('buildfonts', function() {
     return gulp.src('src/fonts/*')
          .pipe(gulp.dest('public/fonts'))
});


gulp.task('minifysvgs', function(){
     return gulp.src('src/svg/*.svg')
          .pipe(svgmin())
          .pipe(gulp.dest('public/images'))
});

gulp.task ('serve', function(){
     browserSync.init({server: "public"})
     gulp.watch("src/stylesheets/*/*.sass", ['buildcss']);
     gulp.watch("src/javascript/*.js", ['buildjs']);
     gulp.watch("src/images/*", ['moveimgs']);
     gulp.watch("src/html/*.jade", ['buildhtml']).on('change', browserSync.reload);
});
