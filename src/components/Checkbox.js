import React from 'react';

class Checkbox extends React.Component {
    render() {
        return(
            <div className="form-radio">
                <input type="checkbox" name={this.props.name} id={this.props.name} checked={this.props.checkStatus} onClick={this.props.handleChange} />
                <label htmlFor={this.props.name}>{this.props.label}</label>
            </div>
        )
    }
}

export default Checkbox;