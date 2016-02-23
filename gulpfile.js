var gulp = require("gulp"),
    sass = require("gulp-sass"),
    coffee = require("gulp-coffee"),
    webserver = require("gulp-webserver"),
    autoprefixer = require("gulp-autoprefixer");

gulp.task("webserver", function() {
    gulp.src("site")
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: "index.html"
    }));
});

gulp.task("sass", function () {
    gulp.src("source/sass/*.sass")
        .pipe(sass({
            outputStyle: "expanded",
            indentType: "tab",
            indentWidth: 1
        }))
        .pipe(gulp.dest("site/css"));
});

gulp.task("autoprefix", function () {
    gulp.src("site/css/*.css")
        .pipe(autoprefixer({
            browsers: ["last 5 versions"],
            cascade: false
        }))
        .pipe(gulp.dest("site/css"));
});

gulp.task("coffee", function () {
    gulp.src("source/coffee/*.coffee")
        .pipe(coffee())
        .pipe(gulp.dest("site/js"));
});

gulp.task("watch", function() {
    gulp.watch("source/sass/*.sass", ["sass"]);
    gulp.watch("source/coffee/*.coffee", ["coffee"]);
    gulp.watch("site/css/*.css", ["autoprefix"]);
});

gulp.task("default", ["webserver", "sass", "coffee", "watch"]);
