$("#search-btn").on("click", function () {
	$("#header-search").fadeIn();
});

$("#search-btn__mob").on("click", function () {
	$("#header-search__mob").fadeIn();
});

// Открытие моб меню по клику на гамбургер
const menuToggle = document.querySelector('.menu-toggle');
const mobMenu = document.querySelector('#mobile-nav');
if (menuToggle) {
	menuToggle.addEventListener('click', function () {
		if (this.classList.contains('active')) {
			this.classList.remove('active');
			mobMenu.classList.remove('active');

		} else {
			this.classList.add('active');
			mobMenu.classList.add('active');

		}
	});
}



