module.exports = function (gulp, plugins) {
    return function copyBinary () {

        var config = {
            srcFiles: [
                // Include files
                "./bin/Lantmannen.Agrolkortet2Theme.dll"
            ],
            distWebAppFolder: "../../../WebbApp.GWF1/source/Web/bin/",
            notifyError: "Copy binary task failed.",
            notifySuccess: "Copy binary task completed."
        };

        return gulp.src(config.srcFiles)
            .pipe(plugins.plumber({ errorHandler: plugins.notify.onError(config.notifyError), onLast: true }))
            .pipe(plugins.gulp.dest(config.distWebAppFolder))
            .pipe(plugins.notify({ message: config.notifySuccess, onLast: true }));
    };
};
