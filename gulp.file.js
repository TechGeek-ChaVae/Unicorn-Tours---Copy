const gulp =require("gulp");
const browsersync = require("browser-sync").create();

const paths = {
    styles: {
        src:[".src/*.css"],
        dest:"./dist/",
    },
    html: {
        src:[".src/*.html"],
        dest: "./dist/",
    },
    img: {
        src:[".src/*img/*"],
        dest: "./dist/",
    },
};

/*Styles*/
function style() {
    return gulp
    .src(paths.styles.src)
    .pipe(gulp.dest(paths.styles.dest))
    pipe(BrowserSync.stream());
}

/*HTML*/
function html() {
    return gulp
    .src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browsersync.stream());
}

/*Images*/
function img() {
    return gulp
    .src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browsersync.stream());
}

/*Functions*/
function watch() {
browsersync.init({
    server:{
        baseDir: "./src/",
    },
});
gulp.watch(paths.img.src, img);
gulp.watch(paths.html.src, html);
gulp.watch(paths.html.src, style);
}

/*GULP TASK*/
exports.default = watch