window.Agrolkortet2Theme = window.Agrolkortet2Theme || {};

(function (app) {
	var loginArea = document.querySelector(".header-login");
	var button = header.querySelector(".login-button");

	button.addEventListener("click", function (e) {
		e.preventDefault();
		loginArea.classList.toggle("login-open");
	}, false);

	loginArea.addEventListener("click", function (e) {
		// Prevents click on child elements
		if (e.target !== this) return;

		loginArea.classList.remove("login-open");
	}, false);

})(window.Agrolkortet2Theme);