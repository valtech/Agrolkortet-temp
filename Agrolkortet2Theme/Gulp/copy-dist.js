module.exports = function (gulp, plugins) {
    return function copyDist () {

        var config = {
            srcFiles: [
                // Include files
                "./dist/**/*"
            ],
            distWebAppFolder: "../../../WebbApp.GWF1/source/Web/dist/Agrolkortet2Theme/",
            notifyError: "Copy assets task failed.",
            notifySuccess: "Copy assets task completed."
        };

        return gulp.src(config.srcFiles, { base: "dist" })
            .pipe(plugins.plumber({ errorHandler: plugins.notify.onError(config.notifyError), onLast: true }))
            .pipe(plugins.cleanDest(config.distWebAppFolder))
            .pipe(plugins.gulp.dest(config.distWebAppFolder))
            .pipe(plugins.notify({ message: config.notifySuccess, onLast: true }));
    };
};
