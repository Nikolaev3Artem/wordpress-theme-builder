export const js = () => {
    return app.gulp.src(`${app.path.src.files}/${app.path.src.assets}/${app.path.src.js}/**`)
     .pipe(app.gulp.dest(`${app.path.build.files}/${app.path.build.js}/`));
 }