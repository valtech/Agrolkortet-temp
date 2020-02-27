window.Agrolkortet2Theme = window.Agrolkortet2Theme || {};

(function (app) {
    'use strict';

    app.FAQ = function() {
        
        const questionCallouts = document.querySelectorAll(".callout-questionpage");

        const init = function() {
            if (questionCallouts) {
                Array.prototype.forEach.call(questionCallouts, callout => {
                    const question = callout.querySelector(".questionpage-question");
                    const answer = callout.querySelector(".questionpage-answer");

                    question.addEventListener('click', function() {
                        question.classList.toggle("open");
                        answer.classList.toggle("show");
                    });
                });
            }
        };

        init();
    };
}(window.Agrolkortet2Theme));
