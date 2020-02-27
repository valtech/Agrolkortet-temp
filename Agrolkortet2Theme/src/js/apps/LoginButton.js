window.Agrolkortet2Theme = window.Agrolkortet2Theme || {};

(function (app) {
    var loginArea = document.querySelector(".header-login");
    if (!loginArea) return;
    var overlay = document.querySelector(".overlay");
	var content = loginArea.querySelector(".content__body");
	var button = document.querySelector(".login-button");

	var closeBtn = document.createElement("div");
	closeBtn.classList.add("closeBtn");
	content.appendChild(closeBtn);

	button.addEventListener("click", function (e) {
		e.preventDefault();
		openLogin();
	}, false);

	closeBtn.addEventListener("click", function (e) {
		closeLogin();
	}, false);

	overlay.addEventListener("click", function (e) {
		closeLogin();
	}, false);

	function openLogin() {
		loginArea.classList.add("login-open");
		loginArea.style.top = button.offsetTop + "px";
		overlay.classList.add("overlay-active");
	}

	function closeLogin() {
		loginArea.classList.remove("login-open");
		overlay.classList.remove("overlay-active");
	}

})(window.Agrolkortet2Theme);