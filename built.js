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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _menu = __webpack_require__(1);

	var _menu2 = _interopRequireDefault(_menu);

	var _totoroWalk = __webpack_require__(3);

	var _totoroWalk2 = _interopRequireDefault(_totoroWalk);

	var _timer = __webpack_require__(4);

	var _timer2 = _interopRequireDefault(_timer);

	var _carousel = __webpack_require__(5);

	var _carousel2 = _interopRequireDefault(_carousel);

	var _scroller = __webpack_require__(6);

	var _scroller2 = _interopRequireDefault(_scroller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports) {

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

/***/ },
/* 3 */
/***/ function(module, exports) {

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

/***/ },
/* 4 */
/***/ function(module, exports) {

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

/***/ },
/* 5 */
/***/ function(module, exports) {

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

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	(function scroll() {
	    var scroller = document.querySelector('#scroll');

	    setInterval(function () {
	        var posTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	        if (posTop > 150) {
	            scroller.classList.remove('sticky');
	        } else scroller.classList.add('sticky');
	    }, 20);

	    scroller.addEventListener('click', function () {
	        var top = window.pageYOffset;

	        setInterval(function () {
	            if (top > 0) {
	                window.scrollBy(0, -50);
	                top -= 50;
	            }
	        }, 10);
	    });
	})();

/***/ }
/******/ ]);
