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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = window.React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Timer = (function (_super) {
    __extends(Timer, _super);
    function Timer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            secondsElapsed: 0,
        };
        _this.tick = _this.tick.bind(_this);
        return _this;
    }
    Timer.prototype.tick = function () {
        this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
    };
    Timer.prototype.componentDidMount = function () {
        this.interval = setInterval(this.tick, 1000);
    };
    Timer.prototype.componentWillUnmount = function () {
        clearInterval(this.interval);
    };
    Timer.prototype.render = function () {
        return (React.createElement("div", null,
            "Seconds Elapsed: ",
            this.state.secondsElapsed));
    };
    return Timer;
}(React.Component));
exports.default = Timer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9jb21wb25lbnRzL3RpbWVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpRUFBaUU7QUFDakUsc0VBQXNFO0FBQ3RFLG1EQUFtRDs7Ozs7Ozs7Ozs7OztBQUVuRCw2QkFBZ0M7QUFNaEM7SUFBbUMseUJBQStCO0lBRzlELGVBQVksS0FBSztRQUFqQixZQUNJLGtCQUFNLEtBQUssQ0FBQyxTQU1mO1FBTEcsS0FBSSxDQUFDLEtBQUssR0FBRztZQUNULGNBQWMsRUFBRSxDQUFDO1NBQ3BCLENBQUM7UUFFRixLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDOztJQUNyQyxDQUFDO0lBRUQsb0JBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQsaUNBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsb0NBQW9CLEdBQXBCO1FBQ0ksYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsc0JBQU0sR0FBTjtRQUNJLE1BQU0sQ0FBQyxDQUNIOztZQUF1QixJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBTyxDQUMxRCxDQUFDO0lBQ04sQ0FBQztJQUNMLFlBQUM7QUFBRCxDQUFDLEFBN0JELENBQW1DLEtBQUssQ0FBQyxTQUFTLEdBNkJqRCJ9

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = window.ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDom = __webpack_require__(2);
var timer_1 = __webpack_require__(1);
ReactDom.render(React.createElement(timer_1.default, null), document.getElementById("demo"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL21haW4udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlFQUFpRTtBQUNqRSxzRUFBc0U7QUFDdEUsbURBQW1EOzs7QUFFbkQsNkJBQWdDO0FBQ2hDLG9DQUF1QztBQUN2Qyw0Q0FBdUM7QUFDdkMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxvQkFBQyxlQUFLLE9BQUcsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMifQ==

/***/ })
/******/ ]);