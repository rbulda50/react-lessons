import React, { Component } from "react";
import './Colorpicker.css';
import classNames from 'classnames'; // npm i classnames
import { useState } from 'react';
import { memo } from "react";

// class ColorPicker extends Component {
//     state = {
//         activeOptionIndex: 2,
//     };

//     setActiveIndex = (index) => {
//         this.setState({ activeOptionIndex: index })
//     };

//     makeOptionClassesName = (index) => {
//         // const optionClasses = ['ColorPicker__option'];
//         // if (index === this.state.activeOptionIndex) {
//         //     optionClasses.push('ColorPicker__option--active')
//         // };
//         // return optionClasses.join(' ');

//         return classNames('ColorPicker__option', {
//             'ColorPicker__option--active': index === this.state.activeOptionIndex
//         })
//     };

//     render() {
//         const activeOption = this.props.options[this.state.activeOptionIndex];

//         return (
//             <div className="ColorPicker">
//                 <h2 className="ColorPicker__title">Color Picker</h2>
//                 <p>Вибрано колір: {activeOption.label}</p>
//                 <div>
//                     {this.props.options.map(({ label, color }, index) => (
//                         <button
//                             key={label}
//                             className={this.makeOptionClassesName(index)}
//                             style={{ backgroundColor: color }}
//                             onClick={() => { this.setActiveIndex(index) }}>
//                         </button>
//                     ))}
//                 </div>
//             </div>
//         );
//     };
// };

// export default ColorPicker;


export default memo(function ColorPicker({ options }) {
    const [activeOptionIndex, setActiveOptionIndex] = useState(2)

    const setActiveIndex = (index) => setActiveOptionIndex(index);

    const makeOptionClassesName = (index) => {
        return classNames('ColorPicker__option', {
            'ColorPicker__option--active': index === activeOptionIndex
        })
    };

        const {label} = options[activeOptionIndex];

        return (
            <div className="ColorPicker">
                <h2 className="ColorPicker__title">Color Picker</h2>
                <p>Вибрано колір: {label}</p>
                <div>
                    {options.map(({ label, color }, index) => (
                        <button
                            key={label}
                            className={makeOptionClassesName(index)}
                            style={{ backgroundColor: color }}
                            onClick={() => { setActiveIndex(index) }}>
                        </button>
                    ))}
                </div>
            </div>
        );
})