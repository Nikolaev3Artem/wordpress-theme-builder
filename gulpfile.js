// основний модуль
import gulp from "gulp";

// імпорт модулів
import { path } from "./gulp/config/path.js";

// передаємо значення в глобальну змінну
global.app = {
    path: path,
    gulp: gulp,
}

// імпорт задач
import { build } from "./gulp/tasks/build.js"
import { template } from "./gulp/tasks/template.js";

// виконання сценарію по замовченню
gulp.task('build', build);
gulp.task('template', template)