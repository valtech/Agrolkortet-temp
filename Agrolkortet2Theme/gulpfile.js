// Define gulp
var gulp = require("gulp");

// Lazy loads all plugins   https://github.com/jackfranklin/gulp-load-plugins
var plugins = require("gulp-load-plugins")({
    rename: {
        "jshint": "jshint-linter"
    },
    pattern: [
        "*",
        "gulp-*",
        "gulp.*",
        "postcss-*"
    ]
});


// Get task from external file
var getTask = function (task) {
    return require("./Gulp/" + task)(gulp, plugins);
};

// Styles
gulp.task("stylelint", getTask("stylelint"));  //TODO: Use or not?
//gulp.task("styles", gulp.series("stylelint", getTask("styles")));
gulp.task("styles", getTask("styles"));

// Scripts
gulp.task("jshint", getTask("jshint"));
//gulp.task("scripts", gulp.series("jshint", getTask("scripts")));
gulp.task("scripts", getTask("scripts"));

// Images
gulp.task("minify-images", getTask("minify-images"));

// Copy files to WebApp project
gulp.task("copy-binary", getTask("copy-binary"));
gulp.task("copy-dist", getTask("copy-dist"));
gulp.task("copy-views", getTask("copy-views"));

// Watch
gulp.task("watch", getTask("watch"));

// Start
gulp.task("start", gulp.series(getTask("styles"), getTask("jshint"), getTask("scripts"), getTask("minify-images"), getTask("copy-binary"), getTask("copy-dist"), getTask("copy-views"), getTask("watch")));

// Build server task
gulp.task("buildrelease", gulp.series(getTask("styles"), getTask("scripts")));

