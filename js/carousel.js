const spinner = document.querySelector('.spinner');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const close = document.querySelectorAll('.close');
const items = document.querySelectorAll('.item');
const hiddenInformation = document.querySelectorAll('.hidden-information');
const worksWrapper = document.querySelector('.works-wrapper');

let degree = 0;
let carouselSpinByItself = true;

(function carousel() {

    prev.addEventListener('click', () => {
        degree += 20;
        setStyle(spinner, 'transform', 'rotateY(' + degree + 'deg)');
            });

    next.addEventListener('click', () => {
        degree -= 20;
        setStyle(spinner, 'transform', 'rotateY(' + degree + 'deg)');
    });

    setInterval(() => {
        if (carouselSpinByItself == true) {
                degree -= 20;
                setStyle(spinner, 'transform', 'rotateY(' + degree + 'deg)');
        }
    }, 3000);
})();



function setStyle (target, styleName, value) {
    target.style[styleName] = value;
}


(function onChoose() {
    addEventListener('click', (event) => {
        const itemId = +event.target.id;

        if (!isNaN(itemId) && itemId != 0) {
            afterClickAtImage(itemId);
            close[itemId - 1].addEventListener('click', () => afterCloseHiddenInformation(itemId));
        }
    });
})();


function afterClickAtImage (itemId) {
     carouselSpinByItself = false;
     setStyle(hiddenInformation[itemId - 1], 'display', 'block');
     setStyle(spinner, 'transform', 'rotateY(0deg)');
     setStyle(next, 'display', 'none');
     setStyle(prev, 'display', 'none');
     setStyle(worksWrapper, 'marginTop', '-25em');

     items.forEach(item => {
     setStyle(item, 'display', 'none');
     setStyle(item, 'animationName', 'disappear');
     });
}

function afterCloseHiddenInformation (itemId) {
    carouselSpinByItself = true;

    setStyle(hiddenInformation[itemId - 1], 'display', 'none');

    items.forEach( item =>  {
        setStyle(item, 'display', 'block');
    });

    setStyle(spinner, 'transform', 'rotateY(' + degree + 'deg)');
    setStyle(next, 'display', 'block');
    setStyle(prev, 'display', 'block');
    setStyle(worksWrapper, 'marginTop', '0')
}




