//меню бургер
$('.burger-menu').click(function (event) {
	$('.header__menu').toggleClass('_active')
	$('body').toggleClass('_lock')
})
// Плавная прокрутка к якорям
$(document).ready(function () {
	$(".menu__body").on("click", "a", function (event) {
		// закрытие бургер при клике на ссылку
		$('.header__menu').removeClass('_active')
		$('body').removeClass('_lock')
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top - document.querySelector('.header__top').clientHeight }, 1500);
	});
});
// Цвета полоски со сбором средств
function mathProgress() {
	let progressFilled = $('.bottom-header__progress').attr('data-progress-now');
	let allProgress = $('.bottom-header__progress').attr('data-progress-max');
	$('#filled').css('width', progressFilled / allProgress * 100 + '%');
	$('#unfilled').css('width', 100 - progressFilled / allProgress * 100 + '%');
}
mathProgress()
setTimeout(function () {
	$('.timer-separator').remove()
}, 200)