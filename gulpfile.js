var gulpfile = require('gulp'),
    postcss = require('gulp-postcss'),
    sass = require('gulp-sass'),
    Px2rpx = require('./index'),
    options = {
      rpxUnit: 0.5
    },
    sassConfig = {
      inputDirectory: 'src/*.scss',
      outputDirectory: 'assets',
      options: {
        outputStyle: 'expanded'
      }
    };

gulpfile.task('default', function() {
  var processors = [Px2rpx(options)];
  return gulpfile.src(sassConfig.inputDirectory)
      .pipe(sass(sassConfig.options).on('error', sass.logError))
      .pipe(postcss(processors))
      .pipe(gulpfile.dest(sassConfig.outputDirectory));
});