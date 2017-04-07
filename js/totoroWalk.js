(function totoroWalk() {
    const totoro = document.querySelector('.totoro');

    let flag = true;
    setInterval( () => {
        if (flag) {
            totoro.classList.remove('totoro-walk-right');
            totoro.classList.add('totoro-walk-left');
        } else {
            totoro.classList.remove('totoro-walk-left');
            totoro.classList.add('totoro-walk-right');
        }
        flag = !flag
    }, 20000);
})();