var gulp = require('gulp');
var less = require('gulp-less'); 
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
 

gulp.task('compile-less', function() {  
  gulp.src('./less_files/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('./public/styles/'));
}); 

gulp.task('watch-less', function() {  
  gulp.watch('./less_files/**/*.less' , ['compile-less']);
});
 
gulp.task('serve', function () {
 
  
    browserSync.init({
        server: {
            baseDir: "./public/"
        }
    }); 
    gulp.watch("./less_files/*.less").on("change", reload);
    gulp.watch("./public/*.html").on("change", reload);
});
 

gulp.task('default', ['watch-less', 'serve']);

var cssfiles = [
  "./public/styles/style.css",
  "./public/styles/**/*.css"
];

gulp.task('allcss', function () {
    return gulp.src(cssfiles, {base: './public/styles/'})
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(concat('main.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./public/styles/'));
});