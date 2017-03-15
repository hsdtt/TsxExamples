﻿// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import React = require("react");
import ReactDom = require("react-dom");
import Timer from "./components/timer";
ReactDom.render(<Timer />, document.getElementById("demo"));