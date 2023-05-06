import React from "react";
import './IconButton.css';

const IconButton = ({ children, onClick, ...allyProps }) => (
    <button
        className="IconButton"
        onClick={onClick}
        type="button"
        {...allyProps}
    >{children}</button>
);

IconButton.defaultProps = {
    onClick: () => null,
    children: null,
};

export default IconButton;

