const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const tsProject = typescript.createProject('tsconfig.json');

const tsFiles = 'frontend/**/*.ts';
const staticFiles = ['frontend/**/*', '!frontend/**/*.ts'];

// clean the contents of the distribution directory
gulp.task('clean', function () {
  return del('public/**/*');
});

// TypeScript compile
gulp.task('compile', function () {
  const tsResult = tsProject
    .src()
    .pipe(typescript(tsProject));

  return tsResult.js.pipe(gulp.dest('public'));
});

gulp.task('copy:assets', function() {
  return gulp.src(staticFiles)
    .pipe(gulp.dest('public'))
});

gulp.task('build', ['clean', 'compile', 'copy:assets']);
gulp.task('default', ['build']);

gulp.task('serve', ['build'], function(){
  // BrowserSync

  gulp.watch(tsFiles, ['compile']);
  gulp.watch(staticFiles, ['copy:assets']);
});