module.exports = function (gulp, plugins) {
    return function styles () {

        var config = {
            srcFiles: "./src/scss/main.scss",
            distFolder: "./dist/",
            distWebAppFolder: "../../../WebbApp.GWF1/source/Web/dist/Agrolkortet2Theme/",
            distFilename: "main.css",
            distFileSuffix: ".min",
            notifyError: "Styles task failed.",
            notifySuccess: "Styles task completed."
        };

        return gulp.src(config.srcFiles)
            .pipe(plugins.plumber({errorHandler: plugins.notify.onError(config.notifyError), onLast: true }))
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.sass().on("error", plugins.sass.logError))
            .pipe(plugins.autoprefixer())
            .pipe(plugins.sourcemaps.write())
            .pipe(plugins.size({ title: "Original file size: " }))
            .pipe(plugins.rename(config.distFilename))
            .pipe(plugins.gulp.dest(config.distFolder))
            .pipe(plugins.gulp.dest(config.distWebAppFolder))
            .pipe(plugins.cssnano())
            .pipe(plugins.rename({ suffix: config.distFileSuffix }))
            .pipe(plugins.size({ title: "Minified file size: " }))
            .pipe(plugins.gulp.dest(config.distFolder))
            .pipe(plugins.gulp.dest(config.distWebAppFolder))
            .pipe(plugins.gzip())
            .pipe(plugins.size({ title: "Gzipped file size: " }))
            .pipe(plugins.notify({ message: config.notifySuccess, onLast: true }));
    };
};
