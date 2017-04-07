'use strict';

function setStyle(target, styleName, value) {
    target.style[styleName] = value;
}

(function showMenu() {
    var svgs = document.querySelector('.svgs');

    svgs.addEventListener('click', function () {
        var menu = document.querySelectorAll('.menu');
        var i = 0;
        setInterval(function () {
            if (i < menu.length) {
                if (menu[i].style.display == 'inline-block') {
                    setStyle(menu[i], 'display', 'none');
                } else {
                    setStyle(menu[i], 'display', 'inline-block');
                }
                i++;
            }
        }, 100);
    });
})();