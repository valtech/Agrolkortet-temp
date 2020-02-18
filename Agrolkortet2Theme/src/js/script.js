(function() {
    "use strict";

    window.Agrolkortet2Theme = window.Agrolkortet2Theme || {};

    var cookieInfo = new window.Agrolkortet2Theme.CookieinfoHandler();
    cookieInfo.init();

    if (window.objectFitImages !== undefined) {
        objectFitImages();
    }
})();
