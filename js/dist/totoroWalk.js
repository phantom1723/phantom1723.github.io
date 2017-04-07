'use strict';

(function totoroWalk() {
    var totoro = document.querySelector('.totoro');

    var flag = true;
    setInterval(function () {
        if (flag) {
            totoro.classList.remove('totoro-walk-right');
            totoro.classList.add('totoro-walk-left');
        } else {
            totoro.classList.remove('totoro-walk-left');
            totoro.classList.add('totoro-walk-right');
        }
        flag = !flag;
    }, 20000);
})();