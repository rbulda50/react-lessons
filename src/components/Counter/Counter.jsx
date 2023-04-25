import React from "react";
import Controls from './Controls/Controls';
import './Counter.css'

class Counter extends React.Component {
    // статичні дефолтні значення пропів, що передаються в App
    static defaultProps = {
        initialValue: 0,
    };
    
    // параметри стейту
    state = {
        value: this.props.initialValue,
    };

    // метод збільшення числа на 1
    handleIncrement = (event) => {
        this.setState((prevState) => {
            return {
                value: prevState.value + 1,
            }
        })
    };

    // метод зменшення числа на 1
    handleDecrement = (event) => {
        this.setState((prevState) => {
            return {
                value: prevState.value - 1,
            }
        })
    };

    render() {
        return (
            <div className="Counter">
                <span className="Counter__value">{this.state.value}</span>

                <Controls
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                />
            </div>
        )
    };
};

export default Counter;





