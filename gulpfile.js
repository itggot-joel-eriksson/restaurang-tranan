var gulp = require("gulp"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer");

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
            browsers: ["last 3 versions"],
            cascade: false
        }))
        .pipe(gulp.dest("site/css"));
});

gulp.task("watch", function() {
    gulp.watch("source/sass/*.sass", ["sass"]);
    gulp.watch("site/css/*.css", ["autoprefix"]);
});

gulp.task("default", ["sass", "autoprefix", "watch"], function() {

});
