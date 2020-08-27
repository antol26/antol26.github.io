const arrowsRight = document.querySelectorAll('.slider__right');
const arrowsLeft = document.querySelectorAll('.slider__left');
const sliderWidth = document.querySelector('.slider__item');
const sliderRoot = document.getElementById('sliderRoot');
const sliderList = document.querySelector('.slider__list');

let sliderPosition = 0;

arrowsRight.forEach((arrow) => {
    arrow.addEventListener('click', () => moveRight());
});

arrowsLeft.forEach((arrow) => {
    arrow.addEventListener('click', () => moveLeft());
});

sliderList.addEventListener('swiped-right', () => moveLeft());
sliderList.addEventListener('swiped-left', () => moveRight());

function moveRight() {
    sliderPosition+= sliderWidth.clientWidth;
    if (sliderPosition == sliderList.scrollWidth){
        sliderPosition = 0;
    }
    sliderRoot.style.transform = `translate(-${sliderPosition}px)`;
    
}

function moveLeft() {
    //sliderPosition-= sliderWidth.clientWidth;
    if (sliderPosition == 0) {
        sliderPosition = sliderList.scrollWidth - sliderWidth.clientWidth;
    } else {
        sliderPosition-= sliderWidth.clientWidth;
    }
    sliderRoot.style.transform = `translate(-${sliderPosition}px)`;    
    //"translate(-" + sliderPosition + "px)";
}