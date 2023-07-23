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
import { build } from "./gulp/tasks/build.js"

function watcher() {
    gulp.watch('../!HTML/assets/**', build)
}

const dev = gulp.series(reset, build, watcher)

// команди для завдань
gulp.task('template', template)
gulp.task('clean',reset)
gulp.task('build', gulp.series(reset,build))
gulp.task('watch', dev)
gulp.task('build:css', css)
gulp.task('build:images', images)
gulp.task('build:js', js)


