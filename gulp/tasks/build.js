import rename from "gulp-rename";

export const build = () => {
   return app.gulp.src(`../Theme-Name/!HTML/**/*.html`)
    .pipe(rename(function (path) {
        return {
            dirname: path.dirname,
            basename: path.basename,
            extname: ".php"
        };
    }))
    .pipe(app.gulp.dest(`../Theme-Name/`));
}