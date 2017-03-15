/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var streamify = require('gulp-streamify')
var source = require('vinyl-source-stream');
var shell = require('gulp-shell');

gulp.task('tsc', shell.task([
  'tsc --removeComments'
]));

gulp.task('default',["tsc"], function () {
    return browserify('.', {debug:true})
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('bundle.js'))
        //.pipe(streamify(uglify()))
        .pipe(gulp.dest('.'))
});

gulp.task("min", ["tsc", "default", ], function () {
    gulp.src("bundle.js")
        .pipe(uglify())
        .pipe(rename("bundle.min.js"))
        .pipe(gulp.dest('dist'))
});