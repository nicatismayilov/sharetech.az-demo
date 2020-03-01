const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('compile-scss', () => {
      return gulp.src('scss/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('styles'))
})

gulp.task('watch', function() {
      gulp.watch('scss/**/*.scss', gulp.series('compile-scss'))
})