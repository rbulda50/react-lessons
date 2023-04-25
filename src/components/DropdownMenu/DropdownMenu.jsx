import React, {Component} from "react";
import './DropdownMenu.css'

class Dropdown extends Component {
    state = {
        visible: false,
    };

    toggle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible,
        }))
    };

    // show = () => {
    //     this.setState({ visible: true })
    // };

    // hide = () => {
    //     this.setState({ visible: false })
    // };

    render() {
        return (
            <div className="Dropdown">
                {/* <button
                    type="button"
                    className="Dropdown__toggle"
                    onClick={this.show}>
                    Показать меню
                </button>
                <button
                    type="button"
                    className="Dropdown__toggle"
                    onClick={this.hide}>
                    Сховати меню
                </button> */}
                <button
                    type="button"
                    className="Dropdown__toggle"
                    onClick={this.toggle}>
                    {this.state.visible ? "Сховати" : "Показати"}
                </button>
                {this.state.visible && <div className="Dropdown__menu">Випадаюче меню</div>}
            </div>
        )
    }
};

export default Dropdown;
