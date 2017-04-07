
 function setStyle (target, styleName, value) {
    target.style[styleName] = value;
}

 (function showMenu() {
    const svgs = document.querySelector('.svgs');

    svgs.addEventListener('click', function() {
        const menu = document.querySelectorAll('.menu');
        let i = 0;
        setInterval(() => {
            if (i < menu.length) {
                if (menu[i].style.display == 'inline-block') {
                    setStyle( menu[i], 'display', 'none');
                }
                else {
                    setStyle( menu[i], 'display', 'inline-block');
                }
                i++; }

        }, 100)
    });
})();






