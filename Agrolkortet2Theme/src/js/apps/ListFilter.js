window.Agrolkortet2Theme = window.Agrolkortet2Theme || {};

(function (app) {
    'use strict';

    app.ListFilter = function() {
        
        const form = document.querySelector(".list-categoryfilterwrap");

        const init = function() {
            if (form) {
                form.addEventListener('change', (e) => { form.submit() }) 
            }
        };

        init();
    };
}(window.Agrolkortet2Theme));
