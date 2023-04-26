import React, { Component } from "react";
import './TodoEditor.css';

class TodoEditor extends Component {
    state = {
        message: '',
    };

    handleChange = (e) => {
        this.setState({ message: e.currentTarget.value });
    };
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.message);
        this.setState({ message: '' });
    };

    render() {
        return (
            <form
                className="TodoEditor"
                onSubmit={this.handleSubmit}>
                <textarea
                    value={this.state.message}
                    onChange={this.handleChange}></textarea>
                <button
                    type="submit"
                    className="TodoList__button"
                >Add todo</button>
            </form>
        )
    }
};

export default TodoEditor;