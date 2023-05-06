import React, {Component} from "react";
import './Modal.css';
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown);
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeydown)
    };

    handleKeydown = e => {
        if (e.code === 'Escape') {
            this.props.onClose()
        };
    };

    handleBackdropClick = e => {
        if (e.target === e.currentTarget) {
            this.props.onClose()
        };
    };

    render() {
        return (
            createPortal(
                <div className="Modal__backdrop" onClick={this.handleBackdropClick}>
                    <div className="Modal__content">
                        {this.props.children}
                    </div>
                </div>,
                modalRoot)
        );
    };
};