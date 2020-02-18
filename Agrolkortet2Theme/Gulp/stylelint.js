module.exports = function (gulp, plugins) {
    return function stylelint() {

        var config = {
            srcFiles: [
                // Include files
                "./src/styles/**/*.scss",
                // Exclude files
                "!./src/styles/2_tools/_tools.sprite.scss",
                "!./src/styles/3_generic/_generic.normalize.scss",
            ],
            notifyError: "Stylelint task failed."
        };

        var stylelintConfig = {
            "plugins": [
                /**
                 * Plugin that makes it possible to specify order och blocks and properties
                 * https://github.com/hudochenkov/stylelint-order
                 */
                "stylelint-order"
            ],
            /**
             * Recommended standard configuration for stylelint
             * https://github.com/stylelint/stylelint-config-standard
             */
            "extends": "stylelint-config-standard",
            /**
             * Overrides of standard stylelint rules
             * https://github.com/stylelint/stylelint/blob/master/docs/user-guide/rules.md
             */
            "rules": {
                "at-rule-empty-line-before": ["always", {
                    except: [
                        "blockless-after-same-name-blockless"
                    ],
                    ignore: [
                        "after-comment",
                        "inside-block"
                    ]
                }],
                "at-rule-no-unknown": null,
                "declaration-empty-line-before": "never",
                "indentation": 4,
                "max-empty-lines": 3,
                "no-descending-specificity": null,
                "number-leading-zero": "never",
                "rule-empty-line-before": ["always", {
                    except: [
                        "first-nested"
                    ],
                    ignore: [
                        "after-comment"
                    ]
                }],
                "selector-type-no-unknown": null,
                /**
                 * Custom block order
                 * https://github.com/hudochenkov/stylelint-order/blob/master/rules/declaration-block-order/README.md
                 */
                "order/order": [
                    "custom-properties",    // --myVariable;
                    "dollar-variables",     // $myVariable;
                    {
                        type: "at-rule",
                        name: "extend",     // @extend .foo;
                    },
                    {
                        type: "at-rule",
                        name: "include",    // @include clearfix;
                    },
                    "declarations",         // display: block;
                    {
                        type: "at-rule",
                        name: "include",    // @include hello { display: block; }
                        hasBlock: true
                    },
                    {
                        type: "at-rule",
                        name: "media",      // @media () {}
                        hasBlock: true
                    },
                    "rules"                 // .child-element {}
                ]
            }
        }

        var postCssPlugins = [
            plugins.stylelint(stylelintConfig),
            plugins.postcssReporter({ throwError: true })
        ];

        return gulp.src(config.srcFiles)
            .pipe(plugins.plumber({ errorHandler: plugins.notify.onError(config.notifyError), onLast: true }))
            .pipe(plugins.postcss(postCssPlugins, { syntax: plugins.postcssScss }));
    };
};
