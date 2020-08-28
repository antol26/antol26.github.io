const slider = $('.slider__list').bxSlider({
    pager: false,
    controls: true,
});

$('.slider__left').click(e => {
    e.preventDefault();
    slider.goToPrevSlide();
}); 

$('.slider__right').click(e => {
    e.preventDefault();
    slider.goToNextSlide();
});