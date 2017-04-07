'use strict';

(function timer() {
    var timeend = new Date(2017, 8, 23);

    var today = new Date();
    today = Math.floor((timeend - today) / 1000);if (today < 10) today = '0' + sec;
    var sec = today % 60;
    today = Math.floor(today / 60);if (sec < 10) sec = '0' + sec;
    var min = today % 60;
    today = Math.floor(today / 60);if (min < 10) min = '0' + min;
    var hour = today % 24;
    today = Math.floor(today / 24);if (hour < 10) hour = '0' + hour;

    document.querySelector('.days').innerHTML = today;
    document.querySelector('.hours').innerHTML = hour;
    document.querySelector('.minutes').innerHTML = min;
    document.querySelector('.seconds').innerHTML = sec;

    window.setTimeout(timer, 1000);
})();

(function changeTimerBackground() {
    var buble = document.querySelectorAll('.buble');
    var i = 0;

    setInterval(function () {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);

        buble[i++].style.backgroundColor = 'rgba(' + r + ',' + g + ',' + b + ', 0.6)';
        if (i >= buble.length) i = 0;
    }, 1000);
})();