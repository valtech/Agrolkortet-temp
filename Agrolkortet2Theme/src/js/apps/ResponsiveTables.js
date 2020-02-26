window.Agrolkortet2Theme = window.Agrolkortet2Theme || {};

(function (app) {
    'use strict';

    app.ResponsiveTables = function() {
        const tables = document.querySelectorAll('table');

        const wrap = function(element, wrapper) {
            wrapper.appendChild(element);
        }

        const wrapAndReplace = function(element) {
            const copy = element.cloneNode(true);

            const innerWrapper = document.createElement('div');
            innerWrapper.classList.add("table-wrapper--inner")

            const outerWrapper = document.createElement('div');
            outerWrapper.classList.add("table-wrapper")

            if (element.offsetWidth > element.parentNode.offsetWidth) {
                outerWrapper.classList.add("fade-right")
            }

            wrap(copy, innerWrapper);
            wrap(innerWrapper, outerWrapper);

            element.outerHTML = outerWrapper.outerHTML
        }

        const init = function() {
            Array.prototype.forEach.call(tables, table => {
                wrapAndReplace(table)
            })
        };

        init();
    };
}(window.Agrolkortet2Theme));
