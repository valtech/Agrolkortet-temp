module.exports = function (gulp, plugins) {
    return function minifyImages () {

        var config = {
            srcFiles: [
                // Include files
                "./src/assets/img/**/*.*"
            ],
            distFolder: "./dist/assets/img/",
            distWebAppFolder: "../../../WebbApp.GWF1/source/Web/dist/Agrolkortet2Theme/assets/img/",
            notifyError: "Image minification task failed.",
            notifySuccess: "Image minification task completed."
        };

        return gulp.src(config.srcFiles)
            .pipe(plugins.plumber({ errorHandler: plugins.notify.onError(config.notifyError), onLast: true }))
            .pipe(plugins.imagemin([
                plugins.imageminJpegRecompress({
                    min: 60,
                    max: 90
                }),
                plugins.imageminPngquant(),
                plugins.imageminGifsicle(),
                plugins.imageminSvgo()
            ], {
                verbose: true
            }
            ))
            .pipe(plugins.gulp.dest(config.distFolder))
            .pipe(plugins.gulp.dest(config.distWebAppFolder))
            .pipe(plugins.notify({ message: config.notifySuccess, onLast: true }));
    };
};
