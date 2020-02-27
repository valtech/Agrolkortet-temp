window.Agrolkortet2Theme = window.Agrolkortet2Theme || {};

(function (app) {
	var header = document.querySelector(".header-navigation");
    var button = header.querySelector(".menu-button");

	button.addEventListener("click", function (e) {
		e.preventDefault();
		header.classList.toggle("mobile-menu-open");
	}, false);

})(window.Agrolkortet2Theme);