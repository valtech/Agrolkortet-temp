(function() {
    "use strict";

    window.Agrolkortet2Theme = window.Agrolkortet2Theme || {};

    const cookieInfo = new window.Agrolkortet2Theme.CookieinfoHandler();
    cookieInfo;

    const responsiveTables = new window.Agrolkortet2Theme.ResponsiveTables();
    responsiveTables;

    const listFilter = new window.Agrolkortet2Theme.ListFilter();
    listFilter;

    if (window.objectFitImages !== undefined) {
        objectFitImages();
    }
})();
