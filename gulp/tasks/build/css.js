import cleanCss from "gulp-minify-css";

export const css = () => {
    return app.gulp.src(`${app.path.src.files}/${app.path.src.assets}/${app.path.src.css}/*.css`)
        .pipe(cleanCss())
        .pipe(app.gulp.dest(`${app.path.build.files}/${app.path.build.css}/`))
 }