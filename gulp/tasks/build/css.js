export const css = () => {
    return app.gulp.src(`${app.path.src.files}/${app.path.src.assets}/${app.path.src.css}/**`)
     .pipe(app.gulp.dest(`${app.path.build.files}/${app.path.build.assets}/${app.path.build.css}/`));
 }