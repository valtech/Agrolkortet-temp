window.Agrolkortet2Theme = window.Agrolkortet2Theme || {};

(function (app) {
    'use strict';

    app.CookieinfoHandler = function() {
        var cookiewrapSelector = '.cookieinformation';
        var cookieclearBtnSelector = '.cookieinformation-clearbtn';

        var set = function(key, value) {
            key = encodeURIComponent(key);
            value = encodeURIComponent(value);

            document.cookie = key + '=' + value + '; ' + 'expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/;';

            return true;
        };

        // Gets a cookie and returns its value
        var getValue = function(key) {
            if(typeof key !== typeof 'str') {
                return false;
            }

            var regex = '(?:(?:^|.*;\\s*)' + encodeURIComponent(key) + '\\s*\\=\\s*([^;]*).*$)|^.*$';
            var value = document.cookie.replace(new RegExp(regex), '$1');
            value = decodeURIComponent(value);

            return value.length > 0 ? value : false;
        };

        this.init = function() {
            if(this.hasShownBefore() === false) {
                this.wrap = $(cookiewrapSelector);
                this.wrap.removeClass('is-hidden');
                $('body').addClass('has-cookie-information');
                this.btn  = $(cookieclearBtnSelector);
                bindUIActions.call(this);
            }
        };

        var bindUIActions = function() {
            var that = this;
            this.btn.on('click', function() {
                that.clearMessage.call(that);
                $('body').removeClass('has-cookie-information');
            });
        };

        // Returns true if cookie information has been shown before
        this.hasShownBefore = function() {
            return getValue('hasshowncookie') === '1';
        };

        this.clearMessage = function() {
            this.wrap.addClass('is-hidden');
            set('hasshowncookie', '1');
        };
    };
}(window.Agrolkortet2Theme));
