import React from 'react';

class Radio extends React.Component {
    render() {
        const id = this.props.name + this.props.value;
        return (
            <div className="form-radio">
                <input type="radio" name={this.props.name} value={this.props.value} id={id} onChange={this.props.handleChange} />
                <label htmlFor={id}>{this.props.label}</label>
            </div>
        )
    }
}

export default Radio;