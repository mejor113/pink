'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync');

// compile
gulp.task('less', function(){
    gulp.src('./less/main.less')
    .pipe(less())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({stream: true}));
});


gulp.task('browser-sync', function() { 
    browserSync({ 
        server: { 
            baseDir: '.' 
        },
        notify: false 
    });
});


// compile and watch
gulp.task('watch', ['browser-sync', 'less'], function(){
    gulp.watch('./less/*.less', ["less"]);
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('./js/*.js', browserSync.reload)
});


gulp.task('default', ['less', 'watch']);