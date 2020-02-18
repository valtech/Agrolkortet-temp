module.exports = function (gulp, plugins) {
    return function jshint () {

        var config = {
            srcFiles: [
                // Include files
                "./src/scripts/modules/**/*.js"
                // Exclude files
            ],
            notifyError: "JSHint task failed."
        };

        return gulp.src(config.srcFiles)
            .pipe(plugins.plumber({ errorHandler: plugins.notify.onError(config.notifyError), onLast: true }))
            .pipe(plugins.jshint())
            .pipe(plugins.jshint.reporter("jshint-stylish"))
            .pipe(plugins.jshint.reporter("fail"));
    };
};
