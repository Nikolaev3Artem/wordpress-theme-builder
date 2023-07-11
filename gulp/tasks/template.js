export const template = () => {

    return app.gulp.src('*.*', {read: false})
        .pipe(app.gulp.dest(`../${app.path.theme_name}/${app.path.src.folder}/${app.path.src.assets}/img/content`))
        .pipe(app.gulp.dest(`../${app.path.theme_name}/${app.path.src.folder}/${app.path.src.assets}/img/icons`))
        .pipe(app.gulp.dest(`../${app.path.theme_name}/${app.path.src.folder}/${app.path.src.assets}/css`))
        .pipe(app.gulp.dest(`../${app.path.theme_name}/${app.path.src.folder}/${app.path.src.assets}/js`))
        .pipe(app.gulp.dest(`../${app.path.theme_name}/${app.path.src.folder}/template-parts`))
        .pipe(app.gulp.dest(`../${app.path.theme_name}/${app.path.src.folder}/template-parts`))
};