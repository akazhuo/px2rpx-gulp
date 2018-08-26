var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    Px2rpx = require('px2rpx'),
    px2rpxIns = new Px2rpx();

gulp.task('default', function() {
  var processors = [px2rpxIns()];
  return gulp.src('./src/*.css')
      .pipe(postcss(processors))
      .pipe(gulp.dest('./dest'));
});