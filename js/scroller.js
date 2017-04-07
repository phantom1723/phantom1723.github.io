
(function scroll () {
    const scroller = document.querySelector('#scroll');

    setInterval(function() {
        const posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        if (posTop > 150) {
            scroller.classList.remove('sticky');
        } else scroller.classList.add('sticky');
    }, 20);

    scroller.addEventListener('click', () => {
        let top = window.pageYOffset;

        setInterval (() => {
            if (top > 0) {
                window.scrollBy(0, -50);
                top -= 50;
            }
        }, 10);
    });

})();





