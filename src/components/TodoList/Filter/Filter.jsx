import React, { Component } from "react";


const Filter = ({ value, onChange }) => (
    <label>
        Фільтр за іменем:
        <input
            type="text"
            value={value}
            onChange={onChange} />
    </label>
);

export default Filter;