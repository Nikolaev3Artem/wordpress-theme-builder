// основний модуль
import gulp from "gulp";

// імпорт модулів
import { path } from "./gulp/config/path.js";

// передаємо значення в глобальну змінну
global.app = {
    path: path,
    gulp: gulp,
}

// імпорт завдань
import { template } from "./gulp/tasks/template.js";
import { css } from "./gulp/tasks/build/css.js"
import { images } from "./gulp/tasks/build/images.js"
import { js } from "./gulp/tasks/build/javascript.js"

// команди для завдань
gulp.task('template', template)
gulp.task('build', gulp.series(css,images,js))
gulp.task('build:css', css)
gulp.task('build:images', images)
gulp.task('build:js', js)
