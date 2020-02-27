window.Agrolkortet2Theme = window.Agrolkortet2Theme || {};

(function (app) {
    var loginArea = document.querySelector(".header-login");
	var content = loginArea.querySelector(".content__body");
	if (!loginArea || !content) return;
    var overlay = document.querySelector(".overlay");
	var loginButton = document.querySelector(".login-button");

	var closeButton = document.createElement("div");
	closeButton.classList.add("close-button");
	content.appendChild(closeButton);

	loginButton.addEventListener("click", function (e) {
		e.preventDefault();
		openLogin();
	}, false);

	closeButton.addEventListener("click", function (e) {
		closeLogin();
	}, false);

	overlay.addEventListener("click", function (e) {
		closeLogin();
	}, false);

	function openLogin() {
		loginArea.classList.add("login--open");
		loginArea.style.top = loginButton.offsetTop + "px";
		overlay.classList.add("overlay--active");
	}

	function closeLogin() {
		loginArea.classList.remove("login--open");
		overlay.classList.remove("overlay--active");
	}

})(window.Agrolkortet2Theme);