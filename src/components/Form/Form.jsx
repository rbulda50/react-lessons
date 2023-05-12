import React, { Component } from "react";
import './Form.css';
import { useState } from "react";

// class Form extends Component {
//     state = {
//         name: '',
//         tag: '',
//         experience: 'junior',
//         license: false,
//     };

//     handleChange = (event) => {
//         const { name, value } = event.currentTarget;
//         this.setState({
//             [name]: value
//         })
//     };

//     handleSubmit = (event) => {
//         event.preventDefault();

//         this.props.submit(this.state);
    
//         this.resetForm();
//     };

//     resetForm = () => {
//         this.setState({ name: '', tag: '' })
//     };

//     handleLicenseChange = (e) => {
//         this.setState({license: e.currentTarget.checked})
//     };

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit} className={'Form'}>
//                 <label>Name
//                     <input
//                         type="text"
//                         name='name'
//                         value={this.state.name}
//                         onChange={this.handleChange} />
//                 </label>
//                 <label>Second
//                     <input
//                         type="text"
//                         name='tag'
//                         value={this.state.tag}
//                         onChange={this.handleChange} />
//                 </label>

//                 <label>
//                     <input
//                         type="radio"
//                         name="experience"
//                         value="junior"
//                         onChange={this.handleChange}
//                         checked={this.state.experience === 'junior'} /> Junior
//                 </label>
//                 <label>
//                     <input
//                         type="radio"
//                         name="experience"
//                         value="middle"
//                         onChange={this.handleChange}
//                         checked={this.state.experience === 'middle'} /> Middle
//                 </label>
//                 <label>
//                     <input
//                         type="radio"
//                         name="experience"
//                         value="senior"
//                         onChange={this.handleChange}
//                         checked={this.state.experience === 'senior'} /> Senior
//                 </label>

//                 <label> License
//                     <input
//                         type="checkbox"
//                         name="license"
//                         checked={this.state.license}
//                         onChange={this.handleLicenseChange } />
                
//                 </label>

//                 <button
//                     type="submit"
//                     disabled={!this.state.license}>
//                     Send</button>
//             </form>
//         )
//     };
// };

// export default Form;

export default function Form({ submit }) {
    const [name, setName] = useState('');
    const [tag, setTag] = useState('');
    const [experience, setExperience] = useState('junior');
    const [license, setLicense] = useState(false);

    const handleChange = e => {
        const { name, value } = e.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;
            
            case 'tag':
                setTag(value);
                break;
            
            case 'experience':
                setExperience(value);
                break;
            
            default:
                console.warn('Помилка')
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        submit({name, tag, experience, license})
        resetForm();
    };

    const resetForm = () => {
        setName('')
        setTag('')
    };

    const handleLicenseChange = (e) => {
        setLicense(e.currentTarget.checked);
    };


        return (
            <form onSubmit={handleSubmit} className={'Form'}>
                <label>Name
                    <input
                        type="text"
                        name='name'
                        value={name}
                        onChange={handleChange} />
                </label>
                <label>Second
                    <input
                        type="text"
                        name='tag'
                        value={tag}
                        onChange={handleChange} />
                </label>

                <label>
                    <input
                        type="radio"
                        name="experience"
                        value="junior"
                        onChange={handleChange}
                        checked={experience === 'junior'} /> Junior
                </label>
                <label>
                    <input
                        type="radio"
                        name="experience"
                        value="middle"
                        onChange={handleChange}
                        checked={experience === 'middle'} /> Middle
                </label>
                <label>
                    <input
                        type="radio"
                        name="experience"
                        value="senior"
                        onChange={handleChange}
                        checked={experience === 'senior'} /> Senior
                </label>

                <label> License
                    <input
                        type="checkbox"
                        name="license"
                        checked={license}
                        onChange={handleLicenseChange} />
                
                </label>

                <button
                    type="submit"
                    disabled={!license}>
                    Send</button>
            </form>
        )
};

