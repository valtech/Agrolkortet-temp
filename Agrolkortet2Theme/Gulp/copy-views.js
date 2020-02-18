module.exports = function (gulp, plugins) {
    return function copyViews () {

        var config = {
            srcFiles: [
                // Include files
                "./Views/**/*.*"
            ],
            distWebAppFolder: "../../../WebbApp.GWF1/source/Web/Views/Agrolkortet2Theme/",
            notifyError: "Views task failed.",
            notifySuccess: "Views task completed."
        };

        return gulp.src(config.srcFiles)
            .pipe(plugins.plumber({ errorHandler: plugins.notify.onError(config.notifyError), onLast: true }))
            .pipe(plugins.gulp.dest(config.distWebAppFolder))
            .pipe(plugins.notify({ message: config.notifySuccess, onLast: true }));
    };
};
