import React, { Component } from "react";
import './Form.css';

class Form extends Component {
    state = {
        name: '',
        tag: '',
        experience: 'junior',
        license: false,
    };

    handleChange = (event) => {
        const { name, value } = event.currentTarget;
        this.setState({
            [name]: value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.submit(this.state);
    
        this.resetForm();
    };

    resetForm = () => {
        this.setState({ name: '', tag: '' })
    };

    handleLicenseChange = (e) => {
        this.setState({license: e.currentTarget.checked})
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={'Form'}>
                <label>Name
                    <input
                        type="text"
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange} />
                </label>
                <label>Second
                    <input
                        type="text"
                        name='tag'
                        value={this.state.tag}
                        onChange={this.handleChange} />
                </label>

                <label>
                    <input
                        type="radio"
                        name="experience"
                        value="junior"
                        onChange={this.handleChange}
                        checked={this.state.experience === 'junior'} /> Junior
                </label>
                <label>
                    <input
                        type="radio"
                        name="experience"
                        value="middle"
                        onChange={this.handleChange}
                        checked={this.state.experience === 'middle'} /> Middle
                </label>
                <label>
                    <input
                        type="radio"
                        name="experience"
                        value="senior"
                        onChange={this.handleChange}
                        checked={this.state.experience === 'senior'} /> Senior
                </label>

                <label> License
                    <input
                        type="checkbox"
                        name="license"
                        checked={this.state.license}
                        onChange={this.handleLicenseChange } />
                
                </label>

                <button
                    type="submit"
                    disabled={!this.state.license}>
                    Send</button>
            </form>
        )
    };
};

export default Form;