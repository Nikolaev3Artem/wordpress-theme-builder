export const template = () => {
    const assets_folder = 'assets'

    return app.gulp.src('*.*', {read: false})
        .pipe(app.gulp.dest(`${app.path.src.folder}/${app.path.src.assets}/img/content`))
        .pipe(app.gulp.dest(`${app.path.src.folder}/${app.path.src.assets}/img/icons`))
        .pipe(app.gulp.dest(`${app.path.src.folder}/${app.path.src.assets}/css`))
        .pipe(app.gulp.dest(`${app.path.src.folder}/${app.path.src.assets}/js`))
        .pipe(app.gulp.dest(`${app.path.src.folder}/template-parts`))
};