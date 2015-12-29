// Запрет перетаскивания img
$("img").mousedown(function(){
    return false;
});


// Слайдер
$(function () {
	$('.rslides').responsiveSlides();
});

$('.slider__slider-list').responsiveSlides({
	auto: true,             // Boolean: Animate automatically, true or false
	speed: 500,            // Integer: Speed of the transition, in milliseconds
	timeout: 8000,          // Integer: Time between slide transitions, in milliseconds
	pager: true,           // Boolean: Show pager, true or false
	nav: false,             // Boolean: Show navigation, true or false
	random: false,          // Boolean: Randomize the order of the slides, true or false
	pause: true,           // Boolean: Pause on hover, true or false
	pauseControls: true,    // Boolean: Pause when hovering controls, true or false
	prevText: 'Previous',   // String: Text for the "previous" button
	nextText: 'Next',       // String: Text for the "next" button
	maxwidth: '',           // Integer: Max-width of the slideshow, in pixels
	navContainer: '',       // Selector: Where controls should be appended to, default is after the 'ul'
	manualControls: '.slider__pager',     // Selector: Declare custom pager navigation
	namespace: 'slider__slider-list'   // String: Change the default namespace used
});
// 


// Запрет выделения disableSelection
jQuery.fn.extend({ 
    disableSelection : function() { 
            this.each(function() { 
                    this.onselectstart = function() { return false; }; 
                    this.unselectable = "on"; 
                    jQuery(this).css('-moz-user-select', 'none'); 
            }); 
    },
    enableSelection : function() { 
            this.each(function() { 
                    this.onselectstart = function() {}; 
                    this.unselectable = "off"; 
                    jQuery(this).css('-moz-user-select', 'auto'); 
            }); 
    } 
});


// Modal
$('.modal__close').disableSelection();

$('.modal__close').click(function() {
	$('.modal').fadeOut(300);
});

$('.modal').click(function() {
	$('.modal').fadeOut(300);
});

$('.modal__inner').click(function() {
	return false;
});

// модальное окно с формой
$('.controller-modal').click(function() {
	$('.modal[data-modal=1]').fadeIn(400);
});

// модальное окно с видео
$('.controller-video').click(function() {
	$('.video__player').attr('src', '');

	//получаем с кнопки ссылку на видео и вставляем в iframe
	src = $(this).attr('data-video');
	$('.video__player').attr('src', src);
	$('.modal[data-modal=2]').fadeIn(300);
});
//