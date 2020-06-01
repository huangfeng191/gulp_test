var gulp = require('gulp');
var pipeline = require('readable-stream').pipeline;
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
gulp.task('compress_lib', function(path) {

    return gulp.src('lib/*.js')
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('dist/lib'))
    // return pipeline(

    //     gulp.src('lib/*.js'), 
    //     // babel(),
    //     uglify(),
    //     gulp.dest('dist/lib')

    // );
});


gulp.task('compress_js', function() {
    return pipeline(
        gulp.src('js/*.js'),
        // uglify(),
        gulp.dest('dist/js')
    );
});


gulp.task('b', gulp.parallel("compress_lib"));

exports.default = function() {
    gulp.parallel("compress_lib")
    gulp.watch(['lib/*.js'], gulp.parallel("compress_lib"))
    // gulp.watch(['js/*.js'],gulp.parallel("compress_js"))
}