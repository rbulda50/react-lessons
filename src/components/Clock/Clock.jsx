import React, { Component } from "react";
import './Clock.css';
import { useState, useEffect, useRef } from 'react';

// export default class Clock extends Component {
//     state = {
//         time: new Date().toLocaleTimeString(),
//     };

//     intervalId = null;

//     componentDidMount() {
//         this.intervalId = setInterval(() => {
//                 this.setState({ time: new Date().toLocaleTimeString() })
//             }, 1000)
//     };

//     componentWillUnmount() {
//         clearInterval(this.intervalId)
//     };

//     render() {
//         return (
//             <div className="Clock__face">{this.state.time}</div>
//         )
//     };
// };

export default function Clock() {

    const [time, setTime] = useState(new Date());

    const intervalId = useRef(null);

    useEffect(() => {
        intervalId.current = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId.current)
        }
    }, []);

    const stopTimer = () => {
        clearInterval(intervalId.current);
    };

    return (
            <>
            <div className="Clock__face">Поточний час: {time.toLocaleTimeString()}</div>
            <button type="button" onClick={stopTimer}>Stop timer</button>
            </>
        )
};