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
import { reset } from "./gulp/tasks/reset.js"
import { css } from "./gulp/tasks/build/css.js"
import { images } from "./gulp/tasks/build/images.js"
import { js } from "./gulp/tasks/build/javascript.js"
import { copy } from "./gulp/tasks/build.js"

function watcher() {
    gulp.watch('../!HTML/assets/**', copy, css)
}

const build = gulp.series(reset,copy,css)

const dev = gulp.series(build, watcher)

// команди для завдань
gulp.task('template', template)
gulp.task('clean',reset)
gulp.task('build', build)
gulp.task('dev', dev)
gulp.task('build:css', css)
gulp.task('build:images', images)
gulp.task('build:js', js)


