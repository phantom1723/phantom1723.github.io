/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	
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








/***/ }),
/* 2 */
/***/ (function(module, exports) {

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
	        bigWrapper.style.background = 'url(https://phantom1723.github.io/images/wall/' + images[i] + ') no-repeat fixed';
	        i++;
	        if (i >= images.length) i = 0;
	    }, 20000);
	})();





/***/ }),
/* 3 */
/***/ (function(module, exports) {

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

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	
	(function timer() {
	    const timeend = new Date(2019,8,23);

	    let today = new Date();
	    today = Math.floor((timeend-today) / 1000); if(today < 10) today = '0' + sec;
	    let sec = today % 60;
	    today = Math.floor(today / 60); if(sec < 10) sec = '0' + sec;
	    let min = today % 60;
	    today = Math.floor(today / 60); if(min < 10) min = '0' + min;
	    let hour = today % 24;
	    today = Math.floor(today / 24); if(hour < 10) hour = '0' + hour;

	    document.querySelector('.days').innerHTML = today;
	    document.querySelector('.hours').innerHTML = hour;
	    document.querySelector('.minutes').innerHTML = min;
	    document.querySelector('.seconds').innerHTML = sec;

	    window.setTimeout(timer,1000);
	    })();


	(function changeTimerBackground() {
	    const buble = document.querySelectorAll('.buble');
	    let i = 0;

	    setInterval(() => {
	        let r = Math.floor(Math.random() * 255);
	        let g = Math.floor(Math.random() * 255);
	        let b = Math.floor(Math.random() * 255);

	            buble[i++].style.backgroundColor = 'rgba(' + r + ',' + g + ',' + b + ', 0.6)';
	        if (i >= buble.length) i = 0;

	    }, 1000);
	})();


/***/ }),
/* 5 */
/***/ (function(module, exports) {

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






/***/ }),
/* 6 */
/***/ (function(module, exports) {

	
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







/***/ })
/******/ ]);
