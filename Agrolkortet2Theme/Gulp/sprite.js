module.exports = function (gulp, plugins) {
    return function sprite () {

        var config = {
            srcFiles: "./src/img/icons/*.png",
            srcFileRetina: "./src/img/icons/*2x.png",
            distFolderSprite: "./dist/assets/img/",
            distFolderSpriteWebApp: "../../../WebbApp.GWF1/source/Web/dist/Agrolkortet2Theme/assets/img/",
            distFolderCss: "./src/styles/2_tools/",
            distFolderCssBackground: "/dist/Agrolkortet2Theme/assets/img/",
            distFilenameSprite: "sprite.png",
            distFilenameSpriteRetina: "sprite@2x.png",
            distFilenameCss: "_tools.sprite.scss",
            distCssFormat: "scss_retina",
            distCssVarPrefix: "icon-",
            notifyError: "Sprite task failed: <%= error.message %>.",
            notifySuccessCss: "Sprite css task completed.",
            notifySuccessSprite: "Sprite image task completed."
        };

        var spriteConfig = {
            // https://github.com/twolfson/gulp.spritesmith
            imgName: config.distFilenameSprite,
            imgPath: config.distFolderCssBackground + config.distFilenameSprite,
            retinaImgName: config.distFilenameSpriteRetina,
            retinaImgPath: config.distFolderCssBackground + config.distFilenameSpriteRetina,
            retinaSrcFilter: [config.srcFileRetina],
            cssName: config.distFilenameCss,
            cssFormat: config.distCssFormat,
            cssVarMap: function (sprite) { sprite.name = config.distCssVarPrefix + sprite.name; }
        };

        var stream = gulp.src(config.srcFiles)
            .pipe(plugins.plumber({ errorHandler: plugins.notify.onError(config.notifyError), onLast: true }))
            .pipe(plugins.spritesmith(spriteConfig));

        var cssStream = stream.css
            .pipe(plugins.gulp.dest(config.distFolderCss))
            .pipe(plugins.notify({ message: config.notifySuccessCss, onLast: true }));

        var imgStream = stream.img
            .pipe(plugins.vinylBuffer())
            .pipe(plugins.imagemin([
                plugins.imageminPngquant()
            ], {
                verbose: true
            }
            ))
            .pipe(plugins.gulp.dest(config.distFolderSprite))
            .pipe(plugins.gulp.dest(config.distFolderSpriteWebApp))
            .pipe(plugins.notify({ message: config.notifySuccessSprite }));

        return plugins.mergeStream(imgStream, cssStream);
    };
};
