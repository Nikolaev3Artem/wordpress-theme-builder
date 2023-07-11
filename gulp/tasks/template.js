export const template = () => {

    return app.gulp.src('*.*', {read: false})
        .pipe(app.gulp.dest(`${app.path.src.files}/${app.path.src.assets}/img/content`))
        .pipe(app.gulp.dest(`${app.path.src.files}/${app.path.src.assets}/img/icons`))
        .pipe(app.gulp.dest(`${app.path.src.files}/${app.path.src.assets}/css`))
        .pipe(app.gulp.dest(`${app.path.src.files}/${app.path.src.assets}/js`))
        .pipe(app.gulp.dest(`${app.path.src.files}/template-parts`))
        .pipe(app.gulp.dest(`${app.path.src.files}/templates`))
};