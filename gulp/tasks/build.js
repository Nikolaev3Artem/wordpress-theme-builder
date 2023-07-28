export const build = () => {
    return app.gulp.src(`${app.path.src.files}/${app.path.src.assets}/**`)
     .pipe(app.gulp.dest(`${app.path.build.files}/`));
}