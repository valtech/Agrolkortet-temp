module.exports = function(gulp, plugins) {
    return function scripts() {
        var config = {
            srcFiles: ["./src/js/apps/*.js", "./src/js/script.js"],
            distFolder: "./dist/",
            distWebAppFolder:
                "../../../WebbApp.GWF1/source/Web/dist/Agrolkortet2Theme/",
            distFilename: "footer.js",
            distFileSuffix: ".min",
            notifyError: "Scripts task failed.",
            notifySuccess: "Scripts task completed."
        };

        return gulp
            .src(config.srcFiles)
            .pipe(
                plugins.plumber({
                    errorHandler: plugins.notify.onError(config.notifyError),
                    onLast: true
                })
            )
			.pipe(plugins.sourcemaps.init())
            .pipe(plugins.babel())
            .pipe(plugins.concat(config.distFilename))
            .pipe(plugins.sourcemaps.write())
            .pipe(plugins.size({ title: "Original file size: " }))
            .pipe(plugins.gulp.dest(config.distFolder))
            .pipe(plugins.gulp.dest(config.distWebAppFolder))
            .pipe(plugins.uglify())
            .pipe(plugins.size({ title: "Minified file size: " }))
            .pipe(plugins.rename({ suffix: config.distFileSuffix }))
            .pipe(plugins.gulp.dest(config.distFolder))
            .pipe(plugins.gulp.dest(config.distWebAppFolder))
            .pipe(plugins.gzip())
            .pipe(plugins.size({ title: "Gzipped file size: " }))
            .pipe(
                plugins.notify({ message: config.notifySuccess, onLast: true })
            );
    };
};
