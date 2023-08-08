import imagemin from 'gulp-imagemin';

export const images = () => {
    return app.gulp.src(`${app.path.src.files}/${app.path.src.assets}/${app.path.src.images}/**`)
     .pipe(imagemin())
     .pipe(app.gulp.dest(`${app.path.build.files}/${app.path.build.images}/`));
 }