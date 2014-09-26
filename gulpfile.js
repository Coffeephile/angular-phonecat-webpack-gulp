var gulp        = require('gulp');
var webpack     = require('gulp-webpack');
var ngAnnotate  = require('gulp-ng-annotate');
var uglify      = require('gulp-uglify');

gulp.task('webpack:build', function() {
    var stream = gulp.src('app/js/main.js')
        .pipe(webpack({
            output: {
                filename: "build.js"
            }
        }))
        .pipe(gulp.dest('dist'));

    return stream;
});

gulp.task('default', ['webpack:build'], function () {
    return gulp.src('dist/build.js')
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});