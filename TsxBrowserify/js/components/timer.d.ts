/// <reference types="react" />
import React = require("react");
export interface TimerState {
    secondsElapsed: number;
}
export default class Timer extends React.Component<{}, TimerState> {
    interval: number;
    constructor(props: any);
    tick(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
