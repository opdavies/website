gulp.task('minify-prod-html', function () {
    gulp.src('output_prod/**/*.html')
        .pipe(plugins.htmlmin(config.htmlmin))
        .pipe(gulp.dest('output_prod'));
});
