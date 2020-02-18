module.exports = function (gulp, plugins) {
    return function watch () {

        var config = {
            srcStyles: "./src/scss/**/*.scss",
            srcScripts: "./src/js/**/*.js",
            srcViews: "./Views/**/*.cshtml"
        }

        gulp.watch(config.srcStyles, gulp.series("styles"));
        plugins.notify("Styles watch task started.").write("");

        gulp.watch(config.srcScripts, gulp.series("scripts"));
        plugins.notify("Scripts watch task started.").write("");

        gulp.watch(config.srcViews, gulp.series("copy-views"));
        plugins.notify("Views watch task started.").write("");
    };
};
