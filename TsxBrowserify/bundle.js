(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";
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
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
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
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],2:[function(require,module,exports){
(function (global){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var ReactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);
var timer_1 = require("./components/timer");
ReactDom.render(React.createElement(timer_1.default, null), document.getElementById("demo"));
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./components/timer":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9jb21wb25lbnRzL3RpbWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBSZWFjdCA9ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93WydSZWFjdCddIDogdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFsnUmVhY3QnXSA6IG51bGwpO1xyXG52YXIgVGltZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFRpbWVyLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gVGltZXIocHJvcHMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcclxuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2Vjb25kc0VsYXBzZWQ6IDAsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBfdGhpcy50aWNrID0gX3RoaXMudGljay5iaW5kKF90aGlzKTtcclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICBUaW1lci5wcm90b3R5cGUudGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2Vjb25kc0VsYXBzZWQ6IHRoaXMuc3RhdGUuc2Vjb25kc0VsYXBzZWQgKyAxIH0pO1xyXG4gICAgfTtcclxuICAgIFRpbWVyLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy50aWNrLCAxMDAwKTtcclxuICAgIH07XHJcbiAgICBUaW1lci5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcclxuICAgIH07XHJcbiAgICBUaW1lci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxyXG4gICAgICAgICAgICBcIlNlY29uZHMgRWxhcHNlZDogXCIsXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuc2Vjb25kc0VsYXBzZWQpKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVGltZXI7XHJcbn0oUmVhY3QuQ29tcG9uZW50KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFRpbWVyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkR2x0WlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOTBjeTlqYjIxd2IyNWxiblJ6TDNScGJXVnlMblJ6ZUNKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN1FVRkpRU3cyUWtGQlowTTdRVUZOYUVNN1NVRkJiVU1zZVVKQlFTdENPMGxCUnpsRUxHVkJRVmtzUzBGQlN6dFJRVUZxUWl4WlFVTkpMR3RDUVVGTkxFdEJRVXNzUTBGQlF5eFRRVTFtTzFGQlRFY3NTMEZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSenRaUVVOVUxHTkJRV01zUlVGQlJTeERRVUZETzFOQlEzQkNMRU5CUVVNN1VVRkZSaXhMUVVGSkxFTkJRVU1zU1VGQlNTeEhRVUZITEV0QlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVWtzUTBGQlF5eERRVUZET3p0SlFVTnlReXhEUVVGRE8wbEJSVVFzYjBKQlFVa3NSMEZCU2p0UlFVTkpMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlJTeGpRVUZqTEVWQlFVVXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhqUVVGakxFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVTnlSU3hEUVVGRE8wbEJSVVFzYVVOQlFXbENMRWRCUVdwQ08xRkJRMGtzU1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTnFSQ3hEUVVGRE8wbEJSVVFzYjBOQlFXOUNMRWRCUVhCQ08xRkJRMGtzWVVGQllTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRKUVVOcVF5eERRVUZETzBsQlJVUXNjMEpCUVUwc1IwRkJUanRSUVVOSkxFMUJRVTBzUTBGQlF5eERRVU5JT3p0WlFVRjFRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEdOQlFXTXNRMEZCVHl4RFFVTXhSQ3hEUVVGRE8wbEJRMDRzUTBGQlF6dEpRVU5NTEZsQlFVTTdRVUZCUkN4RFFVRkRMRUZCTjBKRUxFTkJRVzFETEV0QlFVc3NRMEZCUXl4VFFVRlRMRWRCTmtKcVJDSjkiXX0=
