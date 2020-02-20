window.Agrolkortet2Theme = window.Agrolkortet2Theme || {};

function detectMobile() {
	if (navigator.userAgent.match(/Android/i)
		|| navigator.userAgent.match(/webOS/i)
		|| navigator.userAgent.match(/iPhone/i)
		|| navigator.userAgent.match(/iPad/i)
		|| navigator.userAgent.match(/iPod/i)
		|| navigator.userAgent.match(/BlackBerry/i)
		|| navigator.userAgent.match(/Windows Phone/i)
	) {
		return true;
	}
	else {
		return false;
	}
}

(function (app) {
	var header = document.querySelector(".header-navigation");
	var button = header.querySelector(".menu-button");

	button.addEventListener("click", function (e) {
		e.preventDefault();
		header.classList.toggle("mobile-menu-open");
		selectList.focus();
	}, false);

})(window.Agrolkortet2Theme);