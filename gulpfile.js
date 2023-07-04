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
import { copy } from "./gulp/tasks/copy.js"

// виконання сценарію по замовченню
gulp.task('default', copy);