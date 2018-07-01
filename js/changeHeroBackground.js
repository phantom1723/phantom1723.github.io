(function changeHeroBackground() {

    const images = [
        'totoro2.jpg',
        'totoro3.jpg',
        'wall-dragon.jpg',
        'wall-howl.jpg',
        'wall-howl3.jpg',
        'wall-laputa2.jpg',
        'wall-laputa3.jpg',
        'wall-porco.jpg',
        'wall-porcoRosso.jpg',
        'wall-spiritedAway.jpg',
        'wall-tihiro.jpg'];

    const bigWrapper = document.querySelector('.big-wrapper');

    let i = 0;
    setInterval(() => {
        bigWrapper.style.background = 'url(../images/wall/' + images[i] + ') no-repeat fixed';
        i++;
        if (i >= images.length) i = 0;
    }, 20000);
})();



