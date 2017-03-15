// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import React = require("react");

export interface TimerState {
    secondsElapsed: number;
}

export default class Timer extends React.Component<{}, TimerState> {
    interval: number;

    constructor(props) {
        super(props);
        this.state = {
            secondsElapsed: 0,
        };

        this.tick = this.tick.bind(this);
    }

    tick() {
        this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
        );
    }
}

