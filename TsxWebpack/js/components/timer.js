// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
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
var React = require("react");
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