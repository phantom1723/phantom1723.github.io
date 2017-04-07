'use strict';

var spinner = document.querySelector('.spinner');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var close = document.querySelectorAll('.close');
var items = document.querySelectorAll('.item');
var hiddenInformation = document.querySelectorAll('.hidden-information');
var worksWrapper = document.querySelector('.works-wrapper');

var degree = 0;
var carouselSpinByItself = true;

(function carousel() {

    prev.addEventListener('click', function () {
        degree += 20;
        setStyle(spinner, 'transform', 'rotateY(' + degree + 'deg)');
    });

    next.addEventListener('click', function () {
        degree -= 20;
        setStyle(spinner, 'transform', 'rotateY(' + degree + 'deg)');
    });

    setInterval(function () {
        if (carouselSpinByItself == true) {
            degree -= 20;
            setStyle(spinner, 'transform', 'rotateY(' + degree + 'deg)');
        }
    }, 3000);
})();

function setStyle(target, styleName, value) {
    target.style[styleName] = value;
}

(function onChoose() {
    addEventListener('click', function (event) {
        var itemId = +event.target.id;

        if (!isNaN(itemId) && itemId != 0) {
            afterClickAtImage(itemId);
            close[itemId - 1].addEventListener('click', function () {
                return afterCloseHiddenInformation(itemId);
            });
        }
    });
})();

function afterClickAtImage(itemId) {
    carouselSpinByItself = false;
    setStyle(hiddenInformation[itemId - 1], 'display', 'block');
    setStyle(spinner, 'transform', 'rotateY(0deg)');
    setStyle(next, 'display', 'none');
    setStyle(prev, 'display', 'none');
    setStyle(worksWrapper, 'marginTop', '-25em');

    items.forEach(function (item) {
        setStyle(item, 'display', 'none');
        setStyle(item, 'animationName', 'disappear');
    });
}

function afterCloseHiddenInformation(itemId) {
    carouselSpinByItself = true;

    setStyle(hiddenInformation[itemId - 1], 'display', 'none');

    items.forEach(function (item) {
        setStyle(item, 'display', 'block');
    });

    setStyle(spinner, 'transform', 'rotateY(' + degree + 'deg)');
    setStyle(next, 'display', 'block');
    setStyle(prev, 'display', 'block');
    setStyle(worksWrapper, 'marginTop', '0');
}