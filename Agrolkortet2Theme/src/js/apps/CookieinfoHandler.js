window.Agrolkortet2Theme = window.Agrolkortet2Theme || {};

(function (app) {
    'use strict';

    app.CookieinfoHandler = function() {
        const cookieName = 'hasshowncookie';

        const setHasShownCookie = function() {
            const key = encodeURIComponent(cookieName);
            const value = encodeURIComponent('1');

            document.cookie = key + '=' + value + '; ' + 'expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/;';
        };

        const hasShownBefore = function () {
            var regex = '(?:(?:^|.*;\\s*)' + encodeURIComponent(cookieName) + '\\s*\\=\\s*([^;]*).*$)|^.*$';
            var value = document.cookie.replace(new RegExp(regex), '$1');
            return decodeURIComponent(value).length > 0;
        };

        const clearMessage = function (wrap) {
            document.querySelector('body').classList.remove('has-cookie-information');
            wrap.classList.add('is-hidden');
            setHasShownCookie();
        };

        const init = function() {
            if (hasShownBefore()) return;
            
            const wrap = document.querySelector('.cookieinformation');
            wrap.classList.remove('is-hidden');
            document.querySelector('body').classList.add('has-cookie-information');

            document.querySelectorAll('.cookieinformation-clearbtn').forEach(button => {
                button.addEventListener('click',
                    function() {
                        clearMessage(wrap);
                    });
            });
        };

        init();
    };
}(window.Agrolkortet2Theme));
